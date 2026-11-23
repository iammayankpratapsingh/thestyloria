import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { locations, site } from "@/lib/site";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "The Styloria | Hair & Beauty Studio in Brampton & Oakville",
    template: "%s | The Styloria",
  },
  description:
    "Rated 4.5 stars by 700+ clients. Haircuts, hair colour, skin care, nails, makeup & laser hair removal in Brampton & Oakville. Book online today!",
  openGraph: {
    type: "website",
    siteName: "The Styloria",
    images: ["/images/banner-bg.webp"],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#B388FF",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": locations.map((l) => ({
    "@type": "HairSalon",
    name: `The Styloria — ${l.city}`,
    url: `${site.url}/locations/${l.slug}`,
    telephone: l.phone,
    image: `${site.url}/images/logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: l.street,
      addressLocality: l.city,
      addressRegion: l.region,
      postalCode: l.postal,
      addressCountry: "CA",
    },
    aggregateRating: { "@type": "AggregateRating", ratingValue: site.rating, reviewCount: site.reviewCount },
  })),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
