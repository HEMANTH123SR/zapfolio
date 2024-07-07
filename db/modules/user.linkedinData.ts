const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema for language proficiency
const LanguageSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  proficiency: {
    type: String,
    default: null,
  },
});

// Schema for education
const EducationSchema = new Schema({
  start: {
    year: {
      type: Number,
      default: null,
    },
    month: {
      type: Number,
      default: null,
    },
    day: {
      type: Number,
      default: null,
    },
  },
  end: {
    year: {
      type: Number,
      default: null,
    },
    month: {
      type: Number,
      default: null,
    },
    day: {
      type: Number,
      default: null,
    },
  },
  fieldOfStudy: {
    type: String,
    default: null,
  },
  degree: {
    type: String,
    default: null,
  },
  grade: {
    type: String,
    default: null,
  },
  schoolName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: null,
  },
  activities: {
    type: String,
    default: null,
  },
  url: {
    type: String,
    required: true,
  },
  schoolId: {
    type: String,
    default: null,
  },
});

// Schema for position
const PositionSchema = new Schema({
  companyName: {
    type: String,
    required: true,
  },
  companyUsername: {
    type: String,
    default: null,
  },
  companyURL: {
    type: String,
    required: true,
  },
  companyLogo: {
    type: String,
    default: null,
  },
  companyIndustry: {
    type: String,
    default: null,
  },
  companyStaffCountRange: {
    type: String,
    default: null,
  },
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    default: null,
  },
  description: {
    type: String,
    default: null,
  },
  employmentType: {
    type: String,
    default: null,
  },
  start: {
    year: {
      type: Number,
      default: null,
    },
    month: {
      type: Number,
      default: null,
    },
    day: {
      type: Number,
      default: null,
    },
  },
  end: {
    year: {
      type: Number,
      default: null,
    },
    month: {
      type: Number,
      default: null,
    },
    day: {
      type: Number,
      default: null,
    },
  },
});

// Schema for certifications
const CertificationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  start: {
    year: {
      type: Number,
      default: null,
    },
    month: {
      type: Number,
      default: null,
    },
    day: {
      type: Number,
      default: null,
    },
  },
  end: {
    year: {
      type: Number,
      default: null,
    },
    month: {
      type: Number,
      default: null,
    },
    day: {
      type: Number,
      default: null,
    },
  },
  company: {
    name: {
      type: String,
      required: true,
    },
    universalName: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      default: null,
    },
  },
  authority: {
    type: String,
    default: null,
  },
});

// Schema for projects
const ProjectSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: null,
  },
});

// Schema for user
export const linkedinUserDataSchema = new Schema(
  {
    urn: { type: String, unique: true, required: true },
    username: { type: String, unique: true, required: true },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    isOpenToWork: {
      type: Boolean,
      required: true,
    },
    isHiring: {
      type: Boolean,
      required: true,
    },
    profilePicture: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    headline: {
      type: String,
      required: true,
    },
    geo: {
      country: {
        type: String,
        default: null,
      },
      city: {
        type: String,
        default: null,
      },
      full: {
        type: String,
        default: null,
      },
    },
    languages: {
      type: [LanguageSchema],
      default: null,
    },
    educations: {
      type: [EducationSchema],
      default: null,
    },
    position: {
      type: [PositionSchema],
      default: null,
    },
    skills: {
      type: [String],
      default: null,
    },
    courses: {
      type: [String],
      default: null,
    },
    certifications: {
      type: [CertificationSchema],
      default: null,
    },
    projects: {
      type: [ProjectSchema],
      default: null,
    },
  },
  { timestamps: true },
);
