import express from "express";

import { rate, result, getAllRating } from "../controllers/RatingController.js";

const router = express.Router();

router.route("/:scope").post(rate).get(result);
router.route("/").get(result);
router.route("/all/all").get(getAllRating);


export default router;
