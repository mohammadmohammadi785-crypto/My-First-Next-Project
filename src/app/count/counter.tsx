"use client";

import { useState } from "react";

export default function Counter() {
  const [value, setValue] = useState(0);
  return (
    <div className="text-center p-4">
      <h1 className="text-3xl font-bold">{value}</h1>
      <button
        className="border py-2 px-6 mt-3 ml-2"
        onClick={() => setValue(value + 1)}
      >
        Increment
      </button>
      <button
        className="border py-2 px-6 mt-3 ml-2"
        onClick={() => setValue(value - 1)}
      >
        Decrement
      </button>
    </div>
  );
}
