import React from "react";

const Page = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="bg-black h-10 w-10 rounded-xl flex flex-col space-y-0.5 justify-center items-center">
                <div className="h-2 w-7 rounded-full bg-white"></div>
                <div className="h-1.5 w-4 rounded-full bg-white"></div>
            </div>
        </div>
    );
};

export default Page;
