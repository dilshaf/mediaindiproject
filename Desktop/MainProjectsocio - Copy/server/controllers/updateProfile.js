import Admin from "../models/User.js";

 export const updateProfile = async (req, res) => {

    const { id } = req.params

    const { username,email,password,image } = req.body

    if(!username){
        return res.status(400).json({message:"Name is required"})
    }
    if(!email){
        return res.status(400).json({message:"Email is required"})
    }
    if(!password){
        return res.status(400).json({message:"Password is required"})
    }
    if(!req.file){
        return res.status(400).json({message:"Upload an image"})
    }
    const ImagePath=req.file

    try {

        const updatedProfile = await Admin.findByIdAndUpdate( id, { $set: { username,email,password,image:ImagePath } }, { new: true });

        res.status(200).json(updatedProfile);

    } catch (error) {

       
        res.status(404).json({message:error.message || null});
    }
}