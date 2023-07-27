import type { Metadata } from "next";
import { Dancing_Script, Inter, Roboto_Slab } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Learning Platform of MCPH UK",
  description: "The Learning Platform of MCPH UK",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${dancingScript.variable} ${robotoSlab.variable} font-roboto`}
      >
        {children}
      </body>
    </html>
  );
}
