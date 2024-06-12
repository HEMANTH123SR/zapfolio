import { GetStartedBtn } from "@/components/small-client-component/getStartedBtn";
import DotPattern from "@/components/magicui/dot-pattern";
import { ppEditorial } from "@/lib/font";
export const HeroSection = () => {
  return (
    <div className="relative w-full sm:w-[95%] max-w-[1400px] overflow-hidden">
      <section className="flex flex-col items-center sm:rounded-2xl sm:border bg-[#F6F6F8] sm:p-0 md:p-4">
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
        <span className="z-20 flex cursor-pointer items-center justify-center space-x-2 rounded-full border-2 border-[#0010C4] bg-white px-4 py-1.5 text-sm text-black">
          LinkedIn Meets Web Portfolio
        </span>
        <div
          className={`z-30 mt-6 flex flex-col items-center justify-center capitalize ${ppEditorial.className}`}
        >

          <h1 className="text-black sm:hidden text-4xl mt-12">
            Convert LinkedIn Profile
          </h1>
          <h1 className="text-black sm:hidden text-4xl">
            Into Web Portfolio
          </h1>
          <h1 className="text-black hidden sm:block sm:text-5xl lg:text-6xl xl:text-7xl">
            Convert LinkedIn Profile Into{" "}
          </h1>
          <h1 className="text-black hidden sm:block sm:text-5xl lg:text-6xl xl:text-7xl">
            Web Portfolio{" "}
          </h1>
        </div>
        <div className="z-30 mt-3 flex flex-col items-center justify-center text-xs md:mt-6 md:text-base">
          <p>Forget the Hustle of No-Code Tools and Programming</p>
          <p> Create a Stunning Portfolio in 2 Clicks</p>
        </div>
        <div className="z-10">
          <GetStartedBtn />
        </div>
        <img
          src="/cursor-4.png"
          className="hidden sm:block absolute -bottom-6 right-2 z-20 h-48 w-auto -rotate-12 md:bottom-4  lg:bottom-10 lg:right-10 lg:mb-12 lg:mr-12"
        />
        <img
          src="/linkedin.png"
          className="hidden sm:block absolute -bottom-8 -left-12 z-20 h-48 w-auto rotate-12 md:bottom-4 md:left-2 lg:bottom-10 lg:left-10 lg:mb-12 lg:ml-6"
        />
        <img
          src="/website-1.png"
          className="absolute -top-24 right-1/4 z-0 mb-12 ml-24 h-72 w-auto rotate-12"
        />
      </section>
    </div>
  );
};
