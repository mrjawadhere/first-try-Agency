import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { CosmicAnalyticsProvider } from "cosmic-analytics";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const primaryFont = Geist({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

// Change the title and description to your own.
export const metadata: Metadata = {
  title: "JR AI Agency — Transforming Ideas into Intelligent Solutions",
  description: "AI Agent Development, Code & No-Code Automations, and Backend Engineering for startups and small businesses.",
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://example.com"),
  openGraph: {
    title: "JR AI Agency",
    description: "Transforming Ideas into Intelligent Solutions.",
    url: "/",
    siteName: "JR AI Agency",
  },
};

export default function RootLayout({
  children,
  
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={primaryFont.className}>
      <body
        className="antialiased text-white"
        style={{
          backgroundImage:
            "linear-gradient(111.4deg, rgba(7,7,9,1) 6.5%, rgba(27,24,113,1) 93.2%)",
          backgroundAttachment: "fixed",
        }}
      >
        <main className="min-h-screen">
          <CosmicAnalyticsProvider>
            {/* site navbar */}
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-sync-scripts */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    name: "JR AI Agency",
                    url: process.env.NEXT_PUBLIC_BASE_URL || "",
                    email: "jraiagency@gmail.com",
                    address: {
                      "@type": "PostalAddress",
                      addressLocality: "Faisalabad",
                      addressCountry: "PK",
                    },
                  }),
                }}
              />
            </div>
            {/* navbar imported here */}
            <Navbar />
            {children}
            <Footer />
          </CosmicAnalyticsProvider>
        </main>
      </body>
    </html>
  );
}