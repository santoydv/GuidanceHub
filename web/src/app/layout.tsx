import type { Metadata } from "next";
import "./globals.css";
import Header from "src/components/Header";
import NextTopLoader from "nextjs-toploader";
import SmoothScrolling from "src/components/LenisWrapper";
import Link from "next/link";


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
        <footer className="bg-[#3F51B5]">
          <div className=" text-white flex justify-start py-14">
            <div className="h-full flex-1 px-10 flex items-center justify-center text-3xl font-bold uppercase tracking-wider text-white">
              GuidanceHUB
            </div>
            <div className="flex-1">
              <h2 className="font-bold mb-2 text-xl ">Useful Links</h2>
              <ul className="flex flex-col justify-start gap-2">
                <Link href="/"><li className="hover:text-gray-200">Home</li></Link>
                <Link href="/about"><li className="hover:text-gray-200">About us</li></Link>
                <Link href="/contact"><li className="hover:text-gray-200">Contact us</li></Link>
                <Link href="/privacy-policy"><li className="hover:text-gray-200">Privacy Policy</li></Link>
                <Link href="/disclaimer"><li className="hover:text-gray-200">Disclaimer</li></Link>
              </ul>
            </div>
            <div className="flex-1">
              <h2 className="font-bold mb-2 text-xl ">Our Features</h2>
              <ul className="flex flex-col justify-start gap-2">
                <Link href="/"><li className="hover:text-gray-200">Home</li></Link>
                <Link href="/about"><li className="hover:text-gray-200">About us</li></Link>
                <Link href="/contact"><li className="hover:text-gray-200">Contact us</li></Link>
                <Link href="/privacy-policy"><li className="hover:text-gray-200">Privacy Policy</li></Link>
                <Link href="/disclaimer"><li className="hover:text-gray-200">Disclaimer</li></Link>
              </ul>
            </div>
          </div>
          <div className="text-center py-2 text-white">Copyright &#169; GuidanceHUB. All Right Reserved</div>
        </footer>
        </SmoothScrolling>
        </body>
    </html>
  );
}
