import express from "express";
import {
  createPost,
  updatePost,
  deletePostById,
} from "../controllers/LawPostsController.js";
import { protect, admin, author } from "../middlewares/AuthMiddleware.js";

const router = express.Router();

router.route("/").post(protect, author, createPost);
router
  .route("/:id")
  .put(protect, author, updatePost)
  .delete(protect, author, deletePostById);
// router.route("/login").post(authUser);

export default router;
