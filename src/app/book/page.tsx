import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { BookingForm, BookingFormFromParams } from "@/components/BookingForm";
import { ArrowUpRight, MapPin, Phone, Sparkle } from "@/components/Icons";
import { hours, locations, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Book your hair or beauty appointment at The Styloria in Brampton or Oakville. Online, by phone or on WhatsApp.",
};

export default function BookPage() {
  return (
    <>
      <section className="page-heading">
        <span className="eyebrow">MAKE A LITTLE TIME FOR YOU</span>
        <h1>
          BOOK YOUR
          <br />
          MOMENT.
          <Sparkle />
        </h1>
        <p>Pick your studio, tell us what you’re dreaming of, and we’ll take care of the little details.</p>
        <div className="booking-steps" aria-hidden="true">
          <span className="current">01 · CHOOSE YOUR STUDIO</span>
          <span>02 · TELL US THE LOOK</span>
          <span>03 · WE CONFIRM</span>
        </div>
      </section>

      <section className="studio-cards section-rail">
        {locations.map((l, i) => (
          <article key={l.slug} className={`studio-card${i === 1 ? " alt" : ""}`}>
            <div className="studio-card-top">
              <span className="eyebrow">STUDIO {String(i + 1).padStart(2, "0")}</span>
              <Sparkle size={26} strokeWidth={1.4} />
            </div>
            <h2>{l.city.toUpperCase()}</h2>
            <p>
              <MapPin size={15} /> {l.street}, {l.city}, {l.region} {l.postal}
            </p>
            <p>
              <Phone size={15} /> <a href={l.phoneHref}>{l.phone}</a>
            </p>
            <div className="studio-card-actions">
              <a className="button button-dark" href={l.phoneHref}>
                Call to book <ArrowUpRight />
              </a>
              <Link className="text-link" href={`/locations/${l.slug}`}>
                Studio details <ArrowUpRight />
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="contact-section section-rail" id="contact">
        <div className="section-intro">
          <span className="eyebrow">GET IN TOUCH</span>
          <h2>
            SAY HI.
            <br />
            WE’RE <span className="accent-word">LISTENING.</span>
          </h2>
          <p>
            Questions, appointments or franchise enquiries: send us a note and we’ll get back to you. We look forward to
            serving you.
          </p>
          <dl className="hours">
            {hours.map((h) => (
              <div key={h.days}>
                <dt>{h.days}</dt>
                <dd>{h.time}</dd>
              </div>
            ))}
          </dl>
          <div className="contact-socials">
            {site.socials.map((s) => (
              <a key={s.label} className="text-link" href={s.href} target="_blank" rel="noreferrer">
                {s.label} <ArrowUpRight />
              </a>
            ))}
          </div>
        </div>
        <Suspense fallback={<BookingForm />}>
          <BookingFormFromParams />
        </Suspense>
      </section>
    </>
  );
}
