"use client"
import { useRouter } from "next/navigation";
export default function Button() {
  const router = useRouter();
  function handleClick() {
    router.back();
  }
  return (
    <div>
      <button
        onClick={handleClick}
        className="rounded-md py-2 text-center px-5 bg-gray-500 text-white"
      >
        Order
      </button>
    </div>
  );
}
