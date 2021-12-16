import express from "express";
import dotenv from "dotenv";
import colors from "colors";

import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const app = express();

app.listen(4000, () => console.log("Example app listening on port 4000!"));
