//app/api/auth/me/route.js

import { NextResponse } from "next/server";
import { verifyJWT } from "@/lib/auth";

export async function GET(req) {
  try {
    const token = req.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json({ user: null }, { status: 401 });
    }

    const user = verifyJWT(token);
    return NextResponse.json({ user });
  } catch (err) {
    return NextResponse.json({ user: null }, { status: 401 });
  }
}
