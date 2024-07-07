"use client"
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { useSearchParams } from 'next/navigation'


const Themes = () => {
    const searchParams = useSearchParams()
    let queryValue: string;
    switch (searchParams.get('q')) {
        case "resume":
            queryValue = "resume";
            break;
        case "bussiness-page":
            queryValue = "bussiness page";
            break;
        default:
            queryValue = "portfolio"
    }


    return (
        <main className="flex w-full items-center justify-center">
            <div className="flex min-h-screen w-full max-w-[1400px] px-1.5 pb-12 pt-3 capitalize sm:px-8">
                <div className="flex w-full flex-col items-center rounded-xl border py-12">
                    <h1 className="text-4xl font-semibold md:text-5xl lg:text-6xl">
                        Zapfolio Themes
                    </h1>
                    <p className="my-2 hidden text-slate-600 sm:block sm:text-sm lg:text-base lowercase">
                        pick a theme that matches your vibe , adjust the data according to
                        you
                    </p>

                    <p className="my-2 text-xs sm:hidden">
                        pick a theme that matches your vibe
                    </p>

                    <Tabs
                        defaultValue={queryValue}
                        className="flex w-full flex-col items-center justify-center"

                    >
                        <TabsList className="my-8" >
                            <TabsTrigger
                                value="portfolio"
                                className="text-sm md:px-4 md:text-sm lg:px-8 lg:text-base"

                            >
                                Portfolio Themes
                            </TabsTrigger>
                            <TabsTrigger
                                value="resume"
                                className="text-sm md:px-4 md:text-sm lg:px-8 lg:text-base"
                            >
                                Resume
                            </TabsTrigger>
                            <TabsTrigger
                                value="bussiness page"
                                className="text-sm md:px-4 md:text-sm lg:px-8 lg:text-base"
                            >
                                Bussiness Page
                            </TabsTrigger>

                        </TabsList>
                        <TabsContent
                            value="portfolio"
                            className="grid gap-x-7 gap-y-12 px-5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-y-20"
                        >
                            {[
                                {
                                    themeName: "slate ",
                                    image:
                                        "/themes/slate.png",
                                    preference: "",
                                    premimum: false,
                                },
                                {
                                    themeName: "vivid",
                                    image:
                                        "/themes/vivid.png",
                                    preference: "",
                                    premimum: false,
                                },
                                {
                                    themeName: "bentodark",
                                    image:
                                        "/themes/zenith-bento.png",
                                    preference: "",
                                    premimum: false,
                                },
                                {
                                    themeName: "windows-95",
                                    image:
                                        "/themes/windows-95.png",
                                    preference: "",
                                    premimum: false,
                                },
                                {
                                    themeName: "block",
                                    image:
                                        "/themes/block.png",
                                    preference: "",
                                    premimum: false,
                                },
                                {
                                    themeName: "twitter",
                                    image:
                                        "https://utfs.io/f/faae069c-50d8-4531-b6d3-e83679b4c1a4-f5khal.png",
                                    preference: "",
                                    premimum: false,
                                },
                            ].map((theme) => (
                                <Link
                                    href={`themes/${theme.themeName}`}
                                    key={theme.themeName}
                                    className="flex w-full flex-col items-center justify-center space-y-2 p-3"
                                >
                                    <img
                                        src={`${theme.image}`}
                                        className="h-auto border shadow-lg md:w-11/12 lg:w-9/12 xl:w-full"
                                    />
                                    <span className="font-semibold text-black">
                                        {theme.themeName}
                                    </span>
                                </Link>
                            ))}
                        </TabsContent>
                        <TabsContent
                            value="bussiness page"
                            className="flex items-center justify-center"
                        >
                            <h1 className="mt-6 hidden bg-gradient-to-r from-[#FF560E] via-[#FFD439] to-[#FF7A00] bg-clip-text pb-5 font-semibold text-transparent sm:inline-block sm:text-6xl md:text-7xl lg:text-8xl">
                                Comming Soon
                            </h1>
                            <div className="flex flex-col items-center justify-center">
                                <h1 className="mt-6 inline-block bg-gradient-to-r from-[#FF560E] via-[#FFD439] to-[#FF7A00] bg-clip-text pb-2 text-5xl font-semibold text-transparent sm:hidden">
                                    Comming
                                </h1>
                                <h1 className="inline-block bg-gradient-to-r from-[#FF560E] via-[#FFD439] to-[#FF7A00] bg-clip-text pb-5 text-5xl font-semibold text-transparent sm:hidden">
                                    Soon
                                </h1>
                            </div>
                        </TabsContent>
                        <TabsContent
                            value="resume"
                            className="flex items-center justify-center"
                        >
                            <h1 className="mt-6 hidden bg-gradient-to-r from-[#FF560E] via-[#FFD439] to-[#FF7A00] bg-clip-text pb-5 font-semibold text-transparent sm:inline-block sm:text-6xl md:text-7xl lg:text-8xl">
                                Comming Soon
                            </h1>
                            <div className="flex flex-col items-center justify-center">
                                <h1 className="mt-6 inline-block bg-gradient-to-r from-[#FF560E] via-[#FFD439] to-[#FF7A00] bg-clip-text pb-2 text-5xl font-semibold text-transparent sm:hidden">
                                    Comming
                                </h1>
                                <h1 className="inline-block bg-gradient-to-r from-[#FF560E] via-[#FFD439] to-[#FF7A00] bg-clip-text pb-5 text-5xl font-semibold text-transparent sm:hidden">
                                    Soon
                                </h1>
                            </div>
                        </TabsContent>

                    </Tabs>
                </div>
            </div>
        </main>
    );
}

export default Themes;