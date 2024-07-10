import mongoose from "mongoose";

const componentsToShowSchema = new mongoose.Schema({
  componentsToShow: {
    summary: {
      type: Boolean,
      default: true,
    },
    headline: {
      type: Boolean,
      default: true,
    },
    geo: {
      type: Boolean,
      default: true,
    },
    languages: {
      type: Boolean,
      default: true,
    },
    educations: {
      type: Boolean,
      default: true,
    },
    position: {
      type: Boolean,
      default: true,
    },
    skills: {
      type: Boolean,
      default: true,
    },
    courses: {
      type: Boolean,
      default: true,
    },
    certifications: {
      type: Boolean,
      default: true,
    },
    projects: {
      type: Boolean,
      default: true,
    },
    resume: {
      type: Boolean,
      default: true,
    },
  },
});

export const themesSchema = new mongoose.Schema({
  slate: {
    componetsToShow: {
      type: componentsToShowSchema,
    },
  },
  vivid: {
    componetsToShow: {
      type: componentsToShowSchema,
    },
  },
  bentodark: {
    componetsToShow: {
      type: componentsToShowSchema,
    },
  },
  twitter: {
    componetsToShow: {
      type: componentsToShowSchema,
    },
  },
  windows95: {
    componetsToShow: {
      type: componentsToShowSchema,
    },
  },
});
