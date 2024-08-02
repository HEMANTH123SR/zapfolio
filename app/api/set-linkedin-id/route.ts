import { NextResponse, NextRequest } from "next/server";
import { clerkClient } from "@clerk/nextjs/server";
export async function POST(req: NextRequest) {
  const { linkedinProfileId, userId } = await req.json();
  const res = await clerkClient.users.updateUserMetadata(userId, {
    publicMetadata: {
      linkedinProfileId: linkedinProfileId,
    },
  });
  
  if (res.publicMetadata.linkedinProfileId === linkedinProfileId) {
    const createUserResponse = await fetch(
      "https://www.zapfolio.in/api/create-user",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
        }),
        cache: "no-store",
      },
    );

    const createUserData = await createUserResponse.json();
    console.log(createUserData, "create user data");
    if (!createUserData.success) {
      let message = createUserData.message;
      if (
        message ===
        "Server error: Failed to fetch LinkedIn data: Too Many Requests"
      ) {
        message =
          "Sorry, we're experiencing some technical difficulties. Please try again later.";
      }

      if (message.includes("E11000")) {
        message =
          "You Already have an add  linkedin url of diffrent account to update linkedin url go to dashboard.";
      }

      console.log(createUserData);
      return NextResponse.json({
        success: false,
        message: message,
      });
    }
    console.log(createUserData);
    return NextResponse.json({
      success: true,
      message: "created user with linkedin url",
    });
  }
  console.log("end , failed to update user metadata and create user");
  return NextResponse.json({
    success: false,
    message: "failed to update user metadata and create user",
  });
}
