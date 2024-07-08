"use client";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/clerk-react";
import { MdDesktopWindows } from "react-icons/md";
import { FaMobile, FaTablet } from "react-icons/fa";
import { IoIosRefresh } from "react-icons/io";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ComboboxDemo } from "@/components/component/combox";
import { useEffect, useState } from "react";

export default function Slate() {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const [userExistes, setUserExistes] = useState<boolean>(false);
  const [userDataLoaded, setUserDataLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (isLoaded) {
      (async () => {
        const userResponseDataJson = await fetch(
          `/api/find-user-exist?userId=${user?.id}`,
        );
        const userResponseData = await userResponseDataJson.json();
        if (userResponseData.success) {
          setUserExistes(true);
        }
        setUserDataLoaded(true);
      })();
    }
  }, [isLoaded]);

  if (isLoaded && userDataLoaded) {
    if (user?.publicMetadata.linkedinProfileId && userExistes) {
      return (
        <div className="flex h-full w-full">
          <div className="flex h-screen min-w-[300px] max-w-[300px] flex-col border border-t-4 border-t-[#FF560E] bg-[#FAFAFA]">
            <ScrollArea className="h-full w-full">
              <div className="flex flex-col items-center">
                <div className="flex w-full items-center justify-between border-b px-5 py-4 pr-8">
                  <IoIosRefresh className="h-7 w-7 cursor-pointer" />

                  <div className="cursor-pointer rounded-full border bg-white p-2.5">
                    <MdDesktopWindows className="h-4 w-4" />
                  </div>
                  <div className="cursor-pointer rounded-full border bg-white p-2.5">
                    <FaTablet className="h-4 w-4" />
                  </div>
                  <div className="cursor-pointer rounded-full border bg-white p-2.5">
                    <FaMobile className="h-4 w-4" />
                  </div>
                </div>

                <div className="flex w-full flex-col space-y-3 border-b px-5 py-4 text-[#666666]">
                  <h3 className="text-xs font-semibold">FONTS</h3>

                  <ComboboxDemo title="Selece Primary Font" />
                  <ComboboxDemo title="Selece Base Font" />
                </div>
                <div className="flex w-full flex-col space-y-3 border-b px-5 py-4 text-[#666666]">
                  <h3 className="text-xs font-semibold">COMPONENTS</h3>
                  <p className="text-xs">
                    you can customize what component to show if you dont want to
                    show a component switch the tab
                  </p>
                  <div className="flex items-center space-x-2 text-xs">
                    <Switch id="education" />
                    <Label htmlFor="education">Education</Label>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <Switch id="postion" />
                    <Label htmlFor="postion">Postion</Label>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <Switch id="projects" />
                    <Label htmlFor="projects">Projects</Label>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <Switch id="certificates" />
                    <Label htmlFor="certificates">Certificates</Label>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <Switch id="skill" />
                    <Label htmlFor="skill">Skill</Label>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <Switch id="lanquages" />
                    <Label htmlFor="lanquages">Languages</Label>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <Switch id="location" />
                    <Label htmlFor="location">Location</Label>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <Switch id="headline" />
                    <Label htmlFor="headline">Headline</Label>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <Switch id="bio" />
                    <Label htmlFor="bio">Bio</Label>
                  </div>
                </div>
              </div>
            </ScrollArea>
            <div className="flex w-full flex-col items-center justify-center space-y-3 border-t py-6 font-semibold">
              <button className="w-10/12 rounded-full bg-[#FF560E] py-1.5 text-white">
                Publish Site
              </button>
              <button className="w-10/12 rounded-full border bg-[#EEEEEE] py-1.5 text-[#666666]">
                Preview
              </button>
            </div>
          </div>
          <iframe
            src="https://slate.zapfolio.in/hello"
            className="h-screen w-full border-r border-t-4 border-[#FF560E]"
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
