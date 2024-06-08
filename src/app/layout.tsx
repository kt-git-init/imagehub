import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ImageHub : Get Photography ready!",
  description:
    "Dive into the world of photography with Image Hub, the ultimate destination for aspiring and professional photographers alike. Our comprehensive courses, expert instructors, and vibrant community provide everything you need to master the art and science of photography. From foundational techniques to advanced creative concepts, we nurture your talent and help you capture stunning visuals. Join us at Image Hub and transform your photographic journey into a masterpiece.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="relative flex w-full items-center justify-center">
          <Navbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
