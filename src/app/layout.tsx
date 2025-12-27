import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Yeasir Ahnaf | Full Stack Developer",
  description: "Portfolio of Yeasir Ahnaf Asif - Full Stack Developer specializing in Node.js, NestJS, and Next.js.",
};

import Background from "@/components/Background";
import ScrollProgress from "@/components/ScrollProgress";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground selection:bg-cyan-500/30 selection:text-cyan-200`}
        suppressHydrationWarning
      >
        <ScrollProgress />
        <Background />
        <div className="fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] opacity-20 pointer-events-none"></div>
        {children}
      </body>
    </html>
  );
}
