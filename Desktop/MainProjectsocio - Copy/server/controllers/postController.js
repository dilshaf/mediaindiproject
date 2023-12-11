import Post from "../models/Post.js"
import Admin from "../models/User.js"

export const createPost=async(req,res)=>{
    try {
        const{description,picturePath}=req.body
        // const user=await Admin.findById(userId)
        const newPost=new Post({
           
            username:user.username,
           
            description,
            userPicturePath:user.picturePath,
            picturePath,
            likes:{},
            comments:[]
        })
        const createpost=await newPost.save()
        
        res.status(201).json(createpost)
    } catch (error) {
        res.status(404).json({message:error.message || null});
        
    }
}


export const getAllPosts=async(req,res)=>{
    try {
        const post=await Post.find()
        res.status(200).json(post)
    } catch (error) {
        res.status(404).json({message:error.message || null});
        
    }
}


export const likePost=async(req,res)=>{
    try {
        const {id}=req.params
        const {userId}=req.body
        const post=await Post.findById(id)
        const isLiked=post.likes.get(userId)

        if(isLiked){
            post.likes.delete(userId)
        }else{
            post.likes.set(userId,true)
        }

        const updatedPost=await Post.findByIdAndUpdate(id,{likes:post.likes},{new:true})
        res.status(201).json(updatedPost)
        
    } catch (error) {
        res.status(404).json({message:error.message || null});
        
    }
}

export const commentPost=async(req,res)=>{
    try {
        const {id}=req.params
        const {userId}=req.body
        const post=await Post.findById(id)
        const isComment=post.comments.get(userId)

        if(isComment){
            post.comments.delete(userId)
        }else{
            post.comments.set(userId,true)
        }

        const updatedPost=await Post.findByIdAndUpdate(id,{comments:post.comments},{new:true})
        res.status(201).json(updatedPost)
        
    } catch (error) {
        res.status(404).json({message:error.message || null});
        
    }
}

