import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const Themes = () => {
    return (
        <main className="flex w-full items-center justify-center">
            <div className="flex min-h-screen w-full max-w-[1400px] px-1.5 pb-12 pt-3 capitalize sm:px-8">
                <div className="flex w-full flex-col items-center rounded-xl border py-12">
                    <h1 className="text-4xl font-semibold md:text-5xl lg:text-6xl">
                        Zapfolio Themes
                    </h1>
                    <p className="my-2 hidden text-slate-600 sm:block sm:text-sm lg:text-base">
                        pick a theme that matches your vibe , adjust the data according to
                        you
                    </p>

                    <p className="my-2 text-xs sm:hidden">
                        pick a theme that matches your vibe
                    </p>

                    <Tabs
                        defaultValue="portfolio"
                        className="flex w-full flex-col items-center justify-center"
                    >
                        <TabsList className="my-8">
                            <TabsTrigger
                                value="portfolio"
                                className="text-sm md:px-4 md:text-sm lg:px-8 lg:text-base"
                            >
                                Portfolio Themes
                            </TabsTrigger>
                            <TabsTrigger
                                value="bussiness page"
                                className="text-sm md:px-4 md:text-sm lg:px-8 lg:text-base"
                            >
                                Bussiness Pages
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
                                        "https://utfs.io/f/7209e057-1427-48a7-bc45-404d86369281-1t7dll.png",
                                    preference: "",
                                    premimum: false,
                                },
                                {
                                    themeName: "vivid",
                                    image:
                                        "https://utfs.io/f/763a2b5b-b1f7-47fe-a0ac-87dfb64c7ae6-1ut9q6.png",
                                    preference: "",
                                    premimum: false,
                                },
                                {
                                    themeName: "zenith bento",
                                    image:
                                        "https://utfs.io/f/79733076-f17e-4d50-a6b5-549c961e368a-549kgj.png",
                                    preference: "",
                                    premimum: false,
                                },
                                {
                                    themeName: "windows 95",
                                    image:
                                        "https://utfs.io/f/455aa622-8c8f-4440-a0a9-441524e1aabb-utfb1i.png",
                                    preference: "",
                                    premimum: false,
                                },
                                {
                                    themeName: "block",
                                    image:
                                        "https://utfs.io/f/4e6761de-0651-43d8-84d8-4cd18501fe6c-1jv5hp.png",
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
                                        className=" h-auto border shadow-lg  md:w-11/12 lg:w-9/12 xl:w-full"
                                    />
                                    <span className="font-semibold text-black">
                                        {theme.themeName}
                                    </span>
                                </Link>
                            ))}
                        </TabsContent>
                        <TabsContent value="bussiness page" className="flex justify-center items-center">
                            <h1 className="bg-gradient-to-r from-[#FF560E] via-[#FFD439] to-[#FF7A00] sm:inline-block text-transparent bg-clip-text hidden  sm:text-6xl md:text-7xl lg:text-8xl font-semibold mt-6 pb-5">Comming Soon</h1>
                            <div className="flex flex-col  justify-center items-center">
                                <h1 className="bg-gradient-to-r from-[#FF560E] via-[#FFD439] to-[#FF7A00] inline-block text-transparent bg-clip-text sm:hidden  font-semibold mt-6 text-5xl pb-2">Comming</h1>
                                <h1 className="bg-gradient-to-r from-[#FF560E] via-[#FFD439] to-[#FF7A00] inline-block text-transparent bg-clip-text sm:hidden  font-semibold text-5xl pb-5">Soon</h1>
                            </div>

                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </main>
    );
};

export default Themes;


//background: linear-gradient(220.55deg, #FFD439 0%, #FF7A00 100%);