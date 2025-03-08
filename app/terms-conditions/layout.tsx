import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions - Infotact",
  description:
    "Read Infotact's Terms & Conditions for using our SaaS solutions and services. Ensure compliance with our policies for a seamless experience.",
  keywords: [
    "Infotact Terms and Conditions",
    "SaaS Usage Policies",
    "Infotact Service Agreement",
    "User Compliance Policies",
    "Digital Solutions Terms",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Terms & Conditions - Infotact",
    description:
      "Understand Infotact's Terms & Conditions to ensure a smooth and transparent use of our services and products.",
    url: "https://infotact.in/terms-conditions",
    type: "website",
    images: [
      {
        url: "/white.png",
        width: 1200,
        height: 630,
        alt: "Infotact Terms & Conditions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Infotact",
    title: "Terms & Conditions - Infotact",
    description:
      "Review Infotact's Terms & Conditions to learn about our policies for using our SaaS solutions and services.",
    images: "/white.png",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://infotact.in/terms-conditions",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
