import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import Snowfall from "@/components/ui/snowfall";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tundra | Portfolio",
  description: "Just a simple portfolio to showcase some of my projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-gray-950 via-gray-900 to-cyan-950 bg-pattern min-h-screen w-full`}>
        <Snowfall />
        <Header />
        {children}
      </body>
    </html>
  );
}
