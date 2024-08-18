"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { InputField } from "@/components/component/inputField";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface ProfessionalInfoState {
    skills: string[];
    isOpenToWork: boolean;
    isHiring: boolean;
    availability: string;
    website: {
        name: string;
        link: string;
    };
    cvUrl: string;
}

export const ProfessionalInfo = () => {
    const [professionalInfo, setProfessionalInfo] = useState<ProfessionalInfoState>({
        skills: [],
        isOpenToWork: false,
        isHiring: false,
        availability: "",
        website: {
            name: "",
            link: "",
        },
        cvUrl: "",
    });

    const [currentSkill, setCurrentSkill] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setProfessionalInfo(prev => ({ ...prev, [name]: value }));
    };

    const handleWebsiteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProfessionalInfo(prev => ({
            ...prev,
            website: { ...prev.website, [name]: value }
        }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setProfessionalInfo(prev => ({ ...prev, [name]: checked }));
    };

    const handleAddSkill = () => {
        if (currentSkill.trim()) {
            setProfessionalInfo(prev => ({
                ...prev,
                skills: [...prev.skills, currentSkill.trim()]
            }));
            setCurrentSkill("");
        }
    };

    const handleAvailabilityChange = (value: string) => {
        setProfessionalInfo(prev => ({ ...prev, availability: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(professionalInfo);
        // Here you would typically send the professional info data to your backend
    };

    return (
        <div className="h-full w-full overflow-y-auto overflow-x-hidden">
            <div className="m-8 flex w-full flex-col">
                <div className="flex w-full flex-col justify-start space-y-1">
                    <h1 className="text-4xl font-extrabold">Edit Your Professional Info</h1>
                    <p className="text-sm text-[#6B7280]">
                        Showcase Your Professional Skills and Availability
                    </p>
                    <div className="h-1 w-10/12 rounded-xl bg-[#FF560E]"></div>
                </div>

                <form onSubmit={handleSubmit} className="mt-6 flex flex-col space-y-9">
                    {/* Skills Section */}
                    <div className="flex w-8/12 flex-col space-y-1">
                        <Label htmlFor="skills" className="pl-1.5 text-base">
                            Skills
                        </Label>
                        <div className="flex space-x-2">
                            <Input
                                type="text"
                                id="skills"
                                value={currentSkill}
                                onChange={(e) => setCurrentSkill(e.target.value)}
                                className="border p-2"
                                placeholder="Add a skill"
                            />
                            <Button
                                type="button"
                                onClick={handleAddSkill}
                                className="bg-slate-50 border text-black hover:bg-slate-100"
                            >
                                Add
                            </Button>
                        </div>
                        <div className="mt-2 flex flex-wrap gap-2">
                            {professionalInfo.skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="rounded mt-1.5 bg-slate-200 px-2 py-1 text-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Open to Work Checkbox */}
                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            id="isOpenToWork"
                            name="isOpenToWork"
                            checked={professionalInfo.isOpenToWork}
                            onChange={handleCheckboxChange}
                            className="h-4 w-4"
                        />
                        <Label htmlFor="isOpenToWork">Open to Work</Label>
                    </div>

                    {/* Hiring Checkbox */}
                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            id="isHiring"
                            name="isHiring"
                            checked={professionalInfo.isHiring}
                            onChange={handleCheckboxChange}
                            className="h-4 w-4"
                        />
                        <Label htmlFor="isHiring">Hiring</Label>
                    </div>

                    {/* Availability Dropdown */}
                    <div className="flex w-8/12 flex-col space-y-1">
                        <Label htmlFor="availability" className="pl-1.5 text-base">
                            Availability
                        </Label>
                        <Select
                            onValueChange={handleAvailabilityChange}
                            value={professionalInfo.availability}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select availability" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Full-time">Full-time</SelectItem>
                                <SelectItem value="Part-time">Part-time</SelectItem>
                                <SelectItem value="Freelance">Freelance</SelectItem>
                                <SelectItem value="Contract">Contract</SelectItem>
                                <SelectItem value="Internship">Internship</SelectItem>
                                <SelectItem value="Not Available">Not Available</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Website Section */}
                    <div className="flex w-8/12 flex-col space-y-1">
                        <Label htmlFor="websiteName" className="pl-1.5 text-base">
                            Website
                        </Label>
                        <Input
                            type="text"
                            id="websiteName"
                            name="name"
                            value={professionalInfo.website.name}
                            onChange={handleWebsiteChange}
                            placeholder="Website Name"
                            className="mb-2"
                        />
                        <Input
                            type="url"
                            id="websiteLink"
                            name="link"
                            value={professionalInfo.website.link}
                            onChange={handleWebsiteChange}
                            placeholder="Website URL"
                        />
                    </div>

                    {/* CV URL */}
                    <InputField
                        type="url"
                        label="CV URL"
                        placeholder="Link to your CV"
                        id="cvUrl"
                        name="cvUrl"
                        value={professionalInfo.cvUrl}
                        onChange={handleInputChange}
                    />

                    <div className="mt-4 w-8/12">
                        <Button type="submit" className="w-full bg-[#FF560E] text-white hover:bg-orange-500">
                            SAVE CHANGES
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

