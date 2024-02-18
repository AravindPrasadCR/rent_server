const mongoose=require('mongoose')

const ratingSchema=new mongoose.Schema({
    productId:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    review:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    }
   
})

const ratings=mongoose.model("ratings",ratingSchema)
module.exports=ratings