"use client";
import Link from "next/link";
import { useState } from "react";

const LinkedinUrlAndJobTitle = () => {
    const [linkedUrl, setLinkedinUrl] = useState<string>();

    return (
        <div className="flex h-[85vh] w-full  items-center justify-center  capitalize px-14">
            <div className=" flex  w-3/5 flex-col items-start justify-center text-black">
                <h1 className="text-6xl font-semibold">add your linkedin url</h1>
                <p className="mt-1.5 text-sm text-slate-400">
                    Example of a linkedin url{" "}
                    <span className="lowercase">
                        https://www.linkedin.com/in/hemanth-gowda-31a7532a7/
                    </span>
                </p>
                <Link
                    href={"/help-linkedin-url"}
                    className="text-sm text-black underline mt-3"
                >
                    Learn how to get your linkedin url
                </Link>
                <input
                    type="text"
                    className="mt-10 w-10/12 border-b-[2px] pb-2 border-[#FF560E] text-4xl outline-none

                    "
                    placeholder="Linkedin Url"
                />
                <div className="flex space-x-6 justify-center items-center mt-10">
                    <button className="py-1 px-3 bg-[#FF560E] text-white   rounded-sm text-lg">
                        CONTINUE
                    </button>
                    <button className="py-1 px-3 text-[#FF560E]   rounded-sm text-lg">SKIP</button>
                </div>
            </div>
            <div className="w-2/5 flex justify-center items-center">
                {/* <img className="w-3/5 h-auto -rotate-12" src="./cursor-4.png" /> */}
                <img className="w-4/5 h-auto  " src="./linkedin.png" />
                {/* <img className="w-4/5 h-auto  " src="./orange-monster.png" /> */}

            </div>
        </div>
    );
};

export default LinkedinUrlAndJobTitle;
