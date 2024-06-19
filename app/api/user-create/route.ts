import { connectDB } from "@/db/index";
import { NextRequest, NextResponse } from "next/server";
import { User } from "@/db/modules/user.module";
export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();
    const res = await User.create(body);
    console.log(res);
    return NextResponse.json({ userCreated: true }, { status: 201 });
  } catch (err: any) {
    console.log("unable to create user");
    return NextResponse.json(
      {
        message: err?.message || err._message || "Internal server error",
        userCreated: false,
      },
      { status: 500 },
    );
  }
}
