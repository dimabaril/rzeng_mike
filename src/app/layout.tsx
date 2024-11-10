import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";

// import { Header } from "@/components/header/Header";
// import { Footer } from "@/components/footer/Footer";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// className={` ${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)] '}

export const metadata: Metadata = {
  title: "Rzeng & Mike",
  description: "duo of intermedia artists",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`h-screen antialiased`}>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
