import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import pool from "@/lib/db";

export async function GET(req) {
  try {
    const token = req.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const recruiterRes = await pool.query(
      "SELECT id FROM recruiter_profiles WHERE user_id = $1",
      [decoded.id]
    );

    if (!recruiterRes.rows[0]) {
      return NextResponse.json({ error: "Recruiter profile not found" }, { status: 404 });
    }

    const jobsRes = await pool.query(
      `SELECT id, title, subtitle, location, "salaryrange"
       FROM job_post
       WHERE recruiter_id = $1
       ORDER BY created_at DESC`,
      [recruiterRes.rows[0].id]
    );

    return NextResponse.json({ jobs: jobsRes.rows });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

