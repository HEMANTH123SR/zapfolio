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
import { InputField } from "@/components/component/inputField";

interface ProjectState {
  title: string;
  projectImage: File | null;
  projectLink: string;
  techStack: string[];
  description: string;
}

export const ProjectEditor = () => {
  const [project, setProject] = useState<ProjectState>({
    title: "",
    projectImage: null,
    projectLink: "",
    techStack: [],
    description: "",
  });

  const [currentTech, setCurrentTech] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProject((prev) => ({ ...prev, projectImage: e.target.files![0] }));
    }
  };

  const handleAddTech = () => {
    if (currentTech.trim()) {
      setProject((prev) => ({
        ...prev,
        techStack: [...prev.techStack, currentTech.trim()],
      }));
      setCurrentTech("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(project);
    // Here you would typically send the project data to your backend
  };

  return (
    <Sheet>
      <div className="h-screen max-h-screen w-full overflow-y-auto overflow-x-hidden">
        <div className="m-8  flex w-full flex-col">
          <header className="mb-8">
            <h1 className="text-4xl font-extrabold">Edit Your Project</h1>
            <p className="mt-2 text-sm text-gray-600">
              Showcase your professional journey and manage your profile
              effortlessly.
            </p>
            <div className="mt-4 h-1 w-32 rounded-xl bg-[#FF560E]"></div>
          </header>

          <div className="mt-6 flex flex-col space-y-9">
            <SheetTrigger asChild>
              <Button className="w-48 bg-[#FF560E] text-base hover:bg-orange-500">
                Add Project
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
            Add Your Project Details
          </SheetTitle>
          <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col items-center justify-center space-y-6"
          >
            <InputField
              label="Project Title"
              id="title"
              name="title"
              type="text"
              placeholder="Enter your Project Title"
              value={project.title}
              onChange={handleInputChange}
            />
            <InputField
              label="Project Image"
              id="projectImage"
              name="projectImage"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
            <InputField
              label="Project Link"
              id="projectLink"
              name="projectLink"
              type="url"
              placeholder="Add your project link"
              value={project.projectLink}
              onChange={handleInputChange}
            />
            <div className="flex w-8/12 flex-col space-y-1">
              <Label htmlFor="techStack" className="pl-1.5 text-base">
                Tech Stack
              </Label>
              <div className="flex space-x-2">
                <Input
                  type="text"
                  id="techStack"
                  value={currentTech}
                  onChange={(e) => setCurrentTech(e.target.value)}
                  className="border p-2"
                  placeholder="Add a technology"
                />
                <Button
                  type="button"
                  onClick={handleAddTech}
                  className="border bg-slate-50 text-black hover:bg-slate-100"
                >
                  Add
                </Button>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="mt-1.5 rounded bg-slate-200 px-2 py-1 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
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
                value={project.description}
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
