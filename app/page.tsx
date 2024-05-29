"use client";
import DotPattern from "@/components/magicui/dot-pattern";
export default function Home() {
  return (
    <main className="min-h-screen h-full flex flex-col w-full">
      {/* hero section */}
      <div className="relative overflow-hidden">
        <section className="flex flex-col items-center rounded-2xl h-[90vh] bg-[#F6F6F8] mx-8 my-4 border p-4">
          <div className="absolute flex h-full w-full  overflow-hidden  gap-8 opacity-55  ">
            {Array.from({ length: 3 }).map((_, i) => (
              <DotPattern key={i} width={30} height={30} cr={1.2} cx={1.2} cy={1.2} />
            ))}
          </div>
          {/* Unlock Your Professional Potential: LinkedIn Meets Web Portfolios */}
          {/* Turn Your LinkedIn into a Personalized Web Portfolio with Webpolio */}
          <span className="bg-[#FF560E] text-white rounded-full px-6 py-1.5 flex justify-center items-center space-x-2 z-20 text-sm ">
            LinkedIn Meets Web Portfolio
          </span>
        </section>
      </div>
      <div className="flex h-96 w-96"></div>
    </main>
  );
}
