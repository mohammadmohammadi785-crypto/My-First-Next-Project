import { headers } from "next/headers";
export async function GET() {
  const headerContent = await headers();
  console.log(headerContent.get("accept"));
  return new Response("Hi from Hello Api", {
    headers: { "content-type": "text/html", "Set-Cookie": "theme=dark" },
  });
}
