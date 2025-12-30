export const dynamicParams = true;
export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }];
}

export default async function ProductDeatils({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      <h1 className="text-center text-green-500 bg-gray-500 p-6 text-2xl font-bold">
        this is the deatils about product {id} and{" "}
        {new Date().toLocaleTimeString()}
      </h1>
    </div>
  );
}
