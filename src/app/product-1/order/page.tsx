import Button from "./Button";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ id: string }>;
}) {
  const id = (await searchParams).id;

  return (
    <div>
      <h1 className="text-2xl font-bold text-center">
        You are ordaring the item {id}
      </h1>
      <Button />
    </div>
  );
}
