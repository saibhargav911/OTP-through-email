const express = require('express');
const app=express();
const router=express.Router();
const fs= require("fs");
const nodemail= require("./nodemail");
//routes
router.get('/', (req, res) => {
    res.render('index');

});
router.post("/submit",(req, res) => {
    const emailAddress=req.body.email;
   //reading html file and storing the data in data variable
   fs.readFile('../html files/otp.html',"utf-8", (err, data)=> {
    if(err) throw err;   
   
    data=data.replace("{%OTP%}",nodemail.OTP);
    
   //mailData object with the following values
     const mailData={
        to:emailAddress,//to mail
        subject:"Mail from nodemailer server",//subject of mail
        html:data,//data to be dsiplayed in mail
        attachments:[//attachments
           {
              filename:"attachments.txt",
              path:"../attachments/attachments.txt"
           }
        ]
     };
     nodemail.transporter.sendMail(mailData,(err,info)=>{//sendMail() method used to send mail with the help of above values
      if(err) res.status(400).send(err);
      else res.status(201).send("Email Sent succesfully");
   });
   });
});
module.exports=router;