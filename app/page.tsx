import { HeroSection } from "@/components/sections/heroSection";
import { LinkedinToWebpolio } from "@/components/sections/linkedinToWebpolio";
import { ExampleSection } from "@/components/sections/exampleSection";
import { TestimonialsSection } from "@/components/sections/testimonialsSection";
import { FaqSection } from "@/components/sections/faqSections";
export default function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center overflow-x-hidden bg-[#F6F6F8] sm:bg-white">
      <HeroSection />
      <div className="my-3.5 sm:my-6 md:my-8 lg:my-10 xl:my-12"></div>
      <LinkedinToWebpolio />
      <div className="my-3.5 sm:my-6 md:my-8 lg:my-10 xl:my-12"></div>
      <ExampleSection />
      <div className="my-3.5 sm:my-6 md:my-8 lg:my-10 xl:my-12"></div>
      <TestimonialsSection />
      <div className="my-3.5 sm:my-6 md:my-8 lg:my-10 xl:my-12"></div>
      <FaqSection />
      <div className="my-3.5 sm:my-6 md:my-8 lg:my-10 xl:my-12"></div>
    </div>
  );
}
