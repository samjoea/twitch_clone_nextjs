import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
   const email = request.nextUrl.searchParams.get("email");
   const userProfile = await db.user.findUnique({
		where: {
			email: email!,
		},
   });
   if (!userProfile) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
   }
   return NextResponse.json({
      data: userProfile
   });
}

export async function POST(request: Request) {}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}
