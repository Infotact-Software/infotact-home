import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Quote - Infotact",
  description:
    "Request a custom quote for your digital product needs. Infotact offers web and app development, AI/ML solutions, and digital marketing services tailored to your business goals.",
  keywords: [
    "Infotact Get a Quote",
    "Custom Digital Solutions Pricing",
    "Web Development Cost",
    "App Development Quote",
    "AI/ML Solutions Estimate",
    "Digital Marketing Pricing",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Get a Quote - Infotact",
    description:
      "Get a personalized quote from Infotact for web development, app development, AI/ML solutions, and more.",
    url: "https://infotact.in/get-a-quote",
    type: "website",
    images: [
      {
        url: "/white.png",
        width: 1200,
        height: 630,
        alt: "Infotact Get a Quote",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Infotact",
    title: "Get a Quote - Infotact",
    description:
      "Contact Infotact for a detailed quote on your next digital product or service.",
    images: "/white.png",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://infotact.in/get-a-quote",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
