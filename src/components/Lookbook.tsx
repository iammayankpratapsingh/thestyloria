"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Close, Plus } from "./Icons";
import type { Service } from "@/lib/site";

export function Lookbook({ items }: { items: Service[] }) {
  const [active, setActive] = useState<Service | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active && !dialog.open) dialog.showModal();
    if (!active && dialog.open) dialog.close();
  }, [active]);

  return (
    <>
      <div className="gallery-grid">
        {items.map((item, i) => (
          <button key={item.slug} className="design-card" aria-label={`View ${item.name}`} onClick={() => setActive(item)}>
            <div className="design-image">
              <Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 800px) 50vw, 25vw" />
              <span className="design-view">
                <Plus size={20} />
              </span>
              <span className="design-index">{String(i + 1).padStart(2, "0")} / THE LOOKBOOK</span>
            </div>
            <div className="design-caption">
              <h3>{item.name}</h3>
              <span>
                {item.tag} <ArrowUpRight size={13} />
              </span>
            </div>
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="gallery-dialog"
        onClose={() => setActive(null)}
        onClick={(e) => e.target === e.currentTarget && setActive(null)}
      >
        {active && (
          <>
            <div className="gallery-dialog-media">
              <Image className="gallery-dialog-image" src={active.image} alt={active.imageAlt} fill sizes="380px" />
            </div>
            <div className="gallery-dialog-copy">
              <button className="icon-button dialog-close" aria-label="Close" onClick={() => setActive(null)}>
                <Close size={20} />
              </button>
              <span className="eyebrow">{active.audience}</span>
              <h2>{active.name}</h2>
              <p>{active.short}</p>
              <Link className="button button-dark" href={`/services/${active.slug}`}>
                See the details <ArrowUpRight />
              </Link>
              <Link className="text-link" href="/book">
                Or book it now <ArrowUpRight />
              </Link>
            </div>
          </>
        )}
      </dialog>
    </>
  );
}
