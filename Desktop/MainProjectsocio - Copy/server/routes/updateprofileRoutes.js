import express from 'express'
import { updateProfile } from '../controllers/updateProfile.js'

import { verifyToken } from '../middlewares/authMiddleware.js'
import multer from 'multer'
import path from 'path'


const Profilerouter=express.Router()

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'uploads/')
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+path.extname(file.originalname))
},})

const uploads=multer({storage})






//UPDATE
Profilerouter.put('/:id',uploads.single('image'),verifyToken,updateProfile)



export default Profilerouter
