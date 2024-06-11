// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
//import mongoose from "mongoose";
//import{DB_NAME} from "./constants.js";
import connectDB from "./db/index.js";
import express from 'express';
import { app } from './app.js';
dotenv.config({
    path:'./env'
})
// const app = express();
// app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// app.post('/data', (req, res) => {
//   const data = req.body;
//   res.send(`You sent: ${JSON.stringify(data)}`);
// });
connectDB()
.then(()=>{
    app.listen(process.env.PORT|| 8000,()=>{
        console.log(`O   server is running at port:${process.env.PORT}`);
    });
})
.catch((err)=>{
    console.log("MONGO db connection failed",err)
})






// import express from "express"
// const app=express()
// // function connectDB(){}
// // connectDB()

// ;(async()=>{
//     try{
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     app.on("error",()=>{
//         console.log("ERROR:",error);
//         throw error
//     })
//     app.listen(process.env.PORT,()=>{
//         console.log(`app is listening on port${process.env.PORT}`)
//     })
// }catch(error){
//         console.error("Error:",error)
//     }
// })()