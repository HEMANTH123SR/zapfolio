"use client";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/clerk-react";
import { ThemeType } from "@/lib/types/themes.types";
import { MdDesktopWindows } from "react-icons/md";
import { FaMobile, FaTablet } from "react-icons/fa";
import { HiMiniHome } from "react-icons/hi2";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";

export default function Slate() {
  const { user, isLoaded } = useUser();
  const { toast } = useToast();
  const router = useRouter();
  type DeviceType = "desktop" | "tablet" | "mobile";
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [reloadIframe, setReloadIframe] = useState(0);
  const [userExistes, setUserExistes] = useState<boolean>(false);
  const [userDataLoaded, setUserDataLoaded] = useState<boolean>(false);
  const [selectedDevice, setSelectedDevice] = useState<DeviceType>("desktop");

  const deviceDimensions: Record<
    DeviceType,
    { width: string; height: string }
  > = {
    desktop: { width: "100%", height: "100vh" },
    tablet: { width: "768px", height: "1024px" },
    mobile: { width: "375px", height: "667px" },
  };

  useEffect(() => {
    if (isLoaded) {
      (async () => {
        const userResponseDataJson = await fetch(
          `/api/get-user-data?userId=${user?.id}`,
        );
        const userResponseData = await userResponseDataJson.json();
        if (userResponseData.success) {
          console.log("user data exists");
          setUserExistes(true);
        }
        setUserDataLoaded(true);
      })();
    }
  }, [isLoaded, user?.id]);

  if (isLoaded && userDataLoaded) {
    if (user?.publicMetadata.linkedinProfileId && userExistes) {
      console.log(`url \n https://slate.zapfolio.in/${user.id} `);
      return (
        <div className="flex max-h-screen w-full">
          <iframe
            key={reloadIframe}
            src={`https://slate.zapfolio.in/${user.id}`}
            className={`${selectedDevice === "desktop" ? "" : "border"} hidden h-screen md:block`}
            style={{
              width: deviceDimensions[selectedDevice].width,
              margin: "auto",
            }}
          />
        </div>
      );
    }
    router.push("/linkedin-url?t=slate");
  }

  return (
    <div className="flex h-screen w-full">
      <svg className="mr-3 h-5 w-5 animate-spin" viewBox="0 0 24 24"></svg>
    </div>
  );
}
