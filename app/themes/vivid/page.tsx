export default function RootLayout() {
    return (
        <div className="flex h-full w-full">
            <div className="flex h-screen min-w-[300px] max-w-[300px]  border bg-[#FAFAFA]  border-t-4 border-t-[rgb(255,86,14)]"></div>
            <iframe src="https://vivid.zapfolio.in/hello" className="h-screen w-full border-r border-t-4 border-[#FF560E]" />

        </div>
    );
}
