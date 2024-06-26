import { ArrowRight } from 'lucide-react';

export const LinkedinToWebpolio = () => {
    return (
        <div className="w-full sm:w-[95%] max-w-[1400px] flex flex-col justify-between items-center  bg-[#F7F9FB] sm:rounded-xl sm:border py-16 px-10">
            <h2 className=" text-3xl md:text-4xl lg:text-5xl font-medium">
                Build Your Portfolio In 2 Minutes
            </h2>

            <p className="hidden lg:block text-sm mt-2 text-center text-slate-600 w-2/3 ">
                A no-code tool that transforms any LinkedIn page into a clean portfolio website, resume, and landing page for your business site in seconds. All you have to do is enter your LinkedIn URL, and zap!
            </p>
            <p className='text-sm mt-2 text-slate-600 lg:hidden'>a no-code tool that transforms any linkedin page into a clean, portfolio website,resume, and landing page for your business site in seconds. all u got do is enter ur linkedin url.and zap!</p>
            <div className="flex flex-col space-y-10 sm:space-y-0 sm:flex-row sm:space-x-8 lg:space-x-12 justify-center items-center mt-16">

                <div className="flex flex-col justify-center items-center space-y-2">
                    <img src="/linkedin-logo.webp" className="h-12 w-12 rounded-xl" />
                    <div className='flex flex-col border border-t-0 shadow-2xl'>
                        <div className='bg-white border  h-4  px-4 flex items-center space-x-1.5'>
                            <div className='h-1.5 w-1.5 bg-[#C7C6C6] rounded-full'></div>
                            <div className='h-1.5 w-1.5 bg-[#C7C6C6] rounded-full'></div>
                            <div className='h-1.5 w-1.5 bg-[#C7C6C6] rounded-full'></div>
                        </div>
                        <img src="/linkedin-to-webpolio.png" className="w-96 h-auto" />
                    </div>
                    <span className="text-sm text-slate-600">From Linkedin</span>
                </div>

                <ArrowRight className='h-10 w-10 hidden sm:block' />

                <div className="flex flex-col justify-center items-center space-y-2">
                    <img src="/logo3.png" className="h-12 w-12 rounded-xl" />
                    <div className='flex flex-col border border-t-0 shadow-2xl'>
                        <div className='bg-white border  h-4  px-4 flex items-center space-x-1.5'>
                            <div className='h-1.5 w-1.5 bg-[#C7C6C6] rounded-full'></div>
                            <div className='h-1.5 w-1.5 bg-[#C7C6C6] rounded-full'></div>
                            <div className='h-1.5 w-1.5 bg-[#C7C6C6] rounded-full'></div>
                        </div>
                        <img src="/webpolio-to-linkedin.png" className="w-96 h-auto" />
                    </div>
                    <span className="text-sm text-slate-600">To Webpolio</span>
                </div>
            </div>
        </div>
    );
};
