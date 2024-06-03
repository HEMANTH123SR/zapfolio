import { Twitter, Linkedin, Instagram, Github } from 'lucide-react';

export const Fotter = () => {
    return (
        <footer className="w-11/12 mb-8 flex flex-col items-center justify-between rounded-xl border bg-[#F6F6F8] py-16">
            <div className="flex justify-between px-12 w-full text-black">
                <div className="flex flex-col space-y-6 ">
                    <span className="text-[#FF560E] font-semibold">{`{ }  Get Started`}</span>
                    <span className="hover:underline cursor-pointer">Sign Up for Webpolio</span>
                    <span className="hover:underline cursor-pointer">Create Your Web Portfolio</span>
                    <span className="hover:underline cursor-pointer">Learn How It Works</span>
                </div>
                <div className="flex flex-col space-y-6 ">
                    <span className="text-[#FF560E] font-semibold">{`{ }  Resources`}</span>
                    <span className="hover:underline cursor-pointer">Help Center</span>
                    <span className="hover:underline cursor-pointer">Blog</span>
                    <span className="hover:underline cursor-pointer">Documentation</span>
                </div>
                <div className="flex flex-col space-y-6 ">
                    <span className="text-[#FF560E] font-semibold">{`{ }  Company`}</span>
                    <span className="hover:underline cursor-pointer">About Us</span>
                    <span className="hover:underline cursor-pointer">Privacy Policy</span>
                    <span className="hover:underline cursor-pointer">Terms of Service</span>
                </div>
                <div className="flex flex-col space-y-6 ">
                    <span className="text-[#FF560E] font-semibold">{`{ }  Question`}</span>
                    <span className="hover:underline cursor-pointer">hemanthsrdev@gmail.com</span>
                </div>
            </div>
            <div className='my-7'></div>
            <div className="flex justify-between items-end px-12 w-full">
                <h6 className="text-7xl text-black font-semibold">Webpolio</h6>

                <div className="h-full flex space-x-7 justify-end items-end text-black">
                    <Twitter className="h-8 w-8 cursor-pointer" strokeWidth={1.2} />
                    <Linkedin className="h-8 w-8 cursor-pointer" strokeWidth={1.2} />
                    <Instagram className="h-8 w-8 cursor-pointer" strokeWidth={1.2} />
                    <Github className="h-8 w-8 cursor-pointer" strokeWidth={1.2} />
                </div>
            </div>
            <div className='border-2 w-full my-6 mx-16 border-[#FF560E]'></div>
            <div className='flex w-full justify-between items-center px-16 text-[#ABB0A8]'>
                <span>© webpolio 2024</span>
                <span>Designed by the Webpolio Team</span>
            </div>
        </footer>
    );
};

