import { notFound } from "next/navigation";
type props = {
  params: Promise<{ revews: string }>;
};
import { Metadata } from "next";
export const generateMetadata = async ({
  params,
}: props): Promise<Metadata> => {
  const revews = (await params).revews;
  return {
    title: `About review ${revews}`,
  };
};
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
      <h1 className="text-5xl text-center">
        All post is {All_post} this is a details about post {postid} and you
        have visited this post for {revews} times
      </h1>
    </div>
  );
}

export default page;
