import { blog } from "../posts";
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const index = blog.findIndex((post) => post.id === parseInt(id));
  if (index === -1) {
    return new Response("post not found", { status: 404 });
  }
  return Response.json(blog[index]);
}
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();
  const { name, text } = body;
  const index = blog.findIndex((post) => post.id === parseInt(id));
  if (index === -1) {
    return new Response("post not found to update", { status: 404 });
  }
  blog[index].name = name;
  blog[index].text = text;
  return Response.json(blog[index]);
}
