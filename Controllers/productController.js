const products=require('../Models/productSchema')

// add product
exports.addProducts=async(req,res)=>{
    console.log("Inside ad products function");
    const productImage=req.file.filename
    const {title,category,overview,rent,place,contact,loc,userId}=req.body
    try{
        const newProduct=new products({
            title,category,overview,rent,place,contact,loc,productImage,userId,status:"pending"
        })
        await newProduct.save()
        res.status(200).json(newProduct)
    }
    catch (err){
        res.status(401).json(newProduct)
    }
}

// getUserProducts-token-required
exports.allUserProducts=async (req,res)=>{
    const userId=req.payload
    try{
        const userProducts=await products.find({userId})
        res.status(200).json(userProducts)
    }
    catch(err){
        res.status(401).json(err)
    }
}

// getAllProducts
exports.getAllProducts=async (req,res)=>{
    const searchKey=req.query.search
    const searchLoc=req.query.loc
    const query={
        title:{$regex:searchKey , $options:"i"},
        place:{$regex:searchLoc , $options:"i"}

    }
    try{
        const allProducts=await products.find(query)
        res.status(200).json(allProducts)
    }
    catch(err){
        res.status(401).json(err)
    }
}

// update product
exports.editProducts=async (req,res)=>{
    // get edit product details
    const {id}=req.params
    const { title,category,overview,rent,place,contact,loc,productImage,userId,status}=req.body
    const uploadProductImage=req.file?req.file.filename:productImage

    try{
        const updateProduct=await products.findByIdAndUpdate({_id:id},{
            title,category,overview,rent,place,contact,loc,productImage:uploadProductImage,userId,status
        },{new:true})
        await updateProduct.save()
        res.status(200).json(updateProduct)
    }
    catch(err){
        res.status(401).json(err)
    }


}

// delete product
exports.deleteProductController=async (req,res)=>{
    // get product details
    const {id}=req.params
    try{
        const removeProduct=await products.findByIdAndDelete({_id:id})
        res.status(200).json(removeProduct)
    }
    catch (err){
        res.status(401).json(err)
    }
}