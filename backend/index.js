import express from 'express'
import dotenv from "dotenv"
import mongoose from 'mongoose'
import authRoute from "./routes/auth.js"
import userRoute from "./routes/Users.js"
import hotelRoute from "./routes/hotels.js"
import roomRoute from "./routes/rooms.js"
import cookieParser from 'cookie-parser'
import cors from 'cors'
const app =express()
dotenv.config()

// mongoose.connect(process.env.MONGO_URI).then(()=>{
//     console.log("connected to database")
// })

// mongoose.connect(process.env.MONGO_URI).then(()=>{
//     console.log('database connected')
// }).catch((err)=>{
//     console.log(err)
// })
mongoose.connect("mongodb+srv://:@cluster0.o5kdkye.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("connected to database")
}).catch((err)=>{
    console.log(err)
})

app.use(cors())
///middlewares//
app.use(cookieParser())
app.use(express.json())
app.use("/api/auth",authRoute)
app.use("/api/hotels",hotelRoute)
app.use("/api/users",userRoute)
app.use("/api/rooms",roomRoute)
app.use((err,req,res,next)=>{
    const errorStatus=err.status||500
    const errorMessage=err.message||"something wrong "
    return res.status(500).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack
    })
   // next()
})
app.listen(8000,()=>{
    console.log("connected to backend")

})
