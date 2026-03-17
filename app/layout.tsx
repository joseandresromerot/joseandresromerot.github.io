import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Jose Romero — Senior Fullstack Developer",
  description:
    "Senior Fullstack Developer with 10 years of experience building products across fintech, corporate, and freelance environments. Based in Ecuador, working remotely worldwide.",
  keywords: [
    "Jose Romero",
    "Senior Fullstack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Ecuador",
    "Remote Developer",
  ],
  authors: [{ name: "Jose Romero" }],
  openGraph: {
    title: "Jose Romero — Senior Fullstack Developer",
    description:
      "Senior Fullstack Developer with 10 years of experience. Based in Ecuador, working remotely worldwide.",
    type: "website",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
};

export default RootLayout;
