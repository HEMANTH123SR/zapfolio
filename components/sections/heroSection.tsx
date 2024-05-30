import { GetStartedBtn } from "@/components/small-client-component/getStartedBtn";
import DotPattern from "@/components/magicui/dot-pattern";
export const HeroSection = () => {
    return (
        <div className="relative overflow-hidden ">
            <section className="flex flex-col items-center rounded-2xl h-[90vh] bg-[#F6F6F8] mx-8  border p-4">
                <div className="absolute flex h-full w-full  overflow-hidden  gap-8 opacity-55">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <DotPattern
                            key={i}
                            width={30}
                            height={30}
                            cr={1.2}
                            cx={1.2}
                            cy={1.2}
                        />
                    ))}
                </div>
                <div className="h-20"></div>
                <span className="border-[#FF560E] border bg-white text-black rounded-full px-6 py-1.5 flex justify-center items-center space-x-2 z-20 text-sm cursor-pointer">
                    LinkedIn Meets Web Portfolio
                </span>
                <div className="flex flex-col justify-center items-center  mt-6 capitalize font-serif z-10">
                    <h1 className="px-24 text-7xl text-black ">
                        Convert LinkedIn Profile into{" "}
                    </h1>
                    <h1 className="px-24 text-7xl text-black ">Web Portfolio </h1>
                </div>
                <div className="flex flex-col mt-6 z-10 justify-center items-center">
                    <p>Forget the Hustle of No-Code Tools and Programming</p>
                    <p> Create a Stunning Portfolio in 2 Clicks</p>
                </div>
                <div className="z-10">
                    <GetStartedBtn />
                </div>
                <img
                    src="/cursor-4.png"
                    className="absolute z-20 right-10 bottom-10 h-48 w-auto mr-12 mb-12 -rotate-12"
                />
                <img
                    src="/linkedin.png"
                    className="absolute z-20 left-10 bottom-10 h-48 w-auto ml-6 mb-12 rotate-12"
                />
                <img
                    src="/website-1.png"
                    className="absolute z-0 right-1/4 -top-24 h-72 w-auto ml-24 mb-12 rotate-12"
                />
            </section>
        </div>
    );
};
