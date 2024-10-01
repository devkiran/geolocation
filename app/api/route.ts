import { geolocation } from "@vercel/functions";
import { NextResponse } from "next/server";

export function GET(request: Request) {
  const response = geolocation(request);

  console.log("Location info", response);

  return NextResponse.json(response);
}