import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavLayout from "../components/NavLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BookARoom",
  description: "BookARoom is a platform from BookARoom Hotels",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <NavLayout />
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
          {children}
        </div>
      </body>
    </html>
  );
}
