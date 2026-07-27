import type { Metadata } from "next";
import MotionSystem from "../components/MotionSystem";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Ketan Kritesh | Frontend Developer",
    template: "%s | Ketan Kritesh",
  },
  description:
    "Frontend developer building scalable React, Next.js, and product UI experiences.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <MotionSystem />
        {children}
      </body>
    </html>
  );
}
