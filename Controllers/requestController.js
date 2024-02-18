const requests=require('../Models/requestSchema')

// add request
exports.addRequestController=async(req,res)=>{
    console.log("Inside add req function");
    const {senderId,recieverId,productId,product,userDetails}=req.body
    try{
        const newRequest=new requests({
            senderId,recieverId,productId,product,userDetails
        })
        await newRequest.save()
        res.status(200).json(newRequest)
    }
    catch (err){
        res.status(401).json(err)
    }
}

// get requests
exports.getRequestController=async(req,res)=>{
    try{
        const allRequests=await requests.find()
        res.status(200).json(allRequests)
    }
    catch(err){
        res.status(401).json(err)
    }
}

// delete request
exports.deleteRequestController=async(req,res)=>{
    // get product details
    const {id}=req.params
    try{
        const removeRequest=await requests.findByIdAndDelete({_id:id})
        res.status(200).json(removeRequest)
    }
    catch(err){
        res.status(401).json(err)
    }
}