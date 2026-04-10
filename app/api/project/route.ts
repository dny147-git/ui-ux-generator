import { db } from "@/config/db";
import { projectTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { device, projectId, userInput } = await req.json();
    const user = await currentUser();
    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!device) {
      return new NextResponse("Device Missing", { status: 400 });
    }
    if (!projectId) {
      return new NextResponse("Project ID Missing", { status: 400 });
    }
    if (!userInput) {
      return new NextResponse("User Input Missing", { status: 400 });
    }

    const result = await db
      .insert(projectTable)
      .values({
        device,
        projectId,
        userInput,
        userEmail: user.primaryEmailAddress?.emailAddress as string,
      })
      .returning();
    return NextResponse.json(result[0]);
  } catch (error) {
    console.log("PROJECT_ROUTE_POST", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
