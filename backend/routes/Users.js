import express from 'express'
import { createUser, deleteUser, getallUsers, getUser, updateUser } from '../controllers/userController.js'
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifytoken.js'
const router= express.Router()



// router.get("/checkauthentication",verifyToken,(req,res,next)=>{
//     res.send("hello user you are logged in")
// })

// router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
//     res.send('hello user,you are logged in and you can delete your account ')
// })

 router.get("/checkadmin/:id",verifyAdmin ,(req,res,next)=>{
     res.send('hello admin,you are logged in and you can delete all accounts ')
 })

///create//
router.post("/",createUser)

//update//
router.put("/:id",verifyUser,updateUser)

////delete//
router.delete("/:id",verifyUser,deleteUser)

///get//
router.get("/:id",verifyUser,getUser)
///get all//
router.get("/",verifyAdmin,getallUsers)

export default router