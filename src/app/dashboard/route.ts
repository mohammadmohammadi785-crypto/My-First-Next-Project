import { blog } from "./posts";

export function GET() {
  return Response.json(blog);
}
export async function POST(request: Request) {
  const data = await request.json();
  const newBlog = {
    id: blog.length + 1,
    name: data.name,
    icon: data.icon,
    text: data.text,
  };
  blog.push(newBlog);
  return new Response(JSON.stringify(newBlog), {
    headers: { "content-type": "application/json" },
    status: 201,
  });
}
