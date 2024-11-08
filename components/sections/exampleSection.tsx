import Link from "next/link";
export const ExampleSection = () => {
    return (
        <div className="flex w-full sm:w-[95%] max-w-[1400px] flex-col items-center justify-between sm:rounded-xl sm:border bg-[#F7F9FB] py-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium">Explore Possibilities</h2>
            <p className="mt-2 text-sm text-slate-600 hidden lg:block">
                Discover How Others Showcase Their Professional Journey With The Help Of
                Webpolio
            </p>
            <p className="mt-2 text-sm text-slate-600  lg:hidden">See how others showcase their professional journey</p>
            <Link
                href={"/examples"}
                className="my-5 rounded-full bg-[#FF560E] px-3 py-1.5 text-sm text-white hover:scale-105"
            >
                View More Examples
            </Link>

            <div className="mt-12  hidden sm:grid sm:grid-cols-2 gap-y-12 lg:gap-y-20 lg:grid-cols-3 ">
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
                        className="flex flex-col items-center justify-center space-y-5"
                    >
                        <img
                            src={portfolio.imageUrl}
                            className="h-auto w-10/12 border shadow-2xl"
                        />
                        <div className="flex w-10/12 flex-col">
                            <span className="text-sm font-semibold capitalize text-black">
                                {portfolio.userName}
                            </span>
                            <span className="text-sm font-semibold capitalize text-[#808994]">
                                theme : {portfolio.theme}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-12 grid gap-y-8 sm:hidden ">
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
                    }
                ].map((portfolio) => (
                    <Link
                        href={""}
                        key={portfolio.imageUrl}
                        className="flex flex-col items-center justify-center space-y-5"
                    >
                        <img
                            src={portfolio.imageUrl}
                            className="h-auto w-10/12 border shadow-2xl"
                        />
                        <div className="flex w-10/12 flex-col">
                            <span className="text-sm font-semibold capitalize text-black">
                                {portfolio.userName}
                            </span>
                            <span className="text-sm font-semibold capitalize text-[#808994]">
                                theme : {portfolio.theme}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
