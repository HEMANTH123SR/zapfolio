
import mongoose from "mongoose";

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
 
});
