async function page({ params }: { params: Promise<{ All_post: string }> }) {
  const All_post = (await params).All_post;
  return (
    <div>
      <h1 className="text-5xl text-center text-black">
        All post is {All_post}
      </h1>
    </div>
  );
}

export default page;
