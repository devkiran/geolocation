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

  // Send html text to the client
  return new Response(
    `<html><body><h1>Hello, World!</h1>
    <p>Location: ${geo.city}, ${geo.country}</p>
    <p>Headers: ${JSON.stringify(allHeaders)}</p>
    </body></html>`,
    {
      headers: { "Content-Type": "text/html" },
    }
  );

  return NextResponse.json({ geo, allHeaders });
}
