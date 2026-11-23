"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Close, Menu, Phone } from "./Icons";
import { Wordmark } from "./Wordmark";
import { site } from "@/lib/site";

const nav = [
  { href: "/services", label: "The menu" },
  { href: "/#lookbook", label: "Hair inspo" },
  { href: "/#reviews", label: "Love notes" },
  { href: "/locations/brampton", label: "Brampton" },
  { href: "/locations/oakville", label: "Oakville" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header">
      <Wordmark withDot />
      <nav className="desktop-nav" aria-label="Main navigation">
        {nav.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="header-actions">
        <a className="bag-link" href={site.phoneHref} aria-label={`Call ${site.phone}`}>
          <Phone size={19} strokeWidth={1.7} />
        </a>
        <Link className="button button-dark header-book" href="/book">
          Book your moment <ArrowUpRight />
        </Link>
        <button
          className="menu-toggle icon-button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav id="mobile-menu" className="mobile-nav" aria-label="Mobile navigation">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link className="button button-dark" href="/book" onClick={() => setOpen(false)}>
            Book your moment <ArrowUpRight />
          </Link>
        </nav>
      )}
    </header>
  );
}
