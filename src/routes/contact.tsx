import {
  createFileRoute,
  Link,
} from "@tanstack/react-router";
import {
  ArrowRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";

import {
  branches,
  mapsUrl,
  media,
  school,
  whatsappLink,
} from "@/lib/school";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact SPPH School Paota | Address, Phone & Location Map" },
      {
        name: "description",
        content:
          "Contact Shishu Pearl's Play House Academy Paota: Bansal Villa, Near Ghantaghar, Paota. Call +91 9414061937 or +91 9414061938, email bansalspph@gmail.com.",
      },
      { property: "og:title", content: "Contact SPPH School Paota" },
      {
        property: "og:description",
        content:
          "Addresses, phone numbers, email and maps for both SPPH campuses in Paota, Rajasthan.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  
   const mainBranchCoordinates = "27.5866721,76.0728999";
 
  return (
    <>
      <section className="relative isolate min-h-[570px] overflow-hidden">
  <img
    src={media.insideCollage}
    alt="SPPH School campus and learning environment"
    className="absolute inset-0 h-full w-full object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/30" />

  <div className="absolute -left-32 top-20 size-80 rounded-full bg-accent/20 blur-3xl" />
  <div className="absolute -right-32 bottom-0 size-96 rounded-full bg-white/10 blur-3xl" />

  <div className="container-page relative z-10 flex min-h-[570px] items-center py-20">
    <div className="max-w-4xl text-white">

      <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-md">
        <Sparkles className="size-4 text-accent" />
        Contact SPPH School
      </span>

      <h1 className="mt-7 text-5xl font-black leading-[1.05] md:text-7xl">
        We Would
        <span className="block text-accent">
          Love to Meet You.
        </span>
      </h1>

      <p className="mt-7 max-w-2xl text-base leading-8 text-white/85 md:text-xl">
        Have a question about admission, classes, transport or school
        activities? Call us, WhatsApp us or visit our campus in Paota.
        Our team will be happy to help.
      </p>

      <div className="mt-9 flex flex-wrap gap-4">

        <a
          href={`tel:${school.phonePrimaryRaw}`}
          className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 font-bold text-accent-foreground shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          <Phone className="size-5" />
          Call Us
        </a>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-primary"
        >
          <MessageCircle className="size-5" />
          WhatsApp Us
        </a>

      </div>

      <div className="mt-10 flex flex-wrap gap-3 text-sm text-white/70">

        <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-md">
          📍 Paota, Rajasthan
        </span>

        <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-md">
          🕐 {school.timing}
        </span>

      </div>

    </div>
  </div>
</section>

      <section className="relative z-20 -mt-8 pb-16 pt-8 md:pb-20">
  <div className="container-page">

    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {/* CALL */}
      <a
        href={`tel:${school.phonePrimaryRaw}`}
        className="group rounded-[28px] border border-border bg-card p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
      >
        <div className="flex size-13 items-center justify-center rounded-2xl bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-110">
          <Phone className="size-6" />
        </div>

        <p className="mt-5 text-xs font-bold uppercase tracking-widest text-accent">
          Call Us
        </p>

        <h2 className="mt-2 text-xl font-black text-primary">
          Talk to School
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          {school.phonePrimary}
        </p>

        <p className="text-sm text-muted-foreground">
          {school.phoneSecondary}
        </p>
      </a>

      {/* WHATSAPP */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="group rounded-[28px] border border-border bg-card p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
      >
        <div className="flex size-13 items-center justify-center rounded-2xl bg-[#25D366] text-white transition-transform duration-300 group-hover:scale-110">
          <MessageCircle className="size-6" />
        </div>

        <p className="mt-5 text-xs font-bold uppercase tracking-widest text-accent">
          WhatsApp
        </p>

        <h2 className="mt-2 text-xl font-black text-primary">
          Chat With Us
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          Send us your enquiry anytime.
        </p>
      </a>

      {/* EMAIL */}
      <a
        href={`mailto:${school.email}`}
        className="group rounded-[28px] border border-border bg-card p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
      >
        <div className="flex size-13 items-center justify-center rounded-2xl bg-accent text-accent-foreground transition-transform duration-300 group-hover:scale-110">
          <Mail className="size-6" />
        </div>

        <p className="mt-5 text-xs font-bold uppercase tracking-widest text-accent">
          Email
        </p>

        <h2 className="mt-2 text-xl font-black text-primary">
          Write to Us
        </h2>

        <p className="mt-2 break-all text-sm text-muted-foreground">
          {school.email}
        </p>
      </a>

      {/* TIMING */}
      <div className="group rounded-[28px] border border-border bg-card p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="flex size-13 items-center justify-center rounded-2xl bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-110">
          <Clock className="size-6" />
        </div>

        <p className="mt-5 text-xs font-bold uppercase tracking-widest text-accent">
          School Timing
        </p>

        <h2 className="mt-2 text-xl font-black text-primary">
          Monday to Saturday
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          {school.timing}
        </p>
      </div>

    </div>
  </div>
</section>


         <section className="relative overflow-hidden bg-cream py-20 md:py-28">
        <div className="absolute -left-40 top-20 size-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -right-40 bottom-0 size-96 rounded-full bg-accent/10 blur-3xl" />

        <div className="container-page relative">

          {/* Section Heading */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-primary">
              Find Us in Paota
            </span>

            <h2 className="mt-5 text-4xl font-black text-primary md:text-5xl">
              Visit Our Campuses
            </h2>

            <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
              Choose the campus that is convenient for your family. We welcome
              parents to visit, meet our team and explore the school environment.
            </p>
          </div>

          {/* Campus Cards */}
          <div className="mt-14 grid gap-8 lg:grid-cols-2">

            {branches.map((b, index) => (
              <div
                key={b.id}
                className={`group overflow-hidden rounded-[32px] border bg-card shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${
                  index === 0
                    ? "border-primary/20 ring-2 ring-primary/10"
                    : "border-border"
                }`}
              >

                {/* Branch Information */}
                <div className="p-6 md:p-8">

                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="font-display text-xl font-black text-primary">
                      {b.name}
                    </h2>

                    {index === 0 && (
                      <span className="rounded-full bg-accent px-3 py-1 text-[10px] font-black uppercase tracking-wider text-accent-foreground">
                        Main Campus
                      </span>
                    )}
                  </div>

                  <p className="mt-3 flex gap-2 text-sm leading-6 text-foreground/80">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                    <span>{b.address.join(" ")}</span>
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">

                    <a
                     href={
  index === 0
    ? `https://www.google.com/maps/dir/?api=1&destination=${mainBranchCoordinates}`
    : mapsUrl(b.mapQuery)
}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                      <MapPin className="size-4" />
                      Get Directions
                      <ArrowRight className="size-4" />
                    </a>

                    {index === 0 && (
                      <a
                        href={`tel:${school.phonePrimaryRaw}`}
                        className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-3 text-sm font-bold text-primary transition-all duration-300 hover:bg-primary hover:text-white"
                      >
                        <Phone className="size-4" />
                        Call Main Campus
                      </a>
                    )}

                  </div>
                </div>

                {/* Map */}
                <div className="relative overflow-hidden border-t border-border">

                  <div className="absolute left-4 top-4 z-10 rounded-full bg-white/95 px-4 py-2 text-xs font-black text-primary shadow-lg backdrop-blur-md">
                    {index === 0 ? "MAIN CAMPUS" : "SECOND CAMPUS"}
                  </div>

                 <iframe
  title={`Map of ${b.name}`}
  src={
  index === 0
    ? `https://www.google.com/maps?q=${mainBranchCoordinates}&z=17&output=embed`
    : `https://maps.google.com/maps?q=${encodeURIComponent(
        b.mapQuery,
      )}&output=embed`
}
  className="h-[300px] w-full grayscale-[15%] transition-all duration-500 group-hover:grayscale-0 md:h-[340px]"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

                </div>

              </div>
            ))}

          </div>

          {/* Information Cards */}
          <div className="mt-14 grid gap-4 sm:grid-cols-3">

            <div className="rounded-3xl border border-border bg-card p-6 text-center shadow-sm">
              <MapPin className="mx-auto size-7 text-accent" />

              <h3 className="mt-4 font-bold text-primary">
                Convenient Location
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Easily accessible for families around Paota and nearby areas.
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 text-center shadow-sm">
              <Clock className="mx-auto size-7 text-accent" />

              <h3 className="mt-4 font-bold text-primary">
                School Hours
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {school.timing}
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 text-center shadow-sm">
              <MessageCircle className="mx-auto size-7 text-accent" />

              <h3 className="mt-4 font-bold text-primary">
                Quick Response
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                WhatsApp or call us for admission and campus enquiries.
              </p>
            </div>

          </div>

          {/* Final Contact CTA */}
          <div className="mt-16 overflow-hidden rounded-[36px] bg-primary p-8 text-center text-white shadow-2xl md:p-12">

            <div className="mx-auto max-w-3xl">

              <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em]">
                Need Directions or Information?
              </span>

              <h2 className="mt-5 text-3xl font-black md:text-4xl">
                We're Just a Call or WhatsApp Away
              </h2>

              <p className="mt-4 leading-7 text-white/70">
                Our team will be happy to guide you about admission, classes,
                transport, campus visits and other school information.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">

                <a
                  href={`tel:${school.phonePrimaryRaw}`}
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-bold text-accent-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <Phone className="size-5" />
                  Call Us
                </a>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-primary"
                >
                  <MessageCircle className="size-5" />
                  WhatsApp Us
                </a>

                <Link
                  to="/admission"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-primary"
                >
                  Admission
                  <ArrowRight className="size-5" />
                </Link>

              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}