import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from './../components/nav/nav'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "La Boutique du Bien-Être & Spiritualité",
  description: "Découvrez notre boutique de produits bien-être et spiritualité : encens, bols tibétains, bijoux... Qualité supérieure et sélection unique pour votre bien-être.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}><Nav />{children}</body>
    </html>
  );
}
