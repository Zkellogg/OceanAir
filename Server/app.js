const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const cors = require("cors");
const authenticate = require("./authentication/authenticate");
global.bcrypt = require("bcryptjs");
// const sgMail = require("@sendgrid/mail");
// const { send } = require("@sendgrid/mail");

require("dotenv").config();

// sgMail.setApiKey(
//   "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"
// );

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

global.users = [];
global.emails=[];

app.post("/add-review",(req,res)=>{
    const {location}=req.body;
    const {name}=req.body.name;
    const {rating}=parseInt(req.body);
    const {title}=req.body;
    const {message}=req.body;
    const {dateStayed}=req.body;
    
    const mail = {
    to: "zac@visitoceanair.com", // Change to your recipient
    from: "info@visitoceanair.com", // Change to your verified sender
    subject: `Title: ${title} - Rating: ${rating}`,
    text: message,
    html: `<strong>Review from: ${name} for ${location}, ${dateStayed} </strong><br>
    ${title}<br>
    ${message}`,
  };

//   sgMail
//     .send(mail)
//     .then(() => {
//       console.log("Email sent");
//       res.json({ success: "email sent" });
//     })
//     .catch((error) => {
//       console.error(error);
//     });

    emails.push(mail)
    res.json({success:true,review:mail})
})

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

app.post("/register", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;

  bcrypt.genSalt(10, function (error, salt) {
    if (!error) {
      bcrypt.hash(password, salt, function (error, hash) {
        if (!error) {
          const user = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hash,
          };
          users.push(user);
          console.log(users);
          res.json({
            success: "200",
            message: "Successfully registered account!",
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

app.post("/login", (req, res) => {
  const useremail = req.body.email;
  const password = req.body.password;

  const persistedUser = users.find((user) => {
    const passphrase = bcrypt.compare(
      password,
      user.password,
      function (error, results) {
        if (results && user.email == useremail) {
          const userLogin = {
            useremail: users.email,
          };
          const token = jwt.sign({ user: userLogin }, "KEYBOARD CAT");
          console.log(token);
          res.json({ success: true, token: token });
        } else {
          res.json({ success: false, message: "Failed to login in!" });
        }
      }
    );
  });

  // bcrypt.compare(password,users.password,function(error,results){
  //     if(results){
  //         console.log(results)
  //         // const userLogin={
  //         //     username:users.username
  //         // }
  //         // const token=jwt.sign({user:userLogin},'KEYBOARD CAT')
  //         // console.log(token)
  //         // res.json({success:true,message:'Successfully logged in!'})
  //     }else{
  //         res.json({success:false,message:'Failed to login in!'})
  //     }
  // })
});

app.listen(8080, () => {
  console.log("Server is running...");
});
