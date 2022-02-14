import express from "express";

import {
  createOrUpdateContact,
  deleteContact,
  getAllContactInfo,
} from "../controllers/ContactController.js";
import { protect, admin, author } from "../middlewares/AuthMiddleware.js";

const router = express.Router();

router
  .route("/")
  .post(protect, author, createOrUpdateContact)
  .get(getAllContactInfo);
router
  .route("/:id")
  .post(protect, author, createOrUpdateContact)
  .delete(protect, author, deleteContact);

export default router;
