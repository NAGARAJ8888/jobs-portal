import { cookies } from "next/headers";

export async function POST() {
  // Clear JWT or session cookie
  cookies().set({
    name: "token",
    value: "",
    maxAge: 0,
    path: "/",
  });

  return Response.json({ message: "Logged out successfully" }, { status: 200 });
}
