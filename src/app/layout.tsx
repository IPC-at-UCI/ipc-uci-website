import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const redHatDisplay = localFont({
  src: "./_fonts/RedHatDisplay.ttf",
  variable: "--font-redhat-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "IPC at UCI",
  description: "Official website for IPC at UC Irvine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${redHatDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
