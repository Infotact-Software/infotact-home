import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Infotact",
  description:
    "Review Infotact's Privacy Policy to learn how we collect, use, and protect your data while using our digital solutions and services.",
  keywords: [
    "Infotact Privacy Policy",
    "Data Protection Policy",
    "Infotact Data Usage",
    "Digital Product Privacy",
    "User Data Security",
    "Infotact Terms and Policies",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Privacy Policy - Infotact",
    description:
      "Learn how Infotact ensures the security and privacy of your data across all our SaaS solutions and services.",
    url: "https://infotact.in/privacy",
    type: "website",
    images: [
      {
        url: "/white.png",
        width: 1200,
        height: 630,
        alt: "Infotact Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Infotact",
    title: "Privacy Policy - Infotact",
    description:
      "Discover Infotact's commitment to safeguarding your data and maintaining transparency.",
    images: "/white.png",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://infotact.in/privacy",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
