import type { Metadata } from "next";
import "./globals.css";
import { HeaderNav } from "@/components/component/headerNav"
import { Fotter } from "@/components/component/fotter"
import localFont from "next/font/local"

const localfont = localFont({
  src: './fonts/Euclid Circular A Regular.ttf',
  display: 'swap'
})

export const metadata: Metadata = {
  title: "webpolio",
  description: "create a porfolio website with linkedin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${localfont.className} flex flex-col justify-center items-center`}>
        <HeaderNav />
        {children}
        <Fotter />
      </body>
    </html>
  );
}
