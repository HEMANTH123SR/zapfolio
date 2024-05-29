"use client";
import { ArrowRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

export const GetStartedBtn = () => {
    const [isHovered, setIsHovered] = useState(false);
    const container = useRef(null);
    const getStartedBtn = useRef(null);
    const arrowIcon = useRef(null);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    useEffect(() => {
        // Initialize the ArrowRight icon state
        gsap.set(arrowIcon.current, {
            scale: 1,
            x: -4,
            opacity: 0,
            width: 1,
            height: 1,
        });

        if (isHovered) {
            gsap.to(arrowIcon.current, {
                x: 6,
                opacity: 1,
                duration: 0.4,
                scale: 2,
                width: 9,  // Reset to auto to accommodate its content
                height: 9, // Reset to auto to accommodate its content
                yoyo: true,
            });
        } else {
            gsap.to(arrowIcon.current, {
                x: -4,
                opacity: 0,
                duration: 0.4,
                scale: 1,
                width: 0,
                height: 0,
            });
        }
    }, [isHovered]);

    return (
        <div className="py-8" ref={container}>
            <button
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="text-black px-4 pr-5 py-1.5 bg-white rounded-full flex justify-center items-center space-x-3.5"
            >
                Get Started
                <ArrowRight
                    ref={arrowIcon}
                    className="w-5 h-5 ml-1.5"
                    strokeWidth={1.2}
                />
            </button>
        </div>
    );
};
