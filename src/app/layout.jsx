import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/menu_components/Navbar";
import Footer from "@/components/section_components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "M&M Clothes CR Official Store",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
