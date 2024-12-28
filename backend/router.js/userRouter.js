// backend/routes/userRouter.js
import express from "express";
import {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
  getUsersById,
} from "../controllers/userControllers.js";

const router = express.Router();

// Define CRUD routes
router.post("/add", createUser); // Create a new user
router.get("/all", getAllUsers); // Read all users
router.get("/:id", getUsersById); // Read users by ID
router.put("/:id", updateUser); // Update a user by ID
router.delete("/:id", deleteUser); // Delete a user by ID

export default router;
