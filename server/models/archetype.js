import mongoose from "mongoose";

const archetypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  title: String,
  description: String,
  friend: String,
  enemy: String,
});

export default mongoose.model("Archetype", archetypeSchema);
