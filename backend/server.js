import express from "express";
import dotenv from "dotenv";
import colors from "colors";

import connectDB from "./config/db.js";

import userRoutes from "./routes/UserRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json({ limit: "3kb" }));

app.use("/api/users", userRoutes);

app.listen(4000, () => console.log("Example app listening on port 4000!"));
