export interface Company {
  companyName: string;
  companyUrl: string;
  companyLogo: string;
  companyIndustry: string;
  title: string;
  location: string;
  description: string;
  employmentType: string;
}

export interface InputFieldProps {
  label: string;
  id: string;
  type: string;
  placeholder?: string;
  accept?: string;
}
