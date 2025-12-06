import { blog } from "./blog";

export function GET() {
  return Response.json(blog);
}

