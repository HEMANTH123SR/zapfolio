import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const Themes = () => {
    return (
        <main className="flex w-full justify-center items-center">
            <div className="  flex min-h-screen w-full px-8 pb-12 pt-3 capitalize">
                <div className="flex w-full flex-col items-center rounded-xl border py-12">
                    <h1 className="text-5xl font-semibold">Zapfolio Themes</h1>
                    <p className="my-2 text-slate-600">
                        pick a theme that matches your vibe , adjust the data according to you
                    </p>
                    <Tabs
                        defaultValue="portfolio"
                        className="flex w-full flex-col items-center justify-center"
                    >
                        <TabsList className="my-8">
                            <TabsTrigger value="portfolio" className="px-8 text-base">
                                Portfolio Themes
                            </TabsTrigger>
                            <TabsTrigger value="bussiness page" className="px-8 text-base">
                                Bussiness Pages
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent
                            value="portfolio"
                            className="grid gap-x-7 gap-y-12 px-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-20"
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
                                    className="flex w-full flex-col items-center justify-center space-y-2  p-3"
                                >
                                    <img
                                        src={`${theme.image}`}
                                        className="h-auto w-full border shadow-lg"
                                    />
                                    <span className="font-semibold text-black">
                                        {theme.themeName}
                                    </span>
                                </Link>
                            ))}
                        </TabsContent>
                        <TabsContent value="bussiness page">
                            Change your password here.
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </main>
    );
};

export default Themes;
