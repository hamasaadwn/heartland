import express from "express";

import {
  createOrUpdateContent,
  getContentByType,
} from "../controllers/ContentController.js";
import { protect, admin, author } from "../middlewares/AuthMiddleware.js";

const router = express.Router();

// router.route("/");
router
  .route("/:type")
  .get(getContentByType)
  .post(protect, author, createOrUpdateContent);

export default router;
