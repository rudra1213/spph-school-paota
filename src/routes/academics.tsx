import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Bus,
  CheckCircle2,
  Clock,
  GraduationCap,
  Palette,
  Sparkles,
  Users,
} from "lucide-react";
import { media, school } from "@/lib/school";


export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: "Academics | Classes PG to VIII at SPPH School Paota" },
      {
        name: "description",
        content:
          "English medium curriculum from Play Group to Class VIII at SPPH School Paota — activity-based learning, separate classrooms, PTMs and school transport.",
      },
      { property: "og:title", content: "Academics at SPPH School Paota" },
      {
        property: "og:description",
        content:
          "Classes from Play Group to Class VIII with activity-based English medium teaching, dedicated teachers and regular parent meetings.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Academics,
});

const stages = [
  {
    title: "Pre-Primary",
    classes: ["Play Group (PG)", "Nursery", "LKG", "UKG"],
    text: "Play, rhymes, phonics, colours and motor-skill activities in a caring, joyful setting.",
    image: media.classroomTwo,
  },
  {
    title: "Primary",
    classes: ["Class I", "Class II", "Class III", "Class IV", "Class V"],
    text: "Strong basics in English, Hindi, Maths, EVS and computers with daily practice and reading habits.",
    image: media.classroomOne,
  },
  {
    title: "Upper Primary",
    classes: ["Class VI", "Class VII", "Class VIII"],
    text: "Subject-wise teaching, regular tests, project work and doubt-clearing sessions before exams.",
    image: media.doubtSession,
  },
];

const support = [
  { icon: Users, title: "Dedicated Teachers", text: "One class teacher who knows every child personally." },
  { icon: BookOpen, title: "Separate Classrooms", text: "Every class has its own room, plus a conference hall." },
  { icon: Palette, title: "Activity-Based Learning", text: "Crafts, celebrations, fancy dress and outdoor days." },
  { icon: Bus, title: "Bus & Van Facility", text: "Safe pick-up and drop across Paota and nearby colonies." },
];

  function Academics() {
  return (
    <>
      {/* ================= ACADEMICS HERO ================= */}

      <section className="relative isolate min-h-[560px] overflow-hidden">
        <img
          src={media.classroomOne}
          alt="Students learning at SPPH School"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/35" />

        <div className="absolute -left-32 top-20 size-80 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -right-32 bottom-0 size-96 rounded-full bg-white/10 blur-3xl" />

        <div className="container-page relative z-10 flex min-h-[560px] items-center py-20">
          <div className="max-w-4xl text-white">

            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] backdrop-blur-md">
              <Sparkles className="size-4 text-accent" />
              Academics at SPPH
            </span>

            <h1 className="mt-7 text-5xl font-black leading-[1.05] md:text-7xl">
              Learning That
              <span className="block text-accent">
                Grows With Every Child.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/85 md:text-xl">
              From Play Group to Class VIII, our English medium academic
              journey combines strong foundations, activity-based learning,
              regular practice and personal attention.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <a
                href="#learning-stages"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 font-bold text-accent-foreground shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                Explore Classes
                <ArrowRight className="size-5" />
              </a>

              <Link
                to="/admission"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-primary"
              >
                Admission Enquiry
              </Link>

            </div>

            <div className="mt-10 flex flex-wrap gap-3">

              <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur-md">
                <GraduationCap className="mr-2 inline size-4 text-accent" />
                PG to Class VIII
              </span>

              <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur-md">
                <BookOpen className="mr-2 inline size-4 text-accent" />
                English Medium
              </span>

              <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur-md">
                <Users className="mr-2 inline size-4 text-accent" />
                Personal Attention
              </span>

            </div>

          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}

      <section className="relative overflow-hidden bg-background py-20 md:py-28">

        <div className="absolute -right-40 top-10 size-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -left-40 bottom-0 size-96 rounded-full bg-primary/5 blur-3xl" />

        <div className="container-page relative">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>
              <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-primary">
                Our Learning Approach
              </span>

              <h2 className="mt-5 text-4xl font-black leading-tight text-primary md:text-5xl">
                Strong Basics.
                <span className="block text-accent">
                  Confident Children.
                </span>
              </h2>

              <p className="mt-6 text-base leading-8 text-foreground/75 md:text-lg">
                At SPPH School, learning is not limited to textbooks.
                Children build academic foundations through classroom
                teaching, practice, activities, celebrations, projects
                and everyday experiences.
              </p>

              <p className="mt-4 text-base leading-8 text-foreground/75">
                As children progress through each stage, the learning
                experience gradually develops from joyful exploration to
                stronger subject knowledge, independent thinking and
                preparation for higher classes.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">

                {[
                  "Activity-based learning",
                  "Regular classroom practice",
                  "Reading & foundational skills",
                  "Personal attention",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl bg-secondary p-4"
                  >
                    <CheckCircle2 className="size-5 shrink-0 text-accent" />

                    <span className="text-sm font-semibold text-primary">
                      {item}
                    </span>
                  </div>
                ))}

              </div>
            </div>

            <div className="relative">

              <div className="absolute -inset-4 rounded-[36px] bg-accent/10 blur-2xl" />

              <img
                src={media.classroomTwo}
                alt="Classroom learning at SPPH School"
                loading="lazy"
                className="relative aspect-[4/3] w-full rounded-[32px] object-cover shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
              />

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/90 p-5 shadow-xl backdrop-blur-md">

                <p className="text-xs font-black uppercase tracking-wider text-accent">
                  Our Academic Journey
                </p>

                <p className="mt-1 text-lg font-black text-primary">
                  Play Group → Class VIII
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= LEARNING STAGES ================= */}

      <section
        id="learning-stages"
        className="relative overflow-hidden bg-cream py-20 md:py-28"
      >

        <div className="container-page relative">

          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-primary">
              Classes & Stages
            </span>

            <h2 className="mt-5 text-4xl font-black text-primary md:text-5xl">
              A Learning Path
              <span className="block text-accent">
                For Every Stage
              </span>
            </h2>

            <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
              Each stage is designed according to the age, learning needs
              and academic development of children.
            </p>

          </div>

          <div className="mt-14 grid gap-7 lg:grid-cols-3">

            {stages.map((s, index) => (
              <article
                key={s.title}
                className="group overflow-hidden rounded-[32px] border border-border bg-card shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="relative h-[260px] overflow-hidden">

                  <img
                    src={s.image}
                    alt={`${s.title} classes at SPPH School`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />

                  <div className="absolute left-5 top-5">
                    <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-black text-primary shadow-lg">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">

                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                      Learning Stage
                    </p>

                    <h3 className="mt-2 text-2xl font-black">
                      {s.title}
                    </h3>

                  </div>

                </div>

                <div className="p-6">

                  <p className="text-sm leading-7 text-foreground/70">
                    {s.text}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">

                    {s.classes.map((c) => (
                      <span
                        key={c}
                        className="rounded-full bg-secondary px-3 py-1.5 text-xs font-bold text-secondary-foreground transition-colors duration-300 group-hover:bg-accent/15"
                      >
                        {c}
                      </span>
                    ))}

                  </div>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

            {/* ================= WHAT SUPPORTS EVERY CLASS ================= */}

      <section className="relative overflow-hidden bg-background py-20 md:py-28">

        {/* Decorative Background */}
        <div className="absolute -left-40 top-20 size-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -right-40 bottom-0 size-96 rounded-full bg-accent/10 blur-3xl" />

        <div className="container-page relative">

          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex rounded-full bg-accent/15 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-primary">
              Beyond The Classroom
            </span>

            <h2 className="mt-5 text-4xl font-black text-primary md:text-5xl">
              What Supports
              <span className="block text-accent">
                Every Class
              </span>
            </h2>

            <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
              A good learning environment needs more than lessons.
              Our teachers, activities, classrooms and transport facilities
              work together to support children's everyday school journey.
            </p>

          </div>

          {/* Support Cards */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {support.map((s, index) => {
              const Icon = s.icon;

              return (
                <article
                  key={s.title}
                  className="group relative overflow-hidden rounded-[30px] border border-border bg-card p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >

                  {/* Number */}
                  <div className="absolute right-5 top-5 text-5xl font-black text-primary/5 transition-colors duration-500 group-hover:text-accent/10">
                    0{index + 1}
                  </div>

                  {/* Icon */}
                  <div className="relative flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-500 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon className="size-7" />
                  </div>

                  {/* Content */}
                  <h3 className="mt-6 font-display text-xl font-black text-primary">
                    {s.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {s.text}
                  </p>

                  {/* Bottom Accent */}
                  <div className="mt-6 h-1 w-10 rounded-full bg-accent transition-all duration-500 group-hover:w-20" />

                </article>
              );
            })}

          </div>

          {/* School Timing */}
          <div className="relative mt-10 overflow-hidden rounded-[30px] bg-primary p-7 text-primary-foreground shadow-xl md:p-9">

            <div className="absolute -right-20 -top-20 size-64 rounded-full bg-accent/15 blur-3xl" />

            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

              <div className="flex items-start gap-4">

                <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                  <Clock className="size-7 text-accent" />
                </div>

                <div>

                  <p className="text-xs font-black uppercase tracking-[0.2em] text-white/60">
                    Daily Schedule
                  </p>

                  <h3 className="mt-1 text-2xl font-black">
                    School Timing
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/70">
                    {school.timing}
                  </p>

                </div>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">

                <p className="text-xs font-bold uppercase tracking-wider text-white/50">
                  Classes
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                  {school.classes.join(" · ")}
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>

            {/* ================= ACADEMIC CTA ================= */}

      <section className="container-page py-16 md:py-20">

        <div className="relative overflow-hidden rounded-[36px] bg-primary p-8 text-center text-white shadow-2xl md:p-14">

          <div className="absolute -left-24 -top-24 size-72 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 size-80 rounded-full bg-white/10 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">

            <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em]">
              Start Their Journey
            </span>

            <h2 className="mt-5 text-3xl font-black md:text-5xl">
              Ready to Explore
              <span className="block text-accent">
                SPPH School?
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-white/70 md:text-lg">
              Discover our learning environment, meet our team and learn
              more about admission from Play Group to Class VIII.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">

              <Link
                to="/admission"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-bold text-accent-foreground shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Admission Enquiry
                <ArrowRight className="size-5" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-primary"
              >
                Contact School
              </Link>

            </div>

          </div>

        </div>

      </section>

       </>
  );
}