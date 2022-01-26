import express from "express";

import {
  createOrUpdateEmergency,
  getContentByType,
} from "../controllers/EmergencyController.js";
import { protect, admin, author } from "../middlewares/AuthMiddleware.js";

const router = express.Router();

// router.route("/");
router
  .route("/:type")
  .get(getContentByType)
  .post(protect, admin, getEmergencyByType);

export default router;
