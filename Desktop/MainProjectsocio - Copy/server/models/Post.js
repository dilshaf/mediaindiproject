import mongoose,{Schema,model} from 'mongoose'

const postSchema= new Schema(
    {
        // userId:{
        //     type:String,
        //     required:true,
        // },
        username:{
            type:String,
            required:true,
        },
       
        
        description:String,
        picturePath:String,
        userPicturePath:String,
        likes:{
            type:Map,
            of:Boolean,
        },
        comments:{
            type:Array,
            default:[]
        }

    },{timestamps:true}
)

const Post=model('post',postSchema)
export default Post