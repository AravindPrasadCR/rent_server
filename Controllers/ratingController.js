const ratings=require('../Models/ratingSchema')
const users=require('../Models/userSchema')

// add ratings
exports.addrating=async(req,res)=>{
    console.log("Inside add ratings function");
    const userId=req.payload
    const {productId,rating,review,username}=req.body
    try{
        const newRating=new ratings({
            productId,rating,review,userId,username
        })
        await newRating.save()
        res.status(200).json(newRating)
    }
    catch(err){
        // res.status(401).json(newRating)
    }
}

// get ratings 
exports.getAllReviews=async(req,res)=>{
    try{
        const allReviews=await ratings.find()
        res.status(200).json(allReviews)
    }
    catch(err){
        res.status(401).json(err)
    }
}