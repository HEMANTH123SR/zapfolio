"use client";
import { ArrowRight } from "lucide-react";
import { GetStartedBtn } from "@/components/small-client-component/getStartedBtn"
import DotPattern from "@/components/magicui/dot-pattern";
export default function Home() {
  return (
    <main className="min-h-screen h-full flex flex-col w-full">
      {/* hero section */}
      <div className="relative overflow-hidden">
        <section className="flex flex-col items-center rounded-2xl h-[90vh] bg-[#F6F6F8] mx-8 my-4 border p-4">
          <div className="absolute flex h-full w-full  overflow-hidden  gap-8 opacity-55  ">
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
          {/* Forget the Hustle of No-Code Tools - Create a Stunning Portfolio in 2 Clicks */}
          <div className="flex flex-col mt-6 z-10 justify-center items-center">
            <p>Forget the Hustle of No-Code Tools and Programming</p>
            <p> Create a Stunning Portfolio in 2 Clicks</p>
          </div>
          <div className="z-10">
            <GetStartedBtn />
          </div>
        </section>
      </div>
      <div className="flex h-96 w-96"></div>
    </main>
  );
}
