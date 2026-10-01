import mongoose from "mongoose"
import { DB_name } from "../constants"
import { log } from "node:console"

const connectDB = async() => {
    try {
        const connectInstance = await mongoose.connect(`${proccess.env.MONGODB_URI} / ${DB_name}`)
        console.log(`\n MongoDB connected !! DB Host ${connectInstance.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection error : " , error);
        process.exit(1)      
    }
}

export default connectDB;