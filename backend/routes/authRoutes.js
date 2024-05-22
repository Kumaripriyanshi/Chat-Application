import express from "express";
import { Login, Logout, Register } from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", Register);

router.post("/login", Login);

router.post("/logout", Logout);

export default router;
