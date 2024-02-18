// loads .env file contents into process.env by deafault
require('dotenv').config()
const express=require('express')
const cors=require('cors')
const router=require('./Routes/router')
require('./DB/connection')
// Creates an Express application

const rentServer=express()

rentServer.use(cors())
rentServer.use(express.json())
rentServer.use(router)
rentServer.use('/uploads',express.static('./uploads'))

const PORT=4000 || process.env.PORT
rentServer.listen(PORT,()=>{
    console.log(`Rent App server started at port : ${PORT} and waiting for client requests`);
})

// http get request resolving to http://localhost:4000/
rentServer.get('/',(req,res)=>{
    res.send(`<h1>Rent App server started and waiting for client requests !!!`)
})