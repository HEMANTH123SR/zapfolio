"use client";
import { useState, useEffect } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArticlesEditor } from "@/components/editorComponents/articles";
import { AwardEditor } from "@/components/editorComponents/award";
import { CertEditor } from "@/components/editorComponents/certification";
import { ClientEditor } from "@/components/editorComponents/client";
import { CustomSectionEditor } from "@/components/editorComponents/custom-section";
import { EducationEditor } from "@/components/editorComponents/education";
import { ExperienceEditor } from "@/components/editorComponents/experience";
import { HackathonEditor } from "@/components/editorComponents/hackathon";
import { MediaEditor } from "@/components/editorComponents/media";
import { PersonalInfo } from "@/components/editorComponents/personal-info";
import { ProfessionalInfo } from "@/components/editorComponents/professional-detail";
import { ProjectEditor } from "@/components/editorComponents/project";
const tabs: string[] = [
    "Personal Info",
    "Professional Details",
    "Education",
    "Experience",
    "Project",
    "Articles",
    "Hackathon",
    "Award",
    "Certification",
    "Client",
    "Custom Section",
    "Media",
    "",
];

const TabsComponent: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [visibleTabs, setVisibleTabs] = useState<string[]>([]);
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        updateVisibleTabs();
        window.addEventListener("resize", updateVisibleTabs);
        return () => window.removeEventListener("resize", updateVisibleTabs);
    }, [startIndex]);

    const updateVisibleTabs = () => {
        const containerWidth = window.innerWidth;
        const tabWidth = 120; // Approximate width of each tab
        const visibleCount = Math.floor(containerWidth / tabWidth);
        setVisibleTabs(tabs.slice(startIndex, startIndex + visibleCount));
    };

    const handleNext = () => {
        setStartIndex((prev) =>
            Math.min(prev + 1, tabs.length - visibleTabs.length),
        );
    };

    const handlePrev = () => {
        setStartIndex((prev) => Math.max(prev - 1, 0));
    };

    useEffect(() => {
        console.log("active tab", activeTab);
    }, [activeTab]);
    return (
        <div className="flex h-screen w-full flex-col overflow-hidden">
            <div className="relative w-full">
                <div className="flex items-center justify-between">
                    <button
                        className="z-10 border bg-white p-2 text-gray-600 shadow-md hover:text-gray-800"
                        onClick={handlePrev}
                        disabled={startIndex === 0}
                    >
                        <IoChevronBackOutline size={20} />
                    </button>
                    <div className="flex overflow-hidden">
                        {visibleTabs.map((tab, index) => (
                            <button
                                key={startIndex + index}
                                className={`whitespace-nowrap px-4 py-2 text-sm transition-all duration-300 ease-in-out ${startIndex + index === activeTab
                                        ? "border-b-2 border-[#FF560E] text-[#FF560E]"
                                        : "text-gray-600 hover:text-gray-800"
                                    } ${index == tabs.length && "pl-6"} `}
                                onClick={() => setActiveTab(startIndex + index)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <button
                        className="z-10 border bg-white p-2 text-gray-600 shadow-md hover:text-gray-800"
                        onClick={handleNext}
                        disabled={startIndex + visibleTabs.length >= tabs.length}
                    >
                        <IoChevronForwardOutline size={20} />
                    </button>
                </div>
            </div>
            <div className="border">
                <ScrollArea className="h-[90vh]">
                    <ShowTheActiveTabComponent activeTab={activeTab} />
                </ScrollArea>
            </div>
        </div>
    );
};

export default TabsComponent;

const ShowTheActiveTabComponent = ({ activeTab }: { activeTab: number }) => {
    switch (activeTab) {
        case 0:
            return <PersonalInfo />;
        case 1:
            return <ProfessionalInfo />;
        case 2:
            return <EducationEditor />;
        case 3:
            return <ExperienceEditor />;
        case 4:
            return <ProjectEditor />;
        case 5:
            return <ArticlesEditor />;
        case 6:
            return <HackathonEditor />;
        case 7:
            return <AwardEditor />;
        case 8:
            return <CertEditor />;
        case 9:
            return <ClientEditor />;
        case 10:
            return <CustomSectionEditor />;
        case 11:
            return <MediaEditor />;
        default:
            return null
    }
};
