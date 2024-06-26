

export default function RootLayout() {
    return (
        <div className="flex h-full w-full">
            <div className="flex h-screen min-w-[300px] max-w-[300px]  border bg-[#FAFAFA]  border-t-4 border-t-[#FF560E]"></div>
            <iframe src="https://bentodark.zapfolio.in/hello" className="h-screen w-full border-r border-t-4 border-[#FF560E]" />

        </div>
    );
}