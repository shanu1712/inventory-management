import Rooms from "../models/rooms.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";

export const createRoom= async(req,res,next)=>{
const hotelId=req.params.hotelId
const newRoom=new Rooms(req.body)

try{
    const savedRoom= await newRoom.save()
    try{
       await Hotel.findByIdAndUpdate(hotelId,{$push:{rooms:savedRoom._id}})
    }catch(err){
        next(err)
    }
    res.status(200).json(savedRoom)
}catch(err){
next(err)
}
}

export const getRoom= async(req,res)=>{
    try{
        const hotel=await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    }catch(err){
       // res.status(500).json(err)
        next(err)
    }
}


export const updateRoom= async(req,res,next)=>{
    try{
        const updatedHotel=await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedHotel)
    }catch(err){
        //res.status(500).json(err)
        next(err)
    }
}



export const deleteRoom= async(req,res,next)=>{
    const hotelId=req.params.hotelId
    try{
        await Rooms.findByIdAndDelete(req.params.id)
        try{
            await Hotel.findByIdAndUpdate(hotelId,{$pull:{rooms:req.params.id}})
         }catch(err){
             next(err)
         }
     
        res.status(200).json("Room deleted successfully")
    }catch(err){
       // res.status(500).json(err)
       next(err)
    }
}

export const getallRooms= async(req,res,next)=>{
    // next()
     try{
        const hotel= await Hotel.find()
         res.status(200).json(hotel)
     }catch(err){
         //res.status(500).json(err)
         next(err)
     }
 }


