import type { Metadata } from "next";
// import { Inter, Vazirmatn } from "next/font/google";
import "../globals.css";

// const inter = Inter({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const Vazir = Vazirmatn({
//   variable: "--font-Vazirmatn",
//   subsets: ["latin"],
// });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {/* <h1 className="text-center font-bold text-5xl mb-3 text-gray-400">
          this is the Auth Page
        </h1> */}
        {children}
      </body>
    </html>
  );
}
// edit the leyout
