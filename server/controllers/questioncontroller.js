import Question from "../models/question.js";
import Archetype from "../models/archetype.js";

export const getQuestions = async (req, res) => {
  const questions = await Question.find();
  res.json(questions);
};
