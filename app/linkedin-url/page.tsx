"use client";
import { useRouter } from "next/navigation";
import { useSearchParams } from 'next/navigation'
import { useUser } from "@clerk/clerk-react";
import { useToast } from "@/components/ui/use-toast";
import { isValidLinkedInUrl } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
const LinkedinUrl = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const { toast } = useToast();
    const { user, isLoaded } = useUser();
    const [linkedinUrl, setLinkedinUrl] = useState<string>("");

    const handleLinkedinUrl = async () => {
        if (!linkedinUrl.trim()) {
            toast({
                title: "Empty URL",
                description: "Please enter your LinkedIn profile URL.",
                variant: "destructive",
            });
            return;
        }

        if (!isValidLinkedInUrl(linkedinUrl)) {
            toast({
                title: "Invalid URL",
                description: "Please enter a valid LinkedIn profile URL.",
                variant: "destructive",
            });
            return;
        }

        if (!isLoaded || !user) {
            toast({
                title: "Authentication Error",
                description: "Please sign in to continue.",
                variant: "destructive",
            });
            return;
        }

        try {
            const response = await fetch(`/api/set-linkedin-id`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    linkedinProfileId: linkedinUrl,
                    userId: user.id,
                }),
            });

            const data = await response.json();

            if (data.success) {
                toast({
                    title: "Success",
                    description: "Your LinkedIn profile URL has been saved successfully.",
                    variant: "default",
                });
                if (searchParams.get("t")) {
                    router.push(`/themes/${searchParams.get("t")}`);
                    return;
                }
                router.push('/');
            } else {
                throw new Error(data.message || "Unknown error occurred");
            }
        } catch (error: any) {
            toast({
                title: "Error",
                description: error.message,
                variant: "destructive",
            });
        }
    };

    return (
        <section className="mb-12 mt-2 flex h-[70vh] w-full items-center justify-center border-t-2 sm:h-auto sm:border-none sm:px-8">
            <div className="flex w-full max-w-[1400px] justify-center sm:rounded-xl sm:border sm:bg-[url('/bggif.gif')] sm:bg-cover sm:pb-14 sm:pt-14">
                <div className="flex w-full flex-col items-center rounded-lg bg-white pb-14 sm:w-11/12 sm:border sm:shadow-2xl md:w-[600px]">
                    <img
                        src="/zapfolio-logo/2.png"
                        className="hidden w-1/4 py-4 sm:block"
                    />
                    <div className="hidden w-full border sm:block"></div>
                    <h1
                        className={`mx-4 mb-2 mt-14 text-4xl font-semibold text-[#FF560E] sm:text-4xl`}
                    >
                        Enter Your Linkedin Profile Url
                    </h1>
                    <Link
                        className="text-sm lowercase text-[#666C7E] underline"
                        href={"/find-linkedin-url"}
                    >
                        How do I find my LinkedIn URL?
                    </Link>
                    <input
                        className="mb-4 mt-8 w-10/12 rounded-md border bg-[#F1F4F9] p-2 px-5 text-black sm:w-8/12"
                        placeholder="https://www.linkedin.com/in/yourprofile"
                        type="text"
                        value={linkedinUrl}
                        onChange={(e) => {
                            setLinkedinUrl(e.target.value);
                        }}
                    />
                    <button
                        className="w-10/12 rounded-md bg-[#FF560E] py-1.5 text-lg font-semibold text-white sm:w-8/12"
                        onClick={() => handleLinkedinUrl()}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </section>
    );
};

export default LinkedinUrl;
