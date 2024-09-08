import "./globals.css";

import { Inter } from "next/font/google";
import { WixClientContextProvider } from "@/context/wixContext";

import NavbarModal from "@/components/section_components/NavbarModal";
import Footer from "@/components/section_components/Footer";

import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

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
      icon: "/icon.avif",
      shortcut: "/icon.avif",
      apple: "/apple-icon.avif",
      other: {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-icon.avif",
      },
    },
  };
}

export default async function RootLayout({ children }) {
  const locale = await getLocale();
  const messages = await getMessages();
  const metadata = await generateMetadata(locale);

  return (
    <html lang={locale}>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icons.icon} />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <WixClientContextProvider>
            <NavbarModal />
            {children}
            <Footer />
          </WixClientContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
