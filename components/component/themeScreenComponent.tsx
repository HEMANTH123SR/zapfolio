import { MdDesktopWindows, FaMobile, RxExternalLink } from "@/lib/icons";

import Link from "next/link";
export const ScreenComponent = ({
  isDesktop,
  toggleDevice,
  link,
}: {
  isDesktop: boolean;
  toggleDevice: () => void;
  link: string;
}) => {
  return (
    <div className="absolute bottom-8 right-8 rounded-xl border bg-white shadow">
      <div className="flex items-center space-x-2.5 px-2 py-1.5">
        <div
          className="flex cursor-pointer items-center rounded-xl bg-gray-200 p-1"
          onClick={toggleDevice}
          style={{ width: "100px" }}
        >
          {/* Desktop Icon */}
          <div
            className={`flex h-8 w-1/2 items-center justify-center rounded-xl ${isDesktop ? "bg-white" : ""}`}
          >
            <MdDesktopWindows
              className={`text-xl ${isDesktop ? "text-black" : "text-gray-400"}`}
            />
          </div>

          {/* Mobile Icon */}
          <div
            className={`flex h-8 w-1/2 items-center justify-center rounded-xl ${!isDesktop ? "bg-white" : ""}`}
          >
            <FaMobile
              className={`text-xl ${!isDesktop ? "text-black" : "text-gray-400"}`}
            />
          </div>
        </div>
        <div className="h-5 w-0.5 rounded-xl bg-[#DADDE2]"></div>
        {/* preview link */}
        <Link
          target="_blank"
          href={link}
          className={`group cursor-pointer rounded-xl border bg-white p-1.5 hover:bg-[#4B5563]`}
        >
          <RxExternalLink
            className={`h-6 w-6 text-[#4B5563] group-hover:text-white`}
          />
        </Link>
      </div>
    </div>
  );
};
