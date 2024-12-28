import express from "express";
import { getAllPosts } from "../controllers/PaginationControllers.js";

const router = express.Router();

router.get("/all", getAllPosts); // Read all users

export default router;
