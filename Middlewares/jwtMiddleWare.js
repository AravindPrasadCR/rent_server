const jwt=require('jsonwebtoken')

const jwtMiddleWare=(req,res,next)=>{
    console.log("Inside jwt MiddleWare");
    console.log(req.headers['authorization']);
    const token=req.headers['authorization'].split(" ")[1]
    try{
        const jwtResponse=jwt.verify(token,process.env.jwt_secret)
        console.log(jwtResponse);
        req.payload=jwtResponse.userId
        next()
    }
    catch(err){
        res.status(401).json("Autherization required please login")
    }

}
module.exports=jwtMiddleWare