import pool from "@/lib/db";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const user_id = searchParams.get("user_id");

    const result = await pool.query(
      "SELECT id AS recruiter_id FROM recruiter_profiles WHERE user_id = $1",
      [user_id]
    );

    if (result.rows.length === 0)
      return new Response(JSON.stringify({ error: "No recruiter profile found" }), { status: 404 });

    return new Response(JSON.stringify(result.rows[0]), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
