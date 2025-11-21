import React from "react";

export default async function page() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div>
      <h1 className="text-4xl text-center font-bold">
        This the Forgot password page
      </h1>
    </div>
  );
}
