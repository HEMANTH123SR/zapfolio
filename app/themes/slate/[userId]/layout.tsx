import { ScrollArea } from "@/components/ui/scroll-area";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex h-full ">
            <div className="flex h-screen w-[700px] border bg-[#FAFAFA]  border-t-4 border-t-[#FF560E]"></div>
            <div className="flex flex-col">
                <ScrollArea className="h-screen w-full border-b border-t-4 border-t-[#FF560E]">
                    {children}
                </ScrollArea>
            </div>
        </div>
    );
}
