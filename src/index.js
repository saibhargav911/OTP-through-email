//requirirng modules
const express = require("express");
const app = express();
const bodyParser= require("body-parser");
const router=require("./router");
const port=process.env.PORT ||8000;
const path = require('path');
//middleware
const hbsPath = path.join(__dirname,"../hbsFiles");
app.set("view engine","hbs");
app.set("views",hbsPath);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(router);


app.listen(port,"127.0.0.1",(err)=>{
  console.log(`listening on port number${port}`);
});
