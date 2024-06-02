import { Badge } from "@/components/ui/badge";
import Link from "next/link";
export const ExampleSection = () => {
    return (
        <div className="flex flex-col justify-between items-center mx-8 bg-[#F7F9FB]   rounded-xl border py-14">
            <h2 className="text-5xl font-medium">Explore Possibilities</h2>
            <p className="text-sm mt-2 text-slate-600">
                Discover How Others Showcase Their Professional Journey With The Help Of
                Webpolio
            </p>
            <Link
                href={"/examples"}
                className=" text-white bg-[#FF560E] my-5 px-3 py-1.5 rounded-full hover:scale-105 text-sm"
            >
                View More Examples
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-y-20 mt-12">
                {[
                    {
                        userName: "hemanth",
                        theme: "minimal aesthetic",
                        imageUrl: "minimal-aesthetic-webpolio.vercel.app_.png",
                        link: "/",
                    },
                    {
                        userName: "bushra",
                        theme: "bento",
                        imageUrl: "bento-webpolio-i46g.vercel.app_10.png",
                        link: "/",
                    },
                    {
                        userName: "Shamili",
                        theme: "contemporary chi",
                        imageUrl: "contemporary-chic-webpolio.vercel.app_4.png",
                        link: "/",
                    },
                    // {
                    //     userName: "gowtham",
                    //     theme: "minimal aesthetic",
                    //     imageUrl: "minimal-aesthetic-webpolio.vercel.app_1.png",
                    //link:"/"
                    // },
                    {
                        userName: "donchia",
                        theme: "windows 95",
                        imageUrl: "www.donchia.tech_.png",
                        link: "/",
                    },
                    {
                        userName: "delba",
                        theme: "gray",
                        imageUrl: "delba.dev_.png",
                        link: "/",
                    },
                    {
                        userName: "hemanth",
                        theme: "bento",
                        imageUrl: "bento-webpolio-i46g.vercel.app_.png",
                        link: "/",
                    },
                ].map((portfolio) => (
                    <Link
                        href={""}
                        key={portfolio.imageUrl}
                        className="flex flex-col space-y-5 justify-center items-center "
                    >
                        <img src={portfolio.imageUrl} className="w-10/12 h-auto shadow-2xl border" />
                        <div className="flex w-10/12 flex-col  ">
                            <span className="text-black capitalize font-semibold text-sm">
                                {portfolio.userName}
                            </span>
                            <span className="text-[#808994] capitalize font-semibold text-sm">
                                theme : {portfolio.theme}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};


