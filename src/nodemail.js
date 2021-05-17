//requirirng node mailer
const nodemailer = require("nodemailer");

//creating transporter
const transporter=nodemailer.createTransport({
    port:465,
    host:"smtp.gmail.com",
    auth:{
        user:"youremail@gmail.com",
        pass:"password"
    },
    secure:true,
});
var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 4; i++ ) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
module.exports =OTP;

module.exports ={transporter,OTP};