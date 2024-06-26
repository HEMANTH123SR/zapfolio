import localFont from "next/font/local";
import { Poppins, Rammetto_One } from "next/font/google";

export const euclid = localFont({
  src: "../public/fonts/Euclid Circular A Regular.ttf",
  display: "swap",
});

export const ppEditorial = localFont({
    src: "../public/fonts/PPEditorialNew-Regular.ttf",
    display: "swap",
  });


export  const poppinsBold = Poppins({ subsets: ["latin"], weight: "500" });
export const poppinsExtraBold = Poppins({ subsets: ["latin"], weight: "600" });
export const rammetto_one = Rammetto_One({ subsets: ["latin"], weight: "400" });
