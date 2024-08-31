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
      <body className="flex flex-col gap-10">
      <NextTopLoader />
        <Header/>
        <div className="px-20">
        {children}
        </div>
        </body>
    </html>
  );
}
