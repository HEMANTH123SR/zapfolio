"use client";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { IoMdMenu } from "react-icons/io";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Logo } from "@/components/component/logo";
import { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  PlusCircle,
  LayoutDashboard,
  Bell,
  UserRound,
  MessageSquare,
  Gem,
  BookmarkCheck,
  Mail,
  Instagram,
  Twitter,
  HeartHandshake,
  Hand,
  AlertCircle
} from "lucide-react";

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
    <Sheet>
      <header
        className={`sticky top-0 z-50 flex w-full max-w-[1550px] items-center justify-between px-3 py-3.5 text-black transition-colors duration-300 md:px-7 ${isScrolled
          ? "border-b bg-white bg-opacity-70 backdrop-blur-md backdrop-filter"
          : "bg-white"
          }`}
      >
        {/* left navigation consist of logo and navigation links  */}
        <div className="flex items-center justify-center space-x-8">
          <Link
            className="flex items-center justify-center space-x-2"
            href={"/"}
          >
            <Logo />
            <h1 className="cursor-pointer font-semibold">Zapfolio </h1>
          </Link>
          <div className="hidden xl:block">
            <div className="flex">
              <Link
                href={"/"}
                className="rounded-md px-4 py-2.5 text-sm font-semibold text-[#868686] hover:bg-slate-50"
              >
                Themes
              </Link>
              <Link
                href={"/"}
                className="rounded-md px-4 py-2.5 text-sm font-semibold text-[#868686] hover:bg-slate-50"
              >
                Dashboard
              </Link>
              <Link
                href={"/"}
                className="rounded-md px-4 py-2.5 text-sm font-semibold text-[#868686] hover:bg-slate-50"
              >
                Pricing
              </Link>
            </div>
          </div>
        </div>
        {/* NavigationMenuComponent */}
        <div className="hidden md:block xl:hidden">
          <div className="flex">
            <Link
              href={"/"}
              className="rounded-md px-4 py-2.5 text-sm font-semibold text-[#868686] hover:bg-slate-50"
            >
              Themes
            </Link>
            <Link
              href={"/"}
              className="rounded-md px-4 py-2.5 text-sm font-semibold text-[#868686] hover:bg-slate-50"
            >
              Dashboard
            </Link>
            <Link
              href={"/"}
              className="rounded-md px-4 py-2.5 text-sm font-semibold text-[#868686] hover:bg-slate-50"
            >
              Pricing
            </Link>
          </div>
        </div>
        {/* right navigation link consist of auth */}
        <div className="flex space-x-3">
          <div className="hidden md:flex">
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
          </div>
          <div className="flex md:hidden">
            <SheetTrigger>
              <IoMdMenu className="text-3xl text-black" />
            </SheetTrigger>
          </div>
        </div>
      </header>
      <SheetContent side={"left"} className="w-full max-w-96 md:hidden">
        <SheetHeader className="mr-6">
          <SheetTitle className="flex justify-center bg-[#FF560E] py-3">
            {/* <img src="/zapfolio-logo/1.png" className="w-4/6" /> */}
          </SheetTitle>
          <SheetDescription>
            Create Your Portfolio Website in a Zap!
          </SheetDescription>
        </SheetHeader>
        <ScrollArea>
          <div className={`mt-4 flex flex-col space-y-6 sm:space-y-5 h-[66vh]`}>
            <Link
              href={"/user"}
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              <UserRound className="h-6 w-6 text-gray-500" />
              <span className="ml-2">Profile</span>
            </Link>
            <Link
              href={"/themes"}
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              <PlusCircle className="h-6 w-6 text-gray-500" />
              <span className="ml-2">Themes</span>
            </Link>
            <Link
              href={"/dashboard"}
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              <LayoutDashboard className="h-6 w-6 text-gray-500" />
              <span className="ml-2">Dashboard</span>
            </Link>
            <Link
              href={"/pre"}
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              <Gem className="h-6 w-6 text-gray-500" />
              <span className="ml-2">Premimum</span>
            </Link>
            <Link
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
              href={"/notifications"}
            >
              <Bell className="h-6 w-6 text-gray-500" />

              <span className="ml-2">Notifications</span>
            </Link>

            <Link
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
              href={"/bookmarks"}
            >
              <BookmarkCheck className="h-6 w-6 text-gray-500" />
              <span className="ml-2">Bookmarks</span>
            </Link>
            <Link
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
              href={"/faq"}
            >
              <MessageSquare className="h-6 w-6 text-gray-500" />
              <span className="ml-2">FAQ</span>
            </Link>
            <Link
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
              href={"/help"}
            >
              <HeartHandshake className="h-6 w-6 text-gray-500" />
              <span className="ml-2">Help</span>
            </Link>
            <Link
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
              href={"/help"}
            >
              <Hand className="h-6 w-6 text-gray-500" />
              <span className="ml-2">Support</span>
            </Link>
            <Link
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
              href={"/help"}
            >
              <AlertCircle className="h-6 w-6 text-gray-500" />
              <span className="ml-2">About Us</span>
            </Link>
          </div>

          <ScrollBar orientation="vertical" />
        </ScrollArea>

        <SheetFooter>
          <div className="mt-auto  flex w-full h-full justify-around items-center border-t border-gray-200 px-4 pt-7">
            <a
              className="flex items-center text-gray-700 hover:text-gray-500"
              href="#"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              className="flex items-center text-gray-700 hover:text-gray-500"
              href="https://twitter.com"
              target="_blank"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              className="flex items-center text-gray-700 hover:text-gray-500"
              href="https://www.instagram.com"
              target="_blank"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
