import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tundra | Portfolio",
  description: "Just a simple portfolio to showcase some of my projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-[#0a0e1a] via-[#1f3358] to-[#274a63] min-h-screen w-full`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
