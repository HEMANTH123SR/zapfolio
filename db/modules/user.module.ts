import mongoose from "mongoose";
import { linkedinUserDataSchema } from "@/db/modules/user.linkedinData";
import { themesSchema } from "@/db/modules/user.themes";
const userModule = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  userFullName: {
    type: String,
    required: true,
  },
  userPicture: {
    type: String,
    required: true,
  },
  likedinUrl: {
    type: String,
    default: null,
  },
  linkedinBusinessUrl: {
    type: String,
    default: null,
  },
  linkedinUserData: {
    type: linkedinUserDataSchema,
    default: null,
  },
  themesDashboard: {
    type: themesSchema,
    default: null,
  },
});

const User = mongoose.model("User", userModule);

module.exports = User;
