import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Sparkle, Squiggle } from "@/components/Icons";
import { Lookbook } from "@/components/Lookbook";
import { BookingBanner, Brands, Reviews, ServiceList } from "@/components/Sections";
import { services, site } from "@/lib/site";

const featured = ["haircut", "hair-colour", "hair-highlighting-balayage", "hair-treatments", "skin-care-and-rejuvenation", "laser-hair-removal"];
const lookbook = ["hair-highlighting-balayage", "haircut", "makeup", "nail-extensions", "hair-colour", "hair-perm", "barber", "threading-waxing"];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-topline">
          <span>
            <span className="status-dot" /> YOUR BRAMPTON &amp; OAKVILLE HAIR &amp; BEAUTY CRUSH
          </span>
          <span>
            RATED {site.rating}★ BY {site.reviewCount}+ CLIENTS
          </span>
        </div>
        <div className="hero-art">
          <Image
            src="/images/banner-bg.webp"
            alt="Stylist curling a client's long, glossy hair at The Styloria"
            fill
            priority
            sizes="(max-width: 560px) 80vw, 55vw"
          />
          <Sparkle className="hero-spark" strokeWidth={1.2} />
        </div>
        <h1>
          GOOD HAIR.
          <br />
          GREAT{" "}
          <span className="energy-word">
            ENERGY.
            <Squiggle />
          </span>
        </h1>
        <div className="hero-sticker" aria-label="Brampton and Oakville look good on you">
          <Sparkle size={24} />
          <span>
            BRAMPTON
            <br />
            LOOKS GOOD
            <br />
            ON YOU
          </span>
        </div>
        <div className="hero-bottom">
          <div className="hero-copy">
            <p>
              Cuts that say you. Colour that does the most.
              <br />
              Hair, skin, nails &amp; makeup, right here in Brampton &amp; Oakville.
            </p>
            <div className="hero-buttons">
              <Link className="button button-dark" href="/book">
                Book your moment <ArrowUpRight />
              </Link>
              <Link className="text-link" href="/services">
                Explore the menu <ArrowUpRight />
              </Link>
            </div>
          </div>
          <span className="hero-note">
            SMALL DETAILS.
            <br />
            BIG MAIN-CHARACTER ENERGY.
          </span>
        </div>
        <a className="scroll-link" href="#menu" aria-label="Scroll to our services">
          <ArrowDown />
          <span>SCROLL FOR THE GOOD STUFF</span>
        </a>
      </section>

      <div className="attitude-band" aria-label="Haircuts, balayage, skin care and more">
        <div className="attitude-track">
          {[0, 1].map((k) => (
            <div key={k} className="attitude-set" aria-hidden={k === 1}>
              <span>BALAYAGE, NOT BORING</span>
              <Sparkle />
              <span>GOOD HAIR. GOOD MOOD.</span>
              <Sparkle />
              <span>BRAMPTON + OAKVILLE, BABY.</span>
              <Sparkle />
              <span>GLOW IS A LIFESTYLE.</span>
              <Sparkle />
            </div>
          ))}
        </div>
      </div>

      <section className="services-section section-rail" id="menu">
        <div className="section-intro">
          <span className="eyebrow">THE GOOD-STUFF MENU</span>
          <h2>
            A LITTLE GLOSS.
            <br />
            A LOT OF <span className="accent-word">YOU.</span>
          </h2>
          <p>From fresh cuts to colour that turns heads and skin that glows. Your next good mood starts here.</p>
          <Sparkle className="menu-spark" strokeWidth={1.3} />
          <span className="tiny-note">YOUR STYLE. OUR FAVOURITE CANVAS.</span>
          <Link className="text-link intro-link" href="/services">
            See all 12 services <ArrowUpRight />
          </Link>
        </div>
        <ServiceList items={featured.map((slug) => services.find((s) => s.slug === slug)!)} />
      </section>

      <section className="about-feature section-rail" id="about">
        <div className="about-media">
          <Image src="/images/hair-photo.webp" alt="Stylist styling a client's hair at The Styloria" fill sizes="(max-width: 800px) 90vw, 45vw" />
          <span className="about-stamp">
            EST. IN
            <br />
            BRAMPTON
          </span>
        </div>
        <div className="about-copy">
          <span className="eyebrow">ABOUT THE STYLORIA</span>
          <h2>
            NOT JUST A SALON.
            <br />
            <span className="outline-word">A GLOW-UP</span>{" "}
            SPOT.
          </h2>
          <p>
            The Styloria Hair &amp; Beauty Studio is one of Brampton’s most loved salons, now in Oakville too. We’re
            dedicated to making people feel beautiful, with fabulous stylists, a warm welcome and results that catch the
            eye of every onlooker.
          </p>
          <p>
            Haircuts, colour, treatments, waxing, threading, laser hair removal and much more, all under one roof and
            within your budget.
          </p>
          <ul className="about-stats">
            <li>
              <strong>{site.rating}★</strong>
              <span>GOOGLE RATING</span>
            </li>
            <li>
              <strong>{site.reviewCount}+</strong>
              <span>HAPPY REVIEWS</span>
            </li>
            <li>
              <strong>12</strong>
              <span>SERVICES, ONE ROOF</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="nail-gallery section-rail" id="lookbook">
        <div className="gallery-heading">
          <div>
            <span className="eyebrow">TINY DETAILS. BIG PERSONALITY.</span>
            <h2>
              YOUR NEXT
              <br />
              <span className="outline-word">HAIR CRUSH.</span>
              <Sparkle strokeWidth={1.2} />
            </h2>
          </div>
          <div className="gallery-heading-side">
            <p>
              A little inspo for your next appointment.
              <br />
              Save your favourite. Make it your own.
            </p>
            <Link className="text-link" href="/services">
              Explore the full menu <ArrowUpRight />
            </Link>
          </div>
        </div>
        <Lookbook items={lookbook.map((slug) => services.find((s) => s.slug === slug)!)} />
        <div className="gallery-footnote">
          <span>THE MOOD BOARD IS JUST THE BEGINNING. BRING YOUR OWN INSPO, TOO.</span>
          <span className="tiny-note">YOUR HAIR. YOUR RULES.</span>
        </div>
      </section>

      <Reviews />

      <section className="gift-feature" id="franchise">
        <div className="gift-feature-copy">
          <span className="eyebrow">GOOD TASTE. GREAT BUSINESS.</span>
          <h2>
            BRING A LITTLE
            <br />
            <span className="outline-word">MAIN-CHARACTER</span>
            <br />
            ENERGY HOME.
          </h2>
          <p>
            Love what we do? Open your own Styloria studio.
            <br />
            Ask us about franchise opportunities across Ontario.
          </p>
          <Link className="button button-dark" href="/book#contact">
            Ask about franchising <ArrowUpRight />
          </Link>
        </div>
        <div className="gift-art">
          <div className="gift-card-preview">
            <div className="gift-card-top">
              <span>thestyloria</span>
              <Sparkle size={30} strokeWidth={1.4} />
            </div>
            <span className="gift-card-heading">
              YOUR CITY’S
              <br />
              NEXT GLOW-UP.
            </span>
            <div className="gift-card-bottom">
              <span>HAIR &amp; BEAUTY STUDIO</span>
              <span>FRANCHISE</span>
            </div>
          </div>
          <span className="gift-sticker">
            GOOD HAIR
            <br />
            IS A LOVE
            <br />
            LANGUAGE.
          </span>
        </div>
      </section>

      <Brands />
      <BookingBanner />
    </>
  );
}
