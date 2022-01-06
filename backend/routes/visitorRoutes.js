import express from "express";

import { visitorCount } from "../controllers/visitorsController.js";

const router = express.Router();

router.route("/").post(visitorCount);

export default router;
