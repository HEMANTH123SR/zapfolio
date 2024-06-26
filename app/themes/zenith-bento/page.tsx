import { ScrollArea } from "@/components/ui/scroll-area";
import { ZenithBento } from "@/themes-pages/zenith-bento";

export default function RootLayout() {
    return (
        <div className="flex h-full w-full ">
            <div className="flex h-screen min-w-[300px] max-w-[300px]  border bg-[#FAFAFA]  border-t-4 border-t-[#FF560E]"></div>
            <ScrollArea className="h-screen flex w-full border-b border-t-4 border-t-[#FF560E]">
                <ZenithBento />

            </ScrollArea>

        </div>
    );
}
