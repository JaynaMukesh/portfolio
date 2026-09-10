import type { Metadata } from "next";
import { Cormorant_Garamond, IBM_Plex_Mono, Outfit } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const sans = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const plex = IBM_Plex_Mono({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const title = `${site.name} — ${site.role}, ${site.company}`;
const description = `${site.positioning} Portfolio at ${site.url.replace("https://", "")}.`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s · ${site.brand}`,
  },
  description,
  keywords: [
    "Jayna Mukesh",
    "Software Engineer",
    "NatWest",
    "full-stack",
    "hackathon",
    "Chennai",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: site.url,
    siteName: site.brand,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: site.portrait,
        width: 800,
        height: 1000,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [site.portrait],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  image: `${site.url}${site.portrait}`,
  jobTitle: site.role,
  worksFor: { "@type": "Organization", name: site.company },
  email: site.email,
  address: { "@type": "PostalAddress", addressLocality: site.location, addressCountry: "IN" },
  sameAs: [site.links.github, site.links.linkedin, site.links.x],
  alumniOf: { "@type": "CollegeOrUniversity", name: site.education.school },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${plex.variable} h-full`}
    >
      <body className="min-h-full bg-void antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
