// // require('dotenv').config({path: './env'})
// import dotenv from "dotenv"
// import connectDB from "./db/index.js";

// dotenv.config({
//     path: './env'

// })

// connectDB()
// .then(() => {
//     app.listen(process.env.PORT || 8000, () => {
//         console.log(`Server is running at port : ${process.env.PORT}`);
//     })
// })
// .catch((err) => {
//     console.log("MONGO db connection failed !!!", err);
// })


import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./db/index.js";

dotenv.config({ path: './env' });

// Initialize Express app
const app = express();

// MongoDB connection setup
connectDB()
  .then(() => {
    console.log("MongoDB connected!");

    // Start the server after a successful MongoDB connection
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.error("MONGO db connection failed!!!", err);
  });
























// import express from "express";



// (async() => {
//    try{
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//        application.on("errir", (error)=> {
//            console.log("ERR:", error);
//            throw error
//        })
//        app.listen(process.env.PORT, ()=> {
//         console.log(`App is listening on port ${process.env.PORT}`);
//        })
       
//    }catch (error){
//     console.error("ERROR: ",error)
//     throw err
//    }
// })