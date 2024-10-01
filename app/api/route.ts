import { geolocation } from "@vercel/functions";
import { NextResponse } from "next/server";
import { headers } from "next/headers";

export function GET(request: Request) {
  const geo = geolocation(request);

  const headersList = headers();
  const allHeaders: Record<string, string> = {};

  headersList.forEach((value, key) => {
    allHeaders[key] = value;
  });

  console.log("Location info", geo);
  console.log("All headers", allHeaders);

  return NextResponse.json({ geo, allHeaders });
}
