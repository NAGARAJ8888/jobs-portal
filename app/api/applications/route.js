import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(request) {
  try {
    const { job_id, recruiter_id, jobseeker_id } = await request.json();

    const profileRes = await pool.query(
      `SELECT id FROM jobseeker_profiles WHERE user_id = $1`,
      [jobseeker_id]
    );

    if (profileRes.rows.length === 0) {
      return NextResponse.json(
        { success: false, message: "Jobseeker profile not found" },
        { status: 404 }
      );
    }

    const profileId = profileRes.rows[0].id;

    const existing = await pool.query(
      `SELECT id FROM applications WHERE job_id = $1 AND jobseeker_id = $2`,
      [job_id, profileId]
    );

    if (existing.rows.length > 0) {
      return NextResponse.json(
        { success: false, message: "You have already applied for this job." },
        { status: 400 }
      );
    }

    const result = await pool.query(
      `INSERT INTO applications (job_id, recruiter_id, jobseeker_id) 
       VALUES ($1, $2, $3) RETURNING *`,
      [job_id, recruiter_id, profileId]
    );

    const jobseeker = await pool.query(
      `SELECT * FROM jobseeker_profiles WHERE id = $1`,
      [profileId]
    );

    return NextResponse.json(
      { success: true, application: result.rows[0], jobseeker: jobseeker.rows[0] },
      { status: 201 }
    );
  } catch (err) {
    console.error("API Error:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}



export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const recruiter_id = searchParams.get("recruiter_id");

    if (!recruiter_id) {
      return NextResponse.json(
        { success: false, message: "Recruiter ID is required" },
        { status: 400 }
      );
    }

    const result = await pool.query(
      `SELECT a.id AS application_id, a.job_id, a.jobseeker_id, a.created_at,
              j.full_name, j.email, j.phone, j.location, j.experience_level,
              j.skills, j.resume_url, j.bio
       FROM applications a
       JOIN jobseeker_profiles j ON a.jobseeker_id = j.id
       WHERE a.recruiter_id = $1
       ORDER BY a.created_at DESC`,
      [recruiter_id]
    );

    return NextResponse.json(
      { success: true, applicants: result.rows },
      { status: 200 }
    );
  } catch (err) {
    console.error("API Error:", err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}