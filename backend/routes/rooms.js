import express from 'express'
import { createRoom, deleteRoom,   getallRooms,  getRoom, updateRoom } from '../controllers/roomcontrollers.js'
import { verifyAdmin } from '../utils/verifytoken.js'

const router= express.Router()

//create//
router.post("/:hotelid",verifyAdmin,createRoom)

router.put("/:id",verifyAdmin,updateRoom)

router.delete("/:id/:hotelid",verifyAdmin,deleteRoom)

router.get("/:id",getRoom)

router.get("/",getallRooms)



export default router