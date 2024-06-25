"use client";
import { usePathname } from "next/navigation";

export const Fotter = () => {
  const pathName = usePathname();
  const splitedPathName = pathName.split("/");
  const applyThemeEffect =
    splitedPathName[1] === "themes" && splitedPathName.length === 3;
  if (applyThemeEffect) {
    return <></>;
  }
  return (
    <footer
      className={`flex w-full max-w-[1400px] flex-col items-center justify-between bg-[#F6F6F8] pt-16 sm:mb-8 sm:w-[95%] sm:rounded-xl sm:border`}
    >
      <div className="flex w-full justify-between px-7 text-black sm:px-12">
        <div className="flex flex-col space-y-4 lg:space-y-6">
          <span className="font-semibold text-[#FF560E]">{`{ }  Get Started`}</span>
          <span className="md:test-base cursor-pointer text-sm hover:underline">
            Sign Up for Webpolio
          </span>
          <span className="md:test-base cursor-pointer text-sm hover:underline">
            Create Your Web Portfolio
          </span>
          <span className="md:test-base cursor-pointer text-sm hover:underline">
            Learn How It Works
          </span>
        </div>
        <div className="hidden flex-col space-y-4 sm:flex lg:space-y-6">
          <span className="font-semibold text-[#FF560E]">{`{ }  Resources`}</span>
          <span className="md:test-base cursor-pointer text-sm hover:underline">
            Help Center
          </span>
          <span className="md:test-base cursor-pointer text-sm hover:underline">
            Blog
          </span>
          <span className="md:test-base cursor-pointer text-sm hover:underline">
            Documentation
          </span>
        </div>
        <div className="flex flex-col space-y-4 lg:space-y-6">
          <span className="font-semibold text-[#FF560E]">{`{ }  Company`}</span>
          <span className="md:test-base cursor-pointer text-sm hover:underline">
            About Us
          </span>
          <span className="md:test-base cursor-pointer text-sm hover:underline">
            Privacy Policy
          </span>
          <span className="md:test-base cursor-pointer text-sm hover:underline">
            Terms of Service
          </span>
        </div>
        <div className="hidden flex-col space-y-6 xl:flex">
          <span className="font-semibold text-[#FF560E]">{`{ }  Question`}</span>
          <span className="md:test-base cursor-pointer text-sm hover:underline">
            hemanthsrdev@gmail.com
          </span>
        </div>
      </div>
      <div className="my-7"></div>
      <div className="flex w-full items-center justify-center bg-[#FF560E] px-16 py-5 text-white sm:justify-between sm:rounded-b-xl">
        <span>© webpolio 2024</span>
        <span className="hidden sm:block">Designed by the Webpolio Team</span>
      </div>
    </footer>
  );
};
