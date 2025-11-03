async function page({
  params,
}: {
  params: Promise<{ All_post: string; postid: string }>;
}) {
  const { All_post, postid } = await params;
  return (
    <div>
      <h1 className="text-5xl text-center text-red-600">
        All post is {All_post} this is a details about post {postid}
      </h1>
    </div>
  );
}

export default page;
