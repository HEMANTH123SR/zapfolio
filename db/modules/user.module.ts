import mongoose from "mongoose";
import { UserDetailedDataSchema } from "@/db/modules/user.linkedinData";
const userModule = new mongoose.Schema({
  userAuthDetails: {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    userName: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
  },
  linkedinUrl: {
    type: String,
    required: true,
  },
  userDetailedData: {
    type: UserDetailedDataSchema,
    required: true,
  },
  selectedTheme: {
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
  },
});

export const User = mongoose.models.User || mongoose.model("User", userModule);
