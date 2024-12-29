import express from "express";
import { getAllPosts } from "../controllers/PaginationControllers.js";

const router = express.Router();

// Route for paginated posts
router.get("/pagination", getAllPosts);

// Route for infinite scroll posts
router.get("/infinite", getAllPosts);

export default router;
