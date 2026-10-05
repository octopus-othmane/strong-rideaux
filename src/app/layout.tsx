import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { JsonLd, organizationSchema, localBusinessSchema } from "@/components/seo/JsonLd";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: {
    template: '%s | STRONG RIDEAUX',
    default: "STRONG RIDEAUX | Solutions de fermeture et d'automatisation",
  },
  description: "STRONG RIDEAUX conçoit et installe des solutions de fermeture, de protection et d'automatisation pensées pour répondre aux exigences des espaces contemporains.",
  openGraph: {
    title: 'STRONG RIDEAUX - Solutions de Fermetures Architecturales',
    description: 'STRONG RIDEAUX conçoit et installe des solutions de fermeture en aluminium.',
    url: 'https://strongrideaux.com',
    siteName: 'STRONG RIDEAUX',
    images: [
      {
        url: 'https://strongrideaux.com/images/strong-rideaux-img-1.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'fr_MA',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${manrope.variable} font-sans antialiased flex flex-col min-h-screen`}>
        <JsonLd data={organizationSchema} />
        <JsonLd data={localBusinessSchema} />
        <Navbar />
        <WhatsAppButton />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
