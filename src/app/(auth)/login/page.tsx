import React from "react";

async function page() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div>
      <h1 className="text-5xl text-center font-bold">This is the login Page</h1>
    </div>
  );
}

export default page;
