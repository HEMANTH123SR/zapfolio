import { Twitter, Linkedin, Instagram, Github } from "lucide-react";

export const Fotter = () => {
    return (
        <footer className="mb-8 flex w-[95%] max-w-[1400px] flex-col items-center justify-between rounded-xl border bg-[#F6F6F8] pt-16">
            <div className="flex w-full justify-between px-12 text-black">
                <div className="flex flex-col space-y-6">
                    <span className="font-semibold text-[#FF560E]">{`{ }  Get Started`}</span>
                    <span className="cursor-pointer hover:underline">
                        Sign Up for Webpolio
                    </span>
                    <span className="cursor-pointer hover:underline">
                        Create Your Web Portfolio
                    </span>
                    <span className="cursor-pointer hover:underline">
                        Learn How It Works
                    </span>
                </div>
                <div className="flex flex-col space-y-6">
                    <span className="font-semibold text-[#FF560E]">{`{ }  Resources`}</span>
                    <span className="cursor-pointer hover:underline">Help Center</span>
                    <span className="cursor-pointer hover:underline">Blog</span>
                    <span className="cursor-pointer hover:underline">Documentation</span>
                </div>
                <div className="flex flex-col space-y-6">
                    <span className="font-semibold text-[#FF560E]">{`{ }  Company`}</span>
                    <span className="cursor-pointer hover:underline">About Us</span>
                    <span className="cursor-pointer hover:underline">Privacy Policy</span>
                    <span className="cursor-pointer hover:underline">
                        Terms of Service
                    </span>
                </div>
                <div className="hidden flex-col space-y-6 xl:flex">
                    <span className="font-semibold text-[#FF560E]">{`{ }  Question`}</span>
                    <span className="cursor-pointer hover:underline">
                        hemanthsrdev@gmail.com
                    </span>
                </div>
            </div>
            <div className="my-7"></div>
            {/* <div className="flex w-full items-end justify-between px-12">
        <h6 className="text-7xl font-semibold text-black">Webpolio</h6>

        <div className="flex h-full items-end justify-end space-x-7 text-black">
          <Twitter className="h-8 w-8 cursor-pointer" strokeWidth={1.2} />
          <Linkedin className="h-8 w-8 cursor-pointer" strokeWidth={1.2} />
          <Instagram className="h-8 w-8 cursor-pointer" strokeWidth={1.2} />
          <Github className="h-8 w-8 cursor-pointer" strokeWidth={1.2} />
        </div>
      </div> */}
            {/* <div className="mx-16 my-6 w-full border-2 border-[#FF560E]"></div> */}
            <div className="flex w-full items-center justify-between px-16 py-5 text-white bg-[#FF560E] rounded-b-xl">
                <span>© webpolio 2024</span>
                <span>Designed by the Webpolio Team</span>
            </div>
        </footer>
    );
};
