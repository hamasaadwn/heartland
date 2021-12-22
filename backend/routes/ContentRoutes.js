import express from "express";

import {
  createOrUpdateContent,
  getContentByType,
} from "../controllers/ContentController.js";
import { protect, admin, author } from "../middlewares/AuthMiddleware.js";

const router = express.Router();

router.route("/").post(protect, admin, createOrUpdateContent);
router.route("/:type").get(getContentByType);

export default router;
