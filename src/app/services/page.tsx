import type { Metadata } from "next";
import { Sparkle } from "@/components/Icons";
import { Lookbook } from "@/components/Lookbook";
import { BookingBanner, ServiceList } from "@/components/Sections";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hair & Beauty Services in Brampton & Oakville",
  description:
    "Haircuts, hair colour, balayage, treatments, extensions, perms, makeup, barber, skin care, nails, threading, waxing and laser hair removal at The Styloria.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-heading">
        <span className="eyebrow">THE FULL GOOD-STUFF MENU</span>
        <h1>
          THE MENU.
          <Sparkle />
        </h1>
        <p>
          Radiant, rejuvenating and replenishing hair &amp; beauty services, delivered by a team of highly skilled and
          creative professionals at our Brampton and Oakville studios.
        </p>
      </section>

      <section className="services-section services-full section-rail">
        <div className="section-intro">
          <span className="eyebrow">12 SERVICES. ONE ROOF.</span>
          <h2>
            PICK YOUR
            <br />
            <span className="accent-word">GLOW.</span>
          </h2>
          <p>Every appointment starts with a conversation, so the result is made for you, not copied from a template.</p>
          <Sparkle className="menu-spark" strokeWidth={1.3} />
          <span className="tiny-note">TAP A SERVICE FOR THE FULL MENU.</span>
        </div>
        <ServiceList items={services} />
      </section>

      <section className="nail-gallery section-rail">
        <div className="gallery-heading">
          <div>
            <span className="eyebrow">TINY DETAILS. BIG PERSONALITY.</span>
            <h2>
              THE
              <br />
              <span className="outline-word">LOOKBOOK.</span>
              <Sparkle strokeWidth={1.2} />
            </h2>
          </div>
          <div className="gallery-heading-side">
            <p>Tap any look to peek at the details, then book it in a few taps.</p>
          </div>
        </div>
        <Lookbook items={services} />
      </section>

      <BookingBanner />
    </>
  );
}
