import { HeroSection } from "@/components/sections/heroSection";
import { LinkedinToWebpolio } from "@/components/sections/linkedinToWebpolio";
import { ExampleSection } from "@/components/sections/exampleSection";
import { TestimonialsSection } from "@/components/sections/testimonialsSection";
import { FaqSection } from "@/components/sections/faqSections";
export default function Home() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center overflow-x-hidden">
      <div className="my-2"></div>
      <HeroSection />
      <div className="my-14"></div>
      <LinkedinToWebpolio />
      <div className="my-14"></div>
      <ExampleSection />
      <div className="my-14"></div>
      <TestimonialsSection />
      <div className="my-14"></div>
      <FaqSection />
      <div className="my-14"></div>
    </main>
  );
}
