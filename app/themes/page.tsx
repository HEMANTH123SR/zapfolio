import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Themes = () => {
    return (
        <main className="flex min-h-screen w-full px-8 pt-5 capitalize">
            <div className="flex w-full flex-col items-center rounded-xl border  py-7">
                <h1 className="text-5xl">Zapfolio Themes</h1>
                <p className="my-2 text-slate-600">
                    pick a theme that matches your vibe , adjust the data according to you
                </p>
                <Tabs defaultValue="portfolio" className="w-full justify-center flex flex-col items-center">
                    <TabsList className="my-8">
                        <TabsTrigger value="portfolio" className="text-base px-8 ">Portfolio Themes</TabsTrigger>
                        <TabsTrigger value="bussiness page" className="text-base px-8">Bussiness Pages</TabsTrigger>
                    </TabsList>
                    <TabsContent value="portfolio">
                        Make changes to your account here.
                    </TabsContent>
                    <TabsContent value="bussiness page">Change your password here.</TabsContent>
                </Tabs>
            </div>
        </main>
    );
};

export default Themes;
