export const dynamic = "force-static";
export const revalidate = 20;
export async function GET() {
  return Response.json(
    { time: new Date().toLocaleTimeString() },
    { headers: { "Set-Cookie": "theme=dark" } }
  );
}
