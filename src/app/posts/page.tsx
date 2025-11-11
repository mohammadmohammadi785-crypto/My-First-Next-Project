import Link from "next/link";

function page() {
  return (
    <div className=" text-center">
      <h1 className="mb-1 text-5xl">All post</h1>
      <div className="mr-4 flex justify-center items-center flex-row">
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
    </div>
  );
}

export default page;
