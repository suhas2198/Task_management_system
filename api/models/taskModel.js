import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  taskTitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  dueDate: {
    type:String,
    required: true,
  },
});

export default mongoose.model("task", taskSchema);
