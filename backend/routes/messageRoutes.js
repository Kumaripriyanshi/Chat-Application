import express from "express";
import { getMessages, sendMessage } from "../controllers/messageController.js";
import isSignedin from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/:id", isSignedin, getMessages);
router.post("/send/:id", isSignedin, sendMessage);

export default router;
