import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import UtilityBar from "@/components/layout/UtilityBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyCTA from "@/components/layout/StickyCTA";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Agarwal Logistics Packers | Packers & Movers Across India",
  description:
    "Agarwal Logistics Packers offers safe, fast and reliable home, office and vehicle relocation services across India. Get a free quote today.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${montserrat.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-white text-navy">
        <div className="h-1 w-full bg-gradient-to-r from-navy via-orange to-navy" />
        <TopBar />
        <UtilityBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
