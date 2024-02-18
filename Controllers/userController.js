const users=require('../Models/userSchema')
const jwt=require('jsonwebtoken')

// register
exports.register=async (req,res)=>{
    const {username,email,password}=req.body
    try{
        //check email already exist
        const existingUser=await users.findOne({email})
        if(existingUser){
            res.status(406).json("Account already exists !!! Please login...")

        }
        else{
            const newUser=new users({
                username,email,password,place:'',phone:'',profile:'',role:''
            })

            await newUser.save()
            res.status(200).json(newUser)
        }
    }
    catch(err){
        res.status(401).json(`Register API Failed , Error: ${err}`)
    }
}

// login
exports.login=async (req,res)=>{
    console.log("Inside login Controller function...");

    const {email,password}=req.body
    try{
        const existingUser=await users.findOne({email,password})
        if(existingUser){
            //generate token using jwt
            const token=jwt.sign({userId:existingUser._id},process.env.jwt_secret)
            res.status(200).json({
                existingUser,token
            })
        }
        else{
            res.status(404).json("Invalid email or password")
        }
    }
    catch(err){
        res.status(401).json(`Login API Failed , Error: ${err}`)
    }
}
// update user
exports.editUser = async (req,res) =>{
    const userId = req.payload
    const {username,email,password,place,phone,profileImage,role} = req.body
    const profile = req.file?req.file.filename:profileImage
    try{
        const updateUser = await users.findByIdAndUpdate({_id:userId},{username,email,password,place,phone,profile,role},{new:true})
        await updateUser.save()
        res.status(200).json(updateUser)
    }catch(err){
        res.status(401).json(err)
    }
}