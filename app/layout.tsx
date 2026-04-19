import type { Metadata, Viewport } from "next"; // Added Viewport type
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ 1. Metadata (Viewport removed from here)
export const metadata: Metadata = {
  title: "ELSINAL | Global Systems & Tech Infrastructure",
  description: "EL SYSTEM INTERNATIONAL (ELSINAL) builds secure digital ecosystems, providing Web3 talent, P2P infrastructure, and institutional tech training.",
};

// ✅ 2. New Viewport Export
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#051007",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body 
        className="bg-[#051007] text-[#eaf5ea] antialiased min-h-screen selection:bg-[#A6CE39] selection:text-[#051007]"
      >
        {children}
      </body>
    </html>
  );
}