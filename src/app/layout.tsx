import type { Metadata } from "next";

import { Montserrat } from "next/font/google";
import "./globals.css";
import NavigationSection from "@/components/NavigationSection";
import FooterSection from "@/components/FooterSection";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});
const url = "/imgs/home open graph.png";

export const metadata: Metadata = {
  openGraph: {
    images: [
      {
        width: 1200,
        height: 627,
        url,
      },
    ],
  },
  title: "Juliet Ndungu",
  description: "A professional that you can count on",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={montserrat.className}
      >
        <NavigationSection />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
