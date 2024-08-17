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

interface Company {
  companyName: string;
  companyUrl: string | null;
  companyLogo: string | null;
  companyIndustry: string | null;
  title: string;
  location: string | null;
  description: string | null;
  employmentType: string | null;
}

const ExperienceEditor = () => {
    const [company, setCompany] = useState<Company>({
        companyName: "",
        companyUrl: null,
        companyLogo: null,
        companyIndustry: null,
        title: "",
        location: null,
        description: null,
        employmentType: null,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setCompany(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setCompany(prev => ({ ...prev, companyLogo: URL.createObjectURL(file) }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the company data to your backend or perform other actions
        console.log(company);
        // Reset the form or close the sheet after submission
    };

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
                        Add Your Experience
                    </SheetTitle>
                    <form onSubmit={handleSubmit} className="flex w-full flex-col items-center justify-center space-y-6">
                        <InputField
                            label="Company Name"
                            id="companyName"
                            name="companyName"
                            type="text"
                            placeholder="Enter your company name"
                            value={company.companyName}
                            onChange={handleInputChange}
                            required
                        />
                        <InputField
                            label="Company Logo"
                            id="companyLogo"
                            name="companyLogo"
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                        <InputField
                            label="Job Title"
                            id="title"
                            name="title"
                            type="text"
                            placeholder="Enter your job title"
                            value={company.title}
                            onChange={handleInputChange}
                            required
                        />
                        <InputField
                            label="Company Industry"
                            id="companyIndustry"
                            name="companyIndustry"
                            type="text"
                            placeholder="Enter your Company Industry"
                            value={company.companyIndustry || ""}
                            onChange={handleInputChange}
                        />
                        <InputField
                            label="Company Location"
                            id="location"
                            name="location"
                            type="text"
                            placeholder="Country / City"
                            value={company.location || ""}
                            onChange={handleInputChange}
                        />
                        <InputField
                            label="Company Url"
                            id="companyUrl"
                            name="companyUrl"
                            type="url"
                            placeholder="Add your company website url"
                            value={company.companyUrl || ""}
                            onChange={handleInputChange}
                        />
                        <InputField
                            label="Employment Type"
                            id="employmentType"
                            name="employmentType"
                            type="text"
                            placeholder="Full-time, Part-time, etc."
                            value={company.employmentType || ""}
                            onChange={handleInputChange}
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
                                value={company.description || ""}
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

export default ExperienceEditor;