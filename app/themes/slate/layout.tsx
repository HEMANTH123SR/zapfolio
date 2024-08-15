"use client";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/clerk-react";
import { usePathname } from "next/navigation";
import { Sidebar } from "@/components/component/sideBar";
import { Skeleton } from "@/components/ui/skeleton";

export default function Slate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const pathName = usePathname();
  if (isLoaded) {
    if (user?.publicMetadata.linkedinProfileId) {
      return (
        <div className="flex h-screen max-h-screen w-full">
          <Sidebar />
          {children}
        </div>
      );
    }
    router.push(`${pathName}/linkedin-url`);
  }
  return (
    <div className="flex h-screen w-screen">
      <Skeleton className="h-full w-64 flex-shrink-0">
        <div className="p-4">
          <Skeleton className="mb-6 h-8 w-32" />
          <Skeleton className="mb-2 h-4 w-full" />
          <Skeleton className="mb-2 h-4 w-full" />
          <Skeleton className="mb-2 h-4 w-full" />
          <Skeleton className="mb-2 h-4 w-full" />
        </div>
      </Skeleton>
      <div className="flex-grow p-16">
        <Skeleton className="mb-4 h-32 w-32 rounded-lg" />
        <Skeleton className="mb-4 h-10 w-64" />
        <Skeleton className="mb-2 h-4 w-full max-w-2xl" />
        <Skeleton className="mb-6 h-4 w-full max-w-2xl" />
        <Skeleton className="mb-4 h-6 w-32" />
        <Skeleton className="mb-2 h-4 w-full max-w-md" />
        <Skeleton className="mb-2 h-4 w-full max-w-md" />
      </div>
    </div>
  );
}
