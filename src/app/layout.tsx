import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });

const siteUrl = "https://shiv-999.github.io/signalcraft-landing";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Signalcraft — AI marketing agents for growing B2B teams",
  description:
    "Signalcraft watches your market, drafts on-brand content and schedules it across channels, so small marketing teams ship more without losing their voice.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Signalcraft — AI marketing agents for growing B2B teams",
    description: "Market monitoring, on-brand content and scheduling in one AI workspace.",
    siteName: "Signalcraft",
  },
  twitter: { card: "summary_large_image", title: "Signalcraft", description: "AI marketing agents for growing B2B teams." },
  robots: { index: true, follow: true },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%237c5cff'/%3E%3Cpath d='M9 20c3-8 11-8 14 0' stroke='white' stroke-width='3' fill='none' stroke-linecap='round'/%3E%3Ccircle cx='16' cy='12' r='2.5' fill='%2367e8f9'/%3E%3C/svg%3E",
  },
};

export const viewport: Viewport = { themeColor: "#0b1020" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
