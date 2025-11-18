"use client";
import { useRouter } from "next/navigation";

const list = [
  { id: 1, name: "product 1" },
  { id: 2, name: "product 2" },
  { id: 3, name: "product 3" },
  { id: 4, name: "product 4" },
  { id: 5, name: "product 5" },
  { id: 6, name: "product 6" },
  { id: 7, name: "product 7" },
];
export default function page() {
  const router = useRouter();
  function handleClick(id: number) {
    router.push(`/product-1/order?id=${id}`);
  }
  return (
    <div className="flex justify-between font-bold border-t gap-4 flex-wrap">
      {list.map((product) => (
        <div
          key={product.id}
          className="p-4 flex border flex-col m-2 gap-4 bg-gray-600 rounded-md text-gray-500"
        >
          <h1 className="p-4 text-center rounded-md bg-gray-500 text-white">
            {product.id}
          </h1>
          <h1 className="font-bold text-4xl text-white text-center">
            {product.name}
          </h1>
          <button
            onClick={() => handleClick(product.id)}
            className="py-3 px-5 bg-gray-500 text-white rounded-md"
          >
            Order
          </button>
        </div>
      ))}
    </div>
  );
}
