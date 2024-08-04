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
  console.log("user id ", userData.id);
  if (!userData.id) {
    throw new Error("User ID is missing or invalid");
  }
  const newUser = new User({
    userAuthDetails: {
      userName: userData.username,
      userEmail: userData.emailAddresses[0].emailAddress,
    },
    linkedinUrl: userData.publicMetadata.linkedinProfileId,
    userDetailedData: {
      urn: linkedInData.urn,
      linkedinUserName: linkedInData.username,
      firstName: linkedInData.firstName,
      lastName: linkedInData.lastName,
      isOpenToWork: linkedInData.isOpenToWork,
      isHiring: linkedInData.isHiring,
      profilePicture: linkedInData.profilePicture,
      about: linkedInData.summary,
      headline: linkedInData.headline,
      geo: linkedInData.geo,
      languages: linkedInData.languages,
      educations: linkedInData.educations,

      skills: (linkedInData.skills || []).map(
        (data: { name: string; passedSkillAssessment: boolean }) => data.name,
      ),
      courses: (linkedInData.courses || []).map(
        (data: { name: string; number: string }) => data,
      ),
      certifications: linkedInData.certifications,
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
    console.error("Detailed error:", error);

    return NextResponse.json({
      success: false,
      message: `Server error: ${error.message}`,
    });
  }
}
