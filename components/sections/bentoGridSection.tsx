import { FaUserLarge } from "react-icons/fa6";
export const BentoGridSection = () => {
    return (
        <div className=" flex flex-col justify-between items-center mx-8">
            <h2 className="text-5xl font-medium">
                What Does Webpolio offer for you
            </h2>
            {/* F6F6F8 */}
            <div className="flex justify-center items-center w-full my-12">
                <div className="flex space-x-4 w-9/12 h-96">
                    <div className="h-[400px] w-2/6 bg-[#C3B2E7] rounded-2xl p-6">
                        <h4 className="text-[#52225E] font-serif text-4xl font-medium">Features</h4>
                        <div className="w-full h-full  flex flex-col  justify-center items-center">

                            <div className="flex w-full h-full justify-end items-end pb-8">
                                <span className="text-xs text-[#52225E] ">Use a pre-designed template or personalize with video, stickers, fonts, and more</span>
                            </div>
                        </div>
                    </div>


                    <div className="h-[400px] w-4/6 flex flex-col space-y-4 ">
                        <div className="h-1/2 w-full bg-[#F682A5] rounded-2xl"></div>
                        <div className="h-1/2 w-full flex space-x-4">
                            <div className="w-1/2 h-full bg-[#C7D88E] rounded-2xl"></div>
                            <div className="w-1/2 h-full bg-[#B8CEDC] rounded-2xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}