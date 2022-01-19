import express from "express";

import { rate, result } from "../controllers/RatingController.js";

const router = express.Router();

router.route("/:scope").post(rate).get(result);

export default router;
