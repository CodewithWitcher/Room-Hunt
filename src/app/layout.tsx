import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flat Required Near Sector 59 Noida | 1 BHK & 2 BHK Showcase",
  description:
    "Direct flat requirement showcase: Looking for 1 BHK or 2 BHK flat near Sector 59, Noida. Budget ₹8K - ₹15K/month with RO, Geyser, Modular Kitchen, and Almirah. Shifting by August 2026.",
  keywords: [
    "Flat required Sector 59 Noida",
    "1 BHK flat near Sector 59 Noida",
    "2 BHK flat near Sector 59 Noida",
    "Noida flat requirement",
    "Sector 62 flat requirement",
    "Sector 63 64 65 flat requirement",
    "Indirapuram flat requirement",
  ],
  authors: [{ name: "Flat Seeker" }],
  openGraph: {
    title: "Flat Required Near Sector 59 Noida | 1 BHK / 2 BHK",
    description:
      "Looking for 1 BHK (₹8K-₹11K) or 2 BHK (₹11K-₹15K) near Sector 59, Noida. Shift date 15th-23rd Aug 2026. Contact via WhatsApp / Call.",
    type: "website",
    locale: "en_IN",
    siteName: "Noida Flat Requirement Showcase",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-indigo-500 selection:text-white relative bg-[#090D16] text-gray-100 min-h-screen flex flex-col">
        {/* Background Ambient Glow Elements */}
        <div className="glow-orb-indigo top-0 -left-20 animate-pulse-slow"></div>
        <div className="glow-orb-cyan top-[30%] -right-32 animate-float"></div>
        <div className="glow-orb-rose bottom-20 left-[10%] animate-pulse-slow"></div>
        
        {children}
      </body>
    </html>
  );
}
