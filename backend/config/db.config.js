// backend/config/db.config.js

import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB Atlas
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Atlas connected successfully");
  } catch (err) {
    console.error("MongoDB Atlas connection error:", err);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
