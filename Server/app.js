const express=require('express')
const jwt=require('jsonwebtoken')
const cors=require('cors')
const authenticate = require('./authentication/authenticate')
global.bcrypt=require('bcryptjs')
const app=express()
const nodemailer = require("nodemailer")

require('dotenv').config()

app.use(cors())
app.use(express.json())

global.users=[]

app.post('/register',(req,res)=>{
    const firstName=req.body.firstName
    const lastName=req.body.lastName
    const email=req.body.email
    const password=req.body.password

    bcrypt.genSalt(10,function(error,salt){
        if(!error){
            bcrypt.hash(password,salt,function(error,hash){
                if(!error){
                    const user={
                        firstName:firstName,
                        lastName:lastName,
                        email:email,
                        password:hash
                    }
                    users.push(user)
                    console.log(users)
                    res.json({success:'200',message:'Successfully registered account!'})
                }else{
                    res.json({success:false,message:'Failed to register account'})
                }
            })
        }else{
            res.json({success:false,message:'Failed to register account'})
        }
    })
})

app.post('/login',(req,res)=>{
    const useremail=req.body.email
    const password=req.body.password

    const persistedUser=users.find(user=>{
        const passphrase=bcrypt.compare(password,user.password,function(error,results){
            if(results && user.email==useremail){
                const userLogin={
                    useremail:users.email
                }
                const token=jwt.sign({user:userLogin},'KEYBOARD CAT')
                console.log(token)
                res.json({success:true,token:token})
            }else{
                res.json({success:false,message:'Failed to login in!'})
            }
        })
        // console.log(passphrase)
        // return user.email==useremail && 
    })

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
})

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "oceanair073@gmail.com",
        pass: "VOA073!!"
    },
})

contactEmail.verify((error)=> {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to send");
    }
})

app.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message; 
  const mail = {
    from: name,
    to: "zac@visitoceanair.com",
    subject: "Contact Form Website",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});

app.listen(8080,()=>{
    console.log('Server is running...')
})