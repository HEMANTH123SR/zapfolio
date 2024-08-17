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
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MdDelete } from "@/lib/icons";
import { InputField } from "@/components/component/inputField";

interface Education {
  fieldOfStudy: string | null;
  degree: string | null;
  grade: string | null;
  schoolName: string;
  description: string | null;
  url: string | null;
}

const EducationEditor = () => {
  const [education, setEducation] = useState<Education>({
    fieldOfStudy: null,
    degree: null,
    grade: null,
    schoolName: "",
    description: null,
    url: null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEducation(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the education data to your backend or perform other actions
    console.log(education);
    // Reset the form or close the sheet after submission
  };

  return (
    <Sheet>
      <div className="h-screen max-h-screen w-full overflow-y-auto overflow-x-hidden">
        <div className="m-8 flex w-full flex-col">
          <header className="mb-8">
            <h1 className="text-4xl font-extrabold">Edit Your Education</h1>
            <p className="mt-2 text-sm text-gray-600">
              Showcase your professional journey and manage your profile
              effortlessly.
            </p>
            <div className="mt-4 h-1 w-32 rounded-xl bg-[#FF560E]"></div>
          </header>

          <div className="mt-6 flex flex-col space-y-9">
            <SheetTrigger asChild>
              <Button className="w-48 bg-[#FF560E] text-base hover:bg-orange-500">
                Add Education
              </Button>
            </SheetTrigger>
            {/* render cards here */}
          </div>
        </div>
      </div>
      <SheetContent
        side={"bottom"}
        className="h-[90vh] overflow-scroll overflow-x-hidden pb-12"
      >
        <SheetHeader>
          <SheetTitle className="w-full text-center">
            Add Your Education
          </SheetTitle>
          <form onSubmit={handleSubmit} className="flex w-full flex-col items-center justify-center space-y-6">
            <InputField
              label="School Name"
              id="schoolName"
              name="schoolName"
              type="text"
              placeholder="Enter your School name"
              value={education.schoolName}
              onChange={handleInputChange}
              required
            />

            <InputField
              label="Degree"
              id="degree"
              name="degree"
              type="text"
              placeholder="Enter your Degree"
              value={education.degree || ""}
              onChange={handleInputChange}
            />
            <InputField
              label="Grade"
              id="grade"
              name="grade"
              type="text"
              placeholder="Enter your grade"
              value={education.grade || ""}
              onChange={handleInputChange}
            />
            <InputField
              label="Field Of Study"
              id="fieldOfStudy"
              name="fieldOfStudy"
              type="text"
              placeholder="Enter your field of study"
              value={education.fieldOfStudy || ""}
              onChange={handleInputChange}
            />

            <InputField
              label="School Url"
              id="url"
              name="url"
              type="url"
              placeholder="Add your school website url"
              value={education.url || ""}
              onChange={handleInputChange}
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
                value={education.description || ""}
                onChange={handleInputChange}
              />
            </div>
            <Button
              type="submit"
              className="w-8/12 bg-[#FF560E] hover:bg-[#f4733b]"
            >
              Submit
            </Button>
          </form>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default EducationEditor;