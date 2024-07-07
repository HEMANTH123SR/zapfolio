// import { NextRequest, NextResponse } from "next/server";
// import { connectDB } from "@/db/index";
// import { User } from "@/db/modules/user.module";
// import { clerkClient } from "@clerk/nextjs/server";

// export async function POST(req: NextRequest) {
//   try {
//     await connectDB();
//     const { users } = clerkClient;
//     const { userId } = await req.json();
//     const userResponseData = await users.getUser(userId);

//     if (userResponseData.publicMetadata.linkedinProfileId) {
//       // create a user with the linkedin data
//       const url = `https://linkedin-api8.p.rapidapi.com/get-profile-data-by-url?url=${userResponseData.publicMetadata.linkedinProfileId}`;
//       const options = {
//         method: "GET",
//         headers: {
//           "x-rapidapi-key":
//             "97fd38348emshd5a23027f74f491p100d98jsn12ef59a65568",
//           "x-rapidapi-host": "linkedin-api8.p.rapidapi.com",
//         },
//       };
//       try {
//         const response = await fetch(url, options);
//         const result = await response.json();

//         if (result.urn) {
//           const newUser = new User({
//             userId: userResponseData.id,
//             userName: userResponseData.username,
//             userEmail: userResponseData.emailAddresses[0].emailAddress,
//             likedinUrl: userResponseData.publicMetadata.linkedinProfileId,
//             linkedinUserData: {
//               urn: result.urn,
//               username: result.username,
//               firstName: result.firstName,
//               lastName: result.lastName,
//               isOpenToWork: result.isOpenToWork,
//               isHiring: result.isHiring,
//               profilePicture: result.profilePicture,
//               summary: result.summary,
//               headline: result.headline,
//               geo: result.geo,
//               languages: result.languages,
//               educations: result.educations,
//               position: result.position,
//               skills: (result.skills || []).map(
//                 (data: { name: string; passedSkillAssessment: boolean }) =>
//                   data.name,
//               ),
//               courses: (result.courses || []).map(
//                 (data: { name: string; number: string }) => data,
//               ),
//               certifications: result.certifications,
//               projects: (result.projects.items || []).map(
//                 (data: { title: string; description: string }) => data,
//               ),
//             },
//           });
//           await newUser.save();
//           return NextResponse.json({
//             success: true,
//             message: "user created successfully with linkedin data",
//           });
//         } else {
//           return NextResponse.json({
//             success: false,
//             message: "Linkedin profile not found",
//           });
//         }
//       } catch (error: any) {
//         return NextResponse.json({
//           success: false,
//           message: `something went wrong while fetching the linkedin profile api , ${error.message}`,
//         });
//       }
//     }
//   } catch (err: any) {
//     return NextResponse.json({
//       success: false,
//       message: `something went wrong before  fetching the linkedin profile api , ${err.message}`,
//     });
//   }
// }

import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/db/index";
import { User } from "@/db/modules/user.module";
import { clerkClient } from "@clerk/nextjs/server";

// Fetch LinkedIn data by URL
async function fetchLinkedInData(profileId: string) {
  const url = `https://linkedin-api8.p.rapidapi.com/get-profile-data-by-url?url=${profileId}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.X_RAPIDAPI_KEY
        ? process.env.X_RAPIDAPI_KEY
        : "",
      "x-rapidapi-host": "linkedin-api8.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Failed to fetch LinkedIn data: ${response.statusText}`);
  }

  const result = await response.json();
  return result;
}

// Create a new user in the database
async function createUser(userData: any, linkedInData: any) {
  const newUser = new User({
    userId: userData.id,
    userName: userData.username,
    userEmail: userData.emailAddresses[0].emailAddress,
    likedinUrl: userData.publicMetadata.linkedinProfileId,
    linkedinUserData: {
      urn: linkedInData.urn,
      username: linkedInData.username,
      firstName: linkedInData.firstName,
      lastName: linkedInData.lastName,
      isOpenToWork: linkedInData.isOpenToWork,
      isHiring: linkedInData.isHiring,
      profilePicture: linkedInData.profilePicture,
      summary: linkedInData.summary,
      headline: linkedInData.headline,
      geo: linkedInData.geo,
      languages: linkedInData.languages,
      educations: linkedInData.educations,
      position: linkedInData.position,
      skills: (linkedInData.skills || []).map(
        (data: { name: string; passedSkillAssessment: boolean }) => data.name,
      ),
      courses: (linkedInData.courses || []).map(
        (data: { name: string; number: string }) => data,
      ),
      certifications: linkedInData.certifications,
      projects: (linkedInData.projects.items || []).map(
        (data: { title: string; description: string }) => data,
      ),
    },
  });
  await newUser.save();
}

// Main POST handler function
export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const { userId } = await req.json();
    const { users } = clerkClient;
    const userResponseData = await users.getUser(userId);

    if (!userResponseData) {
      return NextResponse.json({
        success: false,
        message: "User data not found.",
      });
    }

    // Safely extract linkedinProfileId and ensure it's a string
    const linkedinProfileId = userResponseData.publicMetadata.linkedinProfileId;
    if (
      typeof linkedinProfileId !== "string" ||
      linkedinProfileId.trim() === ""
    ) {
      return NextResponse.json({
        success: false,
        message: "No valid LinkedIn profile ID found in user data.",
      });
    }

    const linkedInData = await fetchLinkedInData(linkedinProfileId);

    if (!linkedInData || !linkedInData.urn) {
      return NextResponse.json({
        success: false,
        message: "LinkedIn profile not found or invalid LinkedIn data.",
      });
    }

    await createUser(userResponseData, linkedInData);

    return NextResponse.json({
      success: true,
      message: "User created successfully with LinkedIn data.",
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: `Server error: ${error.message}`,
    });
  }
}
