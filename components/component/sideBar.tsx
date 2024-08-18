"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Logo } from "@/components/component/logo";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
  RiDashboardFill,
  RiSettings3Fill,
  RiLogoutCircleRFill,
  FaMoneyBillWave,
  FaChartPie,
  RiProfileFill,
} from "@/lib/icons";
import { AiFillEdit } from "react-icons/ai";
import { IoStatsChart } from "react-icons/io5";
import { IoMdStats } from "react-icons/io";


export const Sidebar = () => {
  const pathname = usePathname();
  const filtredPathName = pathname.split("/").filter((data) => data.length);
  const themeRoute = `/themes/${filtredPathName[1]}`;
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <div
      className={`h-screen max-h-screen overflow-hidden border-r bg-white shadow-lg transition-all duration-300 ${isCollapsed ? "w-16" : "max-w-72"
        }`}
    >
      <div
        className={`flex w-full items-center justify-between border-b bg-[#F5F6F8] ${isCollapsed ? "py-4" : "p-4"
          }`}
      >
        {!isCollapsed && (
          <Link
            className="flex items-center justify-center space-x-2"
            href={"/"}
          >
            <Logo />
            <h1 className="cursor-pointer font-semibold">Zapfolio</h1>
          </Link>
        )}
        {!isCollapsed ? (
          <button
            onClick={toggleSidebar}
            className={`rounded-full ${isCollapsed ? "p-3" : "p-2"
              } hover:bg-gray-200`}
          >
            {isCollapsed ? (
              <MdKeyboardDoubleArrowRight className="text-2xl text-[#FF560E]" />
            ) : (
              <MdKeyboardDoubleArrowLeft className="text-2xl text-[#FF560E]" />
            )}
          </button>
        ) : (
          <div className="flex w-full items-center justify-center">
            <button
              onClick={toggleSidebar}
              className={`rounded-full ${isCollapsed ? "p-3" : "p-2"
                } hover:bg-gray-200`}
            >
              {isCollapsed ? (
                <MdKeyboardDoubleArrowRight className="text-2xl text-[#FF560E]" />
              ) : (
                <MdKeyboardDoubleArrowLeft className="text-2xl text-[#FF560E]" />
              )}
            </button>
          </div>
        )}
      </div>

      <nav className="mt-4">
        {!isCollapsed && (
          <div className="px-4 py-2">
            <h2 className="text-sm font-semibold text-black">Portfolio</h2>
          </div>
        )}
        <Link
          href={`${themeRoute}`}
          className={`flex items-center space-x-5 ${isCollapsed ? "justify-center" : "px-4"
            } group py-2 text-gray-700 hover:border-y hover:bg-gray-50`}
        >
          <div
            className={`rounded-xl ${filtredPathName.length == 2 ? "bg-blue-50" : "bg-[#EFF6FF]"
              } ${isCollapsed ? "p-3" : "border p-1.5"} group-hover:bg-blue-50`}
          >
            <RiProfileFill
              className={`h-5 w-5 ${filtredPathName.length == 2 ? "text-blue-400" : "text-[#4B5563]"
                } group-hover:text-blue-400`}
            />
          </div>

          {!isCollapsed && <span className="ml-2 font-semibold">Preview</span>}
        </Link>
        <Link
          href={`${themeRoute}/editor`}
          className={`flex items-center space-x-5 ${isCollapsed ? "justify-center" : "px-4"
            } group py-2 text-gray-700 hover:border-y hover:bg-gray-50`}
        >
          <div
            className={`rounded-xl ${isCollapsed ? "p-3" : "border p-1.5"} ${filtredPathName[2] == "editor" ? "bg-emerald-50" : "bg-[#EFF6FF]"
              } group-hover:bg-emerald-50`}
          >
            <AiFillEdit
              className={`h-5 w-5 ${filtredPathName[2] == "editor"
                  ? "text-emerald-400"
                  : "text-[#4B5563]"
                } group-hover:text-emerald-400`}
            />
          </div>
          {!isCollapsed && <span className="ml-2 font-semibold">Editor</span>}
        </Link>
        <Link
          href={`${themeRoute}/analytics`}
          className={`flex items-center space-x-5 ${isCollapsed ? "justify-center" : "px-4"
            } group py-2 text-gray-700 hover:border-y hover:bg-gray-50`}
        >
          <div
            className={`rounded-xl ${isCollapsed ? "p-3" : "border p-1.5"} ${filtredPathName[2] == "analytics" ? "bg-amber-50" : "bg-[#EFF6FF]"
              } group-hover:bg-amber-50`}
          >
            <IoMdStats
              className={`h-5 w-5 ${filtredPathName[2] == "analytics"
                  ? "text-amber-400"
                  : "text-[#4B5563]"
                } group-hover:text-amber-400`}
            />
          </div>
          {!isCollapsed && (
            <span className="ml-2 font-semibold">Analytics</span>
          )}
        </Link>

        <Link
          href={`${themeRoute}/settings`}
          className={`flex items-center space-x-5 ${isCollapsed ? "justify-center" : "px-4"
            } group py-2 text-gray-700 hover:border-y hover:bg-gray-50`}
        >
          <div
            className={`rounded-xl ${isCollapsed ? "p-3" : "border p-1.5"} ${filtredPathName[2] == "settings"
                ? "bg-fuchsia-50"
                : "bg-[#EFF6FF]"
              } group-hover:bg-fuchsia-50`}
          >
            <RiSettings3Fill
              className={`h-5 w-5 ${filtredPathName[2] == "settings"
                  ? "text-fuchsia-400"
                  : "text-[#4B5563]"
                } group-hover:text-fuchsia-400`}
            />
          </div>
          {!isCollapsed && <span className="ml-2 font-semibold">Settings</span>}
        </Link>
      </nav>
      {!isCollapsed && (
        <>
          <div className="mt-4 px-4 py-2">
            <h2 className="text-sm font-semibold text-black">Account</h2>
          </div>
          <Link
            href="/privacy"
            className="group flex items-center space-x-5 px-4 py-2 text-gray-700 hover:border-y hover:bg-gray-50"
          >
            <div className="rounded-xl border bg-[#EFF6FF] p-1.5 group-hover:bg-lime-50">
              <FaChartPie className="h-5 w-5 text-[#4B5563] group-hover:text-lime-400" />
            </div>
            <span className="ml-2 font-semibold">Privacy & Security</span>
          </Link>
          <Link
            href="/logout"
            className="group flex items-center space-x-5 px-4 py-2 text-gray-700 hover:border-y hover:bg-gray-50"
          >
            <div className="rounded-xl border bg-[#EFF6FF] p-1.5 group-hover:bg-rose-50">
              <RiLogoutCircleRFill className="h-5 w-5 text-[#4B5563] group-hover:text-rose-400" />
            </div>
            <span className="ml-2 font-semibold">Logout</span>
          </Link>

          <div className="mt-5 border-t px-4 pb-3 pt-2 text-sm text-gray-400">
            This is a beta version, some features may not work as expected.{" "}
            <a href="#" className="text-blue-400 hover:underline">
              Get help
            </a>
          </div>
        </>
      )}
    </div>
  );
};
