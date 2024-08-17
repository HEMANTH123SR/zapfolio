"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { InputField } from "@/components/component/inputField";

const PersonalInfo = () => {
  const [interests, setInterests] = useState<string[]>([]);
  const [currentInterest, setCurrentInterests] = useState("");
  const [hobbies, setHobbies] = useState<string[]>([]);
  const [currentHobbies, setCurrentHobbies] = useState("");
  const [languages, setLanguages] = useState<string[]>([]);
  const [currentLanguages, setCurrentLanguages] = useState("");
  const handleAddInterest = () => {
    if (currentInterest.trim()) {
      setInterests([...interests, currentInterest.trim()]);
      setCurrentInterests("");
    }
  };

  const handleAddLanguages = () => {
    if (currentLanguages.trim()) {
      setLanguages([...languages, currentLanguages.trim()]);
      setCurrentLanguages("");
    }
  };

  const handleAddHobbies = () => {
    if (currentHobbies.trim()) {
      setHobbies([...hobbies, currentHobbies.trim()]);
      setCurrentHobbies("");
    }
  };

  return (
    <div className="h-screen max-h-screen w-full overflow-y-auto overflow-x-hidden">
      <div className="m-8 flex w-full flex-col">
        <div className="flex w-full flex-col justify-start space-y-1">
          <h1 className="text-4xl font-extrabold">Edit Your Personale Info</h1>
          <p className="text-sm text-[#6B7280]">
            Showcase Your Professional Journey! Edit and Manage Your Profile
            Effortlessly.
          </p>
          <div className="h-1 w-10/12 rounded-xl bg-[#FF560E]"></div>
        </div>

        <div className="mt-6 flex flex-col space-y-9">
          <InputField
            type="file"
            label="Profile Picture"
            placeholder="Add your profile picture"
            accept="image/*"
            id="profile"
          />
          <InputField
            type="text"
            label="First Name"
            placeholder="Your first name"
            id="firstName"
          />
          <InputField
            type="text"
            label="Last Name"
            placeholder="Your last name"
            id="lastName"
          />
          <InputField
            type="phone"
            label="Phone Number"
            placeholder="Your phone number"
            id="phone"
          />

          {/* Headline Input */}
          <div className="flex w-8/12 flex-col space-y-1">
            <Label htmlFor="headline" className="pl-1.5 text-base">
              Headline
            </Label>
            <Textarea
              id="headline"
              rows={2}
              placeholder="Add your headline , keep it short"
            />
          </div>

          {/* About Section */}
          <div className="flex w-8/12 flex-col space-y-1">
            <Label htmlFor="about" className="pl-1.5 text-base">
              About
            </Label>
            <Textarea
              id="about"
              rows={6}
              placeholder="Write about your self in a professional view"
            />
          </div>

          <InputField
            type="text"
            label="Job Title"
            placeholder="Your job title"
            id="jobTitle"
          />

          <div className="flex w-8/12 flex-col space-y-1">
            <Label htmlFor="interests" className="pl-1.5 text-base">
              Interests
            </Label>
            <div className="flex space-x-2">
              <Input
                type="text"
                id="interests"
                value={currentInterest}
                onChange={(e) => setCurrentInterests(e.target.value)}
                className="border p-2"
                placeholder="Add a technology"
              />
              <Button
                onClick={handleAddInterest}
                className="bg-slate-50 text-black hover:bg-slate-100"
              >
                Add
              </Button>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {interests.map((tech, index) => (
                <span
                  key={index}
                  className="rounded bg-slate-200 px-2 py-1 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex w-8/12 flex-col space-y-1">
            <Label htmlFor="hobbies" className="pl-1.5 text-base">
              Hobbies
            </Label>
            <div className="flex space-x-2">
              <Input
                type="text"
                id="hobbies"
                value={currentHobbies}
                onChange={(e) => setCurrentHobbies(e.target.value)}
                className="border p-2"
                placeholder="Add a hobby"
              />
              <Button
                onClick={handleAddHobbies}
                className="bg-slate-50 text-black hover:bg-slate-100"
              >
                Add
              </Button>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {hobbies.map((hobby, index) => (
                <span
                  key={index}
                  className="rounded bg-slate-200 px-2 py-1 text-sm"
                >
                  {hobby}
                </span>
              ))}
            </div>
          </div>

          <div className="flex w-8/12 flex-col space-y-1">
            <Label htmlFor="languages" className="pl-1.5 text-base">
              Languages
            </Label>
            <div className="flex space-x-2">
              <Input
                type="text"
                id="languages"
                value={currentLanguages}
                onChange={(e) => setCurrentLanguages(e.target.value)}
                className="border p-2"
                placeholder="Add a language"
              />
              <Button
                onClick={handleAddLanguages}
                className="bg-slate-50 text-black hover:bg-slate-100"
              >
                Add
              </Button>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {languages.map((language, index) => (
                <span
                  key={index}
                  className="rounded bg-slate-200 px-2 py-1 text-sm"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4 w-8/12">
            <Button className="w-full bg-[#FF560E] text-white hover:bg-orange-500">
              SAVE CHANGES
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
