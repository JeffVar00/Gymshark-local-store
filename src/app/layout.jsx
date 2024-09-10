import "./globals.css";

import { Inter } from "next/font/google";
import { WixClientContextProvider } from "@/context/wixContext";

import NavbarModal from "@/components/section_components/NavbarModal";
import Footer from "@/components/section_components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "M&M Store CR",
  description:
    "Descubre ropa deportiva y de fitness de alta calidad en la tienda oficial de M&M Clothes CR. Compra Gymshark y las mejores marcas para mejorar tu rendimiento y estilo.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/icon.png",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <WixClientContextProvider>
          <NavbarModal />
          {children}
          <Footer />
        </WixClientContextProvider>
      </body>
    </html>
  );
}
