import { Twitter, Linkedin, Instagram, Github } from "lucide-react";

export const Fotter = () => {
    return (
        <footer className="mb-8 flex w-[95%] max-w-[1400px] flex-col items-center justify-between rounded-xl border bg-[#F6F6F8] pt-16">
            <div className="flex w-full justify-between px-12 text-black">
                <div className="flex flex-col space-y-4 lg:space-y-6">
                    <span className="font-semibold text-[#FF560E]">{`{ }  Get Started`}</span>
                    <span className="cursor-pointer hover:underline text-sm md:test-base">
                        Sign Up for Webpolio
                    </span>
                    <span className="cursor-pointer hover:underline text-sm md:test-base">
                        Create Your Web Portfolio
                    </span>
                    <span className="cursor-pointer hover:underline text-sm md:test-base">
                        Learn How It Works
                    </span>
                </div>
                <div className="flex flex-col space-y-4 lg:space-y-6">
                    <span className="font-semibold text-[#FF560E]">{`{ }  Resources`}</span>
                    <span className="cursor-pointer hover:underline text-sm md:test-base">Help Center</span>
                    <span className="cursor-pointer hover:underline text-sm md:test-base">Blog</span>
                    <span className="cursor-pointer hover:underline text-sm md:test-base">Documentation</span>
                </div>
                <div className="flex flex-col space-y-4 lg:space-y-6">
                    <span className="font-semibold text-[#FF560E]">{`{ }  Company`}</span>
                    <span className="cursor-pointer hover:underline text-sm md:test-base">About Us</span>
                    <span className="cursor-pointer hover:underline text-sm md:test-base">Privacy Policy</span>
                    <span className="cursor-pointer hover:underline text-sm md:test-base">
                        Terms of Service
                    </span>
                </div>
                <div className="hidden flex-col space-y-6 xl:flex">
                    <span className="font-semibold text-[#FF560E]">{`{ }  Question`}</span>
                    <span className="cursor-pointer hover:underline text-sm md:test-base">
                        hemanthsrdev@gmail.com
                    </span>
                </div>
            </div>
            <div className="my-7"></div>
            <div className="flex w-full items-center justify-between px-16 py-5 text-white bg-[#FF560E] rounded-b-xl">
                <span>© webpolio 2024</span>
                <span>Designed by the Webpolio Team</span>
            </div>
        </footer>
    );
};
