import mongoose from "mongoose";

export const SelectedSchema = new mongoose.Schema({
  themeName: {
    type: String,
    required: true,
  },
  layoutSelected: {
    type: String,
    default: null,
  },
  fonts: {
    type: [
      {
        fontType: { type: String, required: true },
        fontName: { type: String, required: true },
      },
    ],
    default: null,
  },
  colours: {
    type: [
      {
        colorType: { type: String, required: true },
        colorHexCode: { type: String, required: true },
      },
    ],
    default: null,
  },
  media: {
    type: [
      {
        mediaType: { required: true, type: String },
        mediaRequiredFor: { type: String, required: true },
        mediaUrl: { required: true, type: String },
      },
    ],
    default: null,
  },
});
