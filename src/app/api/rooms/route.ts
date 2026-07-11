import { NextResponse } from "next/server";
import { headers } from "next/headers";
import connectDB from "@/lib/db";
import Room from "@/models/Room";
import { auth } from "@/lib/auth";

export async function GET() {
  try {
    await connectDB();
    const rooms = await Room.find({});
    return NextResponse.json({ rooms });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch rooms" },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();
    const body = await req.json();

    const room = await Room.create({
      ...body,
      host: session.user.id,
    });

    return NextResponse.json({ room }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to add room" }, { status: 500 });
  }
}
