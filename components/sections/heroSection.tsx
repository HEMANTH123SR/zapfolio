import { GetStartedBtn } from "@/components/small-client-component/getStartedBtn";
import DotPattern from "@/components/magicui/dot-pattern";
export const HeroSection = () => {
    return (
        <div className="relative w-[95%] max-w-[1400px] overflow-hidden">
            <section className="flex flex-col items-center rounded-2xl border bg-[#F6F6F8] p-4">
                <div className="absolute flex h-full w-full gap-8 overflow-hidden opacity-55">
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
                <span className="z-20 flex cursor-pointer items-center justify-center space-x-2 rounded-full border-2 border-[#FF560E] bg-white px-4 py-1.5 text-sm text-black">
                    LinkedIn Meets Web Portfolio
                </span>
                <div className="z-30 mt-6 flex flex-col items-center justify-center font-serif capitalize">
                    <h1 className="text-3xl text-black md:text-5xl lg:text-6xl xl:text-7xl">
                        Convert LinkedIn Profile into{" "}
                    </h1>
                    <h1 className="text-3xl text-black md:text-5xl lg:text-6xl xl:text-7xl">
                        Web Portfolio{" "}
                    </h1>
                </div>
                <div className="z-30 mt-6 flex flex-col items-center justify-center">
                    <p>Forget the Hustle of No-Code Tools and Programming</p>
                    <p> Create a Stunning Portfolio in 2 Clicks</p>
                </div>
                <div className="z-10">
                    <GetStartedBtn />
                </div>
                <img
                    src="/cursor-4.png"
                    className="absolute bottom-2 right-2 lg:bottom-10 lg:right-10 z-20 mb-4 mr-4 lg:mb-12 lg:mr-12 h-48 w-auto -rotate-12"
                />
                <img
                    src="/linkedin.png"
                    className="absolute bottom-2 left-2 lg:bottom-10 lg:left-10 z-20 mb-4 ml-3 lg:mb-12 lg:ml-6 h-48 w-auto rotate-12"
                />
                <img
                    src="/website-1.png"
                    className="absolute -top-24 right-1/4 z-0 mb-12 ml-24 h-72 w-auto rotate-12"
                />
            </section>
        </div>
    );
};
