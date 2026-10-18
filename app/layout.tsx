import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { business } from "@/lib/data";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kaunda Landscapes | Cabro paving, lawns and garden design in Kenya",
  description:
    "Kaunda Landscapes builds cabro driveways and pathways, installs and maintains lawns, and designs gardens across Kenya.",
  keywords: ["cabro works Kenya", "landscaping Kenya", "lawn installation", "garden design"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  name: business.name,
  founder: business.owner,
  foundingDate: String(business.established),
  telephone: business.phoneTel,
  areaServed: { "@type": "Country", name: "Kenya" },
  makesOffer: ["Cabro paving", "Lawn installation and maintenance", "Garden design"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
