import express from "express";
import isSignedin from "../middleware/authMiddleware.js";
import { SidebarUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/", isSignedin, SidebarUser);

export default router;
