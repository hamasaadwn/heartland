import express from "express";
import { registerUser, authUser } from "../controllers/UserController.js";
import { protect, admin } from "../middlewares/AuthMiddleware.js";

const router = express.Router();

router.route("/").post(protect, admin, registerUser);
router.route("/login").post(authUser);

export default router;
