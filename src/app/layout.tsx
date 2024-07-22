import type { Metadata } from "next";
import { EB_Garamond, Roboto, Open_Sans, Lora } from "next/font/google";
import "./globals.css";
import Nav from '@/components/nav/nav'
import Footer from '@/components/footer/footer'


const garamond = EB_Garamond({ subsets: ["latin"], weight: ["400", "700"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "700"] });
const lora = Lora({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "La Boutique du Bien-Être & Spiritualité",
  description:
    "Découvrez notre boutique de produits bien-être et spiritualité : encens, bols tibétains, bijoux... Qualité supérieure et sélection unique pour votre bien-être.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${garamond.className} ${roboto.className} ${openSans.className} ${lora.className}`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
