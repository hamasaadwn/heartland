import express from "express";

import {
  createMap,
  updateMap,
  getAllMaps,
  getMapById,
  getMapByCity,
  deleteMapById,
} from "../controllers/MapController.js";
import { protect, admin, author } from "../middlewares/AuthMiddleware.js";

const router = express.Router();

router.route("/").post(protect, author, createMap).get(getAllMaps);
router
  .route("/:id")
  .post(protect, author, updateMap)
  .get(getMapById)
  .delete(protect, author, deleteMapById);
router.route("/m/:id").get(getMapByCity);

export default router;
