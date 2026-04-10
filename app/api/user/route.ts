import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function POST(req: NextRequest) {
  try {
    const user = await currentUser();
    const existingUser = await db
      .select()
      .from(usersTable)
      .where(
        eq(usersTable.email, user?.primaryEmailAddress?.emailAddress as string),
      );
    if (existingUser?.length === 0) {
      const data = {
        name: user?.fullName ?? "",
        email: user?.primaryEmailAddress?.emailAddress as string,
      };
      const result = await db
        .insert(usersTable)
        .values({
          ...data,
        })
        .returning();
      return NextResponse.json(result[0]);
    }
    return NextResponse.json(existingUser[0] ?? {});
  } catch (error) {
    console.log("USER_ROUTE_POST", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
