import mongoose from "mongoose";
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
    default: null,
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
    default: null,
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
      default: "no company name",
    },
    universalName: {
      type: String,
      default: "no universal name",
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
  techStack: {
    type: [String],
    default: null,
  },
  projectLink: {
    type: String,
    default: null,
  },
  media: {
    type: String,
    default: null,
  },
});

// Schema for hackathon
const HackathonSchema = new Schema({
  name: {
    type: String,
    required: true, // Name of the hackathon
  },
  date: {
    type: Date,
    default: null, // Date when the hackathon took place
  },
  location: {
    type: String,
    default: null, // Location where the hackathon was held
  },
  projectTitle: {
    type: String,
    default: null, // Title of the project developed during the hackathon
  },
  description: {
    type: String,
    default: null, // Description of the project and work done
  },
  teamSize: {
    type: Number,
    default: null, // Number of team members
  },
  role: {
    type: String,
    default: null, // User's role in the team (e.g., Developer, Designer, Team Lead)
  },
  awards: {
    type: String,
    default: null, // Awards or recognitions received during the hackathon
  },
  technologiesUsed: {
    type: [String],
    default: null, // List of technologies used in the project
  },
  linkToProject: {
    type: String,
    default: null, // URL to the project demo, code repository, or presentation
  },
  organizers: {
    type: String,
    default: null, // Name of the organization or group that organized the hackathon
  },
});
// Schema for Sociale Links
const SocialeLinksSchema = new Schema({
  platform: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

// Schema for Articles
const ArticleSchema = new Schema({
  articleName: {
    type: String,
    required: true,
  },
  articleDescription: {
    type: String,
    required: true,
  },
  data: {
    type: Date,
    default: null,
  },
});

// Schema for Awards
const AwardSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: null,
  },
  awardingOrganization: {
    type: String,
    default: null,
  },
  dateReceived: {
    type: Date,
    default: null,
  },
  url: {
    type: String,
    default: null,
  },
});

// Schema for Websites
const WebsitesSchema = new Schema({
  websiteName: {
    type: String,
    required: true,
  },
  websiteUrl: {
    type: String,
    required: true,
  },
});

// Client Schema
const ClientSchema = new Schema({
  clientName: {
    type: String,
    required: true,
  },
  projectTitle: {
    type: String,
    default: null,
  },
  description: {
    type: String,
    default: null,
  },
  start: {
    year: { type: Number, default: null },
    month: { type: Number, default: null },
    day: { type: Number, default: null },
  },
  end: {
    year: { type: Number, default: null },
    month: { type: Number, default: null },
    day: { type: Number, default: null },
  },
  clientWebsite: {
    type: String,
    default: null,
  },
  media: {
    type: String,
    default: null,
  },
});

// Schema for custom section
const CustomSectionSchema = new Schema({
  title: {
    type: String,
    required: true, // Title of the custom section
  },
  content: {
    type: String,
    required: true, // Content or description of the custom section
  },
  picture: {
    type: String,
    default: null, // Optional icon representing the custom section
  },
  order: {
    type: Number,
    default: null, // Optional field to specify the display order of the custom sections
  },
  url: {
    type: String,
    default: null,
  },
});

// Schema for user
export const UserDetailedDataSchema = new Schema(
  {
    urn: { type: String, required: true },
    linkedinUserName: { type: String, required: true },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    websites: {
      type: [WebsitesSchema],
      default: [],
    },
    cv: {
      type: String,
      default: null,
    },
    phoneNumber: {
      type: Number,
      default: null,
    },
    jobTitle: {
      type: String,
      default: null,
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
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS_lSNw7Ee7u6J7SWu5Ku6BP6H3kMcOI9TFw&s",
    },
    backgroundPicture: {
      type: String,
      default:
        "https://t4.ftcdn.net/jpg/02/10/45/95/360_F_210459536_XmLDEcKq2DpeNLVmheuWeu9NM9aGKnih.jpg",
    },
    about: {
      type: String,
      default: null,
    },
    headline: {
      type: String,
      default: null,
    },
    availability: {
      type: String,
      enum: [
        "Full-time",
        "Part-time",
        "Freelance",
        "Contract",
        "Internship",
        "Not Available",
      ],
      default: null,
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
    interests: {
      type: [String],
      default: [],
    },
    hobbies: {
      type: [String],
      default: [],
    },
    languages: {
      type: [LanguageSchema],
      default: [],
    },
    educations: {
      type: [EducationSchema],
      default: [],
    },
    position: {
      type: [PositionSchema],
      default: [],
    },
    skills: {
      type: [String],
      default: [],
    },
    courses: {
      type: [String],
      default: [],
    },
    certifications: {
      type: [CertificationSchema],
      default: [],
    },
    projects: {
      type: [ProjectSchema],
      default: [],
    },
    hackathons: {
      type: [HackathonSchema],
      default: [],
    },
    awards: {
      type: [AwardSchema],
      default: [],
    },
    clients: {
      type: [ClientSchema],
      default: [],
    },
    customSection: {
      type: [CustomSectionSchema],
      default: [],
    },
    socialeLinks: {
      type: [SocialeLinksSchema],
      default: [],
    },
    pictures: {
      type: [String],
      default: [],
    },
    videos: {
      type: [String],
      default: [],
    },
    articles: {
      type: [ArticleSchema],
      default: [],
    },
    note: {
      type: String,
      default: null,
    },
    guestBook: {
      type: {
        name: {
          type: String,
          required: true,
        },
        guestNote: {
          type: String,
          required: true,
        },
      },
      default: null,
    },
  },
  { timestamps: true },
);
