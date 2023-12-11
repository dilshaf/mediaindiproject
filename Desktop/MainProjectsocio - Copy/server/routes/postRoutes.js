import express from 'express'
// import {getFeedPosts,getUserPosts,likePost} from '../controllers/posts.js'
import { verifyToken } from '../middlewares/authMiddleware.js'
import { commentPost, createPost, getAllPosts, likePost } from '../controllers/postController.js'

const Postrouter=express.Router()



Postrouter.post('/post',verifyToken,createPost)
//GET
Postrouter.get('/',verifyToken,getAllPosts)


//UPDATE
Postrouter.put('/:id/like',verifyToken,likePost)
Postrouter.put('/:id/comment',verifyToken,commentPost)


export default Postrouter
