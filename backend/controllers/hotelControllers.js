import Hotel from '../models/Hotel.js'
export const createhotel= async(req,res,next)=>{
    const newHotel=new Hotel(req.body)
    try{
        const savedHotel=await  newHotel.save()
        res.status(200).json(savedHotel)
    }catch(err){
        next(err)
    }
}

export const gethotel= async(req,res)=>{
    try{
        const hotel=await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    }catch(err){
       // res.status(500).json(err)
        next(err)
    }
}


export const updatehotel= async(req,res,next)=>{
    try{
        const updatedHotel=await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedHotel)
    }catch(err){
        //res.status(500).json(err)
        next(err)
    }
}



export const deletehotel= async(req,res,next)=>{
    try{
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("deleted successfully")
    }catch(err){
       // res.status(500).json(err)
       next(err)
    }
}

export const getallhotels= async(req,res,next)=>{
    const {min,max,...others} =req.query

    // next()
     try{
       const hotel= await Hotel.find(req.query).limit(req.query.limit)
      // const hotel= await Hotel.find()
         res.status(200).json(hotel)
     }catch(err){
         //res.status(500).json(err)
         next(err)
     }
 }


 export const countByCity= async(req,res,next)=>{
    const cities= req.query.cities.split(",")
    try{
        const list=await Promise.all(cities.map(city=>{
           // return Hotel.find({city:city}).length   ////we canalso do this but it will fetch all data and it will be little bit more time consuming so next step is worth it
                 return Hotel.countDocuments({city:city})
        }))
        res.status(200).json(list)
    }catch(err){
       // res.status(500).json(err)
        next(err)
    }
}

export const countByType= async(req,res,next)=>{
  try{
    
    const hotelcount= await Hotel.countDocuments({type:"hotel"})
    const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
    const resortCount = await Hotel.countDocuments({ type: "resort" });
    const villaCount = await Hotel.countDocuments({ type: "villa" });
    const cabinCount = await Hotel.countDocuments({ type: "cabin" });
        
        res.status(200).json([
            {type:"hotel",count:hotelcount},
            { type: "apartments", count: apartmentCount },
            { type: "resorts", count: resortCount },
            { type: "villas", count: villaCount },
            { type: "cabins", count: cabinCount },
          
        ])
    }catch(err){
       // res.status(500).json(err)
        next(err)
    }
}