import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy - Infotact",
  description:
    "Learn about Infotact's Cancellation & Refund Policy for our SaaS solutions and services. We ensure transparency in our refund process.",
  keywords: [
    "Infotact Cancellation Policy",
    "Refund Policy SaaS Solutions",
    "Infotact Service Cancellation",
    "Digital Products Refund",
    "Infotact Return Policy",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Cancellation & Refund Policy - Infotact",
    description:
      "Understand Infotact's policies for cancellations and refunds, ensuring a transparent and fair process for all users.",
    url: "https://infotact.in/crp",
    type: "website",
    images: [
      {
        url: "/white.png",
        width: 1200,
        height: 630,
        alt: "Infotact Cancellation & Refund Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Infotact",
    title: "Cancellation & Refund Policy - Infotact",
    description:
      "Review Infotact's Cancellation & Refund Policy to learn about the process and eligibility for refunds.",
    images: "/white.png",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://infotact.in/crp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
