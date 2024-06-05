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
      <div className="my-7 md:my-8 lg:my-10 xl:my-12"></div>
      <LinkedinToWebpolio />
      <div className="my-7 md:my-8 lg:my-10 xl:my-12"></div>
      <ExampleSection />
      <div className="my-7 md:my-8 lg:my-10 xl:my-12"></div>
      <TestimonialsSection />
      <div className="my-7 md:my-8 lg:my-10 xl:my-12"></div>
      <FaqSection />
      <div className="my-7 md:my-8 lg:my-10 xl:my-12"></div>
    </main>
  );
}


