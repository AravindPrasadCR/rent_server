const mongoose=require('mongoose')

const chatSchema=new mongoose.Schema({
    id1:{
        type:String,
        required:true
    },
    id2:{
        type:String,
        required:true
    },
    senderId:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

const chats=mongoose.model("chats",chatSchema)
module.exports=chats