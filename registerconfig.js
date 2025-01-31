import mongoose from "mongoose";
const connect=mongoose.connect("mongodb://localhost:27017/nodeA6");

connect.then(()=>{
    console.log("Database connected successfully");
    
}).catch((err)=>{
    console.log(err);
    
})


const Registerschema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }


})

const registercollection=new mongoose.model("UserRegister",Registerschema);

export default registercollection;