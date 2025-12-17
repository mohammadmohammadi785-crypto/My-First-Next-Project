export const dynamic = "force-static";
export async function GET() {
  const list = [
    { id: 1, name: "Toilary Item" },
    { id: 2, name: "Home and Garden" },
    { id: 3, name: "Electrocity" },
    { id: 4, name: "Recipe" },
    { id: 5, name: "Cosmic Item" },
    { id: 6, name: "Fruits" },
    { id: 7, name: "Vegetables" },
    { id: 8, name: "Clothings" },
    { id: 9, name: "Decoration" },
  ];
  return Response.json(list);
}
