type props = {
  params: Promise<{ All_post: string }>;
};
import { Metadata } from "next";
export const generateMetadata = async ({
  params,
}: props): Promise<Metadata> => {
  const All_post = (await params).All_post;
  return {
    title: `Post ${All_post}`,
  };
};
async function page({ params }: props) {
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
