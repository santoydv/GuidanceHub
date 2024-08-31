import type { Metadata } from "next";
import "./globals.css";
import Header from "src/components/Header";
import NextTopLoader from "nextjs-toploader";
import SmoothScrolling from "src/components/LenisWrapper";


export const metadata: Metadata = {
  title: "GuidanceHUB",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col">
      <NextTopLoader />
      <SmoothScrolling>
        <Header/>
        {children}
        </SmoothScrolling>
        </body>
    </html>
  );
}
