import express from "express";
import questionRoutes from "./routes/questionroutes.js";
import quizRoutes from "./routes/quizroutes.js";

const app = express();

app.use(express.json());

app.use("/api/questions", questionRoutes);
app.use("/api/quiz", quizRoutes);

export default app;
