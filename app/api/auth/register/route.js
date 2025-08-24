//app/api/auth/register/route.js
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import pool from "@/lib/db";
import { signJWT } from "@/lib/auth";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, password, role } = body;

    if (!name || !email || !password || !role) {
      return NextResponse.json({ error: "All fields required" }, { status: 400 });
    }

    // Check if user exists
    const existingUser = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (existingUser.rows.length > 0) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user
    const result = await pool.query(
      "INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING id, name, email, role",
      [name, email, hashedPassword, role]
    );

    const newUser = result.rows[0];

    // Sign JWT
    const token = signJWT({ id: newUser.id, email: newUser.email, role: newUser.role });

    const res = NextResponse.json({ message: "User registered", user: newUser });
    res.cookies.set("token", token, { httpOnly: true, secure: process.env.NODE_ENV === "production", path: "/" });

    return res;
  } catch (err) {
    console.error("Register error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

