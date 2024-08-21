import { HeroSection } from "@/components/sections/heroSection";
import { LinkedinToWebpolio } from "@/components/sections/linkedinToWebpolio";
import { ExampleSection } from "@/components/sections/exampleSection";
import { TestimonialsSection } from "@/components/sections/testimonialsSection";
import { FaqSection } from "@/components/sections/faqSections";
export default function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center overflow-x-hidden bg-[#F6F6F8] sm:bg-white">
      <div className="mt-2"></div>
      <HeroSection />
      <div className="my-3.5 sm:my-6 md:my-8 lg:my-4"></div>
      <LinkedinToWebpolio />
      <div className="my-3.5 sm:my-6 md:my-8 lg:my-4"></div>
      <ExampleSection />
      <div className="my-3.5 sm:my-6 md:my-8 lg:my-4"></div>
      <TestimonialsSection />
      <div className="my-3.5 sm:my-6 md:my-8 lg:my-4"></div>
      <FaqSection />
      <div className="my-3.5 sm:my-6 md:my-8 lg:my-4"></div>
    </div>
  );
}
