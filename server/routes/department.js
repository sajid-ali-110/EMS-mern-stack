import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  addDepartment,
  getDepartments,
  editDepartment,
} from "../controllers/departmentController.js";

const router = express.Router();

router.get("/", authMiddleware, getDepartments);
router.get("/:id", authMiddleware, editDepartment);
router.post("/add", authMiddleware, addDepartment);

export default router;
