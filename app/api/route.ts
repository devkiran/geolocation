import { geolocation } from "@vercel/functions";
import { NextResponse } from "next/server";
import { headers } from "next/headers";

export function GET(request: Request) {
  const headersList = headers();
  const geo = geolocation(request);

  console.log("Location info", geo);
  console.log("Headers", headersList);

  return NextResponse.json({ geo });
}
