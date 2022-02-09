import express from "express";

import {
  createOrUpdateEmergency,
  getEmergencyByType,
  getEmergencies,
  deleteEmergency,
} from "../controllers/EmergencyController.js";
import { protect, admin, author } from "../middlewares/AuthMiddleware.js";

const router = express.Router();

router
  .route("/")
  .post(protect, admin, createOrUpdateEmergency)
  .get(getEmergencies);
router.route("/:type").get(getEmergencyByType);

router.route("/:id").delete(protect, admin, deleteEmergency);

export default router;
