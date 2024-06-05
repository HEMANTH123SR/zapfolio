"use client";
import { InfiniteMovingCards } from "@/components/component/infinite-moving-cards";
import { ppEditorial } from "@/lib/font";
const testimonials = [
    {
        quote:
            "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief,  ",
        name: "hemanth",
        image: "/testimonialsUser1.jpeg",
    },
    {
        quote:
            "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, .",
        name: "Aqudas Usmani",
        image: "/testimonialsUser2.jpeg",
    },
    {
        quote: "All that we see or seem is but a dream within a dream.",
        name: "Shamili Netheti",
        image: "/testimonialsUser3.jpeg",
    },
    {
        quote:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        name: "Udaya Sandhya",
        image: "/testimonialsUser4.jpeg",
    },
    {
        quote:
            "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing",
        name: "zain",
        image: "/testimonialsUser5.jpeg",
    },
];

export const TestimonialsSection = () => {
    return (
        <section className="relative mx-8 w-[95%] max-w-[1400px] overflow-hidden rounded-xl border antialiased">
            <div className="flex flex-col items-center justify-between rounded-xl border bg-[#FF560E] pb-8 pt-12">
                <h1
                    className={`${ppEditorial.className} mb-8 overflow-hidden text-3xl font-semibold text-white md:text-4xl lg:text-5xl`}
                >
                    See what our users have to say…
                </h1>

                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
        </section>
    );
};
