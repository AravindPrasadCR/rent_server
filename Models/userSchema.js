const mongoose=require('mongoose')
const validator=require('validator')

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    place:{
        type:String,
        
    },
    phone:{
        type:Number,
        
    },
    profile:{
        type:String
    },
    role:{
        type:String
    }

})

const users=mongoose.model("users",userSchema)
module.exports=users