import { notFound } from "next/navigation";

async function page({
  params,
}: {
  params: Promise<{ All_post: string; postid: string; revews: string }>;
}) {
  const { All_post, postid, revews } = await params;
  if (+revews > 50) {
    return notFound();
  }
  return (
    <div>
      <h1 className="text-5xl text-center text-green-500">
        All post is {All_post} this is a details about post {postid} and you
        have visited this post for {revews} times
      </h1>
    </div>
  );
}

export default page;
