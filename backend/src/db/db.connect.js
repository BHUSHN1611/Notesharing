import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("✅ MongoDB is connected")
        
    } catch (error) {
        console.error("Mongo-DB connection error",error);
        process.exit(1)
        
    }

}
export default connectDB;