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
const EducationEditor = () => {
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
          <div className="flex w-full flex-col items-center justify-center space-y-6">
            <InputField
              label="School Name"
              id="schoolName"
              type="text"
              placeholder="Enter your School name"
            />

            <InputField
              label="Degree"
              id="degree"
              type="text"
              placeholder="Enter your Degree"
            />
            <InputField
              label="Grade"
              id="grade"
              type="number"
              placeholder="Enter your degree"
            />
            <InputField
              label="Field Of Study"
              id="fieldOfStudy"
              type="text"
              placeholder="Enter your field of study"
            />

            <InputField
              label="School Url"
              id="schoolUrl"
              type="url"
              placeholder="Add your company website url"
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

export default EducationEditor;
