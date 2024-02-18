const mongoose=require('mongoose')

const wishlistSchema=new mongoose.Schema({
    product:{
        type:Object,
        required:true
    },
    userId:{
        type:String,
        required:true
    }
})

const wishlists=mongoose.model("wishlists",wishlistSchema)
module.exports=wishlists