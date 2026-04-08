import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NonVegToggleProvider } from "@/context/nonVegToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Wow Pizza Menu",
  description: "Check out our Menu on your device",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NonVegToggleProvider>
          <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
            <Header />
            <div>{children}</div>
            <Footer />
          </div>
        </NonVegToggleProvider>
      </body>
    </html>
  );
}
