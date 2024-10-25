import express from "express";

import {
  loginUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserByID,
  updateUser,
} from "../controllers/userController.js";
import { userAuth, adminAuth } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").get(getUsers);
router.post("/register", registerUser);
router.post("/login", loginUser);

router.post("/logout", logoutUser);
router.get("/profile", userAuth, getUserProfile);
router.put("/profile/update", userAuth, updateUserProfile);

// Admin routes
router.route("/").get(getUsers);
router.get("/:id", getUserByID);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", userAuth, adminAuth, deleteUser);

export default router;
