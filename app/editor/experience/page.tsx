"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MdDelete } from "@/lib/icons";
import {
  Company,
  InputFieldProps,
} from "@/lib/types/detailedComponentBreakdown.types";
const ExperienceEditor = () => {
  const [companiesState, setCompaniesState] = useState<Company[]>([
    {
      companyName: "Google",
      companyUrl: "https://www.google.com",
      companyLogo:
        "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png",
      companyIndustry: "Technology",
      title: "Software Engineer",
      location: "Bengaluru, India",
      description: "Develop innovative software solutions.",
      employmentType: "Full-time",
    },
    {
      companyName: "Microsoft",
      companyUrl: "https://www.microsoft.com",
      companyLogo:
        "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/78-microsoft-512.png",
      companyIndustry: "Technology",
      title: "Cloud Advocate",
      location: "Hyderabad, India",
      description: "Promote cloud computing solutions.",
      employmentType: "Full-time",
    },
    {
      companyName: "Amazon",
      companyUrl: "https://www.amazon.com",
      companyLogo:
        "https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-512.png",
      companyIndustry: "E-commerce",
      title: "Product Manager",
      location: "Bangalore, India",
      description: "Manage product lifecycle.",
      employmentType: "Full-time",
    },
    {
      companyName: "Netflix",
      companyUrl: "https://www.netflix.com",
      companyLogo:
        "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png",
      companyIndustry: "Entertainment",
      title: "Software Developer",
      location: "Mumbai, India",
      description: "Develop streaming applications.",
      employmentType: "Full-time",
    },
  ]);
  return (
    <Sheet>
      <div className="h-screen max-h-screen w-full overflow-y-auto overflow-x-hidden">
        <div className="m-8 flex w-full flex-col">
          <header className="mb-8">
            <h1 className="text-4xl font-extrabold">Edit Your Experience</h1>
            <p className="mt-2 text-sm text-gray-600">
              Showcase your professional journey and manage your profile
              effortlessly.
            </p>
            <div className="mt-4 h-1 w-32 rounded-xl bg-[#FF560E]"></div>
          </header>

          <div className="mt-6 flex flex-col space-y-9">
            <SheetTrigger asChild>
              <Button className="w-48 bg-[#FF560E] text-base hover:bg-orange-500">
                Add Experience
              </Button>
            </SheetTrigger>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {companiesState.map((company, index) => (
                <div className="flex">
                  <ExperiecnceCard key={index} experiecnceCardData={company} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <SheetContent
        side={"bottom"}
        className="h-[90vh] overflow-scroll overflow-x-hidden pb-12"
      >
        <SheetHeader>
          <SheetTitle className="w-full text-center">
            Add Your Experiecnce
          </SheetTitle>
          <div className="flex w-full flex-col items-center justify-center space-y-6">
            <InputField
              label="Company Name"
              id="companyName"
              type="text"
              placeholder="Enter your company name"
            />
            <InputField
              label="Company Logo"
              id="companyLogo"
              type="file"
              accept="image/*"
            />
            <InputField
              label="Job Title"
              id="title"
              type="text"
              placeholder="Enter your job title"
            />
            <InputField
              label="Company Industry"
              id="companyIndustry"
              type="text"
              placeholder="Enter your Company Industry"
            />
            <InputField
              label="Company Location"
              id="location"
              type="text"
              placeholder="Country / City"
            />
            <InputField
              label="Company Url"
              id="companyUrl"
              type="url"
              placeholder="Add your company website url"
            />
            <InputField
              label="Employment Type"
              id="employmentType"
              type="text"
              placeholder="Full-time, Part-time, etc."
            />
            <div className="flex w-8/12 flex-col space-y-1">
              <Label htmlFor="description" className="pl-1.5 text-base">
                Description
              </Label>
              <Textarea
                id="description"
                name="description"
                rows={3}
                placeholder="Provide a description"
                className="resize-none"
              />
            </div>
            <Button
              type="submit"
              className="w-8/12 bg-[#FF560E] hover:bg-[#f4733b]"
            >
              Submit
            </Button>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  type,
  placeholder,
  accept,
}) => (
  <div className="flex w-8/12 flex-col space-y-1">
    <Label htmlFor={id} className="pl-1.5 text-base">
      {label}
    </Label>
    <Input
      type={type}
      id={id}
      name={id}
      className="border p-2"
      placeholder={placeholder}
      accept={accept}
    />
  </div>
);

const ExperiecnceCard = ({
  experiecnceCardData,
}: {
  experiecnceCardData: Company;
}) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border p-3">
      <div className="flex items-center space-x-4">
        <img
          className="h-14 w-14 rounded-xl border"
          src={experiecnceCardData.companyLogo}
        />
        <div className="flex flex-col">
          <h2 className="text-sm font-semibold">
            {experiecnceCardData.title} at {experiecnceCardData.companyName}
          </h2>
          <h3 className="text-sm">Location : {experiecnceCardData.location}</h3>
        </div>
        <MdDelete className="h-7 w-7 cursor-pointer text-slate-800" />
      </div>
    </div>
  );
};

export default ExperienceEditor;
