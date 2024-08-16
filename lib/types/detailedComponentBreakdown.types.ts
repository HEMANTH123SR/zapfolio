export interface Company {
  companyName: string;
  companyUrl: string | null;
  companyLogo: string | null;
  companyIndustry: string | null;
  title: string;
  location: string | null;
  description: string | null;
  employmentType: string | null;
}

export interface InputFieldProps {
  label: string;
  id: string;
  type: string;
  placeholder?: string;
  accept?: string;
}

export interface Education {
  fieldOfStudy: string | null;
  degree: string | null;
  grade: string | null;
  schoolName: string;
  description: string | null;
  url: string | null;
}

export interface Project {
  title: string;
  description: string | null;
  techStack: string[];
  projectLink: string | null;
  media: string | null;
}

export interface Certification {
  name: string;
  companyName: string;
  companyLogo: string | null;
}

export interface Hackathon {
  name: string;
  location: string | null;
  projectTitle: string | null;
  description: string | null;
  teamSize: number | null;
  role: string | null;
  awards: string | null;
  technologiesUsed: string[] | [];
  linkToProject: string | null;
  organizers: string | null;
}

export interface Articles {
  articleName: string;
  articleDescription: string | null;
  date: Date | null;
}


export interface Client {
  clientName: string;
  projectTitle?: string | null;
  description?: string | null;
  clientWebsite?: string | null;
  media?: string | null;
}

export interface CustomSection {
  title: string;
  content: string;
  picture?: string | null;
  order?: number | null;
  url?: string | null;
}
