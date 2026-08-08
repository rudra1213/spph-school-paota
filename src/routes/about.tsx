import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { media, school } from "@/lib/school";

import {
  GraduationCap,
  Bus,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  Trophy,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SPPH School Paota | Our Story, Vision & Leadership" },
      {
        name: "description",
        content:
          "Learn about Shishu Pearl's Play House Academy Paota — established March 2015, registration 542JPR/2015-16, recognition 350/328/2017-18, led by Mrs. Poonam Bansal.",
      },
      { property: "og:title", content: "About SPPH School Paota" },
      {
        property: "og:description",
        content:
          "Our story, vision and leadership at Shishu Pearl's Play House Academy Paota, a co-education English medium school since 2015.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const profile = [
  ["School Name", school.name],
  ["Short Name", school.shortName],
  ["Category", school.category],
  ["School Type", school.type],
  ["Classes Offered", "Play Group (PG) to Class VIII"],
  ["Established", school.established],
  ["Registration Number", school.registration],
  ["Recognition Number", school.recognition],
  ["School Timing", school.timing],
  ["Transport", "School Bus Facility & School Van Facility"],
];

const leaders = [
  {
    name: school.director,
    role: "Director",
    image: media.poonamBansal,
  },

  {
    name: school.secretary,
    role: "Secretary",
    image: media.directorOne,
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A school built on care, play and step-by-step learning"
        description={`${school.name} has been serving the families of Paota since ${school.established} as a ${school.type.toLowerCase()}.`}
        image={media.mainOne}
      />

     <section className="relative overflow-hidden py-20">

  <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl"></div>

  <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl"></div>

  <div className="container-page grid items-center gap-20 lg:grid-cols-2"></div>
        <div className="relative">

  <img
    src={media.exteriorMain}
    alt="SPPH School"
    className="rounded-[32px] shadow-2xl"
  />

  <div className="absolute -bottom-8 left-8 rounded-3xl bg-white p-6 shadow-2xl">

    <h3 className="text-4xl font-black text-primary">

      10+

    </h3>

    <p className="font-semibold text-muted-foreground">

      Years of Excellence

    </p>

  </div>

</div>
        <div>
        <span className="rounded-full bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary">

About SPPH School

</span>

<h2 className="mt-6 text-4xl font-black text-primary md:text-5xl">

Building Bright Futures

<span className="block text-accent">

Since 2015

</span>

</h2>
         <p className="mt-8 text-lg leading-8 text-foreground/75">

Established in <strong>March 2015</strong>,
Shishu Pearl's Play House Academy has become one of
Paota's trusted English Medium Schools.

We believe education is not limited to textbooks.
Every child deserves a safe environment, caring teachers,
modern learning methods and opportunities to grow
academically, socially and emotionally.

</p>
          <p className="mt-3 text-foreground/80">
            Our motto — "We educate more than we teach" — shapes everything: patient
            teachers, activity-based lessons, celebrations that children remember, and a
            campus where parents feel their child is safe.
          </p>
         <div className="mt-10 grid gap-6 md:grid-cols-2">

  <div className="rounded-[32px] border border-primary/10 bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-2xl text-white">
      🎯
    </div>

    <h3 className="text-2xl font-bold text-primary">
      Our Vision
    </h3>

    <p className="mt-4 leading-8 text-foreground/75">
      To nurture confident, responsible and compassionate learners
      who become successful individuals and responsible citizens.
    </p>

  </div>

  <div className="rounded-[32px] border border-accent/20 bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-2xl">
      🚀
    </div>

    <h3 className="text-2xl font-bold text-primary">
      Our Mission
    </h3>

    <p className="mt-4 leading-8 text-foreground/75">
      To provide quality English Medium education with activity-based
      learning, experienced teachers, safe transport and a caring
      environment where every child can grow confidently.
    </p>

  </div>

</div>
        </div>
      </section>

      <section className="bg-cream py-14 md:py-20">
        <div className="container-page">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">School Profile</h2>
          <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-card">
            <dl className="divide-y divide-border">
              {profile.map(([k, v]) => (
                <div key={k} className="grid gap-1 p-4 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-bold text-primary">{k}</dt>
                  <dd className="text-foreground/80 sm:col-span-2">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="container-page py-14 md:py-20">
        <section className="bg-gradient-to-br from-primary to-primary/90 py-20 text-white">

  <div className="container-page grid items-center gap-14 lg:grid-cols-2">

    <div>

      <img
        src={media.poonamBansal}
        alt="Mrs. Poonam Bansal"
        className="mx-auto w-full max-w-md rounded-[32px] shadow-2xl"
      />

    </div>

    <div>

      <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-bold uppercase tracking-widest">

        Director's Message

      </span>

      <h2 className="mt-6 text-4xl font-black">

        Every Child Matters

      </h2>

      <p className="mt-8 text-lg leading-9 text-white/90">

        At Shishu Pearl's Play House Academy,
        we believe every child has unique potential.
        Our goal is not only academic excellence but
        also building confidence, discipline, creativity
        and strong moral values.

      </p>

      <p className="mt-6 text-lg leading-9 text-white/90">

        We strive to provide a safe,
        caring and inspiring environment
        where children enjoy learning and
        prepare themselves for a bright future.

      </p>

      <div className="mt-10">

        <h3 className="text-2xl font-bold">

          Mrs. Poonam Bansal

        </h3>

        <p className="text-white/80">

          Director

        </p>

      </div>

    </div>

  </div>

</section>

<section className="bg-cream py-20">

  <div className="container-page">

    <div className="text-center">

      <span className="rounded-full bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary">

        Our Journey

      </span>

      <h2 className="mt-5 text-4xl font-black text-primary">

        Growing With Every Child

      </h2>

    </div>

    <div className="mx-auto mt-16 max-w-5xl">

      {[
        ["2015", "School Established"],
        ["2017", "Government Recognition"],
        ["2020", "Transport Facility Expanded"],
        ["2024", "Second Campus Started"],
        ["2026", "Growing Towards Excellence"],
      ].map(([year, title], index) => (

        <div
          key={year}
          className="relative mb-10 flex items-center gap-8"
        >

          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-primary text-2xl font-black text-white shadow-xl hover:shadow-[0_25px_60px_rgba(0,0,0,0.18)]">

            {year}

          </div>

          <div className="rounded-[32px] bg-white p-8 shadow-xl">

            <h3 className="text-xl font-bold text-primary">

              {title}

            </h3>

          </div>

          {index !== 4 && (
            <div className="absolute left-10 top-20 h-12 w-1 bg-primary/20"></div>
          )}

        </div>

      ))}

    </div>

  </div>

</section>
<section className="container-page py-20">

  <div className="text-center">

    <span className="rounded-full bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary">

      Why Choose Us

    </span>

    <h2 className="mt-5 text-4xl font-black text-primary">

      Why Parents Trust SPPH School

    </h2>

  </div>

  <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

   {[
  {
    icon: GraduationCap,
    title: "English Medium",
  },
  {
    icon: HeartHandshake,
    title: "Experienced Teachers",
  },
  {
    icon: Bus,
    title: "Bus & Van Facility",
  },
  {
    icon: Sparkles,
    title: "Activity Based Learning",
  },
  {
    icon: ShieldCheck,
    title: "Safe Campus",
  },
  {
    icon: Trophy,
    title: "Affordable Education",
  },
].map((item) => {

const Icon = item.icon;

return (

<div
key={item.title}
className="rounded-[32px] border bg-white p-8 text-center shadow-xlshadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
>

<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">

<Icon className="h-8 w-8"/>

</div>

<h3 className="mt-6 text-xl font-bold text-primary">

{item.title}

</h3>

</div>

);

})}

  </div>

</section>
        <h2 className="text-3xl font-bold text-primary md:text-4xl">Our Leadership</h2>
        <div className="mx-auto mt-14 grid max-w-5xl gap-10 md:grid-cols-2">
          {leaders.map((l) => (
            <div
  key={l.role}
  className="group overflow-hidden rounded-[32px] border border-primary/10 bg-white shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
>
             <img
  src={l.image}
  alt={`${l.name}, ${l.role}`}
  loading="lazy"
  className="aspect-[4/5] w-full object-cover transition-transform duration-700 transition-all duration-700 group-hover:scale-110"
/>
              <div className="p-8 text-center">

  <span className="rounded-full bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary">

    {l.role}

  </span>

  <h3 className="mt-5 text-2xl font-bold text-primary">

    {l.name}

  </h3>

  <p className="mt-3 text-foreground/70">

    Dedicated to nurturing every child with
    quality education, care and strong values.

  </p>

</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-20">
       <div className="grid items-center gap-16 rounded-[36px] bg-gradient-to-r from-primary to-primary/90 p-10 text-white shadow-2xl lg:grid-cols-2">
          <img
            src={media.facultyCollage}
            alt="Teachers and staff at SPPH School"
            loading="lazy"
           className="rounded-[28px] shadow-2xl"
          />
          <div>
            <h2 className="text-4xl font-black text-white">Our teachers</h2>
          <p> 
              Every class is handled by a dedicated teacher who knows each child by name.
              Our staff meets parents regularly through PTMs and result days, so progress
              is never a surprise.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">

  <div className="container-page">

    <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">

      {[
        ["10+", "Years of Excellence"],
        ["2", "Campuses"],
        ["500+", "Happy Students"],
        ["100%", "Safe Environment"],
      ].map(([number, title]) => (

        <div
          key={title}
          className="rounded-[32px] bg-white p-10 shadow-xl transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
        >

          <h2 className=" text-5xl md:text-7xlfont-black text-primary">

            {number}

          </h2>

          <p className="mt-4 text-lg font-semibold text-muted-foreground">

            {title}

          </p>

        </div>

      ))}

    </div>

  </div>

</section>

<section className="container-page py-20">

  <div className="rounded-[36px] bg-gradient-to-r from-primary via-primary to-accent p-14 text-center text-white shadow-2xl">

    <h2 className="text-5xl md:text-7xl font-black">

      Admissions Open

    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">

      Join one of Paota's trusted English Medium Schools and
      give your child a joyful learning experience with
      experienced teachers and modern education.

    </p>

    <div className="mt-10 flex flex-wrap justify-center gap-5">

      <a
        href={`tel:${school.phonePrimaryRaw}`}
        className="rounded-full bg-white px-8 py-4 font-bold text-primary transition-all hover:scale-105"
      >
        📞 Call Now
      </a>

      <a
        href="/admission"
        className="rounded-full border-2 border-white px-8 py-4 font-bold transition-all hover:bg-white hover:text-primary"
      >
        🎓 Apply for Admission
      </a>

    </div>

  </div>

</section>
    </>
  );
}
