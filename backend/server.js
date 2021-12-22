import express from "express";
import dotenv from "dotenv";
import colors from "colors";

import connectDB from "./config/db.js";

import userRoutes from "./routes/UserRoutes.js";
import lawPostRoutes from "./routes/LawPostsRoutes.js";
import ratingRoutes from "./routes/RatingRoutes.js";
import contentRoutes from "./routes/ContentRoutes.js";
import contactRoutes from "./routes/ContactRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json({ limit: "3kb" }));

app.use("/api/users", userRoutes);
app.use("/api/posts", lawPostRoutes);
app.use("/api/rating", ratingRoutes);
app.use("/api/content", contentRoutes);
app.use("/api/contact", contactRoutes);

app.listen(4000, () => console.log("Server listening on port 4000!"));
