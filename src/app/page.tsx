import Link from "next/link";
import React from "react";

async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div className="text-center">
      <h1 className="font-bold text-4xl text-center">
        Welcome to the Home Page
      </h1>
      <Link className="px-6 py-4 font-bold text-2xl" href="/articles/1?lang=en">
        read article in english
      </Link>
      <Link className="px-6 py-4 font-bold text-2xl" href="/articles/1?lang=fa">
        read article in persion
      </Link>
      <Link className="px-6 py-4 font-bold text-2xl" href="/articles/1?lang=pa">
        read article in pashto
      </Link>
    </div>
  );
}

export default Home;
