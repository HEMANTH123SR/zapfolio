import mongoose from "mongoose";
import { UserDetailedDataSchema } from "@/db/modules/user.detailedData";
import { SelectedSchema } from "@/db/modules/user.selectedTheme";
import { AnalyticsSchema } from "@/db/modules/user.analytics";
const userModule = new mongoose.Schema({
  userAuthDetails: {
    userAuthId: {
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
  analytics: {
    type: [AnalyticsSchema],
    default: null,
  },
});

export const User = mongoose.models.User || mongoose.model("User", userModule);
