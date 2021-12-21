import express from "express";
import {
  createPost,
  updatePost,
  deletePostById,
  getAllPosts,
  getPostsByType,
  getPostsById,
  postsSearch,
} from "../controllers/LawPostsController.js";
import { protect, admin, author } from "../middlewares/AuthMiddleware.js";

const router = express.Router();

router.route("/").post(protect, author, createPost).get(getAllPosts);
router.route("/s").get(postsSearch);
router
  .route("/:id")
  .put(protect, author, updatePost)
  .delete(protect, author, deletePostById)
  .get(getPostsById);
router.route("/t/:type").get(getPostsByType);

export default router;
