import { NextResponse } from "next/server";
import { Pool } from "pg";
import { verifyJWT } from "@/lib/auth";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// GET recruiter profile
export async function GET(req) {
  try {
    const token = req.cookies.get("token")?.value;
    if (!token) return NextResponse.json({ message: "Not authenticated" }, { status: 401 });

    const user = verifyJWT(token);
    const user_id = user.id;

    const result = await pool.query(
      "SELECT * FROM recruiter_profiles WHERE user_id = $1",
      [user_id]
    );

    if (result.rows.length === 0) {
      return NextResponse.json({ message: "Profile not found" }, { status: 404 });
    }

    return NextResponse.json(result.rows[0]);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// POST or PUT recruiter profile
export async function POST(req) {
  try {
    const token = req.cookies.get("token")?.value;
    if (!token) return NextResponse.json({ message: "Not authenticated" }, { status: 401 });

    const user = verifyJWT(token);
    const user_id = user.id;

    const body = await req.json();
    const { company_name, email, phone, location, website, industry, bio, logo_url } = body;

    const result = await pool.query(
      `INSERT INTO recruiter_profiles (user_id, company_name, email, phone, location, website, industry, bio)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
       ON CONFLICT (user_id) 
       DO UPDATE SET company_name=$2, email=$3, phone=$4, location=$5, 
                     website=$6, industry=$7, bio=$8, logo_url=$9, updated_at=NOW()
       RETURNING *`,
      [user_id, company_name, email, phone, location, website, industry, bio, logo_url]
    );

    return NextResponse.json(result.rows[0]);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
