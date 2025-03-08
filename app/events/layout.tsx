import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events - Infotact",
  description:
    "Stay updated with Infotact's events and webinars. Explore industry insights, trends, and innovations in SaaS and digital product development.",
  keywords: [
    "Infotact Events",
    "SaaS Webinars",
    "Digital Innovation Events",
    "Tech Conferences Infotact",
    "Infotact Web Development Workshops",
    "Industry Trends Events",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Events - Infotact",
    description:
      "Discover Infotact's events and workshops, where innovation meets technology. Learn about SaaS, AI, and digital solutions.",
    url: "https://infotact.in/events",
    type: "website",
    images: [
      {
        url: "/white.png",
        width: 1200,
        height: 630,
        alt: "Infotact Events",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Infotact",
    title: "Events - Infotact",
    description:
      "Join Infotact events to explore the latest advancements in SaaS, AI/ML, and web development.",
    images: "/white.png",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://infotact.in/events",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
