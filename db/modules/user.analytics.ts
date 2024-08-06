import mongoose from "mongoose";

export const AnalyticsSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  country: {
    type: String,
    default: "Unknown",
  },
  device: {
    type: String,
    enum: ["Desktop", "Mobile", "Tablet", "Other"],
    default: "Other",
  },
  browser: {
    type: String,
    default: "Unknown",
  },
  referrer: {
    type: String,
    default: "Direct",
  },
});
