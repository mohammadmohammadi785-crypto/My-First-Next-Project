export function GET() {
  const customerList = [
    { id: 1, name: "ALi Ahmadi" },
    { id: 2, name: "Ahmad Ahmadi" },
    { id: 3, name: "Komail Ahmadi" },
    { id: 4, name: "Murtaza Ahmadi" },
    { id: 5, name: "Nawid Ahmadi" },
    { id: 6, name: "Ali Reza Ahmadi" },
    { id: 7, name: "Faiz Ahmadi" },
    { id: 8, name: "Fatima Ahmadi" },
    { id: 9, name: "Nazanin Ahmadi" },
    { id: 10, name: "Nazi Ahmadi" },
    { id: 11, name: "Rahman Ahmadi" },
    { id: 12, name: "Qasim Ahmadi" },
  ];
  return Response.json(customerList);
}
