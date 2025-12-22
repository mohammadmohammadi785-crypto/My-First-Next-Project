async function page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug?.length === 2) {
    return (
      <div>
        <h1 className="text-3xl text-center text-red-500">
          this is a feature of {slug[0]} and concept of {slug[1]}
        </h1>
      </div>
    );
  } else if (slug?.length === 1) {
    return (
      <div>
        <h1 className="text-3xl text-center text-red-500">
          this is a feature of {slug[0]}
        </h1>
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-5xl text-center">this is a feature page</h1>
    </div>
  );
}

export default page;
