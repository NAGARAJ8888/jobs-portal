// middleware.js
import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("token"); // or your session cookie name
  const url = req.nextUrl.pathname;

  // If no token and trying to access protected routes → redirect
  if (!token && (url.startsWith("/jobseeker") || url.startsWith("/recruiter"))) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

// Define routes where middleware should apply
export const config = {
  matcher: ["/jobseeker/:path*", "/recruiter/:path*"],
};
