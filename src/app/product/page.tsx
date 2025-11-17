const products = Array.from({ length: 40 }, (_, i) => ({
  id: i + 1,
  name: `product ${i + 1}`,
}));

async function product({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const page = (await searchParams).page;
  const pageToNumber = Number(page) || 1;
  const itemPerPage = 6;
  const start = (pageToNumber - 1) * itemPerPage;
  const end = start + itemPerPage;
  const totalPage = Math.ceil(products.length / itemPerPage);
  const items = products.slice(start, end);
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

export default product;
