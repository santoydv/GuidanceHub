import type { Metadata } from "next";
import "./globals.css";
import Header from "src/components/Header";
import NextTopLoader from "nextjs-toploader";


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
      <body className="">
      <NextTopLoader />
        <Header/>
        <div className="">
        {children}
        </div>
        </body>
    </html>
  );
}
