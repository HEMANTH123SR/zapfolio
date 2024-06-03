// app/screen-info/page.jsx

"use client";

import { useEffect, useState } from "react";

export default function ScreenInfo() {
    const [screenWidth, setScreenWidth] = useState(0);
    const [screenHeight, setScreenHeight] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
            setScreenHeight(window.innerHeight);
        };

        handleResize(); // Set initial screen size

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="text-4xl">
            <h1>Screen Information</h1>
            <p>Width: {screenWidth} pixels</p>
            <p>Height: {screenHeight} pixels</p>
        </div>
    );
}