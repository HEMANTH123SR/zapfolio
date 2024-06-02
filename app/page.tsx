import { HeroSection } from "@/components/sections/heroSection"
import { LinkedinToWebpolio } from "@/components/sections/linkedinToWebpolio"
import { ExampleSection } from "@/components/sections/exampleSection"
import { BentoGridSection } from "@/components/sections/bentoGridSection"
import { TestimonialsSection } from "@/components/sections/testimonialsSection"
export default function Home() {
  return (
    <main className="min-h-screen h-full flex flex-col w-full">
      <div className="my-2"></div>
      <HeroSection />
      <div className="my-14"></div>
      <LinkedinToWebpolio />
      <div className="my-14"></div>
      <ExampleSection />
      <div className="my-14"></div>
      <TestimonialsSection />
      <div className="flex h-96 w-96"></div>
    </main>
  );
}
