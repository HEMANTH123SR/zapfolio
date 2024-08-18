"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { InputField } from "@/components/component/inputField";

interface PersonalInfoState {
    profilePicture: File | null;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    headline: string;
    about: string;
    jobTitle: string;
    interests: string[];
    hobbies: string[];
    languages: string[];
}

export const PersonalInfo = () => {
    const [personalInfo, setPersonalInfo] = useState<PersonalInfoState>({
        profilePicture: null,
        firstName: "",
        lastName: "",
        phoneNumber: "",
        headline: "",
        about: "",
        jobTitle: "",
        interests: [],
        hobbies: [],
        languages: [],
    });

    const [currentInterest, setCurrentInterest] = useState("");
    const [currentHobby, setCurrentHobby] = useState("");
    const [currentLanguage, setCurrentLanguage] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setPersonalInfo(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setPersonalInfo(prev => ({ ...prev, profilePicture: e.target.files![0] }));
        }
    };

    const handleAddItem = (field: 'interests' | 'hobbies' | 'languages', value: string) => {
        if (value.trim()) {
            setPersonalInfo(prev => ({
                ...prev,
                [field]: [...prev[field], value.trim()]
            }));
            switch (field) {
                case 'interests':
                    setCurrentInterest("");
                    break;
                case 'hobbies':
                    setCurrentHobby("");
                    break;
                case 'languages':
                    setCurrentLanguage("");
                    break;
            }
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(personalInfo);
        // Here you would typically send the personal info data to your backend
    };

    return (
        <div className="h-full  w-full overflow-y-auto overflow-x-hidden">
            <div className="m-8 flex w-full flex-col">
                <div className="flex w-full flex-col justify-start space-y-1">
                    <h1 className="text-4xl font-extrabold">Edit Your Personal Info</h1>
                    <p className="text-sm text-[#6B7280]">
                        Showcase Your Professional Journey! Edit and Manage Your Profile Effortlessly.
                    </p>
                    <div className="h-1 w-10/12 rounded-xl bg-[#FF560E]"></div>
                </div>

                <form onSubmit={handleSubmit} className="mt-6 flex flex-col space-y-9">
                    <InputField

                        type="file"
                        label="Profile Picture"
                        placeholder="Add your profile picture"
                        accept="image/*"
                        id="profilePicture"
                        name="profilePicture"
                        onChange={handleFileChange}
                    />
                    <InputField
                        type="text"
                        label="First Name"
                        placeholder="Your first name"
                        id="firstName"
                        name="firstName"
                        value={personalInfo.firstName}
                        onChange={handleInputChange}
                    />
                    <InputField
                        type="text"
                        label="Last Name"
                        placeholder="Your last name"
                        id="lastName"
                        name="lastName"
                        value={personalInfo.lastName}
                        onChange={handleInputChange}
                    />
                    <InputField
                        type="tel"
                        label="Phone Number"
                        placeholder="Your phone number"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={personalInfo.phoneNumber}
                        onChange={handleInputChange}
                    />

                    {/* Headline Input */}
                    <div className="flex w-8/12 flex-col space-y-1">
                        <Label htmlFor="headline" className="pl-1.5 text-base">
                            Headline
                        </Label>
                        <Textarea
                            id="headline"
                            name="headline"
                            rows={2}
                            placeholder="Add your headline, keep it short"
                            value={personalInfo.headline}
                            onChange={handleInputChange}
                        />
                    </div>

                    {/* About Section */}
                    <div className="flex w-8/12 flex-col space-y-1">
                        <Label htmlFor="about" className="pl-1.5 text-base">
                            About
                        </Label>
                        <Textarea
                            id="about"
                            name="about"
                            rows={6}
                            placeholder="Write about yourself in a professional view"
                            value={personalInfo.about}
                            onChange={handleInputChange}
                        />
                    </div>

                    <InputField
                        type="text"
                        label="Job Title"
                        placeholder="Your job title"
                        id="jobTitle"
                        name="jobTitle"
                        value={personalInfo.jobTitle}
                        onChange={handleInputChange}
                    />

                    {/* Interests Section */}
                    <div className="flex w-8/12 flex-col space-y-1">
                        <Label htmlFor="interests" className="pl-1.5 text-base">
                            Interests
                        </Label>
                        <div className="flex space-x-2">
                            <Input
                                type="text"
                                id="interests"
                                value={currentInterest}
                                onChange={(e) => setCurrentInterest(e.target.value)}
                                className="border p-2"
                                placeholder="Add an interest"
                            />
                            <Button
                                type="button"
                                onClick={() => handleAddItem('interests', currentInterest)}
                                className="bg-slate-50 text-black hover:bg-slate-100"
                            >
                                Add
                            </Button>
                        </div>
                        <div className="mt-2 flex flex-wrap gap-2">
                            {personalInfo.interests.map((interest, index) => (
                                <span
                                    key={index}
                                    className="rounded bg-slate-200 px-2 py-1 text-sm"
                                >
                                    {interest}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Hobbies Section */}
                    <div className="flex w-8/12 flex-col space-y-1">
                        <Label htmlFor="hobbies" className="pl-1.5 text-base">
                            Hobbies
                        </Label>
                        <div className="flex space-x-2">
                            <Input
                                type="text"
                                id="hobbies"
                                value={currentHobby}
                                onChange={(e) => setCurrentHobby(e.target.value)}
                                className="border p-2"
                                placeholder="Add a hobby"
                            />
                            <Button
                                type="button"
                                onClick={() => handleAddItem('hobbies', currentHobby)}
                                className="bg-slate-50 text-black hover:bg-slate-100"
                            >
                                Add
                            </Button>
                        </div>
                        <div className="mt-2 flex flex-wrap gap-2">
                            {personalInfo.hobbies.map((hobby, index) => (
                                <span
                                    key={index}
                                    className="rounded bg-slate-200 px-2 py-1 text-sm"
                                >
                                    {hobby}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Languages Section */}
                    <div className="flex w-8/12 flex-col space-y-1">
                        <Label htmlFor="languages" className="pl-1.5 text-base">
                            Languages
                        </Label>
                        <div className="flex space-x-2">
                            <Input
                                type="text"
                                id="languages"
                                value={currentLanguage}
                                onChange={(e) => setCurrentLanguage(e.target.value)}
                                className="border p-2"
                                placeholder="Add a language"
                            />
                            <Button
                                type="button"
                                onClick={() => handleAddItem('languages', currentLanguage)}
                                className="bg-slate-50 text-black hover:bg-slate-100"
                            >
                                Add
                            </Button>
                        </div>
                        <div className="mt-2 flex flex-wrap gap-2">
                            {personalInfo.languages.map((language, index) => (
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
                        <Button type="submit" className="w-full bg-[#FF560E] text-white hover:bg-orange-500">
                            SAVE CHANGES
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

