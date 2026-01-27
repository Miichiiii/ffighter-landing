import React from "react";
import type { Metadata, Viewport } from "next";
import { Press_Start_2P } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fart Fighter - Der ultimative Furz-Kampf | Kickstarter",
  description:
    "Unterstütze Fart Fighter - Ein humorvolles 2D-Kampfspiel mit 6 einzigartigen Furz-Kämpfern, Retro-Pixel-Art und epischen Special Moves. Jetzt auf Kickstarter!",
  keywords: [
    "Fart Fighter",
    "Kickstarter",
    "2D Fighting Game",
    "Retro Game",
    "Pixel Art",
    "Indie Game",
  ],
  openGraph: {
    title: "Fart Fighter - Kickstarter Kampagne",
    description:
      "Unterstütze Fart Fighter - Ein humorvolles 2D-Kampfspiel mit 6 einzigartigen Furz-Kämpfern!",
    type: "website",
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fart Fighter - Der ultimative Furz-Kampf",
    description: "Unterstütze Fart Fighter auf Kickstarter!",
  },
};

export const viewport: Viewport = {
  themeColor: "#001428",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={`${pressStart2P.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
