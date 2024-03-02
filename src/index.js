// require('dotenv').config({ path: './.env' });
import dotenv from "dotenv";
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
import connectDB from "./db/database.js";

dotenv.config({
  path: './.env'
})

connectDB();

// first approch  
// import express from "express";

// const app = express();

// ( async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`)
//     app.on("error", (error) => {
//       console.log("ERROR: ", error);
//       throw error
//     })

//     app.listen(process.env.PORT, () => {
//       console.log(`Server listening on port ${process.env.PORT}`)
//     })

//   } catch (error){
//     console.error("ERROR: ", error);
//     throw error
//   }
// })();