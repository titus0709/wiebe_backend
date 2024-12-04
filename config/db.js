// import mongoose from "mongoose";

// const connectDb = async () => {
//  try{
//     const conn = await mongoose.connect(process.env.MONGO_URI);
//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//  }catch(error){
//     console.log(`Error: ${error.message}`);
//     process.exit(1);
//  }
// };

// export default connectDb;

const mongoose = require('mongoose'); // Use require instead of import

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: process.env.DB_NAME,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error(`MongoDB connection failed: ${error.message}`);
    process.exit(1); // Exit the process on failure
  }
};

module.exports = connectDb; // Use module.exports instead of export default
