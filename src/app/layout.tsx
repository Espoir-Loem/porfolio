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
  title: "Espoir Loém",
  description: "Je suis Loémba Packa Force Espoir de nom complet , je suis développer , designer, chanteur et rappeur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="theme-color" content="#42325e"/>
       <link rel="shortcut icon" href="/espoir loém .png" type="image/x-icon" />
       <link rel="apple-touch-icon" href="/espoir loém.jpg" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  overflow-x-hidden   `}
      >
        {children}
      </body>
    </html>
  );
}
