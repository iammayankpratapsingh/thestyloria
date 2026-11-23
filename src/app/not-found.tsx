import Link from "next/link";
import { ArrowUpRight, Sparkle } from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="page-heading">
      <span className="eyebrow">404 · BAD HAIR DAY</span>
      <h1>
        OOPS. THIS
        <br />
        PAGE GOT A TRIM.
        <Sparkle />
      </h1>
      <p>The page you’re looking for has moved or doesn’t exist. Let’s get you back to the good stuff.</p>
      <div className="hero-buttons">
        <Link className="button button-dark" href="/">
          Back home <ArrowUpRight />
        </Link>
        <Link className="text-link" href="/services">
          Explore the menu <ArrowUpRight />
        </Link>
      </div>
    </section>
  );
}
