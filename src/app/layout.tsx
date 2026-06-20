import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bernat Bou | Asesor de Inversiones de Grandes Capitales",
  description: "Preservación, crecimiento y planificación estructurada de patrimonios exclusivos. Asesoramiento financiero independiente y confidencial para familias y grandes patrimonios.",
  keywords: ["asesor de inversiones", "family office", "grandes capitales", "planificación patrimonial", "wealth management", "inversión privada"],
  authors: [{ name: "Bernat Bou" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-navy-deep text-gray-100 font-sans selection:bg-gold-300/30 selection:text-white">
        <Navbar />
        <main className="flex-1 flex flex-col w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
