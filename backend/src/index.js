import express from 'express'
import dotenv from 'dotenv'
import authRoute from './routes/user.Routes.js'
import connectDB from './config/db.js'
import cookieParser from "cookie-parser"
dotenv.config();

const app=express();
const PORT=process.env.PORT

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth',authRoute);

app.get('/',(req,res)=>{
    res.send("Hello world!!!");
})

connectDB();

app.listen(PORT,()=>{
    console.log(`Server started on PORT : ${PORT}`);
})