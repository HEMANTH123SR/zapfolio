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
import { InputField } from "@/components/component/inputField";

interface Client {
    clientName: string;
    projectTitle?: string | null;
    description?: string | null;
    clientWebsite?: string | null;
    media?: string | null;
}

export const ClientEditor = () => {
    const [client, setClient] = useState<Client>({
        clientName: "",
        projectTitle: null,
        description: null,
        clientWebsite: null,
        media: null,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setClient(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(client);
        // Here you would typically send the client data to your backend or perform other actions
    };

    return (
        <Sheet>
            <div className="h-full  w-full overflow-y-auto overflow-x-hidden">
                <div className="m-8 ml-16 flex w-full flex-col">
                    <header className="mb-8">
                        <h1 className="text-4xl font-extrabold">Edit Your Clients</h1>
                        <p className="mt-2 text-sm text-gray-600">
                            Manage your client information and projects effortlessly.
                        </p>
                        <div className="mt-4 h-1 w-32 rounded-xl bg-[#FF560E]"></div>
                    </header>

                    <div className="mt-6 flex flex-col space-y-9">
                        <SheetTrigger asChild>
                            <Button className="w-48 bg-[#FF560E] text-base hover:bg-orange-500">
                                Add Client
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
                        Add Your Client Details
                    </SheetTitle>
                    <form onSubmit={handleSubmit} className="flex w-full flex-col items-center justify-center space-y-6">
                        <InputField
                            label="Client Name"
                            id="clientName"
                            name="clientName"
                            type="text"
                            placeholder="Enter the client name"
                            value={client.clientName}
                            onChange={handleInputChange}
                            required
                        />
                        <InputField
                            label="Project Title"
                            id="projectTitle"
                            name="projectTitle"
                            type="text"
                            placeholder="Enter the project title"
                            value={client.projectTitle || ""}
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
                                placeholder="Provide a description of the project"
                                className="resize-none"
                                value={client.description || ""}
                                onChange={handleInputChange}
                            />
                        </div>
                        <InputField
                            label="Client Website"
                            id="clientWebsite"
                            name="clientWebsite"
                            type="url"
                            placeholder="Enter the client's website URL"
                            value={client.clientWebsite || ""}
                            onChange={handleInputChange}
                        />
                        <InputField
                            label="Media"
                            id="media"
                            name="media"
                            type="url"
                            placeholder="Enter media URL (if any)"
                            value={client.media || ""}
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

