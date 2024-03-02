import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try{
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    console.log(`MONGODB CONNECTED: ${connectionInstance.connection.host}`);

  }catch(error){
    console.log("ERROR: ", error);
    process.exit(1) // Please read on nodejs process.exit(1)
    // throw error | we can also use it at place of proecss
  }
}

export default connectDB;