import express from "express";

import {
  createMap,
  updateMap,
  getAllMaps,
  getMapById,
} from "../controllers/MapController.js";
import { protect, admin, author } from "../middlewares/AuthMiddleware.js";

const router = express.Router();

router.route("/").post(protect, admin, createMap).get(getAllMaps);
router.route("/:id").post(protect, admin, updateMap).get(getMapById);

export default router;
