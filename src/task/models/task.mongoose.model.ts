import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: [true, "Title is required"], index: true },
  description: {
    type: String,
    required: [true, "task description is required"],
  },
  dateAdded: { type: Date, default: Date.now },
  username: { type: String, required: [true, "username is required"] },
});
export const Task = mongoose.model("tasks", TaskSchema);
