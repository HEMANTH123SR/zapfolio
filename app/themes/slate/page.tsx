import { ScrollArea } from "@/components/ui/scroll-area";
import { Slate } from "@/themes-pages/slate"
export default function RootLayout() {
    return (
        <div className="flex h-full ">
            <div className="flex h-screen min-w-[300px] max-w-[300px]  border bg-[#FAFAFA]  border-t-4 border-t-[#FF560E]"></div>
            <div className="flex flex-col">
                <ScrollArea className="h-screen w-full border-b border-t-4 border-t-[#FF560E]">
                    <Slate />
                </ScrollArea>
            </div>
        </div>
    );
}
