import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { business } from "@/lib/data";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Instrument_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: "Kaunda Landscapes | Cabro paving, lawns and garden design in Kenya",
  description:
    "Kaunda Landscapes builds cabro driveways and pathways, installs and maintains lawns, and designs gardens in Rongo, Kiambu, Kitale and Kisii.",
  keywords: ["cabro works Kenya", "landscaping Kenya", "lawn installation", "garden design", "Kiambu", "Kisii", "Kitale", "Rongo"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  name: business.name,
  founder: business.owner,
  foundingDate: String(business.established),
  telephone: business.phoneTel,
  areaServed: business.areas,
  makesOffer: ["Cabro paving", "Lawn installation and maintenance", "Garden design"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
