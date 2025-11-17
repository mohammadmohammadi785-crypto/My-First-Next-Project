export default async function page({
  params,
  searchParams,
}: {
  params: Promise<{ articleid: string }>;
  searchParams: Promise<{ lang?: string }>;
}) {
  const { articleid } = await params;
  const { lang= "English" } = await searchParams;
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">
        this is article {articleid}
      </h1>
      <h1 className="text-4xl font-bold text-center">
        you are reading this article in {lang}
      </h1>
    </div>
  );
}
