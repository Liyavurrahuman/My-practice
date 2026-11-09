import express from "express";
import validateStudents from "../middleware/validatestudents.js";

import {
    getStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
} from "../controllers/studentController.js";

const router = express.Router();

// GET all students
router.get("/", getStudents);

// GET student by ID
router.get("/:id", getStudentById);

// POST student
router.post("/", validateStudents, createStudent);

// PATCH student
router.patch("/:id", updateStudent);

// DELETE student
router.delete("/:id", deleteStudent);

export default router;