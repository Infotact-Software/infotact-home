import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers - Infotact",
  description:
    "Join Infotact, a leading SaaS company driving business growth through digital innovation. Explore open roles and become part of our dynamic team.",
  keywords: [
    "Infotact Careers",
    "SaaS Company Jobs",
    "Digital Products Careers",
    "Join Infotact Team",
    "Tech Careers at Infotact",
    "Web Development Jobs",
    "AI ML Career Opportunities",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Careers - Infotact",
    description:
      "Explore exciting career opportunities at Infotact. Be part of a team shaping the future of technology through digital innovation.",
    url: "https://infotact.in/careers",
    type: "website",
    images: [
      {
        url: "/white.png",
        width: 1200,
        height: 630,
        alt: "Careers at Infotact",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Infotact",
    title: "Careers - Infotact",
    description:
      "Join Infotact and contribute to creating impactful digital products that drive business growth.",
    images: "/white.png",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://infotact.in/careers",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
