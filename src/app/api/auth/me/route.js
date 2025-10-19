import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const SECRET = process.env.NEXTAUTH_SECRET;

export async function GET(req) {
  const token = req.cookies.get("token")?.value;
  if (!token) return NextResponse.json({ user: null });

  try {
    const decoded = jwt.verify(token, SECRET);
    return NextResponse.json({ user: decoded });
  } catch {
    return NextResponse.json({ user: null });
  }
}
