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
import { InputField } from "@/components/component/inputField"
const ExperienceEditor = () => {

    return (
        <Sheet>
            <div className="h-screen max-h-screen w-full overflow-y-auto overflow-x-hidden">
                <div className="m-8 ml-16 flex w-full flex-col">
                    <header className="mb-8">
                        <h1 className="text-4xl font-extrabold">Edit Your Experience</h1>
                        <p className="mt-2 text-sm text-gray-600">
                            Showcase your professional journey and manage your profile
                            effortlessly.
                        </p>
                        <div className="mt-4 h-1 w-32 rounded-xl bg-[#FF560E]"></div>
                    </header>

                    <div className="mt-6 flex flex-col space-y-9">
                        <SheetTrigger asChild>
                            <Button className="w-48 bg-[#FF560E] text-base hover:bg-orange-500">
                                Add Experience
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
                        Add Your Experiecnce
                    </SheetTitle>
                    <div className="flex w-full flex-col items-center justify-center space-y-6">
                        <InputField
                            label="Company Name"
                            id="companyName"
                            type="text"
                            placeholder="Enter your company name"
                        />
                        <InputField
                            label="Company Logo"
                            id="companyLogo"
                            type="file"
                            accept="image/*"
                        />
                        <InputField
                            label="Job Title"
                            id="title"
                            type="text"
                            placeholder="Enter your job title"
                        />
                        <InputField
                            label="Company Industry"
                            id="companyIndustry"
                            type="text"
                            placeholder="Enter your Company Industry"
                        />
                        <InputField
                            label="Company Location"
                            id="location"
                            type="text"
                            placeholder="Country / City"
                        />
                        <InputField
                            label="Company Url"
                            id="companyUrl"
                            type="url"
                            placeholder="Add your company website url"
                        />
                        <InputField
                            label="Employment Type"
                            id="employmentType"
                            type="text"
                            placeholder="Full-time, Part-time, etc."
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




export default ExperienceEditor;
