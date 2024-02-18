const wishlists=require('../Models/wishListSchema')

// add to wishlist
exports.addWishlistController=async(req,res)=>{
    console.log("Inside add wishlist ");
    const userId=req.payload

    const {product}=req.body
    try{
        const newWishlist=new wishlists({
            product,userId
        })
        await newWishlist.save()
        res.status(200).json(newWishlist)
    }
    catch (err){
        res.status(401).json(err)
    }
}

// get wishlist
exports.getWishlist=async(req,res)=>{
    const userId=req.payload
    try{
        const allWishlist=await wishlists.find({userId:userId})
        res.status(200).json(allWishlist)
    }
    catch(err){
        res.status(401).json(err)

    }

}
// delete wishlist
exports.deleteWishlistController=async(req,res)=>{
    // get wishlist details
    const {id}=req.params
    try{
        const removeWishlist=await wishlists.findByIdAndDelete({_id:id})
        res.status(200).json(removeWishlist)
    }
    catch(err){
        res.status(401).json(err)
    }
}