import Link from "next/link";

function page() {
  return (
    <div className="p-2 flex justify-center items-center flex-col">
      <h1 className="mb-1 text-5xl">All post</h1>
      <Link className="ml-2 text-3xl" href="posts/1">
        post 1
      </Link>
      <Link className="ml-2 text-3xl" href="posts/2">
        post 2
      </Link>
      <Link className="ml-2 text-3xl" href="posts/3">
        post 3
      </Link>
      <Link className="ml-2 text-3xl" href="posts/4">
        post 4
      </Link>
    </div>
  );
}

export default page;
