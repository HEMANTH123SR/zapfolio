import mongoose from "mongoose";

export const themesSchema = new mongoose.Schema({
  themeName: {
    type: String,
    required: true,
    unique: true,
  },
  pagVisites: [
    {
      type: Date,
      required: true,
      default: Date.now,
    },
  ],
});
