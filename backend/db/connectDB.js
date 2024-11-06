import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        //console.log("mongo_url: ", process.env.MONGODB_URL);
        //to check if the url is correct or not
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch (error) {
        console.log("Error connection to MongoDB: ", error.message)
        process.exit(1); //if it exits 0 it means a success else failure
    }
}