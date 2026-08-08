import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import {
  ArrowRight,
  Bus,
  CalendarDays,
  GraduationCap,
  HeartHandshake,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  School,
} from "lucide-react";


import { gallery, media, school, whatsappLink } from "@/lib/school";

const heroImages = [
  media.exteriorMain,
  media.mainOne,
  media.mainTwo,
  media.insideCollage,
  media.classroomOne,
];
const heroStats = [
  {
    number: "10+",
    label: "Years of Excellence",
    icon: CalendarDays,
  },
  {
    number: "PG-VIII",
    label: "Academic Classes",
    icon: GraduationCap,
  },
  {
    number: "2",
    label: "School Campuses",
    icon: School,
  },
  {
    number: "100%",
    label: "Safe Campus",
    icon: ShieldCheck,
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      // TODO: meta tags were truncated in the source file you shared —
      // paste the original meta entries here (title, description, og:*, etc.)
    ],
  }),
  component: Home,
});



function Home() {

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentSlide((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );

    }, 5000);

    return () => clearInterval(interval);

  }, []);

  return (
    <>
    <section className="relative isolate min-h-screen overflow-hidden bg-slate-950">

  {/* Background Image */}
 <div className="absolute inset-0">

  {heroImages.map((image, index) => (

    <img
      key={index}
      src={image}
      alt="SPPH School"
      className={`absolute inset-0 h-full w-full object-cover transition-all duration-[2500ms] ease-in-out ${
        currentSlide === index
          ? "opacity-100 scale-100"
          : "opacity-0 scale-110"
      }`}
    />

  ))}

</div>

  {/* Overlay */}
  {/* Hero Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-primary/45 to-primary/10" />

  {/* Subtle brand glow */}
  <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-primary/10 blur-[140px]" />
 <div className="container-page relative z-20 grid min-h-screen items-center gap-20 py-20 lg:grid-cols-2">
    <div>
<div className="inline-flex items-center gap-2 rounded-full border border-yellow-300/40 bg-yellow-300/10 px-5 py-2 text-yellow-300 backdrop-blur-xl">
  <Sparkles className="h-4 w-4"/>

  <span className="text-sm font-semibold tracking-wide">

    Admissions Open • Session 2026-27

  </span>

</div>

<h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">

  <span className="block">

    SHISHU PEARL'S

  </span>

  <span className="bg-gradient-to-r from-yellow-300 via-white to-yellow-300 bg-clip-text text-transparent">

    PLAY HOUSE

  </span>

  <span className="block">

    ACADEMY

  </span>

</h1>

<p className="mt-8 max-w-2xl text-lg leading-9 text-white/90">

  A trusted English Medium School in Paota providing quality education
  from <strong>Play Group (PG)</strong> to
  <strong> Class VIII</strong> with
  modern classrooms,
  activity-based learning,
  experienced teachers,
  and a safe child-friendly campus.

</p>
<div className="mt-10 flex flex-wrap gap-5">

  <Link
    to="/admission"
    className="rounded-full bg-yellow-400 px-8 py-4 text-lg font-bold text-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
  >
    Apply for Admission
  </Link>

  <Link
    to="/contact"
    className="rounded-full border border-white/30 bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-primary"
  >
    Visit Campus
  </Link>

</div>
<div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">

  {heroStats.map((item)=>{

    const Icon=item.icon;

    return(

      <div
        key={item.label}
        className="rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/15"
      >

        <Icon className="mb-3 h-8 w-8 text-yellow-300"/>

        <h3 className="text-3xl font-black text-white">

          {item.number}

        </h3>

        <p className="mt-1 text-sm text-white/80">

          {item.label}

        </p>

      </div>

    )

  })}

</div>

    

      {/* Statistics */}

      </div>

      <div className="relative hidden lg:flex items-center justify-center">

  <div className="space-y-6">

    <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl shadow-2xl">

      <p className="text-sm uppercase tracking-widest text-yellow-300">
        Established
      </p>

      <h2 className="mt-2 text-4xl font-black text-white">
        2015
      </h2>

      <p className="mt-2 text-white/80">
        Over 10 Years of Trusted Education
      </p>

    </div>


    <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl shadow-2xl">

      <p className="text-sm uppercase tracking-widest text-yellow-300">
        English Medium
      </p>

      <h2 className="mt-2 text-3xl font-black text-white">
        PG – VIII
      </h2>

      <p className="mt-2 text-white/80">
        Smart Learning • Safe Campus
      </p>

    </div>


    <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl shadow-2xl">

      <p className="text-sm uppercase tracking-widest text-yellow-300">
        Facilities
      </p>

      <h2 className="mt-2 text-3xl font-black text-white">
        🚌 Bus & Van
      </h2>

      <p className="mt-2 text-white/80">
        Activity Based Learning
      </p>

    </div>

  </div>

</div>

    </div>


  
  
  

  </section>

  
 <section className="relative overflow-hidden bg-gradient-to-br from-cream via-white to-secondary py-24">

 

  <div className="absolute -top-32 -right-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl"></div>

  <div className="absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-accent/10 blur-3xl"></div>

  <div className="container-page grid items-center gap-12 lg:grid-cols-2">
  
    {/* LEFT IMAGE */}

    <div> 

      <div className="relative">

        <img
          src={media.insideCollage}
          alt="SPPH School Campus"
          loading="lazy"
          className="aspect-[4/3] w-full rounded-[2rem] border-4 border-white object-cover shadow-2xl"
        />

        {/* Director Card */}

        <div className="absolute -bottom-8 right-6 hidden w-72 rounded-3xl bg-white p-5 shadow-2xl lg:block">

          <div className="flex items-center gap-4">

            <img
              src={media.directorOne}
              alt="Director"
              className="h-16 w-16 rounded-full border-2 border-primary object-cover"
            />

            <div>
              <h4 className="font-bold text-primary">
                Mrs. Poonam Bansal
              </h4>

              <p className="text-sm text-muted-foreground">
                Director
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>

    {/* RIGHT CONTENT */}

    <div>

      <span className="rounded-full bg-primary/10 px-5 py-2 text-xs font-bold uppercase tracking-widest text-primary">

        About Our School

      </span>

      <h2 className="mt-6 text-4xl font-black text-primary md:text-5xl">

        We Don't Just Teach,

        <span className="block text-accent">

          We Build Futures.

        </span>

      </h2>

      <p className="mt-7 text-lg leading-8 text-foreground/75">

        Established in <strong>March 2015</strong>,
        <strong> Shishu Pearl's Play House Academy</strong>
        has been committed to providing quality English Medium education
        through modern teaching methods, experienced faculty,
        value-based learning and a safe child-friendly campus.

      </p>

      {/* Features */}

      <div className="mt-10 space-y-5">

        <div className="flex gap-5 rounded-2xl bg-white p-5 shadow-md transition hover:-translate-y-1 hover:shadow-xl">

          <GraduationCap className="mt-1 h-8 w-8 text-primary"/>

          <div>

            <h3 className="font-bold text-primary">

              Quality Education

            </h3>

            <p className="mt-2 text-sm leading-6 text-foreground/70">

              English Medium education from Play Group (PG)
              to Class VIII with modern learning techniques.

            </p>

          </div>

        </div>

        <div className="flex gap-5 rounded-2xl bg-white p-5 shadow-md transition hover:-translate-y-1 hover:shadow-xl">

          <ShieldCheck className="mt-1 h-8 w-8 text-primary"/>

          <div>

            <h3 className="font-bold text-primary">

              Safe & Secure Campus

            </h3>

            <p className="mt-2 text-sm leading-6 text-foreground/70">

              CCTV surveillance, experienced teachers,
              child-friendly classrooms and secure transport.

            </p>

          </div>

        </div>

        <div className="flex gap-5 rounded-2xl bg-white p-5 shadow-md transition hover:-translate-y-1 hover:shadow-xl">

          <HeartHandshake className="mt-1 h-8 w-8 text-primary"/>

          <div>

            <h3 className="font-bold text-primary">

              Value Based Learning

            </h3>

            <p className="mt-2 text-sm leading-6 text-foreground/70">

              We nurture confidence, discipline, creativity
              and strong moral values together with academics.

            </p>

          </div>

        </div>

      </div>

      {/* Buttons */}

      <div className="mt-10 flex flex-wrap gap-4">

        <Link
          to="/about"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-bold text-primary-foreground transition hover:scale-105 hover:shadow-xl"
        >

          Explore More

          <ArrowRight className="h-5 w-5"/>

        </Link>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-7 py-3 font-bold text-primary transition hover:bg-primary hover:text-white"
        >

          Visit Campus

        </Link>

      </div>

       </div>

  </div>

</section>


      {/* ================= SCHOOL LIFE ================= */}

<section className="relative overflow-hidden bg-gradient-to-r from-primary/90 via-primary/70 to-slate-900/85 py-24 text-white">

  <img
    src={media.mainOne}
    alt=""
   className="absolute inset-0 h-full w-full object-cover opacity-25"
  />

  <div className="container-page relative z-10 grid items-center gap-16 lg:grid-cols-2">

    <div>

      <span className="rounded-full bg-accent px-5 py-2 text-xs font-bold uppercase tracking-widest text-accent-foreground">
        School Life
      </span>

      <h2 className="mt-6 text-4xl font-black md:text-5xl">

        Every Child Has

        <span className="block text-accent">
          A Story To Tell
        </span>

      </h2>

      <p className="mt-6 text-lg leading-8 text-white/85">

        At SPPH School, learning extends beyond textbooks.
        Through assemblies, celebrations, competitions,
        classroom activities, sports and educational trips,
        every child develops confidence, creativity,
        discipline and leadership.

      </p>

      <div className="mt-10 flex flex-wrap gap-4">

        <Link
          to="/gallery"
          className="rounded-full bg-accent px-8 py-4 font-bold text-accent-foreground transition hover:scale-105"
        >
          View Gallery
        </Link>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border-2 border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-primary"
        >
          Contact School
        </a>

      </div>

    </div>

    <div className="overflow-hidden rounded-[2rem] border-4 border-white/20 shadow-2xl">
<video
  src={media.schoolVideoOne}
  poster={media.assembly}
  controls
  muted
  playsInline
  preload="metadata"
  className="aspect-video w-full bg-black object-cover"
/>

    </div>

  </div>

</section>

{/* ================= PREMIUM GALLERY ================= */}

<section className="container-page py-24">

  <div className="text-center">

    <span className="inline-flex rounded-full bg-primary/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
  Photo Gallery
</span>

<h2 className="mt-5 text-4xl font-black leading-tight text-primary md:text-5xl">
  Moments We Treasure
  <span className="block text-accent">
    From School Life
  </span>
</h2>

    <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-foreground/70">

      Explore memorable moments from classrooms,
      annual functions, cultural events,
      educational activities and celebrations.

    </p>

  </div>

  <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

  {gallery.slice(0, 8).map((g) => (
  <figure
    key={g.caption}
    className="group relative overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
  >
    {/* Image */}
    <div className="relative aspect-[4/3] overflow-hidden">
      <img
        src={g.src}
        alt={g.caption}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Soft image overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Category */}
      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-bold text-primary shadow-md backdrop-blur-sm">
        {g.tag}
      </span>
    </div>

    {/* Caption */}
    <figcaption className="p-5">
      <h3 className="font-display text-lg font-bold text-primary">
        {g.caption}
      </h3>

      <div className="mt-3 h-1 w-10 rounded-full bg-accent transition-all duration-300 group-hover:w-16" />
    </figcaption>
  </figure>
))}

  </div>

  <div className="mt-14 text-center">

    <Link
      to="/gallery"
      className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-bold text-primary-foreground transition hover:scale-105"
    >

      View Complete Gallery

      <ArrowRight className="h-5 w-5"/>

    </Link>

  </div>

</section>
    
 {/* ================= FINAL ADMISSION CTA ================= */}

<section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-cream to-accent/10 py-20 md:py-28">

  {/* Decorative background */}
  <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
  <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

  <div className="container-page relative">

    <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-primary/10 bg-white p-8 shadow-2xl md:p-14 lg:p-16">

      {/* Heading */}

      <div className="text-center">

        <span className="inline-flex rounded-full bg-accent px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-accent-foreground shadow-sm">
          Admissions Open 2026–27
        </span>

        <h2 className="mt-6 text-4xl font-black leading-tight text-primary md:text-6xl">
          Give Your Child
          <span className="block text-accent">
            The Best Beginning
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-foreground/70">
          Admissions are now open for
          <strong> Play Group (PG)</strong>,
          <strong> Nursery</strong>,
          <strong> LKG</strong>,
          <strong> UKG</strong>,
          and
          <strong> Class I to VIII</strong>.
          Visit our campus today and become a part of the SPPH School family.
        </p>

      </div>

      {/* Statistics */}

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {heroStats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="group rounded-2xl border border-primary/10 bg-cream/70 p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >

              <Icon className="mx-auto mb-3 h-8 w-8 text-accent transition-transform duration-300 group-hover:scale-110" />

              <h3 className="text-4xl font-black text-accent">
                {item.number}
              </h3>

              <p className="mt-2 text-foreground/70">
                {item.label}
              </p>

            </div>
          );
        })}

      </div>

      {/* Buttons */}

      <div className="mt-14 flex flex-wrap justify-center gap-5">

        <Link
          to="/admission"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-bold text-accent-foreground shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl"
        >
          Apply for Admission
          <ArrowRight className="h-5 w-5" />
        </Link>

        <a
          href={`tel:${school.phonePrimaryRaw}`}
          className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-8 py-4 font-bold text-primary transition-all duration-300 hover:bg-primary hover:text-white"
        >
          <Phone className="h-5 w-5" />
          Call Now
        </a>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border-2 border-accent px-8 py-4 font-bold text-accent transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
        >
          WhatsApp
        </a>

      </div>

    </div>

  </div>

</section>
   
  </>

  );
  
}
