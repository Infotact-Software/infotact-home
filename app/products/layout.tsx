import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products and Recognition - Infotact",
  description:
    "Explore Infotact's innovative digital products that drive business growth. Learn about our achievements and industry recognitions.",
  keywords: [
    "Infotact Products",
    "Digital Innovation SaaS",
    "Business Growth Solutions",
    "Infotact Recognition",
    "Industry Awards Infotact",
    "Web and App Products",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Products and Recognition - Infotact",
    description:
      "Discover Infotact's impactful SaaS products and recognitions in the tech industry for innovation and excellence.",
    url: "https://infotact.in/products",
    type: "website",
    images: [
      {
        url: "/white.png",
        width: 1200,
        height: 630,
        alt: "Infotact Products and Recognition",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Infotact",
    title: "Products and Recognition - Infotact",
    description:
      "Learn about Infotact's cutting-edge digital products and accolades in the SaaS industry.",
    images: "/white.png",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://infotact.in/products",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
