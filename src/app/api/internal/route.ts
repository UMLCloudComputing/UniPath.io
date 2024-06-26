import { cookieBasedClient } from "@/utils/amplifyServerUtils";
import { NextResponse } from "next/server";

export async function GET() {
  const { data, errors } = await cookieBasedClient.models.Organization.list();
  return NextResponse.json({ data, errors });
}
