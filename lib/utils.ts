import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isValidLinkedInUrl(url: string): boolean {
  // Regular expression to match only LinkedIn profile URLs
  const linkedInProfileUrlPattern =
    /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-_/]+\/?$/;
  return linkedInProfileUrlPattern.test(url);
}
