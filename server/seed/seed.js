import mongoose from "mongoose";
import dotenv from "dotenv";
import Question from "../models/question.js";
import Archetype from "../models/archetype.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

await Question.deleteMany();
await Archetype.deleteMany();

await Archetype.insertMany([
  {
    name: "Hero",
    tagline: "Prove your worth",
    description: "Driven by courage and achievement",
    strengths: ["Bravery", "Discipline"],
    shadow: "Arrogance",
    friend: "Mentor",
    enemy: "Trickster"
  },
  {
    name: "Mentor",
    tagline: "Guide the way",
    description: "Wisdom and insight",
    strengths: ["Knowledge", "Patience"],
    shadow: "Dogma",
    friend: "Hero",
    enemy: "Shadow"
  }
]);

await Question.insertMany([
  {
    text: "How do you face challenges?",
    options: [
      { label: "Head-on", archetype: "Hero" },
      { label: "With strategy", archetype: "Mentor" }
    ]
  }
]);

console.log("Database seeded");
process.exit();
