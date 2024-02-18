const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true

    },
    overview:{
        type:String,
        required:true,
    },
    rent:{
        type:String,
        required:true
    },
    place:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    loc:{
        type:String,
        required:true
    },
    productImage:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    }


})

const products=mongoose.model("products",productSchema)
module.exports=products