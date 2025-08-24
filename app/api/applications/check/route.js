// app/api/applications/check/route.js
import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const job_id = searchParams.get("job_id");
    const jobseeker_user_id = searchParams.get("jobseeker_id");

    const profileRes = await pool.query(
      `SELECT id FROM jobseeker_profiles WHERE user_id = $1`,
      [jobseeker_user_id]
    );

    if (profileRes.rows.length === 0) {
      return NextResponse.json({ success: true, applied: false }, { status: 200 });
    }

    const profileId = profileRes.rows[0].id;

    const existing = await pool.query(
      `SELECT id FROM applications WHERE job_id = $1 AND jobseeker_id = $2`,
      [job_id, profileId]
    );

    const applied = existing.rows.length > 0;

    return NextResponse.json({ success: true, applied }, { status: 200 });
  } catch (err) {
    console.error("API Error:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
