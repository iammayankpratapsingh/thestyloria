"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "./Icons";
import { locations, services, site } from "@/lib/site";

type Props = { defaultService?: string; defaultLocation?: string };

export function BookingForm({ defaultService = "", defaultLocation = "brampton" }: Props) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const service = services.find((s) => s.slug === data.get("service"))?.name ?? "Not sure yet";
    const location = locations.find((l) => l.slug === data.get("location"))?.city ?? "";
    const lines = [
      `Hi The Styloria! I'd like to book an appointment.`,
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Studio: ${location}`,
      `Service: ${service}`,
      data.get("date") ? `Preferred date: ${data.get("date")}` : "",
      data.get("message") ? `Notes: ${data.get("message")}` : "",
    ].filter(Boolean);
    window.open(`${site.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
    setSent(true);
  }

  return (
    <form className="booking-form" onSubmit={onSubmit}>
      <div className="form-grid">
        <label>
          <span className="field-label">Your name</span>
          <input name="name" required autoComplete="name" placeholder="First & last name" />
        </label>
        <label>
          <span className="field-label">Phone number</span>
          <input name="phone" type="tel" required autoComplete="tel" placeholder="(905) 000-0000" />
        </label>
        <label>
          <span className="field-label">Studio</span>
          <select name="location" defaultValue={defaultLocation}>
            {locations.map((l) => (
              <option key={l.slug} value={l.slug}>
                {l.city} · {l.street}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span className="field-label">Service</span>
          <select name="service" defaultValue={defaultService}>
            <option value="">Not sure yet, help me choose</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
          </select>
        </label>
        <label className="form-wide">
          <span className="field-label">Preferred date</span>
          <input name="date" type="date" />
        </label>
        <label className="form-wide">
          <span className="field-label">Anything we should know?</span>
          <textarea name="message" rows={4} placeholder="Inspo, hair history, time preferences…" />
        </label>
      </div>
      <button className="button button-dark button-wide" type="submit">
        Send my request on WhatsApp <ArrowUpRight />
      </button>
      <p className="checkout-note" role="status">
        {sent
          ? "WhatsApp should have opened with your request. Hit send and we’ll confirm your time shortly."
          : `Prefer to talk? Call us at ${site.phone}. We’ll confirm your appointment by phone or WhatsApp.`}
      </p>
    </form>
  );
}

export function BookingFormFromParams() {
  const params = useSearchParams();
  const service = params.get("service") ?? "";
  const location = params.get("location") ?? "brampton";
  return <BookingForm key={`${service}-${location}`} defaultService={service} defaultLocation={location} />;
}
