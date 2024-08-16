"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const PersonalInfo = () => {
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
                    {/* Profile Picture */}
                    <div className="flex w-8/12 flex-col space-y-1">
                        <Label htmlFor="profilePicture" className="pl-1.5 text-base">
                            Profile Picture
                        </Label>
                        <Input
                            type="file"
                            id="profilePicture"
                            accept="image/*"
                            className="border p-2"
                        />
                    </div>
                    <div className="flex w-8/12 flex-col space-y-1">
                        <Label htmlFor="firstName" className="pl-1.5 text-base">
                            First Name
                        </Label>
                        <Input type="text" id="firstName" placeholder="Your first name" />
                    </div>
                    <div className="flex w-8/12 flex-col space-y-1">
                        <Label htmlFor="lastName" className="pl-1.5 text-base">
                            Last Name
                        </Label>
                        <Input type="text" id="lastName" placeholder="Your last name" />
                    </div>
                    {/* Phone Input */}
                    <div className="flex w-8/12 flex-col space-y-1">
                        <Label htmlFor="phone" className="pl-1.5 text-base">
                            Phone Number
                        </Label>
                        <Input type="tel" id="phone" placeholder="Your phone number" />
                    </div>
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

                    {/* job title */}
                    <div className="flex w-8/12 flex-col space-y-1">
                        <Label htmlFor="jobtitle" className="pl-1.5 text-base">
                            Job Title
                        </Label>
                        <Input type="text" id="jobtitle" placeholder="Your Job Title" />
                    </div>

                    {/* interests  */}
                    <div className="flex w-8/12 flex-col space-y-1">
                        <Label htmlFor="interests" className="pl-1.5 text-base">
                            Interests
                        </Label>
                        <Input
                            type="text"
                            id="interests"
                            placeholder="Enter your interests"
                        />
                        <div className="mt-2">
                            <Button className="border bg-slate-50 px-6 py-0.5 text-black hover:bg-slate-100">
                                Add Interests
                            </Button>
                        </div>
                    </div>

                    {/* hobbies  */}
                    <div className="flex w-8/12 flex-col space-y-1">
                        <Label htmlFor="hobbies" className="pl-1.5 text-base">
                            Hobbies
                        </Label>
                        <Input type="text" id="hobbies" placeholder="Enter your hobbies" />
                        <div className="mt-2">
                            <Button className="border bg-slate-50 px-6 py-0.5 text-black hover:bg-slate-100">
                                Add Hobbies
                            </Button>
                        </div>
                    </div>
                    <div className="w-8/12 mt-4">
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
