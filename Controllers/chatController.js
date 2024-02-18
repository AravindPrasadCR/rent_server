const chats=require('../Models/chatSchema')

// add message
exports.addChatController=async(req,res)=>{
    console.log("Inside add chat function");
    const {id1,id2,senderId,message}=req.body
    try{
        const newChat=new chats({
            id1,id2,senderId,message
        })
        await newChat.save()
        res.status(200).json(newChat)
    }
    catch(err){
        res.status(401).json(err)

    }
}
// get messages
exports.getMessages=async(req,res)=>{
    try{
        const allMessages=await chats.find()
        res.status(200).json(allMessages)
    }
    catch(err){
        res.status(401).json(err)
    }
}