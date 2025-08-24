import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import pool from "@/lib/db";

export async function DELETE(req, { params }) {
  try {
    const token = req.cookies.get("token")?.value;
    if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const recruiterRes = await pool.query(
      "SELECT id FROM recruiter_profiles WHERE user_id = $1",
      [decoded.id]
    );
    const recruiter = recruiterRes.rows[0];
    if (!recruiter) return NextResponse.json({ error: "Recruiter profile not found" }, { status: 404 });

    const jobId = params.id;

    // Delete job if it belongs to this recruiter
    const deleteRes = await pool.query(
      "DELETE FROM job_post WHERE id = $1 AND recruiter_id = $2 RETURNING *",
      [jobId, recruiter.id]
    );

    if (deleteRes.rowCount === 0) {
      return NextResponse.json({ error: "Job not found or unauthorized" }, { status: 404 });
    }

    return NextResponse.json({ message: "Job deleted successfully" });
  } catch (error) {
    console.error("Delete API error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
