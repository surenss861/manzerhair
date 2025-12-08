import type { Metadata } from "next";
import { Playfair_Display, Inter, Dancing_Script } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/global/Navbar";
import { Footer } from "@/components/global/Footer";
import { ScrollProgressBar } from "@/components/global/ScrollProgressBar";
import { SmoothScrollWrapper } from "@/components/global/SmoothScrollWrapper";
import { PersistentBookingBar } from "@/components/global/PersistentBookingBar";
import { organizationSchema, serviceSchema, localBusinessSchema, faqSchema } from "./schema";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-script",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Manzer Hair Studio | Eco-Friendly Hair Salon Toronto | Danforth Neighborhood",
  description:
    "Green Circle certified sustainable salon in Toronto's Danforth. Award-winning stylists, PPD-free color, cruelty-free products. Expert cuts, balayage, bridal services. Book your transformation today.",
  keywords: [
    "hair salon Toronto",
    "hair salon Danforth",
    "Danforth hair salon",
    "Greektown hair salon",
    "Toronto East hair salon",
    "eco-friendly salon Toronto",
    "sustainable salon Toronto",
    "balayage Toronto",
    "balayage Danforth",
    "PPD-free color Toronto",
    "hair color Toronto",
    "hair color Danforth",
    "bridal hair Toronto",
    "Green Circle salon",
    "cruelty-free salon Toronto",
    "premium salon Toronto",
    "Danforth Ave hair salon",
    "1993 Danforth Ave",
  ],
  openGraph: {
    title: "Manzer Hair Studio | Eco-Friendly Hair Salon in Toronto's Danforth",
    description:
      "Green Circle certified sustainable salon. Award-winning stylists, PPD-free color, cruelty-free products. Expert cuts, color, and bridal services. Book your transformation today.",
    type: "website",
    locale: "en_CA",
    url: "https://www.manzerhair.com",
    siteName: "Manzer Hair Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manzer Hair Studio | Eco-Friendly Hair Salon Toronto",
    description: "Green Circle certified sustainable salon in Toronto's Danforth neighborhood.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body
        className={`${playfairDisplay.variable} ${inter.variable} ${dancingScript.variable} font-sans antialiased`}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-espresso focus:text-cream-light focus:rounded-organic">
          Skip to main content
        </a>
        <SmoothScrollWrapper>
          <ScrollProgressBar />
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <PersistentBookingBar />
        </SmoothScrollWrapper>
      </body>
    </html>
  );
}
