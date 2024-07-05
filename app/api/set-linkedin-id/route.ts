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
    return NextResponse.json({ success: true });
  }
  return NextResponse.json({ success: false });
}
