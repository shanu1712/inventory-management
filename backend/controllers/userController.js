import User from '../models/Users.js'
export const createUser= async(req,res,next)=>{
    const newUser=new User(req.body)
    try{
        const savedUser=await  newUser.save()
        res.status(200).json(savedUser)
    }catch(err){
        next(err)
    }
}

export const getUser= async(req,res)=>{
    try{
        const User=await User.findById(req.params.id)
        res.status(200).json(User)
    }catch(err){
       // res.status(500).json(err)
        next(err)
    }
}


export const updateUser= async(req,res,next)=>{
    try{
        const updatedUser=await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedUser)
    }catch(err){
        //res.status(500).json(err)
        next(err)
    }
}



export const deleteUser= async(req,res,next)=>{
    try{
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("deleted successfully")
    }catch(err){
       // res.status(500).json(err)
       next(err)
    }
}

export const getallUsers= async(req,res,next)=>{
    // next()
     try{
        const User= await User.find()
         res.status(200).json(User)
     }catch(err){
         //res.status(500).json(err)
         next(err)
     }
 }


