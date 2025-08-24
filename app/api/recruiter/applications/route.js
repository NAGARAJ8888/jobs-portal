// app/api/recruiter/applications/route.js
import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const user_id = searchParams.get("user_id");

    if (!user_id) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    // 1. Get recruiter_id from recruiter_profiles
    const recruiterRes = await pool.query(
      "SELECT id FROM recruiter_profiles WHERE user_id = $1",
      [user_id]
    );

    if (recruiterRes.rows.length === 0) {
      return NextResponse.json(
        { error: "Recruiter profile not found" },
        { status: 404 }
      );
    }

    const recruiter_id = recruiterRes.rows[0].id;

    // 2. Fetch applications for this recruiter
    const query = `
      SELECT 
        a.id AS application_id,
        a.created_at,
        jp.title AS job_title,
        js.full_name AS jobseeker_name,
        js.email AS jobseeker_email,
        js.resume_url
      FROM applications a
      JOIN job_post jp ON a.job_id = jp.id
      JOIN jobseeker_profiles js ON a.jobseeker_id = js.id
      WHERE a.recruiter_id = $1
      ORDER BY a.created_at DESC;
    `;

    const { rows } = await pool.query(query, [recruiter_id]);

    return NextResponse.json({ applications: rows });
  } catch (err) {
    console.error("Error fetching applications:", err);
    return NextResponse.json(
      { error: "Failed to fetch applications" },
      { status: 500 }
    );
  }
}
