import express from "express";

import { visitorCount } from "../controllers/visitorsController.js";

const router = express.Router();

router.route("/").get(visitorCount);

export default router;
