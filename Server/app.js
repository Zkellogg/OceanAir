const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const cors = require("cors");
const authenticate = require("./authentication/authenticate");
global.bcrypt = require("bcryptjs");
const sgMail = require("@sendgrid/mail");
const { send } = require("@sendgrid/mail");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

async function userRegister(user) {
  await prisma.user.create({
    data: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      password: user.password,
    },
  });
}

app.post("/add-review", authenticate, (req, res) => {
  const { location } = req.body;
  const { name } = req.body;
  const { rating } = req.body;
  const { title } = req.body;
  const { message } = req.body;
  const { checkoutDate } = req.body;

  const mail = {
    to: "zac@visitoceanair.com", // Change to your recipient
    from: "info@visitoceanair.com", // Change to your verified sender
    subject: `Title: ${title} - Rating: ${rating}`,
    text: message,
    html: `<strong>Review from: ${name} for ${location}, ${checkoutDate} </strong><br>
    ${title}<br>
    ${message}`,
  };

  sgMail
    .send(mail)
    .then(() => {
      console.log("Email sent");
      res.json({ success: "email sent" });
    })
    .catch((error) => {
      console.error(error);
    });
});

app.post("/contact", (req, res) => {
  const { email } = req.body;
  const { name } = req.body;
  const { message } = req.body;
  const mail = {
    to: "zac@visitoceanair.com", // Change to your recipient
    from: "info@visitoceanair.com", // Change to your verified sender
    subject: `Message from ${email}`,
    text: message,
    html: `<strong>From: ${name}</strong><br>
    ${email}<br>
    ${message}`,
  };

  sgMail
    .send(mail)
    .then(() => {
      console.log("Email sent");
      res.json({ success: "email sent" });
    })
    .catch((error) => {
      console.error(error);
    });
});

app.post("/register", async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const phone = req.body.phone;

  bcrypt.genSalt(10, function (error, salt) {
    if (!error) {
      bcrypt.hash(password, salt, function (error, hash) {
        if (!error) {
          const user = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            password: hash,
          };
          // async prisma querry
          userRegister(user);
          const token = jwt.sign({ email: user.email }, "KEYBOARD CAT");
          res.json({
              success: "200",
              message: "Successfully registered account!",
              token:token,
              firstName:user.firstName
            });
          } else {
            res.json({ success: false, message: "Failed to register account" });
          }
      });
    } else {
      res.json({ success: false, message: "Failed to register account" });
    }
  });
});

app.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const foundUser = await prisma.user.findUnique({
    where: { email: email },
  });

  // ***Use with Database for encrypting passwords */
  bcrypt.compare(password, foundUser.password, function (error, results) {
    if (results) {
      console.log(results);
      const token = jwt.sign({ email: foundUser.email }, "KEYBOARD CAT");
      res.json({
        success: true,
        message: "Successfully logged in!",
        token: token,
        firstName: foundUser.firstName,
      });
    } else {
      res.json({ success: false, message: "Failed to login in!" });
    }
  });
});

app.listen(process.env.PORT || 8080, () => {
  console.log("server running");
});
