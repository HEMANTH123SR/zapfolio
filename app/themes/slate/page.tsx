"use client";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/clerk-react";
import { ThemeType } from "@/lib/types/themes.types";
import { MdDesktopWindows } from "react-icons/md";
import { FaMobile, FaTablet } from "react-icons/fa";
import { IoIosRefresh } from "react-icons/io";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";

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
  const [switchStates, setSwitchStates] = useState<ThemeType>({
    educations: true,
    position: true,
    projects: true,
    certifications: true,
    skills: true,
    languages: true,
    headline: true,
    summary: true,
    courses: true,
    geo: true,
    resume: true,
  });
  const deviceDimensions: Record<
    DeviceType,
    { width: string; height: string }
  > = {
    desktop: { width: "100%", height: "100vh" },
    tablet: { width: "768px", height: "1024px" },
    mobile: { width: "375px", height: "667px" },
  };
  const handleSwitchChange = (name: string) => (checked: boolean) => {
    setSwitchStates((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };
  useEffect(() => {
    if (isLoaded) {
      (async () => {
        const userResponseDataJson = await fetch(
          `/api/get-user-data?userId=${user?.id}`,
        );
        const userResponseData = await userResponseDataJson.json();
        if (userResponseData.success) {
          setUserExistes(true);
          setSwitchStates(
            userResponseData.data.themesData.slate.componentsToShow,
          );
        }
        setUserDataLoaded(true);
      })();
    }
  }, [isLoaded, user?.id]);

  const handleSaveChanges = async () => {
    if (!user?.id) {
      toast({
        title: "Error",
        description: "User ID not found",
        variant: "destructive",
      });
      return;
    }

    setIsSaving(true);
    try {
      const response = await fetch("/api/update-themes-schema", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user?.id,
          themeName: "slate",
          componentsToShow: switchStates,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Success",
          description: "Changes saved successfully",
          variant: "default",
        });
        console.log("Changes saved successfully");
        setReloadIframe((prev) => prev + 1); // Trigger iframe reload
      } else {
        toast({
          title: "Failed to save changes",
          description: data.message,
          variant: "destructive",
        });
      }
    } catch (error: any) {
      toast({
        title: "Error saving changes:",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoaded && userDataLoaded) {
    if (user?.publicMetadata.linkedinProfileId && userExistes) {
      return (
        <div className="flex h-full w-full">
          <div className="flex h-screen min-w-[300px] max-w-[300px] flex-col border border-t-4 border-t-[#FF560E] bg-[#FAFAFA]">
            <ScrollArea className="h-full w-full">
              <div className="flex flex-col items-center">
                <div className="flex w-full items-center justify-between border-b px-5 py-4 pr-8">
                  <div className="flex cursor-pointer flex-col items-center justify-center">
                    <IoIosRefresh className="h-7 w-7" />
                  </div>
                  <div
                    className="cursor-pointer rounded-full border bg-white p-2.5"
                    onClick={() => setSelectedDevice("desktop")}
                  >
                    <MdDesktopWindows className="h-4 w-4" />
                  </div>
                  <div
                    className="cursor-pointer rounded-full border bg-white p-2.5"
                    onClick={() => setSelectedDevice("tablet")}
                  >
                    <FaTablet className="h-4 w-4" />
                  </div>
                  <div
                    className="cursor-pointer rounded-full border bg-white p-2.5"
                    onClick={() => setSelectedDevice("mobile")}
                  >
                    <FaMobile className="h-4 w-4" />
                  </div>
                </div>

                <div className="flex w-full flex-col space-y-3 border-b px-5 py-4 text-[#666666]">
                  <span className="text-xs">
                    To change details like About, Education, Position, and more,
                    go to the dashboard.
                  </span>
                </div>
                <div className="flex w-full flex-col space-y-3 border-b px-5 py-4 text-[#666666]">
                  <h3 className="text-xs font-semibold">COMPONENTS</h3>
                  <p className="text-xs">
                    you can customize what component to show if you dont want to
                    show a component switch the tab
                  </p>
                  <div className="flex items-center space-x-2 text-xs">
                    <Switch
                      id="education"
                      checked={switchStates.educations}
                      onCheckedChange={handleSwitchChange("educations")}
                    />
                    <Label htmlFor="education">Education</Label>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <Switch
                      id="postion"
                      checked={switchStates.position}
                      onCheckedChange={handleSwitchChange("position")}
                    />
                    <Label htmlFor="postion">Postion</Label>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <Switch
                      id="projects"
                      checked={switchStates.projects}
                      onCheckedChange={handleSwitchChange("projects")}
                    />
                    <Label htmlFor="projects">Projects</Label>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <Switch
                      id="certificates"
                      checked={switchStates.certifications}
                      onCheckedChange={handleSwitchChange("certifications")}
                    />
                    <Label htmlFor="certificates">Certifications</Label>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <Switch
                      id="skill"
                      checked={switchStates.skills}
                      onCheckedChange={handleSwitchChange("skills")}
                    />
                    <Label htmlFor="skill">Skills</Label>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <Switch
                      id="lanquages"
                      checked={switchStates.languages}
                      onCheckedChange={handleSwitchChange("languages")}
                    />
                    <Label htmlFor="lanquages">Languages</Label>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <Switch
                      id="location"
                      checked={switchStates.geo}
                      onCheckedChange={handleSwitchChange("geo")}
                    />
                    <Label htmlFor="location">Location</Label>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <Switch
                      id="headline"
                      checked={switchStates.headline}
                      onCheckedChange={handleSwitchChange("headline")}
                    />
                    <Label htmlFor="headline">Headline</Label>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <Switch
                      id="bio"
                      checked={switchStates.summary}
                      onCheckedChange={handleSwitchChange("summary")}
                    />
                    <Label htmlFor="bio">bio</Label>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <Switch
                      id="courses"
                      checked={switchStates.courses}
                      onCheckedChange={handleSwitchChange("courses")}
                    />
                    <Label htmlFor="courses">Courses</Label>
                  </div>
                </div>
              </div>
            </ScrollArea>
            <div className="flex w-full flex-col items-center justify-center space-y-3 border-t py-6 font-semibold">
              <button className="w-10/12 rounded-full bg-[#FF560E] py-1.5 text-white">
                Published Link
              </button>
              <button
                className="w-10/12 rounded-full border bg-[#EEEEEE] py-1.5 text-[#666666]"
                onClick={handleSaveChanges}
              >
                {isSaving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>

          <iframe
            key={reloadIframe}
            src={`https://slate.zapfolio.in/${user.id}`}
            className={`${selectedDevice === "desktop" ? "" : "border"} h-screen`}
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
