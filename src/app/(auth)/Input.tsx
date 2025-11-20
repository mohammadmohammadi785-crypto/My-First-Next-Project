"use client";
import { useState } from "react";
export default function Input() {
  const [value, setValue] = useState("");
  return (
    <div className="flex justify-center p-4">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        className="border rounded-md py-2 px-2 focus:outline-0"
      />
    </div>
  );
}
