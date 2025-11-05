"use client";
import { usePathname } from "next/navigation";
function NotFound() {
  const pathname = usePathname();
  const postid = pathname.split("/")[3];
  const reviewid = pathname.split("/")[4];
  return (
    <div>
      <h1 className="text-center text-5xl">
        The review is not found for post {postid} with reviews {reviewid}
      </h1>
    </div>
  );
}

export default NotFound;
