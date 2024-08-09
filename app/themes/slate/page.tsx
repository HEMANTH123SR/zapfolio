"use client";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/clerk-react";
import { Sidebar } from "@/components/component/sideBar";
import { ThemeType } from "@/lib/types/themes.types";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { HiSquare3Stack3D } from "react-icons/hi2";
import { IoMdImage } from "react-icons/io";
import { FaGraduationCap, FaMobile } from "react-icons/fa";
import { MdDashboardCustomize, MdDesktopWindows } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { RxExternalLink } from "react-icons/rx";
import { FaDesktop, FaMobileAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
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
  const [isDesktop, setIsDesktop] = useState(true);

  const toggleDevice = () => {
    setIsDesktop(!isDesktop);
  };

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
        <div className="flex h-screen max-h-screen w-full">
          <Sidebar />
          <div className="relative h-screen w-full">
            <div className="absolute bottom-8 left-4 rounded-xl border bg-white shadow">
              <div className="flex items-center space-x-2.5 px-4 py-2">
                <div
                  className={`cursor-pointer rounded-xl border bg-white p-1.5`}
                >
                  <HiSquare3Stack3D className={`h-6 w-6 text-[#FF560E]`} />
                </div>
                <div className="h-5 w-0.5 rounded-xl bg-[#DADDE2]"></div>
                {/* detailed */}
                <div
                  className={`cursor-pointer rounded-xl border bg-white p-1.5`}
                >
                  <IoMdImage className={`h-6 w-6 text-[#4B5563]`} />
                </div>
                <div
                  className={`cursor-pointer rounded-xl border bg-white p-1.5`}
                >
                  <FaGraduationCap className={`h-6 w-6 text-[#4B5563]`} />
                </div>
                <div
                  className={`cursor-pointer rounded-xl border bg-white p-1.5`}
                >
                  <MdDashboardCustomize className={`h-6 w-6 text-[#4B5563]`} />
                </div>
                <div className="h-5 w-0.5 rounded-xl bg-[#DADDE2]"></div>
                {/* sociale */}
                <div
                  className={`cursor-pointer rounded-xl border bg-white p-1.5`}
                >
                  <IoLogoGithub className={`h-6 w-6 text-[#4B5563]`} />
                </div>
                <div
                  className={`cursor-pointer rounded-xl border bg-white p-1.5`}
                >
                  <FaYoutube className={`h-6 w-6 text-[#4B5563]`} />
                </div>
                <div
                  className={`cursor-pointer rounded-xl border bg-white p-1.5`}
                >
                  <MdDashboardCustomize className={`h-6 w-6 text-[#4B5563]`} />
                </div>
              </div>
            </div>
            <div className="absolute bottom-8 right-8 rounded-xl border bg-white shadow">
              <div className="flex items-center space-x-2.5 px-2 py-2">
                <div
                  className="flex items-center bg-gray-200 rounded-xl p-1 cursor-pointer"
                  onClick={toggleDevice}
                  style={{ width: '100px' }}
                >
                  {/* Desktop Icon */}
                  <div className={`flex items-center justify-center w-1/2 h-8 rounded-xl ${isDesktop ? 'bg-white' : ''}`}>
                    <MdDesktopWindows className={`text-xl ${isDesktop ? 'text-black' : 'text-gray-400'}`} />
                  </div>

                  {/* Mobile Icon */}
                  <div className={`flex items-center justify-center w-1/2 h-8 rounded-xl ${!isDesktop ? 'bg-white' : ''}`}>
                    <FaMobile className={`text-xl ${!isDesktop ? 'text-black' : 'text-gray-400'}`} />
                  </div>
                </div>
                <div className="h-5 w-0.5 rounded-xl bg-[#DADDE2]"></div>
                {/* preview link */}
                <div
                  className={`cursor-pointer rounded-xl border bg-white p-1.5`}
                >
                  <RxExternalLink className={`h-6 w-6 text-[#4B5563]`} />
                </div>
              </div>
            </div>
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
        </div>
      );
    }
    router.push("/linkedin-url?t=slate");
  }

  return (
    <div className="flex h-screen w-full">
      <svg className="mr-3 h-6 w-6 animate-spin" viewBox="0 0 24 24"></svg>
    </div>
  );
}
