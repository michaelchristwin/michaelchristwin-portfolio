import Navbar from "@/components/Navbar";
import "./globals.css";
import { Figtree } from "next/font/google";

const font = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Meet Michael Christwin | Portfolio Site",
  description:
    "Michael Christwin's Portfolio: Showcasing Creative and Innovative Web Development Solutions for Businesses and Brands",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
