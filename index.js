import express from "express";
import fs from "fs";
import bcrypt from "bcrypt";
import collection from "./config.js"
import registercollection from "./registerconfig.js";

const app=express();
//middlewares-----------
app.use(express.static("E:/m17jspider/Mongodb/Mongoserver/public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//----------------------

app.set('view engine','ejs');


//--------------API's---------------------
app.get("/",(req,res)=>{
    res.render("login");
})

app.get("/signup",(req,res)=>{
    res.render("register")
})

app.post("/signup",async (req,res)=>{

    const data={
        email:req.body.email,
        number:req.body.number,
        username:req.body.username,
        password:req.body.password
    }

const existinguser=await registercollection.findOne({username:data.username});
if (existinguser) {
   res.send("User Already Exists please Enter other Username");
}
else{
//Hashing Of Password------------
const saltround=10;
const hashedpassword=await bcrypt.hash(data.password,saltround);
console.log(data.password);

data.password=hashedpassword;
//-----------------------------

    const usersignupcredential=await registercollection.insertMany(data);
  console.log(usersignupcredential); 
  res.send("User Registered Successfully") 
}



  

})


app.post("/login",async (req,res)=>{
    try {
        const check=await registercollection.findOne({username:req.body.username});
        if (!check) {
            res.send("Username Cannot be found Please Try Again");
        }
        
const passmatched=await bcrypt.compare(req.body.password,check.password);
if (passmatched) {
    res.render("home");
}
else{
    res.send("Wrong Password")
}

    } catch (error) {
        console.log(error);
        
    }
})

//-----------------------------------


const port=3000;
app.listen(port,"localhost",()=>{
    console.log(`server started at => http://localhost:${port}`);
    
});