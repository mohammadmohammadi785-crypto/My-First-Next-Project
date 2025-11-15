type props = {
  params: Promise<{ postid: string }>;
};
import { Metadata } from "next";
export const generateMetadata = async ({
  params,
}: props): Promise<Metadata> => {
  const postid = (await params).postid;
  return {
    title: `Details about Post ${postid}`,
  };
};
async function page({
  params,
}: {
  params: Promise<{ All_post: string; postid: string }>;
}) {
  const { All_post, postid } = await params;
  return (
    <div>
      <h1 className="text-5xl text-center ">
        All post is {All_post} this is a details about post {postid}
      </h1>
    </div>
  );
}

export default page;
