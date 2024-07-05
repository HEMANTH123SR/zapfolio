import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isValidLinkedInUrl(url: string): boolean {
  // Regular expression to match LinkedIn profile and company URLs
  const linkedInUrlPattern =
    /^(https?:\/\/)?(www\.)?linkedin\.com\/(in|company)\/[a-zA-Z0-9-_/]+\/?$/;
  return linkedInUrlPattern.test(url);
}
