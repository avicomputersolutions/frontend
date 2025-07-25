import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* bg-[#030014] */}
      <body
        className={`${inter.className} antialiased bg-neutral-950   `}
      >

        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
