import { geolocation } from "@vercel/functions";
import { NextResponse } from "next/server";
import { headers } from "next/headers";

export function GET(request: Request) {
  const geo = geolocation(request);
  const header = headers().get("x-vercel-ip-city");

  return NextResponse.json({ ...geo, "x-vercel-ip-city": header });
}
