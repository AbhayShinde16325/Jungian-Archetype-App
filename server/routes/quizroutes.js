import express from "express";
import { getQuestions, getResult } from "../controllers/quizcontroller.js";

const router = express.Router();

router.get("/questions", getQuestions);
router.post("/result", getResult);

export default router;
