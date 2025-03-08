import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services - Infotact",
  description:
    "Infotact provides end-to-end digital solutions, including web and app development, digital marketing, AI/ML, and more to accelerate business growth.",
  keywords: [
    "Infotact Services",
    "Web Development Services",
    "App Development SaaS",
    "AI/ML Solutions",
    "Digital Marketing",
    "Business Growth Digital Solutions",
    "Infotact Service Offerings",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Our Services - Infotact",
    description:
      "Explore Infotact's wide range of services, from SaaS development to AI and digital marketing solutions.",
    url: "https://infotact.in/services",
    type: "website",
    images: [
      {
        url: "/white.png",
        width: 1200,
        height: 630,
        alt: "Infotact Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Infotact",
    title: "Our Services - Infotact",
    description:
      "Discover how Infotact's services in web development, AI/ML, and more can elevate your business.",
    images: "/white.png",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://infotact.in/services",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
