import Link from "next/link";
import { Logo } from "@/components/component/logo";
export const HeaderNav = () => {
  return (
    <header className="flex w-full max-w-[1550px] justify-between items-center px-7 p-5 text-black">
      {/* left navigation consist of logo and navigation links  */}
      <div className="flex justify-center items-center space-x-14">
        <Link className="flex justify-center items-center space-x-2" href={"/"}>
          <Logo />
          <h1 className="cursor-pointer  font-semibold ">Webpolio </h1>
        </Link>
        <nav className="flex justify-center items-center text-sm space-x-4 font-[600] text-[#868686]">
          <Link href={"/examples"}>Examples</Link>
          <Link href={"/themes"}>Themes</Link>
          <Link href={"/pricing"}>Pricing</Link>
        </nav>
      </div>
      {/* right navigation link consist of auth */}
      <button className="bg-white text-black border px-2.5 py-1 font-semibold rounded-lg ">
        Sign Up
      </button>
    </header>
  );
};
