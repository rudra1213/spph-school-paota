import { Link } from "@tanstack/react-router";
import {
  Bus,
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { branches, mapsUrl, media, school } from "@/lib/school";

const quickLinks = [
  { to: "/about", label: "About Us" },
  { to: "/branches", label: "Our Branches" },
  { to: "/academics", label: "Academics" },
  { to: "/gallery", label: "Gallery" },
  { to: "/admission", label: "Admission" },
  { to: "/contact", label: "Contact" },
];

export function SiteFooter() {
  const mainBranch = branches[0];

  /*
   * Exact main-campus location supplied by the school.
   * Keeping the coordinates here ensures the footer map button
   * points to the correct campus.
   */
  const mainCampusMapUrl = mapsUrl("27.5866721,76.0728999");

  return (
    <footer className="relative overflow-hidden bg-primary text-primary-foreground">

      {/* ================= DECORATIVE BACKGROUND ================= */}

      <div className="pointer-events-none absolute -left-40 top-0 size-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 size-[420px] rounded-full bg-white/5 blur-3xl" />

      {/* ================= MAIN FOOTER ================= */}

      <div className="container-page relative py-14 md:py-16">

       <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_1.2fr_1fr]">

          {/* ================= SCHOOL INFO ================= */}

          <div>

            <Link
              to="/"
              className="group inline-flex items-center gap-3"
            >

              <img
                src={media.logo}
                alt="Shishu Pearl's Play House Academy Logo"
                className="size-14 rounded-full border-2 border-accent object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
              />

              <div>
                <p className="font-display text-lg font-black leading-tight">
                  SHISHU PEARL'S
                </p>

                <p className="font-display text-lg font-black leading-tight">
                  PLAY HOUSE ACADEMY
                </p>

                <p className="mt-1 text-xs text-white/60">
                  Paota • Kotputli-Behror • Rajasthan
                </p>
              </div>

            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/75">
              {school.type} offering Play Group (PG) to Class VIII,
              serving families in Paota with caring education,
              activity-based learning and personal attention.
            </p>

            {/* School credentials */}

            <div className="mt-6 space-y-2 text-xs text-white/70">

              <p>
                <span className="font-bold text-white">
                  Registration:
                </span>{" "}
                {school.registration}
              </p>

              <p>
                <span className="font-bold text-white">
                  Recognition:
                </span>{" "}
                {school.recognition}
              </p>

              <p>
                <span className="font-bold text-white">
                  Established:
                </span>{" "}
                {school.established}
              </p>

            </div>

          </div>

          {/* ================= QUICK LINKS ================= */}

          <div>

            <h3 className="font-display text-lg font-black text-accent">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-2.5">

              {quickLinks.map((link) => (
                <li key={link.to}>

                  <Link
                    to={link.to}
                    className="group inline-flex items-center text-sm text-white/75 transition-all duration-300 hover:translate-x-1 hover:text-accent"
                  >
                    <span className="mr-2 h-1 w-1 rounded-full bg-accent opacity-0 transition-opacity group-hover:opacity-100" />
                    {link.label}
                  </Link>

                </li>
              ))}

            </ul>

          </div>

          {/* ================= OUR BRANCHES ================= */}

          <div>

            <h3 className="font-display text-lg font-black text-accent">
              Our Branches
            </h3>

            <div className="mt-5 space-y-6">

              {branches.map((branch) => (
                <div key={branch.id}>

                  <p className="font-bold text-white">
                    {branch.name}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-white/65">
                    {branch.address.join(" ")}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">

                    <a
                      href={
                        branch.id === mainBranch?.id
                          ? mainCampusMapUrl
                          : mapsUrl(branch.mapQuery)
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-accent transition-colors hover:text-white"
                    >
                      <MapPin className="size-3.5" />
                      View on Maps
                    </a>

                    <Link
                      to="/branches"
                      hash={branch.id}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-accent transition-colors hover:text-white"
                    >
                      <ExternalLink className="size-3.5" />
                      Details
                    </Link>

                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* ================= REACH US ================= */}

          <div>

            <h3 className="font-display text-lg font-black text-accent">
              Reach Us
            </h3>

            <ul className="mt-5 space-y-4">

              <li className="flex gap-3">

                <MapPin className="mt-0.5 size-5 shrink-0 text-accent" />

                <span className="text-sm leading-6 text-white/70">
                  {school.addressLines.join(" ")}
                </span>

              </li>

              <li className="flex gap-3">

                <Phone className="mt-0.5 size-5 shrink-0 text-accent" />

                <div className="text-sm leading-6">

                  <a
                    href={`tel:${school.phonePrimaryRaw}`}
                    className="block text-white/75 transition-colors hover:text-accent"
                  >
                    {school.phonePrimary}
                  </a>

                  <a
                    href={`tel:${school.phoneSecondaryRaw}`}
                    className="block text-white/75 transition-colors hover:text-accent"
                  >
                    {school.phoneSecondary}
                  </a>

                </div>

              </li>

              <li className="flex gap-3">

                <Mail className="mt-0.5 size-5 shrink-0 text-accent" />

                <a
                  href={`mailto:${school.email}`}
                  className="break-all text-sm text-white/75 transition-colors hover:text-accent"
                >
                  {school.email}
                </a>

              </li>

              <li className="flex gap-3">

                <Clock className="mt-0.5 size-5 shrink-0 text-accent" />

                <span className="text-sm text-white/75">
                  {school.timing}
                </span>

              </li>

              <li className="flex gap-3">

                <Bus className="mt-0.5 size-5 shrink-0 text-accent" />

                <span className="text-sm text-white/75">
                  School Bus & Van facility available
                </span>

              </li>

            </ul>

          </div>

        </div>

        {/* ================= MAIN CAMPUS CTA ================= */}

        <div className="mt-12 overflow-hidden rounded-[30px] border border-accent/30 bg-white/5 p-6 backdrop-blur-md md:p-7">

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div className="flex items-start gap-4">

              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent text-accent-foreground shadow-lg">

                <MapPin className="size-6" />

              </div>

              <div>

                <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">
                  Main Campus
                </p>

                <h3 className="mt-1 font-display text-xl font-black">
                  Visit Shishu Pearl's Play House Academy
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-white/65">
                  Bansal Villa, Behind Vishu Super Market,
                  Near Ghantaghar, Paota (Jaipur), Rajasthan, India
                </p>

              </div>

            </div>

            <a
              href={mainCampusMapUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 font-bold text-accent-foreground shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:w-auto" >
              <MapPin className="size-5" />
              Open in Google Maps
              <ExternalLink className="size-4" />
            </a>

          </div>

        </div>

        {/* ================= DEVELOPER CREDIT ================= */}

        <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-7 md:flex-row md:items-center md:justify-between">

          <div className="text-center md:text-left">

            <p className="text-xs text-white/45">
              © {new Date().getFullYear()} {school.name}. All rights reserved.
            </p>

            <p className="mt-1 text-xs text-white/40">
              {school.category} · {school.timing}
            </p>

          </div>

          <div className="text-center md:text-right">

            <p className="text-[11px] uppercase tracking-[0.18em] text-white/40">
              Designed & Developed by
            </p>

            <p className="mt-1 font-display text-sm font-bold text-white">
              RP Singh
            </p>

            <a
              href="mailto:rudrayadavv137@gmail.com"
              className="mt-0.5 block text-xs text-accent transition-colors hover:text-white"
            >
              rudrayadavv137@gmail.com
            </a>

          </div>

        </div>

      </div>

      

    </footer>
  );
}