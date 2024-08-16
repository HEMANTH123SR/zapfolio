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
import { InputFieldProps } from "@/lib/types/detailedComponentBreakdown.types";
const CertEditor = () => {
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
          <div className="flex w-full flex-col items-center justify-center space-y-6">
            <InputField
              label="Cert Title"
              id="title"
              type="text"
              placeholder="Enter your cert title"
            />
            <InputField
              label="Issued Company Name"
              id="companyName"
              type="text"
              placeholder="Enter issued company name"
            />
            <InputField
              label="Issued Company  Logo"
              id="logo"
              type="file"
              accept="image/*"
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

export default CertEditor;
