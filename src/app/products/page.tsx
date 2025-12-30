import Link from "next/link";

export default function Products() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-green-500 bg-gray-500 p-4">
        All Prosucts
      </h1>
      <div className="text-center font-bold bg-green-500 p-4 text-gray-500 text-2xl">
        <Link href="products/1">product 1</Link>
        <Link href="products/2">product 2</Link>
        <Link href="products/3">product 3</Link>
        <Link href="products/4">product 4</Link>
      </div>
    </div>
  );
}
