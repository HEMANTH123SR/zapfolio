import { ScrollArea } from "@/components/ui/scroll-area";

export default function RootLayout() {
    return (
        <div className="flex h-full w-full">
            <div className="flex h-screen min-w-[300px] max-w-[300px]  border bg-[#FAFAFA]  border-t-4 border-t-[#FF560E]"></div>

            {/* <ScrollArea className="h-screen w-full border-b border-t-4 border-t-[#FF560E]">
          
            </ScrollArea> */}
            <iframe src="https://slate.zapfolio.in/hello" className="h-screen w-full border-r border-t-4 border-[#FF560E]" />

        </div>
    );
}
