import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  //   return NextResponse.rewrite(new URL("/dashboard"));
  if (request.nextUrl.pathname === "/blogs") {
    return NextResponse.rewrite(new URL("/dashboard", request.url));
  }
}
// export const config = {
//   matcher: "/blogs",
// };
