const mongoose=require('mongoose')
const connectionString=process.env.DB_Connection_String
mongoose.connect(connectionString).then(()=>{
    console.log("MongoDB atlas successfully connected with Rent App Server");
}).catch((err)=>{
    console.log(`MongoDB connection failed !!! Error: ${err}`);
})