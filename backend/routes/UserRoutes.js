import express from "express";
import {
  registerUser,
  authUser,
  allUsers,
  deleteUser,
} from "../controllers/UserController.js";
import { protect, admin } from "../middlewares/AuthMiddleware.js";

const router = express.Router();

router
  .route("/")
  .post(protect, admin, registerUser)
  .get(protect, admin, allUsers);
router.route("/login").post(authUser);
router.route("/:id").delete(protect, admin, deleteUser);

export default router;
