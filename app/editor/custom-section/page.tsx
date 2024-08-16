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

const CustomSectionEditor = () => {
    const [pictureFile, setPictureFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setPictureFile(event.target.files[0]);
        }
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
                    <div className="flex w-full flex-col items-center justify-center space-y-6">
                        <InputField
                            label="Title"
                            id="title"
                            type="text"
                            placeholder="Enter the section title"
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
                            type="number"
                            placeholder="Enter the section order (optional)"
                        />
                        <InputField
                            label="URL"
                            id="url"
                            type="url"
                            placeholder="Enter a related URL (optional)"
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

;

export default CustomSectionEditor;