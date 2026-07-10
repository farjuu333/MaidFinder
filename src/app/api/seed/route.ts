// src/app/api/seed/route.ts
import { NextResponse } from "next/server";
import { seedRooms } from "@/lib/seed";

export async function GET() {
  try {
    await seedRooms();
    return NextResponse.json({ message: "Seed data inserted successfully!" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to seed data" }, { status: 500 });
  }
}
