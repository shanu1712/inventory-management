import express from 'express'
import { countByCity, countByType, createhotel, deletehotel, getallhotels, gethotel, updatehotel } from '../controllers/hotelcontrollers.js'
import Hotel from '../models/Hotel.js'
import { verifyAdmin } from '../utils/verifytoken.js'
const router= express.Router()


///create//
router.post("/",verifyAdmin,createhotel)

//update//
router.put("/:id",verifyAdmin,updatehotel)

////delete//
router.delete("/:id",verifyAdmin,deletehotel)

///get//
router.get("/find/:id",gethotel)
///get all//
router.get("/",getallhotels)

router.get("/countByCity",countByCity)

router.get("/countByType",countByType)


export default router