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
import { InputField } from "@/components/component/inputField"

interface Certification {
  name: string;
  companyName: string;
  companyLogo: string | null;
  description?: string | null;
}

const CertEditor = () => {
  const [certification, setCertification] = useState<Certification>({
    name: "",
    companyName: "",
    companyLogo: null,
    description: null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCertification(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setCertification(prev => ({ ...prev, companyLogo: URL.createObjectURL(file) }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(certification);
    // Here you would typically send the certification data to your backend or perform other actions
  };

  return (
    <Sheet>
      <div className="h-screen max-h-screen w-full overflow-y-auto overflow-x-hidden">
        <div className="m-8 ml-16 flex w-full flex-col">
          <header className="mb-8">
            <h1 className="text-4xl font-extrabold">
              Edit Your Certifications
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Showcase your professional journey and manage your profile
              effortlessly.
            </p>
            <div className="mt-4 h-1 w-32 rounded-xl bg-[#FF560E]"></div>
          </header>

          <div className="mt-6 flex flex-col space-y-9">
            <SheetTrigger asChild>
              <Button className="w-48 bg-[#FF560E] text-base hover:bg-orange-500">
                Add Certifications
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
            Add Your Certifications Details
          </SheetTitle>
          <form onSubmit={handleSubmit} className="flex w-full flex-col items-center justify-center space-y-6">
            <InputField
              label="Cert Title"
              id="name"
              name="name"
              type="text"
              placeholder="Enter your cert title"
              value={certification.name}
              onChange={handleInputChange}
              required
            />
            <InputField
              label="Issued Company Name"
              id="companyName"
              name="companyName"
              type="text"
              placeholder="Enter issued company name"
              value={certification.companyName}
              onChange={handleInputChange}
              required
            />
            <InputField
              label="Issued Company Logo"
              id="companyLogo"
              name="companyLogo"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
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
                value={certification.description || ""}
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

export default CertEditor;