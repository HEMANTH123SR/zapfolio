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
      "http://localhost:3000/api/create-user",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
        }),
      },
    );

    const createUserData = await createUserResponse.json();
    console.log(createUserData);
    if (!createUserData.success) {
      let message = createUserData.message;
      if (
        message ===
        "Server error: Failed to fetch LinkedIn data: Too Many Requests"
      ) {
        message =
          "Sorry, we're experiencing some technical difficulties. Please try again later.";
      }
      return NextResponse.json({
        success: false,
        message: message,
      });
    }

    return NextResponse.json({
      success: true,
      message: "created user with linkedin url",
    });
  }
  return NextResponse.json({
    success: false,
    message: "failed to update user metadata and create user",
  });
}
