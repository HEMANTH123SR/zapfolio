import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
const LinkedinUrlAndJobTitle = async () => {
    const user = await currentUser();
    console.log(user);
    return (
        <main className="w-full px-8">
            <div className="flex w-full justify-center rounded-lg border bg-[#FF560E] p-14">
                <div className="flex pb-14 w-[600px] flex-col items-center border shadow-2xl   rounded-lg bg-white">
                    <img src="/zapfolio-logo/2.png" className="w-1/4 py-4" />
                    <div className="w-full border"></div>
                    <h1
                        className={`mt-14 mb-7 text-4xl  text-[#FF560E] font-semibold`}
                    >
                        Enter Your Linkedin Url
                    </h1>
                    <input className="w-8/12 bg-[#F1F4F9] text-black px-5 p-2 border rounded-md" placeholder="https://www.linkedin.com/in/yourprofile" />
                    <Link className="underline text-sm my-6 text-[#666C7E]" href={"/find-linkedin-url"} >How do I find my LinkedIn URL?</Link>
                    <button className="bg-[#FF560E] rounded-md text-white text-lg px-10 font-semibold py-1.5">Continue</button>
                </div>
            </div>
        </main>
    );
};

//How do I find my LinkedIn URL?

export default LinkedinUrlAndJobTitle;
