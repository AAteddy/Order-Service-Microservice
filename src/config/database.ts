import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

console.log("MongoDB URI:", process.env.MONGO_URI);
console.log("PORT:", process.env.PORT);

const MONGODB_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/orderDB' as string;
const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("MongoDB connected successflly");
        
    } catch (error) {
        console.error("MongoDB connection failed", error);
        process.exit(1);
    }
};

export default connectDB;