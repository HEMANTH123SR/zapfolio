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
import { Button } from "@/components/ui/button";

export const MediaEditor = () => {
    const [pictures, setPictures] = useState<string[]>([]);
    const [videos, setVideos] = useState<string[]>([]);
    const [currentPicture, setCurrentPicture] = useState('');
    const [currentVideo, setCurrentVideo] = useState('');

    const handleAddPicture = () => {
        if (currentPicture.trim()) {
            setPictures([...pictures, currentPicture.trim()]);
            setCurrentPicture('');
        }
    };

    const handleAddVideo = () => {
        if (currentVideo.trim()) {
            setVideos([...videos, currentVideo.trim()]);
            setCurrentVideo('');
        }
    };

    const handleRemovePicture = (index: number) => {
        setPictures(pictures.filter((_, i) => i !== index));
    };

    const handleRemoveVideo = (index: number) => {
        setVideos(videos.filter((_, i) => i !== index));
    };

    return (
        <Sheet>
            <div className="h-full  w-full overflow-y-auto overflow-x-hidden">
                <div className="m-8  flex w-full flex-col">
                    <header className="mb-8">
                        <h1 className="text-4xl font-extrabold">Edit Your Media</h1>
                        <p className="mt-2 text-sm text-gray-600">
                            Manage your pictures and videos effortlessly.
                        </p>
                        <div className="mt-4 h-1 w-32 rounded-xl bg-[#FF560E]"></div>
                    </header>

                    <div className="mt-6 flex flex-col space-y-9">
                        <SheetTrigger asChild>
                            <Button className="w-48 bg-[#FF560E] text-base hover:bg-orange-500">
                                Edit Media
                            </Button>
                        </SheetTrigger>
                    </div>
                </div>
            </div>
            <SheetContent
                side={"bottom"}
                className="h-[90vh] overflow-scroll overflow-x-hidden pb-12"
            >
                <SheetHeader>
                    <SheetTitle className="w-full text-center">
                        Edit Your Media
                    </SheetTitle>
                    <div className="flex w-full flex-col items-center justify-center space-y-6">
                        <div className="flex w-8/12 flex-col space-y-1">
                            <Label htmlFor="pictures" className="pl-1.5 text-base">
                                Pictures
                            </Label>
                            <div className="flex space-x-2">
                                <Input
                                    type="url"
                                    id="pictures"
                                    value={currentPicture}
                                    onChange={(e) => setCurrentPicture(e.target.value)}
                                    className="border p-2"
                                    placeholder="Enter picture URL"
                                />
                                <Button onClick={handleAddPicture} className="bg-slate-50 text-black border hover:bg-slate-100">
                                    Add
                                </Button>
                            </div>
                            <div className="mt-2 flex flex-col gap-2">
                                {pictures.map((pic, index) => (
                                    <div key={index} className="flex items-center justify-between rounded bg-slate-200 px-2 py-1">
                                        <span className="text-sm truncate mt-1.5">{pic}</span>
                                        <Button onClick={() => handleRemovePicture(index)} className="ml-2 h-6 w-6 p-0 text-red-500">
                                            X
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex w-8/12 flex-col space-y-1">
                            <Label htmlFor="videos" className="pl-1.5 text-base">
                                Videos
                            </Label>
                            <div className="flex space-x-2">
                                <Input
                                    type="url"
                                    id="videos"
                                    value={currentVideo}
                                    onChange={(e) => setCurrentVideo(e.target.value)}
                                    className="border p-2"
                                    placeholder="Enter video URL"
                                />
                                <Button onClick={handleAddVideo} className="bg-slate-50 text-black hover:bg-slate-100 border">
                                    Add
                                </Button>
                            </div>
                            <div className="mt-2 flex flex-col gap-2">
                                {videos.map((video, index) => (
                                    <div key={index} className="flex items-center justify-between rounded bg-slate-200 px-2 py-1">
                                        <span className="text-sm truncate mt-1.5">{video}</span>
                                        <Button onClick={() => handleRemoveVideo(index)} className="ml-2 h-6 w-6 p-0 text-red-500">
                                            X
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Button
                            type="submit"
                            className="w-8/12 bg-[#FF560E] hover:bg-[#f4733b]"
                        >
                            Save Media
                        </Button>
                    </div>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
};

export default MediaEditor;