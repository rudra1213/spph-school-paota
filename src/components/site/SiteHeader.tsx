import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { media, school } from "@/lib/school";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/branches", label: "Our Branches" },
  { to: "/academics", label: "Academics" },
  { to: "/gallery", label: "Gallery" },
  { to: "/admission", label: "Admission" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 shadow-sm backdrop-blur-md">

      {/* ================= TOP INFORMATION BAR ================= */}

      <div className="bg-primary text-primary-foreground">
        <div className="container-page flex min-h-7 items-center justify-between gap-4 text-[11px] font-medium sm:text-xs">

          <span className="truncate">
            Reg. No. {school.registration} · Recognition No.{" "}
            {school.recognition}
          </span>

          <span className="hidden shrink-0 sm:block">
            {school.timing} · Play Group to Class VIII
          </span>

        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}

      <div className="border-b border-border/60 bg-background">

        <div className="container-page flex items-center justify-between gap-5 py-3 lg:py-3.5">

          {/* ================= LOGO ================= */}

          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="group flex min-w-0 items-center gap-3"
          >

            <img
              src={media.logo}
              alt="Shishu Pearl's Play House Academy Logo"
              className="size-14 shrink-0 rounded-full border-2 border-accent object-cover shadow-sm transition-transform duration-300 group-hover:scale-105"
            />

            <div className="min-w-0">

              <p className="font-display text-[16px] font-black leading-tight tracking-tight text-primary lg:text-[17px]">
                SHISHU PEARL'S
              </p>

              <p className="mt-0.5 font-display text-[16px] font-black leading-tight tracking-tight text-primary lg:text-[17px]">
                PLAY HOUSE ACADEMY
              </p>

              <p className="mt-1 hidden text-[11px] font-medium text-muted-foreground sm:block">
                Paota • Kotputli-Behror • Rajasthan
              </p>

            </div>

          </Link>

          {/* ================= DESKTOP NAV ================= */}

          <nav className="hidden items-center gap-0.5 lg:flex">

            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-full px-3 py-2 text-[14px] font-semibold tracking-wide text-foreground/80 transition-all duration-300 hover:bg-primary/10 hover:text-primary"
                activeProps={{
                  className:
                    "rounded-full bg-primary px-3 py-2 text-[14px] font-semibold tracking-wide text-white shadow-md",
                }}
                activeOptions={{
                  exact: item.to === "/",
                }}
              >
                {item.label}
              </Link>
            ))}

            {/* Phone CTA */}

            <a
              href={`tel:${school.phonePrimary.replace(/\s/g, "")}`}
              className="ml-2 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-[13px] font-bold text-accent-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Phone className="size-4" />
              {school.phonePrimary}
            </a>

          </nav>

          {/* ================= MOBILE BUTTON ================= */}

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-background text-primary shadow-sm transition-all duration-300 hover:bg-primary/5 lg:hidden"
          >
            {open ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>

        </div>

      </div>

      {/* ================= MOBILE MENU ================= */}

      <div
        className={cn(
          "overflow-hidden border-b border-border bg-background transition-all duration-300 lg:hidden",
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >

        <nav className="container-page flex flex-col gap-1 py-4">

          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 font-semibold text-foreground/80 transition-all duration-300 hover:bg-primary/10 hover:text-primary"
              activeProps={{
                className:
                  "rounded-xl bg-primary px-4 py-3 font-semibold text-white shadow-md",
              }}
              activeOptions={{
                exact: item.to === "/",
              }}
            >
              {item.label}
            </Link>
          ))}

          <a
            href={`tel:${school.phonePrimary.replace(/\s/g, "")}`}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 font-bold text-accent-foreground shadow-sm"
          >
            <Phone className="size-4" />
            Call {school.phonePrimary}
          </a>

        </nav>

      </div>

    </header>
  );
}