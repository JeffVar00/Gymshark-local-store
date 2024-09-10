import "./globals.css";

import { Inter } from "next/font/google";
import { WixClientContextProvider } from "@/context/wixContext";

import NavbarModal from "@/components/section_components/NavbarModal";
import Footer from "@/components/section_components/Footer";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(locale) {
  const descriptions = {
    en: "Discover high-quality fitness and sports apparel at M&M Clothes CR Official Store. Shop Gymshark and top brands to elevate your performance and style.",
    es: "Descubre ropa deportiva y de fitness de alta calidad en la tienda oficial de M&M Clothes CR. Compra Gymshark y las mejores marcas para mejorar tu rendimiento y estilo.",
  };

  const title = {
    en: "M&M Store CR",
    es: "Tienda M&M CR",
  };

  return {
    title: title[locale] || title["es"],
    description: descriptions[locale] || descriptions["es"],
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
}

export default async function RootLayout({ children }) {
  const metadata = await generateMetadata("es");

  return (
    <html lang="es">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icons.icon} sizes="any" />
        <link rel="shortcut icon" href={metadata.icons.shortcut} sizes="any" />
        <link
          rel="apple-touch-icon"
          href={metadata.icons.apple}
          sizes="180x180"
        />
        <link
          rel={metadata.icons.other.rel}
          href={metadata.icons.other.url}
          sizes="180x180"
        />
      </head>
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
