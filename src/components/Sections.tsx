import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkle, Star } from "./Icons";
import { brands, reviews, site, type Service } from "@/lib/site";

export function ServiceList({ items, footnote = true }: { items: Service[]; footnote?: boolean }) {
  return (
    <div className="service-list">
      {items.map((s, i) => (
        <Link key={s.slug} className="service-row" href={`/services/${s.slug}`}>
          <span className="service-number">{String(i + 1).padStart(2, "0")}</span>
          <div className="service-info">
            <h3>{s.name}</h3>
            <p>{s.short}</p>
            <span className="service-duration">{s.audience}</span>
          </div>
          <div className="service-price">
            <span>{String(s.menu.length).padStart(2, "0")} looks</span>
            <span className="round-arrow">
              <ArrowUpRight />
            </span>
          </div>
        </Link>
      ))}
      {footnote && (
        <div className="menu-footnote">
          <span>Good to know: every service starts with a consultation. Pricing is confirmed with your stylist.</span>
          <Link className="text-link" href="/book">
            Find your time <ArrowUpRight />
          </Link>
        </div>
      )}
    </div>
  );
}

export function Stars({ size = 16 }: { size?: number }) {
  return (
    <span className="stars" aria-label="5 stars">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} size={size} />
      ))}
    </span>
  );
}

export function Reviews() {
  return (
    <section className="reviews-section section-rail" id="reviews">
      <div className="gallery-heading">
        <div>
          <span className="eyebrow">LOVE NOTES FROM THE CHAIR</span>
          <h2>
            REAL CLIENTS.
            <br />
            <span className="outline-word">REAL GLOW.</span>
            <Sparkle strokeWidth={1.2} />
          </h2>
        </div>
        <div className="rating-badge">
          <span className="rating-score">{site.rating}</span>
          <div>
            <Stars />
            <p>
              Based on {site.reviewCount} reviews
              <br />
              posted on Google
            </p>
          </div>
        </div>
      </div>
      <div className="review-track">
        {reviews.map((r) => (
          <figure key={r.name} className="review-card">
            <Stars size={14} />
            <blockquote>“{r.text}”</blockquote>
            <figcaption>
              <span className="review-avatar" aria-hidden="true">
                {r.name.charAt(0).toUpperCase()}
              </span>
              <span>
                {r.name}
                <small>VIA GOOGLE</small>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function Brands() {
  return (
    <section className="brands-band section-rail" aria-label="Partner brands">
      <span className="eyebrow">THE GOOD STUFF WE USE</span>
      <div className="brands-row">
        {brands.map((b) => (
          <Image key={b.name} src={b.src} alt={b.name} width={160} height={60} />
        ))}
      </div>
    </section>
  );
}

export function BookingBanner() {
  return (
    <section className="booking-banner">
      <div>
        <span className="eyebrow">MAKE A LITTLE TIME FOR YOU</span>
        <h2>
          YOUR NEXT
          <br />
          GOOD HAIR DAY.
        </h2>
      </div>
      <div className="booking-banner-action">
        <Sparkle size={40} strokeWidth={1.2} />
        <p>
          Pick your studio. Pick your service.
          <br />
          We’ll take care of the little details.
        </p>
        <Link className="button button-dark" href="/book">
          Let’s make it a date <ArrowUpRight />
        </Link>
        <span className="tiny-note">BOOK ONLINE, BY PHONE OR ON WHATSAPP.</span>
      </div>
    </section>
  );
}
