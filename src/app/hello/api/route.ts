import { headers, cookies } from "next/headers";
import { NextRequest } from "next/server";
export async function GET(request: NextRequest) {
  const headerContent = await headers();
  console.log(headerContent.get("accept"));
  const cookieInformation = request.cookies.get("theme");
  console.log(cookieInformation);
  const newCookie = await cookies();
  newCookie.set("LoggedIn", "Mohammad Mohammadi");
  console.log(newCookie.get("LoggedIn"));
  return new Response("Hi from Hello Api", {
    headers: { "content-type": "text/html", "Set-Cookie": "theme=dark" },
  });
}
