import express from "express";
import { login, verify } from "../controllers/authController.js";
import authmiddleware from "../middleware/authmiddleware.js";

const router = express.Router();

router.post("/auth/login", login);
router.get("/auth/verify", authmiddleware, verify);

export default router;
