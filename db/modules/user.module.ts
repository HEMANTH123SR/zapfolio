import mongoose from "mongoose";
import { linkedinUserDataSchema } from "@/db/modules/user.linkedinData";
import { themesSchema } from "@/db/modules/user.themes";
const userModule = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  likedinUrl: {
    type: String,
    required: true,
  },
  linkedinUserData: {
    type: linkedinUserDataSchema,
    required: true,
  },
  themesData: {
    type: themesSchema,
    default: () => ({
      slate: { componentsToShow: {} },
      vivid: { componentsToShow: {} },
      bentodark: { componentsToShow: {} },
      twitter: { componentsToShow: {} },
      windows95: { componentsToShow: {} },
    }),
  },
});

export const User = mongoose.models.User || mongoose.model("User", userModule);
