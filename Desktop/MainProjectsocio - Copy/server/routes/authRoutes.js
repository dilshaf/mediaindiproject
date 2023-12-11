import express from 'express'
import {register,login, getUser} from '../controllers/authController.js'
import multer from 'multer'
import path from 'path'

const router=express.Router()




const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'uploads/')
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+path.extname(file.originalname))
},})

const upload=multer({storage})


router.post('/register',upload.single('image'),register)
router.post('/login',login)
router.get('/user/:id',getUser)




export default router
