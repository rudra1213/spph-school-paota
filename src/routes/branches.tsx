import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  GraduationCap,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";
import { media } from "@/lib/school";

export const Route = createFileRoute("/branches")({
  head: () => ({
    meta: [
      {
        title:
          "Our Branches | SPPH School Paota Main & Pre-Primary Campus",
      },
      {
        name: "description",
        content:
          "Two SPPH campuses in Paota: the head campus at Bansal Villa near Ghantaghar (PG to Class VIII) and Play Pearl House Pre School at Bhumika Plaza, Shiv Colony.",
      },
      {
        property: "og:title",
        content: "Our Branches | SPPH School Paota",
      },
      {
        property: "og:description",
        content:
          "Head campus for PG to Class VIII and a dedicated preschool campus, both in Paota, Rajasthan. Addresses, facilities and maps.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  }),
  component: Branches,
});

function Branches() {
  return (
    <>
      {/* ================= HERO ================= */}

      <section className="relative isolate min-h-[560px] overflow-hidden">

        {/* Background Image */}
        <img
          src={media.outsideAlt}
          alt="SPPH School campus in Paota"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Main Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/30" />

        {/* Decorative Glow */}
        <div className="absolute -left-32 top-20 size-80 rounded-full bg-accent/20 blur-3xl" />

        <div className="absolute -right-32 bottom-0 size-96 rounded-full bg-white/10 blur-3xl" />

        {/* Hero Content */}
        <div className="container-page relative z-10 flex min-h-[560px] items-center py-20">

          <div className="max-w-4xl text-white">

            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] backdrop-blur-md">
              <Sparkles className="size-4 text-accent" />
              Our Campuses
            </span>

            {/* Heading */}
            <h1 className="mt-7 text-5xl font-black leading-[1.05] md:text-7xl">
              Two Campuses.
              <span className="block text-accent">
                One School Family.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/85 md:text-xl">
              From joyful early childhood learning to a complete journey
              through Class VIII, SPPH School provides a caring and
              child-friendly environment for every stage.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                to="/admission"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 font-bold text-accent-foreground shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                Explore Admission
                <ArrowRight className="size-5" />
              </Link>

              <a
                href="#campuses"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-primary"
              >
                Explore Campuses
              </a>

            </div>

            {/* Hero Highlights */}
            <div className="mt-10 flex flex-wrap gap-3">

              <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur-md">
                <GraduationCap className="mr-2 inline size-4 text-accent" />
                PG to Class VIII
              </span>

              <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur-md">
                <Building2 className="mr-2 inline size-4 text-accent" />
                Two Campuses
              </span>

              <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur-md">
                <MapPin className="mr-2 inline size-4 text-accent" />
                Paota, Rajasthan
              </span>

            </div>

          </div>
        </div>
      </section>

      {/* ================= CAMPUS SECTION ================= */}

      <section
        id="campuses"
        className="relative overflow-hidden bg-cream py-20 md:py-28"
      >

        {/* Decorative Background */}
        <div className="absolute -left-40 top-20 size-96 rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute -right-40 bottom-0 size-96 rounded-full bg-accent/10 blur-3xl" />

        <div className="container-page relative">

          {/* Section Heading */}
          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-primary">
              Choose Your Campus
            </span>

            <h2 className="mt-5 text-4xl font-black text-primary md:text-5xl">
              Learning Spaces Designed
              <span className="block text-accent">
                Around Every Child
              </span>
            </h2>

            <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
              Our two campuses serve different stages of a child's
              educational journey while sharing the same values of care,
              discipline, activity-based learning and personal attention.
            </p>

          </div>

         {/* ================= PREMIUM CAMPUS CARDS ================= */}

<div className="mt-14 grid gap-8 lg:grid-cols-2">

  {[
  {
  type: "HEAD CAMPUS",
  color:
    "from-primary via-primary/95 to-primary/80",
  badge:
    "bg-accent text-accent-foreground",
  icon: GraduationCap,
  title: "Shishu Pearl's Play House Academy Paota",
  subtitle: "Main School Campus",
  classes: "Play Group (PG) to Class VIII",
  phone: "+91 9414061937",
  phoneRaw: "9414061937",
  description:
    "Our main campus provides a complete English Medium educational journey from Play Group to Class VIII with caring teachers and activity-based learning.",
  image: media.outsideAlt,
},


{
  type: "PRE-SCHOOL CAMPUS",
  color:
    "from-orange-500 via-orange-500/95 to-red-500",
  badge:
    "bg-white text-orange-600",
  icon: Sparkles,
  title: "Play Pearl House Pre School",
  subtitle: "Early Childhood Campus",
  classes: "Play Group • Nursery • LKG • UKG",
  phone: "+91 9782780197",
  phoneRaw: "9782780197",
  description:
    "A dedicated early-learning environment designed especially for young children with joyful activities, care and personal attention.",
  image: media.mainTwo,
},



  ].map((campus, index) => {
    const Icon = campus.icon;

    return (
      <article
        key={campus.type}
        className="group relative overflow-hidden rounded-[34px] border border-white/20 bg-card shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
      >

        {/* ================= IMAGE ================= */}

        <div className="relative h-[290px] overflow-hidden md:h-[350px]">

          <img
            src={campus.image}
            alt={campus.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Image Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t ${campus.color} opacity-75`}
          />

          {/* Campus Badge */}
          <div className="absolute left-5 top-5">
            <span
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-black uppercase tracking-wider shadow-lg ${campus.badge}`}
            >
              <Icon className="size-4" />
              {campus.type}
            </span>
          </div>

        <div className="absolute right-5 top-5 flex size-11 items-center justify-center rounded-full bg-white/90 text-primary opacity-0 shadow-lg backdrop-blur-md transition-all duration-500 group-hover:opacity-100">
  <ArrowRight className="size-5 -rotate-45" />
</div>
          {/* Bottom Image Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-8">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/75">
              {campus.subtitle}
            </p>

            <h3 className="mt-2 text-2xl font-black leading-tight md:text-3xl">
              {campus.title}
            </h3>

          </div>

        </div>

        {/* ================= CARD CONTENT ================= */}

        <div className="bg-white p-6 md:p-8">

          {/* Classes */}
          <div className="flex gap-4">

           <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-accent/15 text-primary transition-transform duration-300 group-hover:scale-110">
              <GraduationCap className="size-5" />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Classes
              </p>

              <p className="mt-1 font-semibold text-primary">
                {campus.classes}
              </p>
            </div>

          </div>

          {/* Description */}
          <p className="mt-6 text-sm leading-7 text-foreground/70">
            {campus.description}
          </p>

          {/* Location */}
          <div className="mt-6 flex gap-4">

           <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
              <MapPin className="size-5 text-primary" />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Location
              </p>

              <p className="mt-1 text-sm leading-6 text-foreground/75">
                {index === 0
                  ? "Bansal Villa, Behind Vishu Super Market, Near Ghantaghar, Paota, Rajasthan"
                  : "Shiv Mandir Road, Shiv Colony, Bhumika Plaza, Paota, Rajasthan"}
              </p>
            </div>

          </div>

  {/* Contact */}
<div className="mt-6 flex items-center gap-3 rounded-2xl bg-secondary/60 p-4">

  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
    <Phone className="size-4" />
  </div>

  <div className="min-w-0">
    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
      Campus Contact
    </p>

    <a
      href={`tel:${campus.phoneRaw}`}
      className="mt-1 block font-bold text-primary transition-colors hover:text-accent"
    >
      {campus.phone}
    </a>
  </div>

</div>

          {/* Buttons */}
        {/* Action Buttons */}
<div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">

  <Link
    to="/contact"
    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-bold text-primary-foreground shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
  >
    <MapPin className="size-4" />
    Visit Campus
  </Link>

  <a
    href={`tel:${campus.phoneRaw}`}
    className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-3 text-sm font-bold text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white"
  >
    <Phone className="size-4" />
    Call
  </a>

  <a
    href={`https://wa.me/91${campus.phoneRaw}`}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center justify-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-3 text-sm font-bold text-green-700 transition-all duration-300 hover:-translate-y-1 hover:bg-green-600 hover:text-white"
  >
    <MessageCircle className="size-4" />
    WhatsApp
  </a>

</div>

        </div>

      </article>
    );
  })}

</div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}

      <section className="container-page py-16 md:py-20">

        <div className="relative overflow-hidden rounded-[36px] bg-primary p-8 text-center text-white shadow-2xl md:p-14">

          {/* Decorative Glow */}
          <div className="absolute -left-20 -top-20 size-64 rounded-full bg-accent/20 blur-3xl" />

          <div className="absolute -bottom-20 -right-20 size-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">

            <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em]">
              Visit SPPH School
            </span>

            <h2 className="mt-5 text-3xl font-black md:text-5xl">
              Come See Our School
              <span className="block text-accent">
                For Yourself.
              </span>
            </h2>

            <p className="mt-5 leading-7 text-white/75 md:text-lg">
              Visit either campus, meet our team, explore the classrooms
              and discover an environment where children learn with
              confidence, care and happiness.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-bold text-accent-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Visit Our Campus
                <ArrowRight className="size-5" />
              </Link>

              <Link
                to="/admission"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-primary"
              >
                Admission Enquiry
              </Link>

            </div>

          </div>
        </div>

      </section>

                   {/* ================= WHY SP PH ================= */}

      <section className="relative overflow-hidden bg-background py-20 md:py-28">

        {/* Decorative Background */}
        <div className="absolute -right-40 top-10 size-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -left-40 bottom-0 size-96 rounded-full bg-primary/5 blur-3xl" />

        <div className="container-page relative">

          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex rounded-full bg-accent/15 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-primary">
              More Than Just a Campus
            </span>

            <h2 className="mt-5 text-4xl font-black text-primary md:text-5xl">
              One School.
              <span className="block text-accent">
                Many Reasons to Belong.
              </span>
            </h2>

            <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
              Wherever your child begins their journey, our aim remains
              the same — to provide a safe, caring and engaging environment
              where every child can learn and grow with confidence.
            </p>

          </div>

          {/* Highlights */}
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {/* Card 1 */}
            <div className="group rounded-[28px] border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="flex size-13 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                <GraduationCap className="size-6" />
              </div>

              <h3 className="mt-5 text-lg font-black text-primary">
                Complete Learning Journey
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                From Play Group to Class VIII, children can continue
                learning within the SPPH family.
              </p>

            </div>

            {/* Card 2 */}
            <div className="group rounded-[28px] border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="flex size-13 items-center justify-center rounded-2xl bg-accent/15 text-primary transition-transform duration-300 group-hover:scale-110">
                <Sparkles className="size-6" />
              </div>

              <h3 className="mt-5 text-lg font-black text-primary">
                Child-Friendly Environment
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Activity-based learning, celebrations and everyday
                experiences designed around children's needs.
              </p>

            </div>

            {/* Card 3 */}
            <div className="group rounded-[28px] border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="flex size-13 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                <Building2 className="size-6" />
              </div>

              <h3 className="mt-5 text-lg font-black text-primary">
                Two Purposeful Campuses
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Dedicated spaces for early childhood and school-age
                learners, each designed for their stage of growth.
              </p>

            </div>

            {/* Card 4 */}
            <div className="group rounded-[28px] border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="flex size-13 items-center justify-center rounded-2xl bg-accent/15 text-primary transition-transform duration-300 group-hover:scale-110">
                <MapPin className="size-6" />
              </div>

              <h3 className="mt-5 text-lg font-black text-primary">
                Conveniently Located
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Both campuses are located in Paota, making school access
                convenient for families in the surrounding areas.
              </p>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}