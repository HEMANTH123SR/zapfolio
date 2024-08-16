import Link from "next/link";
import React from "react";
import { Logo } from "@/components/component/logo";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const EditorLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="flex h-screen max-h-screen w-screen">
            <aside className="h-screen max-h-screen w-72 max-w-72 overflow-y-auto border-r bg-white shadow-lg transition-all duration-300">
                <div
                    className={`flex w-full items-center justify-between border-b bg-[#F5F6F8] p-4`}
                >
                    <Link
                        className="flex items-center justify-center space-x-2"
                        href={"/"}
                    >
                        <Logo />
                        <h1 className="cursor-pointer font-semibold">Zapfolio / Editor</h1>
                    </Link>
                </div>

                <ScrollArea className="h-[80vh]">
                    <div className="flex flex-col">
                        {[
                            "Personal Info",
                            "Experience",
                            "Education",
                            "Projects",
                            "Achievements",
                            "Clients",
                            "Professional Details",
                            "Media",
                            "Social ",
                            "Others",
                        ].map((data, index) => (
                            <Link
                                key={index}
                                href={`/editor/${data.split(" ").join("_").toLowerCase()}`}
                                className="group flex items-center space-x-5 border-b p-4 text-gray-700 hover:border-y hover:bg-gray-50"
                            >
                                <span className="ml-2 font-semibold">{data}</span>
                            </Link>
                        ))}
                    </div>
                </ScrollArea>
            </aside>
            {children}
        </main>
    );
};

export default EditorLayout;
