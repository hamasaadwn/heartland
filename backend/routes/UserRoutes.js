import express from "express";
import {
  registerUser,
  authUser,
  allUsers,
} from "../controllers/UserController.js";
import { protect, admin } from "../middlewares/AuthMiddleware.js";

const router = express.Router();

router
  .route("/")
  .post(protect, admin, registerUser)
  .get(protect, admin, allUsers);
router.route("/login").post(authUser);

export default router;
