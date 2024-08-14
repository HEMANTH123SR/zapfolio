"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/clerk-react";
import { usePathname } from "next/navigation";
// custom components
import { Sidebar } from "@/components/component/sideBar";
import { ScreenComponent } from "@/components/component/themeScreenComponent";
import { EditorComponent } from "@/components/component/themeEditorComponent";

export default function Slate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const pathName = usePathname();
  const [userExistes, setUserExistes] = useState<boolean>(false);
  const [userDataLoaded, setUserDataLoaded] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState(true);
  console.log("pathname ", pathName);
  console.log("pathname state", pathName === "/themes/slate");
  const toggleDevice = () => {
    setIsDesktop(!isDesktop);
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
          {pathName === "/themes/slate" ? (
            <div className="relative h-screen w-full">
              <EditorComponent />
              <ScreenComponent
                isDesktop={isDesktop}
                link={`https://slate.zapfolio.in/${user.id}`}
                toggleDevice={toggleDevice}
              />
              <iframe
                src={`https://slate.zapfolio.in/${user.id}`}
                className={`${!isDesktop && "border"} hidden h-screen md:block`}
                style={{
                  width: isDesktop ? "100%" : "375px",
                  margin: "auto",
                }}
              />
            </div>
          ) : (
            <div>{children}</div>
          )}
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
