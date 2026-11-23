import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Sparkle } from "./Icons";
import { Wordmark } from "./Wordmark";
import { locations, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer" id="visit">
      <div className="footer-top">
        <div>
          <Wordmark />
          <p>
            Your Brampton &amp; Oakville hair &amp; beauty crush.
            <br />
            Rated {site.rating}★ by {site.reviewCount}+ clients on Google.
          </p>
          <Image className="footer-logo" src="/images/logo.png" alt="The Styloria Hair & Beauty Studio logo" width={150} height={117} />
        </div>
        <div className="footer-location">
          <span className="eyebrow">OUR LITTLE CORNERS</span>
          {locations.map((l) => (
            <div key={l.slug} className="footer-studio">
              <p>
                <MapPin /> {l.street}, {l.city}
              </p>
              <Link className="text-link" href={`/locations/${l.slug}`}>
                Meet us in {l.city} <ArrowUpRight />
              </Link>
            </div>
          ))}
          <a className="footer-phone" href={site.phoneHref}>
            {site.phone}
          </a>
        </div>
        <div className="footer-links">
          <Link href="/services">The menu</Link>
          <Link href="/#lookbook">Hair inspo</Link>
          <Link href="/#reviews">Love notes</Link>
          <Link href="/#franchise">Franchise</Link>
          {site.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
          <Link href="/book">
            Bookings &amp; contact <ArrowUpRight />
          </Link>
        </div>
      </div>
      <div className="footer-display" aria-hidden="true">
        THE STYLORIA
        <Sparkle />
      </div>
      <div className="footer-bottom">
        <span>© 2026 The Styloria Hair &amp; Beauty Studio. All rights reserved.</span>
        <span>Made for your good-hair days.</span>
        <Link href="/book">
          See you in the chair <ArrowUpRight size={14} />
        </Link>
      </div>
    </footer>
  );
}
