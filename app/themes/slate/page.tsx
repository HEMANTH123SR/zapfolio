"use client";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { ScreenComponent } from "@/components/component/themeScreenComponent";


const Page = ({ children }: { children: React.ReactNode }) => {
    const { user, isLoaded } = useUser();
    const [userExistes, setUserExistes] = useState<boolean>(false);
    const [userDataLoaded, setUserDataLoaded] = useState<boolean>(false);
    const [isDesktop, setIsDesktop] = useState(true);
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
    if (isLoaded && user) {
        return (
            <div className="relative h-screen w-full">
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
        );
    }

    return <div>loading</div>

};

export default Page;
