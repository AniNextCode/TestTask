'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.sass";
import Menu from "@/components/menu/Menu";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {pathname != '/learning' ? <Menu /> : null}
      </body>
    </html>
  );
}
