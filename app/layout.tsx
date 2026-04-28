import type { Metadata, Viewport } from "next";
import SplashScreen from "@/components/SplashScreen";
import CookieBanner from "@/components/landing/CookieBanner";
import "./globals.css";

export const metadata: Metadata = {
  title: "CookKin — Preserve the recipes that raised you",
  description:
    "A private family recipe memory app that preserves loved ones through food: their voice, hands, and stories.",
  openGraph: {
    title: "CookKin — Preserve the recipes that raised you",
    description: "A private family recipe memory app that preserves loved ones through food.",
    siteName: "CookKin",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CookKin — Preserve the recipes that raised you",
    description: "A private family recipe memory app that preserves loved ones through food.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/images/potlogo.png",
    apple: "/images/potlogo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <SplashScreen />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
