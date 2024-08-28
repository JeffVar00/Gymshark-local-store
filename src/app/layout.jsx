import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/menu_components/Navbar";
import Footer from "@/components/section_components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gymshark CR Unofficial Store",
  description:
    "Discover high-quality fitness and sports apparel at M&M Clothes CR Official Store. Shop Gymshark and top brands to elevate your performance and style.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-icon.png",
    },
  },
};

const getCategories = async () => {
  //move to client side fetch
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
};
export default async function RootLayout({ children }) {
  const mainCategories = await getCategories();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar main_categories={mainCategories} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
