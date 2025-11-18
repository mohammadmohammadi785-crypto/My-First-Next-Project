import Link from "next/link";

const products = Array.from({ length: 60 }, (_, i) => ({
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
      <PagiNation currentPage={pageToNumber} totalPage={totalPage} />
    </div>
  );
}

export default product;

function PagiNation({
  currentPage,
  totalPage,
}: {
  currentPage: number;
  totalPage: number;
}) {
  const pages = Array.from({ length: totalPage }, (_, i) => i + 1);
  return (
    <div className="flex justify-center item-center gap-2 font-bold text-2xl">
      {currentPage > 1 && (
        <Link href={`?page=${currentPage - 1}`}>Previus</Link>
      )}
      <span>
        Page {currentPage} of {totalPage}
      </span>
      {pages.map((page) => (
        <Link key={page} href={`?page=${page}`}>
          {page}
        </Link>
      ))}
      {currentPage < totalPage && (
        <Link href={`?page=${currentPage + 1}`}>Next</Link>
      )}
    </div>
  );
}
