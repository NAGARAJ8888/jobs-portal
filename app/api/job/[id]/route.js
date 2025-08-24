//app/api/job/[id]/route.js

import pool from "@/lib/db";

// GET /api/job/[id]
export async function GET(req, context) {
  const { id } = await context.params;

  try {
    const result = await pool.query(
      `SELECT * FROM job_post WHERE id = $1`,
      [id]
    );

    if (result.rows.length === 0) {
      return Response.json({ error: "Job not found" }, { status: 404 });
    }

    return Response.json(result.rows[0], { status: 200 });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}

 
 
 