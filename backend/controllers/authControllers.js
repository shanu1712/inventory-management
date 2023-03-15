import Users from "../models/Users.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
export const register= async(req,res,next)=>{
    try{
       const salt=bcrypt.genSaltSync(10)
       const hash=bcrypt.hashSync(req.body.password,salt) 
const newUser= new Users({
    username:req.body.username,
    email:req.body.email,
    password:hash
})
await newUser.save()
res.status(200).send("user has been created")
    }catch(err){
         next(err)
    }
}

export const login= async(req,res,next)=>{
    try{
        const user= await Users.findOne({username:req.body.username})
        if(!user) return next((404,"user not found"))
        

        const isPasswordCorrect=await bcrypt.compare(req.body.password,user.password)
        if(!isPasswordCorrect) return next((400,"wrong credentials"))
        const token= jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.JWT_SECRET)

        const {password,isAdmin,...otherDetails}= user._doc    ////to hide the password in login 
        res.cookie("access_token",token,{
            httpOnly:true,
        }).status(200).json({...otherDetails})

    }catch(err){
    next(err)
    }
}