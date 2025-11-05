import Link from "next/link";

function page() {
  return (
    <div className="p-2">
      <h1 className="mb-1">All post</h1>
      <Link className="ml-2" href="posts/1">
        post 1
      </Link>
      <Link className="ml-2" href="posts/2">
        post 2
      </Link>
      <Link className="ml-2" href="posts/3">
        post 3
      </Link>
      <Link className="ml-2" href="posts/4">
        post 4
      </Link>
    </div>
  );
}

export default page;
