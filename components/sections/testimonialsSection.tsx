"use client";
import { InfiniteMovingCards } from "@/components/component/infinite-moving-cards";
const testimonials = [
    {
        quote:
            "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
        name: "hemanth",
        image: "/testimonialsUser1.jpeg"
    },
    {
        quote:
            "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        name: "Aqudas Usmani",
        image: "/testimonialsUser2.jpeg"
    },
    {
        quote: "All that we see or seem is but a dream within a dream.",
        name: "Shamili Netheti",
        image: "/testimonialsUser3.jpeg"
    },
    {
        quote:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        name: "Udaya Sandhya",
        image: "/testimonialsUser4.jpeg"
    },
    {
        quote:
            "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
        name: "zain",
        image: "/testimonialsUser5.jpeg"
    },
];

export const TestimonialsSection = () => {
    return (
        <section className="relative mx-8 w-[95%] border  rounded-xl overflow-hidden antialiased">
            <div className="flex flex-col justify-between items-center   rounded-xl border pt-12  pb-8  bg-[#FF560E]">
                <h1 className="text-5xl font-serif text-white  font-semibold text-black] overflow-hidden mb-8">
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
