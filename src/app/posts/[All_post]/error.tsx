"use client";
import { useRouter } from "next/navigation";
import { startTransition } from "react";
export default function error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  function reload() {
    router.refresh();
    startTransition(() => {
      reset();
    });
  }

  return (
    <div className="flex justify-center">
      <h1 className="w-fit p-2 border">The {error.message}</h1>
      <button onClick={() => reload} className="px-5 py-2 border ml-1">
        Try Again
      </button>
    </div>
  );
}
