import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// 1. Import your background component (assuming it's in /components)
import InteractiveBackground from "@/components/Background"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ELSINAL | Global Systems & Tech Infrastructure",
  description: "EL SYSTEM INTERNATIONAL (ELSINAL) builds secure digital ecosystems, providing Web3 talent, P2P infrastructure, and institutional tech training.",
  openGraph: {
    title: "ELSINAL | Global Systems & Tech Infrastructure",
    description: "Building the future of secure digital ecosystems.",
    // Replace with your actual ELSINAL domain when ready
    url: "https://elsinal.com", 
    siteName: "ELSINAL",
    images: [
      {
        url: "/logo3.png", 
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ELSINAL | Global Systems",
    description: "Web3 talent & P2P infrastructure.",
    images: ["/logo3.png"],
  },
};


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
        className="bg-[#051007] text-[#eaf5ea] antialiased min-h-screen selection:bg-[#A6CE39] selection:text-[#051007] relative"
      >
        {/* 2. Place the background here. It's 'fixed', so it stays put while you scroll. */}
        <InteractiveBackground />

        {/* 3. Wrap children in a relative div with z-index to stay on top */}
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}