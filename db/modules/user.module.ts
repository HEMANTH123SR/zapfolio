import mongoose from "mongoose";
import { UserDetailedDataSchema } from "@/db/modules/user.linkedinData";
import { SelectedSchema } from "@/db/modules/user.selectedTheme";
const userModule = new mongoose.Schema({
  userAuthDetails: {
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
    type: SelectedSchema,
    default: null,
  },
});

export const User = mongoose.models.User || mongoose.model("User", userModule);
