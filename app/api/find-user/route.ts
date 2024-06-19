import { connectDB } from "@/db/index";
import { NextRequest, NextResponse } from "next/server";
import { User } from "@/db/modules/user.module";
export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const url = new URL(req.url);
    const query = url.searchParams.get("userId");
    const user = await User.findOne({ userId: query });
    console.log(user);
    if (user) {
      return NextResponse.json(
        { userId: user.userId, message: "user found" },
        { status: 200 },
      );
    } else {
      return NextResponse.json({ message: "user not found" }, { status: 400 });
    }
  } catch (err: any) {
    return NextResponse.json(
      { message: err?.message || err._message || "internal server error" },
      { status: 500 },
    );
  }
}
