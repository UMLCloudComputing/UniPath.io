import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  let data = await fetch("https://api.vercel.app/blog");
  let posts = await data.json();
  console.log(request);
  return NextResponse.json({ posts, request });
}
