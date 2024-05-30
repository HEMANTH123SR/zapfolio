import { HeroSection } from "@/components/sections/heroSection"
export default function Home() {
  return (
    <main className="min-h-screen h-full flex flex-col w-full">
      <HeroSection />
      <div className="flex h-96 w-96"></div>
    </main>
  );
}
