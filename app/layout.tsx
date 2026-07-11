import type { Metadata } from "next";
import { Hanken_Grotesk, Spectral } from "next/font/google";
import "./globals.css";
import RevealInit from "@/components/RevealInit";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alexmassage.fr"),
  title: "Massage à domicile Toulouse — Alex Massage bien‑être",
  description:
    "Massage bien‑être à domicile à Toulouse : relaxant, ayurvédique ou sportif, en solo ou duo, dès 30 €. Alexandre se déplace chez vous — réservez !",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Alex Massage",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alex Massage — massage bien-être à domicile à Toulouse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${hanken.variable} ${spectral.variable}`}
    >
      <body>
        {/* Amorce le scroll-reveal avant le premier rendu visible,
            comme le site.js d'origine chargé dans <head>. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.setAttribute("data-js","")`,
          }}
        />
        <RevealInit />
        {children}
      </body>
    </html>
  );
}
