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
      <div className="flex items-center justify-center space-x-14">
        <Link className="flex items-center justify-center space-x-2" href={"/"}>
          <Logo />
          <h1 className="cursor-pointer font-semibold">Zapfolio </h1>
        </Link>
        {/* <nav className="hidden items-center justify-center space-x-4 text-sm font-[600] text-[#868686] sm:flex">
          <Link href={"/examples"}>Examples</Link>
          <Link href={"/themes"}>Themes</Link>
          <Link href={"/pricing"}>Pricing</Link>
        </nav> */}
        <div className="">
          <NavigationMenuComponent />
        </div>
      </div>
      {/* right navigation link consist of auth */}

      <SignedOut>
        <Link href={"https://social-hagfish-50.accounts.dev/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A3000%2F"} className="bg-white text-black border px-2.5 py-1 font-semibold rounded-lg ">
          Sign Up
        </Link>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
};





