import Link from "next/link";

export const HeaderNav = () => {
    return (
        <header className="flex w-full justify-between p-8 text-white">
            {/* logo */}
            <div className="flex">
                <Link
                    className="cursor-pointer font-sans text-xl font-semibold "
                    href={"/"}
                >
                    Story/Tale
                </Link>
            </div>

            {/* auth and nav resources */}
            <div className="flex space-x-2 justify-center items-center font-semibold">
                <span className="cursor-pointer">Resources</span>
                <div className="h-4/6 w-0.5 bg-white rounded-full"></div>
                <span className="cursor-pointer">Sign In</span>
            </div>
        </header>
    );
};
