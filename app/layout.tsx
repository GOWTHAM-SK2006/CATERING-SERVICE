import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://valam-caterers-directory.vercel.app"),
  title: {
    default: "Valam Food Directory | Find the Best Catering Services Near You",
    template: "%s | Valam Food Directory",
  },
  description:
    "Discover trusted catering services for weddings, parties and special occasions across Tamil Nadu. Featuring Valam Caterers (Chettipalayam, P.N. Road, Tirupur), pure vegetarian sadya, and regional festive banquets.",
  keywords: [
    "Valam Caterers",
    "Tirupur Caterers",
    "Caterers in P.N. Road",
    "Chettipalayam Caterers",
    "Wedding Catering Tamil Nadu",
    "Pure Veg Caterers Chennai",
    "South Indian Wedding Sadya",
    "Brahmin Catering Services",
    "Good Food Catering",
    "Catering Directory India",
  ],
  authors: [{ name: "Valam Food Directory" }],
  creator: "Valam Food Directory",
  publisher: "Valam Food Directory",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Find the Best Catering Services Near You | Valam Food Directory",
    description:
      "Discover trusted catering services for weddings, parties and special occasions. Featuring Valam Caterers on P.N. Road, Tirupur, and authentic South Indian catering banquets.",
    url: "https://valam-caterers-directory.vercel.app",
    siteName: "Valam Food Directory",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Valam Food Directory - Catering Services Near You",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Find the Best Catering Services Near You | Valam Food Directory",
    description:
      "Discover trusted catering services for weddings, parties and special occasions.",
    images: [
      "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-white text-gray-900 antialiased selection:bg-brand-100 selection:text-brand-900 font-sans">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

