import mongoose from "mongoose";

//Admin & user schema
const categorySchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    maxLength: 32,
    unique: true,
  },
});

export default mongoose.model("Category", categorySchema);
