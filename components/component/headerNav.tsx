"use client";
import { SignedIn, SignedOut, UserButton, } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NavigationMenuComponent } from "@/components/component/navigation-menu"

import { Logo } from "@/components/component/logo";
export const HeaderNav = () => {
  const pathName = usePathname();
  const splitedPathName = pathName.split("/");
  const applyThemeEffect =
    splitedPathName[1] === "themes" && splitedPathName.length === 3;

  if (applyThemeEffect) {
    return (<></>)
  }

  return (
    <header className="flex w-full max-w-[1550px] items-center justify-between p-5 px-7 text-black">
      {/* left navigation consist of logo and navigation links  */}
      <div className="flex items-center justify-center space-x-8">
        <Link className="flex items-center justify-center space-x-2" href={"/"}>
          <Logo />
          <h1 className="cursor-pointer font-semibold">Zapfolio </h1>
        </Link>
        <div className="hidden md:block ">
          <NavigationMenuComponent />
        </div>
      </div>
      {/* right navigation link consist of auth */}

      <SignedOut>
        <Link href={process.env.NEXT_PUBLIC_INSTANCE === "local" ? "https://social-hagfish-50.accounts.dev/sign-up" : "https://accounts.zapfolio.in/sign-up"} className="bg-white text-black border px-2.5 py-1 font-semibold rounded-lg ">
          Sign Up
        </Link>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
};





