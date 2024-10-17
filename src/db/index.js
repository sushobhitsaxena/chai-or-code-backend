import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";

const connectDB=async()=>{
    try {
      const connectionInstanse= await mongoose.connect(`process.env.MONGODB_URI/${DB_NAME }`)  // connectionInstanse hold the response of connection 
        console.log(`\n MongoDB connected !! DB HOST ${connectionInstanse.connection.host}`)
    } catch (error) {
        console.log("MONGODB connection error:",error);

        process.exit(1) // use to exit the process


    }
}

export default connectDB