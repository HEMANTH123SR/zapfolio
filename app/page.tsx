import { HeroSection } from "@/components/sections/heroSection"
import { LinkedinToWebpolio } from "@/components/sections/linkedinToWebpolio"
import { BentoGridSection } from "@/components/sections/bentoGridSection"
export default function Home() {
  return (
    <main className="min-h-screen h-full flex flex-col w-full">
      <div className="my-2"></div>
      <HeroSection />
      <div className="my-14"></div>
      <LinkedinToWebpolio />
      <div className="my-14"></div>
      <BentoGridSection />
      <div className="flex h-96 w-96"></div>
    </main>
  );
}
