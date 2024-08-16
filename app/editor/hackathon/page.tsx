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

const HackathonEditor = () => {
    const [technologies, setTechnologies] = useState<string[]>([]);
    const [currentTech, setCurrentTech] = useState('');

    const handleAddTech = () => {
        if (currentTech.trim()) {
            setTechnologies([...technologies, currentTech.trim()]);
            setCurrentTech('');
        }
    }

    return (
        <Sheet>
            <div className="h-screen max-h-screen w-full overflow-y-auto overflow-x-hidden">
                <div className="m-8 ml-16 flex w-full flex-col">
                    <header className="mb-8">
                        <h1 className="text-4xl font-extrabold">Edit Your Hackathon</h1>
                        <p className="mt-2 text-sm text-gray-600">
                            Showcase your hackathon experiences and manage your profile
                            effortlessly.
                        </p>
                        <div className="mt-4 h-1 w-32 rounded-xl bg-[#FF560E]"></div>
                    </header>

                    <div className="mt-6 flex flex-col space-y-9">
                        <SheetTrigger asChild>
                            <Button className="w-48 bg-[#FF560E] text-base hover:bg-orange-500">
                                Add Hackathon
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
                        Add Your Hackathon Details
                    </SheetTitle>
                    <div className="flex w-full flex-col items-center justify-center space-y-6">
                        <InputField
                            label="Hackathon Name"
                            id="name"
                            type="text"
                            placeholder="Enter the hackathon name"
                        />
                        <InputField
                            label="Location"
                            id="location"
                            type="text"
                            placeholder="Enter the hackathon location"
                        />
                        <InputField
                            label="Project Title"
                            id="projectTitle"
                            type="text"
                            placeholder="Enter your project title"
                        />
                        <div className="flex w-8/12 flex-col space-y-1">
                            <Label htmlFor="description" className="pl-1.5 text-base">
                                Description
                            </Label>
                            <Textarea
                                id="description"
                                name="description"
                                rows={3}
                                placeholder="Provide a description of your hackathon project"
                                className="resize-none"
                            />
                        </div>
                        <InputField
                            label="Team Size"
                            id="teamSize"
                            type="number"
                            placeholder="Enter your team size"
                        />
                        <InputField
                            label="Your Role"
                            id="role"
                            type="text"
                            placeholder="What was your role in the team?"
                        />
                        <InputField
                            label="Awards"
                            id="awards"
                            type="text"
                            placeholder="Any awards won? (if applicable)"
                        />
                        <div className="flex w-8/12 flex-col space-y-1">
                            <Label htmlFor="technologiesUsed" className="pl-1.5 text-base">
                                Technologies Used
                            </Label>
                            <div className="flex space-x-2">
                                <Input
                                    type="text"
                                    id="technologiesUsed"
                                    value={currentTech}
                                    onChange={(e) => setCurrentTech(e.target.value)}
                                    className="border p-2"
                                    placeholder="Add a technology"
                                />
                                <Button onClick={handleAddTech} className="bg-slate-50 text-black hover:bg-slate-100">
                                    Add
                                </Button>
                            </div>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {technologies.map((tech, index) => (
                                    <span key={index} className="rounded bg-slate-200 px-2 py-1 text-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <InputField
                            label="Link to Project"
                            id="linkToProject"
                            type="url"
                            placeholder="Add your project link"
                        />
                        <InputField
                            label="Organizers"
                            id="organizers"
                            type="text"
                            placeholder="Who organized the hackathon?"
                        />
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


export default HackathonEditor;