import { HeaderNav } from "@/components/headerNav";
import { GetStartedBtn } from "@/components/small-client-component/getStartedBtn"
export default function Home() {
  return (
    <main className="flex h-full w-full flex-col">
      <div className="flex h-screen w-full flex-col bg-[url('https://utfs.io/f/91812889-3b26-4282-a9a4-8f672ce87655-a3nf98.png')] bg-cover bg-center ">
        <HeaderNav />
        {/* hero section */}
        <div className="mt-20 flex flex-col px-8 text-white ">
          <span className="text-[#787B8D] font-mono text-sm mb-2">YOUR DIGITAL PORTFOLIO
          </span>
          <h1 className="text-7xl font-medium pr-24">Transform LinkedIn Profiles into  Web Portfolios
          </h1>
          <GetStartedBtn />
        </div>
      </div>
    </main>
  );
}
