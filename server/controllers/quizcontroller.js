import Question from "../models/question.js";
import Archetype from "../models/archetype.js";

export const getQuestions = async (req, res) => {
  const questions = await Question.find().sort({ order: 1 });
  res.json(questions);
};

export const getResult = async (req, res) => {
  const { scores } = req.body;

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);

  const dominant = sorted[0][0];
  const friend = sorted[1][0];
  const enemy = sorted[sorted.length - 1][0];

  const dominantData = await Archetype.findOne({ name: dominant });
  const friendData = await Archetype.findOne({ name: friend });
  const enemyData = await Archetype.findOne({ name: enemy });

  res.json({
    dominant: dominantData,
    friend: friendData,
    enemy: enemyData,
  });
};
