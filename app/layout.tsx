import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import Cursor from "@/components/Cursor";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});
const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
});
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  weight: "400",
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
      <body className={`${spaceGrotesk.variable} ${spaceMono.variable} ${bebasNeue.variable} font-sans antialiased`}>
        <Providers>
          <Cursor />
          {children}
        </Providers>
      </body>
    </html>
  );
}
