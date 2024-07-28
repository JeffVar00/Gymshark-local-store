import { Inter } from "next/font/google";
import "./globals.css";
import Notification from "@/components/Notification";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "M&M Clothes CR Official Store",
  description:
    "Discover high-quality fitness and sports apparel at M&M Clothes CR Official Store. Shop Gymshark and top brands to elevate your performance and style.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Notification />
        <Navbar />
        <div id="navbar-reference-point"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
