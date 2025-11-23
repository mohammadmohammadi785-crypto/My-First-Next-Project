type props = {
  params: Promise<{ All_post: string }>;
};
import { Metadata } from "next";
export const generateMetadata = async ({
  params,
}: props): Promise<Metadata> => {
  const All_post = (await params).All_post;
  return {
    title: `All Post is ${All_post}`,
  };
};
function randomNumber(num: number) {
  return Math.floor(Math.random() * num);
}
async function page({ params }: props) {
  const All_post = (await params).All_post;
  const getRandomNumber = randomNumber(2);
  if (getRandomNumber === 1) {
    throw new Error("Post page is Error");
  }
  return (
    <div>
      <h1 className="text-5xl text-center">All post is {All_post}</h1>
    </div>
  );
}

export default page;
