import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ArrowUpRight, Clock, MapPin, Phone, Sparkle } from "@/components/Icons";
import { BookingBanner, Reviews, ServiceList, Stars } from "@/components/Sections";
import { getLocation, hours, locations, services, site } from "@/lib/site";

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: PageProps<"/locations/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return {};
  return {
    title: `Hair & Beauty Studio in ${location.city}`,
    description: `Find The Styloria at ${location.street}, ${location.city}, ${location.region} ${location.postal}. Rated ${site.rating}★ by 700+ clients. Book online, by phone or WhatsApp.`,
  };
}

// The params read lives behind Suspense so the shared App Shell stays URL-independent.
export default function LocationPage({ params }: PageProps<"/locations/[slug]">) {
  return (
    <>
      <Suspense fallback={<section className="page-heading location-heading heading-placeholder" />}>
        <LocationDetails params={params} />
      </Suspense>
      <Reviews />
      <BookingBanner />
    </>
  );
}

async function LocationDetails({ params }: Pick<PageProps<"/locations/[slug]">, "params">) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  const studioServices = services.filter((s) => location.slug === "brampton" || s.slug !== "laser-hair-removal");
  const other = locations.find((l) => l.slug !== location.slug)!;

  return (
    <>
      <section className="page-heading location-heading">
        <span className="eyebrow">
          {location.city.toUpperCase()} LOCATION · RATED {site.rating}★ BY 700+ CLIENTS
        </span>
        <h1>
          HELLO,
          <br />
          {location.city.toUpperCase()}.
          <Sparkle />
        </h1>
        <p>
          Find us at {location.street}, {location.city}, {location.region} {location.postal}. The complete Styloria
          menu, from precision cuts and colour to skin care and beyond, in a relaxed, welcoming space.
        </p>
        <div className="hero-buttons">
          <Link className="button button-dark" href={`/book?location=${location.slug}`}>
            Book in {location.city} <ArrowUpRight />
          </Link>
          <a className="text-link" href={location.phoneHref}>
            Call {location.phone} <ArrowUpRight />
          </a>
        </div>
      </section>

      <section className="visit-grid section-rail">
        <div className="visit-card">
          <span className="eyebrow">
            <MapPin size={14} /> ADDRESS
          </span>
          <p>
            {location.street}
            <br />
            {location.city}, {location.region} {location.postal}
            <br />
            Canada
          </p>
          <a
            className="text-link"
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.mapQuery)}`}
            target="_blank"
            rel="noreferrer"
          >
            Get directions <ArrowUpRight />
          </a>
        </div>
        <div className="visit-card">
          <span className="eyebrow">
            <Phone size={14} /> CONTACT
          </span>
          <p>
            <a href={location.phoneHref}>{location.phone}</a>
          </p>
          <a className="text-link" href={site.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp us <ArrowUpRight />
          </a>
        </div>
        <div className="visit-card">
          <span className="eyebrow">
            <Clock size={14} /> HOURS
          </span>
          <dl className="hours">
            {hours.map((h) => (
              <div key={h.days}>
                <dt>{h.days}</dt>
                <dd>{h.time}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="visit-card">
          <span className="eyebrow">PARKING</span>
          <p className="visit-small">{location.parking}</p>
          <span className="visit-rating">
            <Stars size={13} /> {site.rating} on Google
          </span>
        </div>
      </section>

      <section className="map-section section-rail">
        <iframe
          title={`Map of The Styloria ${location.city}`}
          src={`https://maps.google.com/maps?q=${encodeURIComponent(location.mapQuery)}&t=m&z=16&output=embed&iwloc=near`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <section className="services-section section-rail">
        <div className="section-intro">
          <span className="eyebrow">FULL SERVICE MENU</span>
          <h2>
            ALL UNDER
            <br />
            ONE <span className="accent-word">ROOF.</span>
          </h2>
          <p>
            Booking a quick trim or planning a full bridal beauty day? Our {location.city} team can coordinate multiple
            services into a single visit.
          </p>
          <Link className="text-link intro-link" href={`/locations/${other.slug}`}>
            Visit our {other.city} studio <ArrowUpRight />
          </Link>
        </div>
        <ServiceList items={studioServices} />
      </section>

    </>
  );
}
