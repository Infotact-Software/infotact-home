import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Infotact",
  description:
    "Get in touch with Infotact, your trusted SaaS partner for web development, app development, digital marketing, and AI solutions.",
  keywords: [
    "Contact Infotact",
    "Infotact SaaS Support",
    "Infotact Customer Service",
    "Digital Product Inquiries",
    "Infotact Support Team",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Contact Us - Infotact",
    description:
      "Reach out to Infotact for your digital product needs, including SaaS, web and app development, AI/ML solutions, and more.",
    url: "https://infotact.in/contact",
    type: "website",
    images: [
      {
        url: "/white.png",
        width: 1200,
        height: 630,
        alt: "Contact Infotact",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Infotact",
    title: "Contact Us - Infotact",
    description:
      "Connect with Infotact for innovative solutions in digital marketing, AI/ML, web and app development.",
    images: "/white.png",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://infotact.in/contact",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
