import { Link } from "@tanstack/react-router";
import {
  MapPin,
  Phone,
  MessageCircle,
  Images,
  CheckCircle2,
  User,
  GraduationCap,
} from "lucide-react";

import { branches, mapsUrl } from "@/lib/school";

export function BranchCards() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {branches.map((b, i) => (
        <article
          key={b.id}
          id={b.id}
          className="group scroll-mt-28 overflow-hidden rounded-3xl border border-border bg-card shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          {/* Image */}
          <div className="relative h-64 overflow-hidden">
            <img
              src={b.image}
              alt={`${b.name} Campus`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            <span
              className={`absolute left-5 top-5 rounded-full px-4 py-2 text-xs font-bold text-white shadow-lg ${
                i === 0 ? "bg-primary" : "bg-coral"
              }`}
            >
              {b.badge}
            </span>
          </div>

          <div className="p-6 md:p-8">
            <h3 className="font-display text-2xl font-bold text-primary">
              {b.name}
            </h3>

            {b.subtitle && (
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                {b.subtitle}
              </p>
            )}

            {/* Basic Information */}
            <dl className="mt-6 space-y-3 text-sm">

              <div className="flex gap-3">
                <GraduationCap className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <dt className="font-semibold text-primary">Classes</dt>
                  <dd className="text-foreground/80">{b.classes}</dd>
                </div>
              </div>

              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <dt className="font-semibold text-primary">Address</dt>
                  <dd className="text-foreground/80">
                    {b.address.join(", ")}
                  </dd>
                </div>
              </div>

              <div className="flex gap-3">
                <User className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <dt className="font-semibold text-primary">Director</dt>
                  <dd className="text-foreground/80">{b.director}</dd>
                </div>
              </div>

              <div className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <dt className="font-semibold text-primary">Contact</dt>

                  <dd className="text-foreground/80">
                    {b.phone}
                  </dd>

                  {b.alternatePhone && (
                    <dd className="text-foreground/80">
                      {b.alternatePhone}
                    </dd>
                  )}
                </div>
              </div>

            </dl>

            <div className="mt-6 rounded-2xl bg-secondary p-4">
              <p className="text-sm leading-7 text-secondary-foreground">
                {b.note}
              </p>
            </div>

            <h4 className="mt-7 font-display text-lg font-bold text-primary">
              Facilities
            </h4>

            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {b.facilities.map((facility) => (
                <li
                  key={facility}
                  className="flex items-start gap-2 text-sm text-foreground/80"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {facility}
                </li>
              ))}
            </ul>

            {/* PART 2 STARTS FROM HERE */}

                       <div className="mt-8 flex flex-wrap gap-3">

              <a
                href={mapsUrl(b.mapQuery)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <MapPin className="h-4 w-4" />
                View on Google Maps
              </a>

              <a
                href={`tel:${b.phoneRaw}`}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-accent-foreground transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>

              <a
                href={`https://wa.me/${b.phoneRaw}?text=${encodeURIComponent(
                  `Hello ${b.name}, I would like to know more about admissions.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-5 py-3 text-sm font-bold text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:scale-105"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>

              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 rounded-full border-2 border-border px-5 py-3 text-sm font-bold text-foreground transition-all duration-300 hover:bg-secondary hover:scale-105"
              >
                <Images className="h-4 w-4" />
                View Gallery
              </Link>

            </div>

            <div className="mt-8 overflow-hidden rounded-3xl border border-border shadow-md">

              <iframe
                title={`${b.name} Google Map`}
                src={
                  b.mapEmbed ??
                  `https://maps.google.com/maps?q=${encodeURIComponent(
                    b.mapQuery
                  )}&output=embed`
                }
                className="h-72 w-full"
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />

            </div>

          </div>
        </article>
      ))}
    </div>
  );
}