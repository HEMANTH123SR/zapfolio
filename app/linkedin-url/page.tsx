"use client"
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { useState } from "react";
const LinkedinUrlAndJobTitle = () => {

    const [linkedinUrl, setLinkedinUrl] = useState<string | null>(null)

    return (
        <main className="mb-12 mt-2 flex w-full justify-center items-center h-[70vh] sm:h-auto sm:px-8 border-t-2 sm:border-none">
            <div className="flex w-full max-w-[1400px] justify-center   sm:rounded-xl sm:border  sm:bg-[url('/bggif.gif')] sm:bg-cover   sm:pb-14 sm:pt-14">
                <div className="flex w-full flex-col items-center rounded-lg bg-white pb-14 sm:w-11/12 sm:border sm:shadow-2xl md:w-[600px]">
                    <img
                        src="/zapfolio-logo/2.png"
                        className="hidden w-1/4 py-4 sm:block"
                    />
                    <div className="w-full border hidden sm:block"></div>
                    <h1
                        className={`mb-2 mt-14 text-4xl mx-4  font-semibold text-[#FF560E] sm:text-4xl`}
                    >
                        Enter Your Linkedin Profile Url
                    </h1>
                    <Link
                        className=" text-sm lowercase text-[#666C7E] underline"
                        href={"/find-linkedin-url"}
                    >
                        How do I find my LinkedIn URL?
                    </Link>
                    <input
                        className="w-10/12 sm:w-8/12 mt-8 mb-4 rounded-md border bg-[#F1F4F9] p-2 px-5 text-black"
                        placeholder="https://www.linkedin.com/in/yourprofile"
                    />

                    <button className="rounded-md bg-[#FF560E] w-10/12 sm:w-8/12  py-1.5 text-lg font-semibold text-white">
                        Continue
                    </button>
                </div>
            </div>
        </main>
    );
};



export default LinkedinUrlAndJobTitle;
