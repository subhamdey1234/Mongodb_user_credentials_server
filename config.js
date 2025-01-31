import mongoose from "mongoose";
const connect=mongoose.connect("mongodb://localhost:27017/nodeA6");

connect.then(()=>{
    console.log("Database connected successfully");
    
}).catch((err)=>{
    console.log(err);
    
})


const Loginschema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection=new mongoose.model("Userlogin",Loginschema);

export default collection;