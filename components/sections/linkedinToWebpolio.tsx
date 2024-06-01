import { ArrowRight } from 'lucide-react';

export const LinkedinToWebpolio = () => {
    return (
        <div className=" flex flex-col justify-between items-center mx-8">
            <h2 className="text-5xl font-medium">
                Build Your Portfolio In 2 Minutes
            </h2>
            <p className="text-sm mt-2 text-slate-600">
                Webpolio seamlessly transforms your LinkedIn profile into a captivating
                web portfolio
            </p>
            <div className="flex space-x-12 justify-center items-center my-16">
                <div className="flex flex-col justify-center items-center space-y-2">
                    <img src="/linkedin-logo.webp" className="h-12 w-12 rounded-xl" />
                    <div className='flex flex-col border rounded-t-lg'>
                        <div className='bg-black  h-4 rounded-t-lg px-4 flex items-center space-x-1.5'>
                            <div className='h-1.5 w-1.5 bg-white rounded-full'></div>
                            <div className='h-1.5 w-1.5 bg-white rounded-full'></div>
                            <div className='h-1.5 w-1.5 bg-white rounded-full'></div>
                        </div>
                        <img src="/linkedin-to-webpolio.png" className="w-96 h-auto" />
                    </div>
                    <span className="text-sm text-slate-600">From Linkedin</span>
                </div>
                <ArrowRight className='h-10 w-10' />
                <div className="flex flex-col justify-center items-center space-y-2">
                    <img src="/logo2.png" className="h-12 w-12 rounded-xl" />
                    <div className='flex flex-col border rounded-t-lg'>
                        <div className='bg-black  h-4 rounded-t-lg px-4 flex items-center space-x-1.5'>
                            <div className='h-1.5 w-1.5 bg-white rounded-full'></div>
                            <div className='h-1.5 w-1.5 bg-white rounded-full'></div>
                            <div className='h-1.5 w-1.5 bg-white rounded-full'></div>
                        </div>
                        <img src="/webpolio-to-linkedin.png" className="w-96 h-auto" />
                    </div>
                    <span className="text-sm text-slate-600">To Webpolio</span>
                </div>
            </div>
        </div>
    );
};
