import type { Metadata } from "next";
import "./globals.css";
import {
  HERO_DESCRIPTION,
  SITE_TITLE,
  SITE_URL,
  SITE_KEYWORDS,
} from "@/lib/siteMeta";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: HERO_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  openGraph: {
    title: SITE_TITLE,
    description: HERO_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_TITLE,
    type: "website",
  },
  metadataBase: new URL(SITE_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}


