import mongoose from "mongoose";
//require("dotenv").config({ path: "./config/.env" });
//import dotenv from "../.env"
//const dotenv = require('dotenv')
//dotenv.config({ path: path.resolve('../.env') })
const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/heartland");
    console.log(`mongoDB connected: ${conn.connection.host}`.cyan.underline);
  } catch (err) {
    console.error(`Error: ${err.message}`.red.bold);
    process.exit[1];
  }
};

export default connectDB;
// MONGO_URI = mongodb://localhost:27017/heartland
// JWT_SECRET = Alright, keep your secret

// REACT_APP_API_URL = https://api.cccht.org
