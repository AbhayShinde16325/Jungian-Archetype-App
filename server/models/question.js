import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    required: true,
  },
  order: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Question", questionSchema);
