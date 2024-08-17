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

interface CustomSection {
  title: string;
  content: string;
  picture?: string | null;
  order?: number | null;
  url?: string | null;
}

const CustomSectionEditor = () => {
    const [customSection, setCustomSection] = useState<CustomSection>({
        title: "",
        content: "",
        picture: null,
        order: null,
        url: null,
    });

    const [pictureFile, setPictureFile] = useState<File | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setCustomSection(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            setPictureFile(file);
            setCustomSection(prev => ({ ...prev, picture: URL.createObjectURL(file) }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(customSection);
        // Here you would typically send the custom section data to your backend or perform other actions
    };

    return (
        <Sheet>
            <div className="h-screen max-h-screen w-full overflow-y-auto overflow-x-hidden">
                <div className="m-8 ml-16 flex w-full flex-col">
                    <header className="mb-8">
                        <h1 className="text-4xl font-extrabold">Edit Custom Sections</h1>
                        <p className="mt-2 text-sm text-gray-600">
                            Create and manage custom sections for your profile.
                        </p>
                        <div className="mt-4 h-1 w-32 rounded-xl bg-[#FF560E]"></div>
                    </header>

                    <div className="mt-6 flex flex-col space-y-9">
                        <SheetTrigger asChild>
                            <Button className="w-48 bg-[#FF560E] text-base hover:bg-orange-500">
                                Add Custom Section
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
                        Add Custom Section Details
                    </SheetTitle>
                    <form onSubmit={handleSubmit} className="flex w-full flex-col items-center justify-center space-y-6">
                        <InputField
                            label="Title"
                            id="title"
                            name="title"
                            type="text"
                            placeholder="Enter the section title"
                            value={customSection.title}
                            onChange={handleInputChange}
                            required
                        />
                        <div className="flex w-8/12 flex-col space-y-1">
                            <Label htmlFor="content" className="pl-1.5 text-base">
                                Content
                            </Label>
                            <Textarea
                                id="content"
                                name="content"
                                rows={5}
                                placeholder="Enter the section content"
                                className="resize-none"
                                value={customSection.content}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="flex w-8/12 flex-col space-y-1">
                            <Label htmlFor="picture" className="pl-1.5 text-base">
                                Picture
                            </Label>
                            <Input
                                type="file"
                                id="picture"
                                name="picture"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="border p-2"
                            />
                            {pictureFile && (
                                <p className="mt-2 text-sm text-gray-600">
                                    Selected file: {pictureFile.name}
                                </p>
                            )}
                        </div>
                        <InputField
                            label="Order"
                            id="order"
                            name="order"
                            type="number"
                            placeholder="Enter the section order (optional)"
                            value={customSection.order || ""}
                            onChange={handleInputChange}
                        />
                        <InputField
                            label="URL"
                            id="url"
                            name="url"
                            type="url"
                            placeholder="Enter a related URL (optional)"
                            value={customSection.url || ""}
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

export default CustomSectionEditor;