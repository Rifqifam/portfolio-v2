import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rifqifam-portfolio.vercel.app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fam — UI/UX Designer & Developer",
    template: "%s | Fam",
  },
  description:
    "Muhammad Rifqi Fameizy — UI/UX Designer & Front-End Developer with 5+ years building enterprise tools, design systems, and healthcare platforms. Based in Singapore.",
  keywords: [
    "UI/UX Designer",
    "Front-End Developer",
    "Design System",
    "Product Design",
    "Figma",
    "Singapore",
    "Portfolio",
    "Muhammad Rifqi Fameizy",
    "Enterprise UX",
    "Healthcare Design",
  ],
  authors: [{ name: "Muhammad Rifqi Fameizy", url: siteUrl }],
  creator: "Muhammad Rifqi Fameizy",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Fam — UI/UX Designer & Developer",
    description:
      "Designing systems, not just screens. UI/UX Designer with 5+ years building enterprise tools, design systems, and healthcare platforms.",
    siteName: "Fam — Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Fam — UI/UX Designer & Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fam — UI/UX Designer & Developer",
    description:
      "Designing systems, not just screens. UI/UX Designer with 5+ years building enterprise tools, design systems, and healthcare platforms.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Rifqi Fameizy",
  alternateName: "Fam",
  jobTitle: "UI/UX Designer",
  description:
    "UI/UX Designer & Front-End Developer with 5+ years in product teams. Based in Singapore.",
  url: siteUrl,
  sameAs: [
    "https://linkedin.com/in/rifqifam",
    "https://github.com/rifqifam",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "SG",
    addressLocality: "Singapore",
  },
  knowsAbout: [
    "UI/UX Design",
    "Design Systems",
    "Front-End Development",
    "Figma",
    "Product Design",
    "User Research",
    "Agile Methodology",
    "Healthcare UX",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "UX Team Lead",
    occupationLocation: {
      "@type": "City",
      name: "Singapore",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:bg-ink focus:text-cream focus:text-sm focus:rounded"
        >
          Skip to content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
