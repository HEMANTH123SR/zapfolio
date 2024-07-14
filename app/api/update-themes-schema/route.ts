import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/db/index";
import { User } from "@/db/modules/user.module";

export async function PATCH(req: NextRequest) {
  try {
    await connectDB();

    const { userId, themeName, componentsToShow } = await req.json();

    if (!userId || !themeName || !componentsToShow) {
      return NextResponse.json(
        {
          success: false,
          message: "User ID, theme name, and components to show are required.",
        },
        { status: 400 },
      );
    }

    // Validate that the theme name is one of the allowed themes
    const allowedThemes = [
      "slate",
      "vivid",
      "bentodark",
      "twitter",
      "windows95",
    ];
    if (!allowedThemes.includes(themeName)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid theme name.",
        },
        { status: 400 },
      );
    }

    const updatedUser = await User.findOneAndUpdate(
      { userId: userId },
      {
        $set: {
          [`themesData.${themeName}.componentsToShow`]: componentsToShow,
        },
      },
      { new: true, runValidators: true },
    );

    if (!updatedUser) {
      return NextResponse.json(
        {
          success: false,
          message: "User not found.",
        },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      message: `${themeName} theme data updated successfully.`,
      data: updatedUser.themesData[themeName],
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: `Server error: ${error.message}`,
      },
      { status: 500 },
    );
  }
}
