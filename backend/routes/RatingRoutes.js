import express from "express";

import { rate, result } from "../controllers/RatingController.js";

const router = express.Router();

router.route("/").post(rate).get(result);

export default router;
