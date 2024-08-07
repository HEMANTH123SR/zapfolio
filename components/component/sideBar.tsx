"use client";
import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/component/logo";
import {
  MdDashboard,
  MdPrivacyTip,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

import {
  RiDashboardFill,
  RiSettings3Fill,
  RiLogoutCircleRFill,
} from "react-icons/ri";
import { FaMoneyBillWave, FaChartPie } from "react-icons/fa";

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <div
      className={`border-r bg-white shadow-lg transition-all duration-300 ${isCollapsed ? "w-16" : "w-96"}`}
    >
      <div className="flex items-center justify-between border-b bg-[#F5F6F8] p-4">
        {!isCollapsed && (
          <Link
            className="flex items-center justify-center space-x-2"
            href={"/"}
          >
            <Logo />
            <h1 className="cursor-pointer font-semibold">Zapfolio </h1>
          </Link>
        )}
        <button
          onClick={toggleSidebar}
          className="rounded-full p-2 hover:bg-gray-200"
        >
          {isCollapsed ? (
            <MdKeyboardDoubleArrowLeft className="text-2xl text-[#4B5563]" />
          ) : (
            <MdKeyboardDoubleArrowRight className="text-2xl text-[#4B5563]" />
          )}
        </button>
      </div>

      <nav className="mt-4">
        {!isCollapsed && (
          <div className="px-4 py-2">
            <h2 className="text-sm font-semibold text-black">Portfolio</h2>
          </div>
        )}
        <Link
          href="/dashboard"
          className={`flex items-center space-x-5 ${isCollapsed ? "justify-center" : "px-4"} py-2 text-gray-700 hover:border-y hover:bg-gray-100`}
        >
          <div className="rounded-xl border bg-[#EFF6FF] p-1.5">
            <RiDashboardFill className="h-5 w-5 text-[#4B5563]" />
          </div>
          {!isCollapsed && (
            <span className="ml-2 font-semibold">Dashboard</span>
          )}
        </Link>
        <Link
          href="/subscription"
          className={`flex items-center space-x-5 ${isCollapsed ? "justify-center" : "px-4"} py-2 text-gray-700 hover:border-y hover:bg-gray-100`}
        >
          <div className="rounded-xl border bg-[#EFF6FF] p-1.5">
            <FaMoneyBillWave className="h-5 w-5 text-[#4B5563]" />
          </div>
          {!isCollapsed && (
            <span className="ml-2 font-semibold">Subscription</span>
          )}
        </Link>
        <Link
          href="/analytics"
          className={`flex items-center space-x-5 ${isCollapsed ? "justify-center" : "px-4"} py-2 text-gray-700 hover:border-y hover:bg-gray-100`}
        >
          <div className="rounded-xl border bg-[#EFF6FF] p-1.5">
            <FaChartPie className="h-5 w-5 text-[#4B5563]" />
          </div>
          {!isCollapsed && (
            <span className="ml-2 font-semibold">Analytics</span>
          )}
        </Link>
        <Link
          href="/settings"
          className={`flex items-center space-x-5 ${isCollapsed ? "justify-center" : "px-4"} py-2 text-gray-700 hover:border-y hover:bg-gray-100`}
        >
          <div className="rounded-xl border bg-[#EFF6FF] p-1.5">
            <RiSettings3Fill className="h-5 w-5 text-[#4B5563]" />
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
            className="flex items-center space-x-5 px-4 py-2 text-gray-700 hover:border-y hover:bg-gray-100"
          >
            <div className="rounded-xl border bg-[#EFF6FF] p-1.5">
              <FaChartPie className="h-5 w-5 text-[#4B5563]" />
            </div>
            <span className="ml-2 font-semibold">Privacy & Security</span>
          </Link>
          <Link
            href="/logout"
            className="flex items-center space-x-5 px-4 py-2 text-gray-700 hover:border-y hover:bg-gray-100"
          >
            <div className="rounded-xl border bg-[#EFF6FF] p-1.5">
              <RiLogoutCircleRFill className="h-5 w-5 text-[#4B5563]" />
            </div>
            <span className="ml-2 font-semibold">Logout</span>
          </Link>

          <div className="mt-5 border-t px-4 pb-3 pt-2 text-sm text-gray-500">
            This is a beta version, some features may not work as expected.{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Get help
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;

//D2D4D8
