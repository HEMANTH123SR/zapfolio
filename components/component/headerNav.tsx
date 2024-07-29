"use client";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NavigationMenuComponent } from "@/components/component/navigation-menu";
import { Logo } from "@/components/component/logo";
import { useState, useEffect } from "react";

export const HeaderNav = () => {
  const pathName = usePathname();
  const splitedPathName = pathName.split("/");
  const applyThemeEffect =
    splitedPathName[1] === "themes" && splitedPathName.length === 3;
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (applyThemeEffect) {
    return <></>;
  }

  return (
    <header
      className={`sticky top-0 z-50 flex w-full max-w-[1550px] items-center justify-between px-7 py-3.5 text-black transition-colors duration-300 ${isScrolled
          ? "border-b bg-white bg-opacity-70 backdrop-blur-md backdrop-filter"
          : "bg-white"
        }`}
    >
      {/* left navigation consist of logo and navigation links  */}
      <div className="flex items-center justify-center space-x-8">
        <Link className="flex items-center justify-center space-x-2" href={"/"}>
          <Logo />
          <h1 className="cursor-pointer font-semibold">Zapfolio </h1>
        </Link>
        <div className="hidden md:block">
          {/* <NavigationMenuComponent /> */}
          <div className="flex space-x-6">
            <Link
              href={"/"}
              className="rounded-md px-4 py-2.5 text-sm font-semibold text-[#868686]  hover:bg-slate-50"
            >
              Themes
            </Link>
            <Link
              href={"/"}
              className="rounded-md px-4 py-2.5 text-sm font-semibold text-[#868686]  hover:bg-slate-50"
            >
              Dashboard
            </Link>
            <Link
              href={"/"}
              className="rounded-md px-4 py-2.5 text-sm font-semibold text-[#868686]  hover:bg-slate-50"
            >
              Pricing
            </Link>
          </div>
        </div>
      </div>
      {/* right navigation link consist of auth */}

      <SignedOut>
        <Link
          href={"https://accounts.zapfolio.in/sign-up"}
          className="rounded-lg border bg-white px-2.5 py-1 font-semibold text-black"
        >
          Sign Up
        </Link>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
};
