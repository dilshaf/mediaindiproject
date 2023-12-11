import Admin from "../models/User.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const register = async (req, res) => { 


  



    try {
      const { username, email, password } = req.body;
      const images=req.file

      console.log(req.body,'body');

      if (!email) {
        return res.status(400).json({ message: "Email is required" });
      }

      if (!password) {
        return res.status(400).json({ message: "Password is required" });
      } else if (password.length < 8 || password.length > 16) {
        return res.status(400).json({ message: "Password must be between 8 and 16 characters" });
      }
  
      if(!username){
        return res.status(400).json({message:"name is required"})
      }
      if(!images){
        return res.status(400).json({message:"Upload an image"})
    }
    const image=req.file.filename
      




      const saltRounds = 10;
  
      const salt = bcrypt.genSaltSync(saltRounds);
      const hash = bcrypt.hashSync(password, salt);
      const newAdmin = new Admin({ username, email, password: hash,image:image });
      const savedAdmin = await newAdmin.save();
      res.status(200).json(savedAdmin);
    } catch (error) {
      console.log(error);
      res.status(404).json({message:error.message || null});

    }
  };


  export const login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
  
      // Validate email
      if (!email) {
        return res.status(400).json({ message: "Email is required" });
      }
  
      // Validate password
      if (!password) {
        return res.status(400).json({ message: "Password is required" });
      } else if (password.length < 8 || password.length > 16) {
        return res.status(400).json({ message: "Password must be between 8 and 16 characters" });
      }
  
      const user = await Admin.findOne({ email: email });
  
      if (!user) {
        return res.status(404).json({ message: "User not found!" });
      }
  
      const isPassword = await bcrypt.compare(req.body.password, user.password);
  
      if (isPassword) {
        const token = jwt.sign({ userId: user._id, username: user.username }, 'your-secret-key', { expiresIn: '1 days' });
        res.json({result:user,token:token});
      } else {
        res.status(404).json({ message: "Incorrect password" });
      }
      
    } catch (error) {
      console.log(error);
    }
  };


  export const getUser=async(req,res)=>{
    const { id } = req.params
    try {
      let getUser=await Admin.findById(id)
      res.status(201).json(getUser)
    } catch (error) {
      res.status(404).json({message:error.message || null});
      
    }
  }