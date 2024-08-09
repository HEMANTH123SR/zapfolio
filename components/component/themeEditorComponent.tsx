import {
  HiSquare3Stack3D,
  IoMdImage,
  FaGraduationCap,
  MdDashboardCustomize,
  FaYoutube,
  FaXTwitter,
} from "@/lib/icons";
export const EditorComponent = () => {
  return (
    <div className="absolute bottom-8 left-4 rounded-xl border bg-white shadow">
      <div className="flex items-center space-x-2.5 px-4 py-2">
        <div
          className={`group cursor-pointer rounded-xl border bg-white p-1.5 hover:bg-[#FF560E]`}
        >
          <HiSquare3Stack3D
            className={`h-6 w-6 text-[#FF560E] group-hover:text-white`}
          />
        </div>
        <div className="h-5 w-0.5 rounded-xl bg-[#DADDE2]"></div>
        {/* detailed */}
        <div
          className={`group cursor-pointer rounded-xl border bg-white p-1.5 hover:bg-black`}
        >
          <IoMdImage className={`h-6 w-6 text-black group-hover:text-white`} />
        </div>
        <div
          className={`group cursor-pointer rounded-xl border bg-white p-1.5 hover:bg-black`}
        >
          <FaGraduationCap
            className={`h-6 w-6 text-black group-hover:text-white`}
          />
        </div>
        <div
          className={`group cursor-pointer rounded-xl border bg-white p-1.5 hover:bg-black`}
        >
          <MdDashboardCustomize
            className={`h-6 w-6 text-black group-hover:text-white`}
          />
        </div>
        <div className="h-5 w-0.5 rounded-xl bg-[#DADDE2]"></div>
        {/* sociale */}
        <div
          className={`group cursor-pointer rounded-xl border bg-white p-1.5 hover:bg-[#4B5563]`}
        >
          <FaXTwitter
            className={`h-6 w-6 text-[#4B5563] group-hover:text-white`}
          />
        </div>
        <div
          className={`group cursor-pointer rounded-xl border bg-white p-1.5 hover:bg-red-600`}
        >
          <FaYoutube
            className={`h-6 w-6 text-red-600 group-hover:text-white`}
          />
        </div>
        <div
          className={`group cursor-pointer rounded-xl border bg-white p-1.5 hover:bg-black`}
        >
          <MdDashboardCustomize
            className={`h-6 w-6 text-black group-hover:text-white`}
          />
        </div>
      </div>
    </div>
  );
};
