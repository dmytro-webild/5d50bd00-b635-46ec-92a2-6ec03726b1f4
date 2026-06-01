import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Poppins } from "next/font/google";



export const metadata: Metadata = {
  title: 'Cocco Pizzeria | Pizza Romana Autentica a Roma',
  description: 'Ordina online la vera pizza romana a crosta sottile da Cocco. Consegna e asporto disponibili. Prenota il tuo tavolo oggi!',
  keywords: ["pizza romana, pizzeria Roma, pizza a crosta sottile, ordina pizza online Roma, migliori pizzerie Roma, Cocco pizza"],
  openGraph: {
    "title": "Cocco Pizzeria | Autentica Pizza Romana",
    "description": "Esperienza culinaria romana con pizze artigianali e ingredienti di qualità. Ordina online o prenota un tavolo.",
    "url": "https://www.coccopizzeria.it",
    "siteName": "Cocco Pizzeria",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/high-angle-pizza-restaurant-table_23-2148305651.jpg",
        "alt": "Pizza in forno a legna"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Cocco Pizzeria | Autentica Pizza Romana",
    "description": "Esperienza culinaria romana con pizze artigianali e ingredienti di qualità. Ordina online o prenota un tavolo.",
    "images": [
      "http://img.b2bpic.net/free-photo/high-angle-pizza-restaurant-table_23-2148305651.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${poppins.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
