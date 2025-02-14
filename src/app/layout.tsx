import ThemeProvider from "@/components/store/themeStore";
import AuthProvider from "@/components/authProvider";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";
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
  title: {
    template: "%s | ProjectZen",
    default: "ProjectZen - Made By Shardendu Mishra",
  },
  description:
    "ProjectZen | Sometimes Roasting, Sometimes Toasting - Made With Love By Shardendu Mishra Using Next.js 15",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </AuthProvider>
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
