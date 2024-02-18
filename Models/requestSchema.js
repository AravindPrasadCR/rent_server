const mongoose=require('mongoose')

const requestSchema=new mongoose.Schema({

    senderId:{
        type:String,
        required:true
    },
    recieverId:{
        type:String,
        required:true
    },
    productId:{
        type:String,
        required:true
    },
    product:{
        type:Object,
        required:true
    },
    userDetails:{
        type:Object,
        required:true
    }


})

const requests=mongoose.model("requests",requestSchema)
module.exports=requests