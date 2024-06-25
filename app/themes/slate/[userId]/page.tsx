"use client";
import React from "react";
import { GraduationCap } from "lucide-react";
import { Poppins, Rammetto_One } from "next/font/google";
import { userDetailedObject } from "@/lib/test-data";
const poppins = Poppins({ subsets: ["latin"], weight: "300" });
const poppinsBold = Poppins({ subsets: ["latin"], weight: "500" });
const poppinsExtraBold = Poppins({ subsets: ["latin"], weight: "600" });
const rammetto_one = Rammetto_One({ subsets: ["latin"], weight: "400" });
const Slate = () => {
    const user = userDetailedObject[0];
    return (
        <div
            className={`flex h-full w-full flex-col space-y-6 bg-white pl-7 pr-5 pt-7 text-[#333333] md:pl-44 md:pt-16 ${poppins.className} `}
        >
            <div className="flex items-center space-x-4 sm:space-x-8">
                <img
                    src={user.profilePicture}
                    className="h-20 w-20 rounded-2xl sm:h-28 sm:w-28"
                />

                <div className={`flex flex-col space-y-1 ${rammetto_one.className}`}>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl">
                        {user.firstName.toUpperCase()}
                    </h1>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl">
                        {user.lastName.toUpperCase()}
                    </h1>
                </div>
            </div>

            <div className="flex flex-col space-y-3">
                <p className="w-full border-l-4 border-[#333333] pl-2 font-semibold sm:w-2/3">
                    {user.headline}
                </p>

                <p className="w-full text-sm font-semibold sm:w-2/3">{user.summary}</p>
            </div>

            {user.position && (
                <div className="flex flex-col space-y-5 pt-6">
                    <h2 className={`pl-2 text-2xl ${rammetto_one.className}`}>
                        Postions
                    </h2>

                    <div className="flex flex-row flex-wrap gap-5">
                        {user.position.map((data, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`flex h-auto w-52 cursor-pointer flex-col items-center space-y-1 rounded-xl border p-4`}
                                >
                                    <img
                                        src={data.companyLogo ? data.companyLogo :
                                            "https://icons.veryicon.com/png/o/business/oa-attendance-icon/company-27.png"
                                        }
                                        className="h-20 w-20 rounded-full"
                                    />
                                    <h3 className={`font-semibold ${poppinsBold.className}`}>
                                        {data.companyName.slice(0, 10)}
                                        {data.companyName.length > 10 ? `..` : ``}
                                    </h3>
                                    {data.companyIndustry && (
                                        <span className={`text-xs`}>
                                            {data.companyIndustry.slice(0, 23)}
                                            {data.companyIndustry.length > 25 ? ".." : ""}
                                        </span>
                                    )}

                                    <h2
                                        className={`h-full w-full px-2 pt-8 sm:hidden ${poppinsBold.className}`}
                                    >
                                        {data.title}
                                    </h2>
                                    <h2
                                        className={`hidden h-full w-full px-2 pt-8 sm:block ${poppinsExtraBold.className}`}
                                    >
                                        {data.title}
                                    </h2>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {user.educations && (
                <div className="flex flex-col space-y-5 pt-6">
                    <h2 className={`pl-2 text-2xl ${rammetto_one.className}`}>
                        Education
                    </h2>
                    <div className="flex flex-col space-y-6">
                        {user.educations.map((data, index) => {
                            return (
                                <div
                                    key={index}
                                    className="flex items-center justify-start space-x-3"
                                >
                                    <GraduationCap className="min-h-8 min-w-8 text-[#333333]" />
                                    <div className="flex flex-col items-start justify-center">
                                        <h3 className={`${poppinsBold.className} `}>
                                            {data.schoolName}
                                        </h3>
                                        <h4 className="text-wrap text-sm font-medium">
                                            {data.degree}
                                            {data.fieldOfStudy && data.degree
                                                ? `, ${data.fieldOfStudy}`
                                                : `${data.fieldOfStudy ? `${data.fieldOfStudy}` : ""}`}
                                        </h4>
                                        <span className="text-sm text-slate-500">
                                            {data.start.year ? data.start.year : ""}
                                            {data.end.year ? `- ${data.end.year}` : ""}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {user.certifications && (
                <div className="flex flex-col space-y-5 pt-6">
                    <h2 className={`pl-2 text-2xl ${rammetto_one.className}`}>
                        Certifications
                    </h2>
                    <div className="flex flex-col space-y-8">
                        {user.certifications.map((data) => (
                            <div
                                key={data.name}
                                className="flex items-center justify-start space-x-3"
                            >
                                <img
                                    className="h-16 w-16 rounded-md"
                                    src={
                                        data.company.logo
                                            ? data.company.logo
                                            : "https://media.istockphoto.com/id/1322515835/vector/diploma-line-icon-certificate-with-license-badge-linear-icon-in-flat-style-winner-medal.jpg?s=612x612&w=0&k=20&c=dmKEocjjaifyveriLsdv4dOXEmhr453Dz4oFNjUZMmg="
                                    }
                                />
                                <div className="flex flex-col items-start justify-center">
                                    <h3 className={`${poppinsBold.className}`}>{data.name}</h3>
                                    <h4 className="text-sm">{data.authority}</h4>
                                    <span className="text-xs text-slate-500">
                                        {data.start.day}/{data.start.month}/{data.start.year}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {user.courses && (
                <div className="flex flex-col space-y-5 pt-6">
                    <h2 className={`pl-2 text-2xl ${rammetto_one.className}`}>Courses</h2>

                    {user.courses.map((course, index) => (
                        <div
                            className="flex items-center justify-start space-x-3"
                            key={index}
                        >
                            <div className="min-h-2 min-w-2 rounded-full bg-[#333333] sm:min-h-3 sm:min-w-3"></div>
                            <h3 className={`${poppinsBold.className} text-sm sm:text-base`}>
                                {course}
                            </h3>
                        </div>
                    ))}
                </div>
            )}

            {user.skills && (
                <div className="flex flex-col space-y-5 pt-6">
                    <h2 className={`pl-2 text-2xl ${rammetto_one.className}`}>Skills</h2>
                    <div className="flex flex-col space-y-4">
                        {user.skills.map((skill, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-start space-x-2.5"
                            >
                                <div className="min-h-2 min-w-2 rounded-full bg-[#333333] sm:min-h-3 sm:min-w-3"></div>
                                <h4 className={`${poppinsBold.className} text-sm sm:text-base`}>
                                    {skill.toUpperCase()}
                                </h4>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {user.languages && (
                <div className="flex flex-col space-y-5 pt-6">
                    <h2 className={`pl-2 text-2xl ${rammetto_one.className}`}>
                        Languages
                    </h2>
                    <div
                        className={`${poppinsBold.className} flex flex-wrap space-x-3.5 sm:space-x-5`}
                    >
                        {user.languages.map((data) => (
                            <span key={data.name}>{data.name}</span>
                        ))}
                    </div>
                </div>
            )}

            <div
                className="flex w-full flex-col items-start justify-start space-y-3 border-t pb-36 pt-6 sm:w-2/3"
                style={{ marginTop: "60px" }}
            >
                <a
                    href={`https://www.linkedin.com/in/${user.username}`}
                    className="font-semibold underline"
                >
                    Linkedin Profile
                </a>
                <h5 className="font-semibold">{user.geo.full}</h5>
            </div>
        </div>
    );
};

export default Slate;
