import type { Metadata } from "next";
import "./globals.css";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from "@/components/ui/toaster"
import {
  ClerkProvider,
} from "@clerk/nextjs"
import { HeaderNav } from "@/components/component/headerNav"
import { Fotter } from "@/components/component/fotter"
import { euclid } from "@/lib/font"
export const metadata: Metadata = {
  title: "zapfolio",
  description: "create a porfolio website with linkedin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${euclid.className} flex flex-col justify-center items-center`}>
          <HeaderNav />

          {children}
          <SpeedInsights />
          <Analytics />
          <Toaster />
          <Fotter />
        </body>
      </html>
    </ClerkProvider>
  );
}
