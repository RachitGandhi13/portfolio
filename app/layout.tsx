import type { Metadata } from "next";
import { DM_Sans, Space_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import Cursor from "@/components/Cursor";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "700"],
});
const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
});
const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600"],
  style: ["italic"],
});

export const metadata: Metadata = {
  title: "Rachit Gandhi — Full-Stack Developer",
  description:
    "Portfolio of Rachit Gandhi — Full-Stack Developer specializing in MERN, Next.js, TypeScript, WebRTC, and Web3.",
  keywords: ["Rachit Gandhi", "Full Stack Developer", "MERN", "Next.js", "TypeScript", "WebRTC"],
  authors: [{ name: "Rachit Gandhi" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${spaceMono.variable} ${cormorantGaramond.variable} font-sans antialiased`}>
        <Providers>
          <Cursor />
          {children}
        </Providers>
      </body>
    </html>
  );
}
