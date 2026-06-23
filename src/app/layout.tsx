import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LoadingScreen from "../components/ui/LoadingScreen";
import GlobalBackgroundWrapper from "../components/3d/GlobalBackgroundWrapper";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Harshita Grover | AI Engineer & Full Stack Developer",
  description: "Portfolio of Harshita Grover - AI Engineer, Salesforce Trainee, ERP Enthusiast, and Full Stack Developer. Building intelligent systems that solve real-world problems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body suppressHydrationWarning className={`${inter.variable} font-sans antialiased bg-transparent text-white min-h-screen`}>
        <LoadingScreen />
        <GlobalBackgroundWrapper />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
