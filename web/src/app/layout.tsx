import type { Metadata } from "next";
import "./globals.css";
import Header from "src/components/Header";


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
        <Header/>
        {children}
        </body>
    </html>
  );
}
