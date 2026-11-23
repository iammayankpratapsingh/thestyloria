import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ArrowUpRight, Clock, MapPin, Sparkle } from "@/components/Icons";
import { BookingBanner, ServiceList, Stars } from "@/components/Sections";
import { getService, services, site } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.name} in Brampton & Oakville`,
    description: service.short,
    openGraph: { images: [service.image] },
  };
}

// The params read lives behind Suspense so the shared App Shell stays URL-independent.
export default function ServicePage({ params }: PageProps<"/services/[slug]">) {
  return (
    <>
      <Suspense fallback={<section className="product-page heading-placeholder" />}>
        <ServiceDetails params={params} />
      </Suspense>
      <BookingBanner />
    </>
  );
}

async function ServiceDetails({ params }: Pick<PageProps<"/services/[slug]">, "params">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const index = services.indexOf(service);
  const more = [1, 2, 3].map((n) => services[(index + n) % services.length]);

  return (
    <>
      <section className="product-page">
        <div className="product-breadcrumb">
          <Link className="text-link" href="/services">
            ← Back to the menu
          </Link>
          <span>
            THE MENU / {String(index + 1).padStart(2, "0")} / {service.name.toUpperCase()}
          </span>
        </div>
        <div className="product-layout">
          <div className="product-visual">
            <Image src={service.image} alt={service.imageAlt} fill priority sizes="(max-width: 800px) 90vw, 45vw" />
            <span className="product-visual-label">
              <Sparkle size={14} /> {service.audience}
            </span>
          </div>
          <div className="product-content">
            <span className="eyebrow">THE STYLORIA · {service.tag.toUpperCase()}</span>
            <h1>{service.name}</h1>
            <p className="product-description">{service.intro}</p>
            <div className="product-meta">
              <span>
                <MapPin size={15} /> {service.slug === "laser-hair-removal" ? "Brampton" : "Brampton & Oakville"}
              </span>
              <span>
                <Clock size={15} /> Consultation included
              </span>
              <span>
                <Stars size={13} /> {site.rating} on Google
              </span>
            </div>

            <div className="slot-picker">
              <div className="picker-heading">
                <h3>
                  <Sparkle size={18} /> On the menu
                </h3>
              </div>
              <p className="picker-caption">Not sure which one? Your stylist will help you choose during your consultation.</p>
              <ul className="menu-chips">
                {service.menu.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
              <Link className="button button-dark button-wide" href={`/book?service=${service.slug}`}>
                Book {service.name} <ArrowUpRight />
              </Link>
              <div className="product-alt-actions">
                <a className="text-link" href={site.whatsapp} target="_blank" rel="noreferrer">
                  WhatsApp us <ArrowUpRight />
                </a>
                <a className="text-link" href={site.phoneHref}>
                  Call {site.phone} <ArrowUpRight />
                </a>
              </div>
              <p className="checkout-note">
                Booking ahead is recommended, especially for evenings and weekends. Walk-ins are welcome based on stylist
                availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section section-rail more-services">
        <div className="section-intro">
          <span className="eyebrow">PAIRS NICELY WITH</span>
          <h2>
            MAKE IT A
            <br />
            <span className="accent-word">COMBO.</span>
          </h2>
          <p>Many clients pair services in a single visit. Just let us know when you book.</p>
        </div>
        <ServiceList items={more} footnote={false} />
      </section>

    </>
  );
}
