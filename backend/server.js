import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import path from "path";
import cors from "cors";

import connectDB from "./config/db.js";

import userRoutes from "./routes/UserRoutes.js";
import lawPostRoutes from "./routes/LawPostsRoutes.js";
import ratingRoutes from "./routes/RatingRoutes.js";
import contentRoutes from "./routes/ContentRoutes.js";
import contactRoutes from "./routes/ContactRoutes.js";
import mapRoutes from "./routes/MapRoutes.js";
import uploadRoutes from "./routes/UploadRoutes.js";
import visitorRoutes from "./routes/visitorRoutes.js";
import emergencyRoutes from "./routes/EmergencyRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json({ limit: "3kb" }));

app.use("/api/users", userRoutes);
app.use("/api/posts", lawPostRoutes);
app.use("/api/rating", ratingRoutes);
app.use("/api/content", contentRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/maps", mapRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/visitor", visitorRoutes);
app.use("/api/emergency", emergencyRoutes);

//make uploads static
//const __dirname = path.resolve("/heartland");
//console.log(__dirname);
//app.use("/uploads", express.static(path.join(__dirname, "/uploads")));


const dirname = path.resolve();
app.use("/uploads", express.static(path.join(dirname, "../uploads")));


app.listen(4000, () => console.log("Server listening on port 4000!"));

