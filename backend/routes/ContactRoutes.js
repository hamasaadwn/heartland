import express from "express";

import {
  createOrUpdateContact,
  getAllContactInfo,
} from "../controllers/ContactController.js";
import { protect, admin, author } from "../middlewares/AuthMiddleware.js";

const router = express.Router();

router
  .route("/")
  .post(protect, admin, createOrUpdateContact)
  .get(getAllContactInfo);
router.route("/:id").post(protect, admin, createOrUpdateContact);

export default router;
