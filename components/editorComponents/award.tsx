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
import { InputField } from "@/components/component/inputField"

interface Award {
    title: string;
    description: string | null;
    awardingOrganization: string | null;
    dateReceived: string | null;
    url: string | null;
}

export const AwardEditor = () => {
    const [award, setAward] = useState<Award>({
        title: "",
        description: null,
        awardingOrganization: null,
        dateReceived: null,
        url: null,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setAward(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(award);
        // Here you would typically send the award data to your backend or perform other actions
    };

    return (
        <Sheet>
            <div className="h-full  w-full overflow-y-auto overflow-x-hidden">
                <div className="m-8 ml-16 flex w-full flex-col">
                    <header className="mb-8">
                        <h1 className="text-4xl font-extrabold">Edit Your Awards</h1>
                        <p className="mt-2 text-sm text-gray-600">
                            Showcase your achievements and manage your awards effortlessly.
                        </p>
                        <div className="mt-4 h-1 w-32 rounded-xl bg-[#FF560E]"></div>
                    </header>

                    <div className="mt-6 flex flex-col space-y-9">
                        <SheetTrigger asChild>
                            <Button className="w-48 bg-[#FF560E] text-base hover:bg-orange-500">
                                Add Award
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
                        Add Your Award Details
                    </SheetTitle>
                    <form onSubmit={handleSubmit} className="flex w-full flex-col items-center justify-center space-y-6">
                        <InputField
                            label="Award Title"
                            id="title"
                            name="title"
                            type="text"
                            placeholder="Enter the award title"
                            value={award.title}
                            onChange={handleInputChange}
                            required
                        />
                        <div className="flex w-8/12 flex-col space-y-1">
                            <Label htmlFor="description" className="pl-1.5 text-base">
                                Description
                            </Label>
                            <Textarea
                                id="description"
                                name="description"
                                rows={3}
                                placeholder="Provide a description of the award"
                                className="resize-none"
                                value={award.description || ""}
                                onChange={handleInputChange}
                            />
                        </div>
                        <InputField
                            label="Awarding Organization"
                            id="awardingOrganization"
                            name="awardingOrganization"
                            type="text"
                            placeholder="Enter the name of the awarding organization"
                            value={award.awardingOrganization || ""}
                            onChange={handleInputChange}
                        />
                        <InputField
                            label="Date Received"
                            id="dateReceived"
                            name="dateReceived"
                            type="date"
                            value={award.dateReceived || ""}
                            onChange={handleInputChange}
                        />
                        <InputField
                            label="URL"
                            id="url"
                            name="url"
                            type="url"
                            placeholder="Enter a related URL (if any)"
                            value={award.url || ""}
                            onChange={handleInputChange}
                        />
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

