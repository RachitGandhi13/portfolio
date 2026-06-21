import type { Metadata } from "next";
import { Inter, Playfair_Display, Space_Mono } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["italic"],
  weight: ["400", "500"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400"],
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
      <body
        className={`${inter.variable} ${playfair.variable} ${spaceMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
