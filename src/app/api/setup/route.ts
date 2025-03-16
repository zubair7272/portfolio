// import { NextRequest, NextResponse } from "next/server";
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
// export async function GET(req : NextRequest) {
export async function GET() {
  try {
    // Check if we're in development mode
    if (process.env.NODE_ENV !== "development") {
      return NextResponse.json(
        { error: "This endpoint is only available in development mode" },
        { status: 403 }
      );
    }

    await connectToDatabase();

    // Check if admin user already exists
    const existingAdmin = await User.findOne({ role: "admin" });
    if (existingAdmin) {
      return NextResponse.json(
        { message: "Admin user already exists" },
        { status: 200 }
      );
    }

    // Create admin user
    const hashedPassword = await bcrypt.hash("AdminPassword123!", 10);
    const adminUser = new User({
      name: "Mohammed Zubair",
      email: "zubairmohammed7272@gmail.com",
      password: hashedPassword,
      role: "admin",
    });

    await adminUser.save();

    return NextResponse.json(
      { 
        message: "Admin user created successfully", 
        email: "zubairmohammed7272@gmail.com",
        password: "AdminPassword123! (change this immediately after login)"
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating admin user:", error);
    return NextResponse.json(
      { error: "Failed to create admin user" },
      { status: 500 }
    );
  }
} 