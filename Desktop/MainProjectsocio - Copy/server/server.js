import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import router from './routes/authRoutes.js'

const app=express()
app.use(cors())
dotenv.config()

//MIDDLEWARES
app.use(express.json())
app.use(cors())
app.use(morgan("common"))
app.use(bodyParser.urlencoded({extended:false}))


app.use('/api/admin',router)


//MONGODB CONNECT
const connect=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Database connected");
    } catch (error) {
        console.log(error.message);
        
    }
}



//PORT CONNECT
app.listen(process.env.PORT,()=>{
    connect()
    console.log(`Port is connected ${process.env.PORT}`);
})


