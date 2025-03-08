import type { Metadata } from "next";
import Footer from "@/utils/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';
import Navbar from "@/utils/Navbar";
import { BiSupport } from "react-icons/bi";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Infotact - SaaS Solutions for Business Growth",
  description:
    "Infotact specializes in building SaaS solutions, including web and app development, AI/ML, and digital marketing, to accelerate your business growth.",
  keywords: [
    "Infotact SaaS Company",
    "Web Development Services",
    "App Development Solutions",
    "AI/ML Digital Products",
    "Business Growth Digital Solutions",
    "Infotact Home Page",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Infotact - SaaS Solutions for Business Growth",
    description:
      "Empowering businesses with cutting-edge digital solutions in SaaS, web development, AI/ML, and digital marketing.",
    url: "https://infotact.in",
    type: "website",
    images: [
      {
        url: "/white.png",
        width: 1200,
        height: 630,
        alt: "Infotact - Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Infotact",
    title: "Infotact - SaaS Solutions for Business Growth",
    description:
      "Discover Infotact's innovative SaaS solutions to drive business growth and success.",
    images: "/white.png",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://infotact.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader
  color="#2299DD"
  initialPosition={0.08}
  crawlSpeed={200}
  height={3}
  crawl={true}
  showSpinner={true}
  easing="ease"
  speed={200}
  shadow="0 0 10px #2299DD,0 0 5px #2299DD"
  template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  zIndex={1600}
  showAtBottom={false}
/>
        <Navbar />
        {children}
        <div className="fixed bottom-2 right-4 ">
          <a
            href="https://wa.link/akucql"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4  text-white rounded-full shadow-lg"
          >
           <div className="flex flex-row items-center  text-white bg-gray-800 p-2 rounded-full shadow-lg text-sm justify-center px-2">
           <BiSupport className="mx-1" /> <span className="">Help & Support</span>
           </div>
          </a>
          </div>
        <Footer />
      </body>
    </html>
  );
}
