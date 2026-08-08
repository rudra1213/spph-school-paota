import { createFileRoute } from '@tanstack/react-router'
import { useState } from "react";
import type { FormEvent } from "react";
import {
  ArrowRight,
  Bus,
  CheckCircle2,
  FileText,
  GraduationCap,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { media, school, whatsappLink } from "@/lib/school";

export const Route = createFileRoute("/admission")({
  head: () => ({
    meta: [
      { title: "Admission Open | SPPH School Paota PG to Class VIII" },
      {
        name: "description",
        content:
          "Admissions open at SPPH School Paota for Play Group to Class VIII. Documents required, simple steps, bus and van facility. Call +91 9414061937.",
      },
      { property: "og:title", content: "Admission Open at SPPH School Paota" },
      {
        property: "og:description",
        content:
          "Apply for Play Group to Class VIII admission at Shishu Pearl's Play House Academy Paota. Visit the campus or call us.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Admission,
});

const steps = [
  {
    n: "01",
    icon: MessageCircle,
    t: "Enquire",
    d: "Call or WhatsApp us and tell us the class and campus you are looking for.",
  },
  {
    n: "02",
    icon: MapPin,
    t: "Visit Campus",
    d: "Meet our team, explore the classrooms and understand your child's daily routine.",
  },
  {
    n: "03",
    icon: FileText,
    t: "Submit Documents",
    d: "Complete the admission form and submit the required documents.",
  },
  {
    n: "04",
    icon: CheckCircle2,
    t: "Confirmation",
    d: "Complete the admission formalities and receive confirmation from the school.",
  },
];

const documents = [
  "Birth certificate of the child",
  "Aadhaar card of the child (if available)",
  "Aadhaar card of both parents",
  "Passport-size photographs (child and parents)",
  "Transfer Certificate (for Class I and above)",
  "Previous school report card (if applicable)",
];

function Admission() {
  const [submitted, setSubmitted] = useState(false);

 const handleEnquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const parentName = String(form.get("parentName") || "");
    const childName = String(form.get("childName") || "");
    const className = String(form.get("className") || "");
    const phone = String(form.get("phone") || "");

    const message = `Hello SPPH School,

I would like to enquire about admission.

Parent Name: ${parentName}
Child Name: ${childName}
Class Required: ${className}
Contact Number: ${phone}

Please share the admission details and further process.`;

    const whatsappUrl = `https://wa.me/${school.phonePrimaryRaw}?text=${encodeURIComponent(
      message,
    )}`;

    setSubmitted(true);

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
    <section className="relative isolate min-h-[620px] overflow-hidden">
  {/* Background */}
  <img
    src={media.bagDistribution}
    alt="Students at SPPH School"
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/30" />

  {/* Decorative elements */}
  <div className="absolute -left-32 top-20 size-80 rounded-full bg-accent/20 blur-3xl" />
  <div className="absolute -right-32 bottom-0 size-96 rounded-full bg-white/10 blur-3xl" />

  <div className="container-page relative z-10 flex min-h-[620px] items-center py-20">
    <div className="max-w-4xl text-white">

      <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-bold uppercase tracking-[0.18em] backdrop-blur-md">
        <GraduationCap className="size-4 text-accent" />
        Admissions Open
      </div>

      <h1 className="mt-7 text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
        Give Your Child
        <span className="block text-accent">
          A Bright Start.
        </span>
      </h1>

      <p className="mt-7 max-w-2xl text-base leading-8 text-white/85 md:text-xl">
        Admissions are open for Play Group to Class VIII at{" "}
        <strong>{school.name}</strong>.
        Discover a safe, caring and joyful environment where children
        learn, grow and build strong foundations for the future.
      </p>

      <div className="mt-9 flex flex-wrap gap-4">

        <a
          href="#admission-enquiry"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 font-bold text-accent-foreground shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          Apply for Admission
          <ArrowRight className="size-5" />
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

      {/* Trust badges */}
      <div className="mt-12 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">

        <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
          <p className="text-2xl font-black">PG–VIII</p>
          <p className="mt-1 text-xs text-white/65">Classes</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
          <p className="text-2xl font-black">2015</p>
          <p className="mt-1 text-xs text-white/65">Established</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
          <p className="text-2xl font-black">2</p>
          <p className="mt-1 text-xs text-white/65">Campuses</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
          <p className="text-2xl font-black">Bus + Van</p>
          <p className="mt-1 text-xs text-white/65">Transport</p>
        </div>

      </div>

    </div>
  </div>
</section>
<section className="relative -mt-8 z-20">
  <div className="container-page">

    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {[
        {
          icon: ShieldCheck,
          title: "Safe Environment",
          text: "A caring and child-friendly campus.",
        },
        {
          icon: GraduationCap,
          title: "English Medium",
          text: "PG to Class VIII education.",
        },
        {
          icon: HeartHandshake,
          title: "Personal Attention",
          text: "Teachers who know and support every child.",
        },
        {
          icon: Bus,
          title: "Transport Facility",
          text: "School bus and van facilities available.",
        },
      ].map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="group rounded-3xl border border-border bg-card p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-110">
              <Icon className="size-6" />
            </div>

            <h3 className="mt-5 font-display text-lg font-bold text-primary">
              {item.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {item.text}
            </p>
          </div>
        );
      })}

    </div>

  </div>
</section>

     <section className="container-page py-20 md:py-28">

  <div className="mx-auto max-w-3xl text-center">

    <span className="rounded-full bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
      Simple Admission Process
    </span>

    <h2 className="mt-5 text-4xl font-black text-primary md:text-5xl">
      How to Apply
    </h2>

    <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
      Our admission process is simple, transparent and designed to make
      things comfortable for parents.
    </p>

  </div>

  <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

    {steps.map((step) => {
      const Icon = step.icon;

      return (
        <div
          key={step.n}
          className="group relative rounded-[28px] border border-border bg-card p-7 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
        >

          <div className="flex items-center justify-between">

            <span className="text-4xl font-black text-primary/10">
              {step.n}
            </span>

            <div className="flex size-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
              <Icon className="size-6" />
            </div>

          </div>

          <h3 className="mt-7 text-xl font-bold text-primary">
            {step.t}
          </h3>

          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            {step.d}
          </p>

        </div>
      );
    })}

  </div>

</section>

     <section className="bg-cream py-20 md:py-28">
  <div className="container-page">

    {/* Section Heading */}
    <div className="mx-auto max-w-3xl text-center">

      <span className="rounded-full bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
        Admission Information
      </span>

      <h2 className="mt-5 text-4xl font-black text-primary md:text-5xl">
        Everything You Need to Know
      </h2>

      <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
        From Play Group to Class VIII, we make the admission process
        simple and transparent for parents.
      </p>

    </div>

    <div className="mt-14 grid gap-8 lg:grid-cols-2">

      {/* =====================================================
          CLASSES OFFERED
      ====================================================== */}

      <div className="rounded-[32px] border border-border bg-card p-7 shadow-lg md:p-9">

        <div className="flex items-start gap-4">

          <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <GraduationCap className="size-7" />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-accent">
              Classes
            </p>

            <h3 className="mt-1 text-2xl font-black text-primary">
              Classes Offered
            </h3>
          </div>

        </div>

        <p className="mt-6 leading-7 text-muted-foreground">
          We welcome students from early childhood education through
          upper primary classes in a caring English Medium environment.
        </p>

        <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">

          {school.classes.map((className, index) => (
            <div
              key={className}
              className="group rounded-2xl border border-border bg-secondary/60 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground"
            >
              <span className="text-xs font-bold text-muted-foreground transition-colors group-hover:text-primary-foreground/70">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="mt-1 text-sm font-bold">
                {className}
              </p>
            </div>
          ))}

        </div>

        <div className="mt-7 rounded-2xl bg-primary/5 p-5">

          <div className="flex gap-3">

            <Bus className="mt-0.5 size-5 shrink-0 text-primary" />

            <div>
              <p className="font-bold text-primary">
                Transport Available
              </p>

              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                {school.transport.join(" · ")}
              </p>
            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          DOCUMENTS REQUIRED
      ====================================================== */}

      <div className="rounded-[32px] border border-border bg-card p-7 shadow-lg md:p-9">

        <div className="flex items-start gap-4">

          <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
            <FileText className="size-7" />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-accent">
              Checklist
            </p>

            <h3 className="mt-1 text-2xl font-black text-primary">
              Documents Required
            </h3>
          </div>

        </div>

        <p className="mt-6 leading-7 text-muted-foreground">
          Please keep the following documents ready when completing
          the admission formalities.
        </p>

        <ul className="mt-7 space-y-4">

          {documents.map((document) => (
            <li
              key={document}
              className="flex items-start gap-3 rounded-2xl bg-secondary/50 p-4"
            >

              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />

              <span className="text-sm font-medium leading-6 text-foreground/80">
                {document}
              </span>

            </li>
          ))}

        </ul>

        <div className="mt-7 rounded-2xl border border-primary/10 bg-primary/5 p-5">

          <p className="text-sm leading-6 text-muted-foreground">
            <strong className="text-primary">
              Please note:
            </strong>{" "}
            Document requirements may vary depending on the class.
            Our admission team will guide you during the process.
          </p>

        </div>

      </div>

    </div>

  </div>
</section>
<section
  id="admission-enquiry"
  className="scroll-mt-24 py-20 md:py-28"
>
  <div className="container-page">

    <div className="grid overflow-hidden rounded-[36px] border border-border bg-card shadow-2xl lg:grid-cols-[0.9fr_1.1fr]">

      {/* =====================================================
          LEFT INFORMATION PANEL
      ====================================================== */}

      <div className="relative overflow-hidden bg-primary p-8 text-primary-foreground md:p-12">

        <div className="absolute -right-24 -top-24 size-72 rounded-full bg-accent/20 blur-3xl" />

        <div className="absolute -bottom-32 -left-20 size-80 rounded-full bg-white/5 blur-3xl" />

        <div className="relative">

          <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] backdrop-blur-md">
            Start Your Enquiry
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight md:text-5xl">
            Let's Begin Your Child's Journey
          </h2>

          <p className="mt-6 leading-8 text-white/75">
            Fill in the basic details and we'll connect you with the
            school admission team through WhatsApp.
          </p>

          <div className="mt-10 space-y-5">

            <div className="flex gap-4">

              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <MessageCircle className="size-5" />
              </div>

              <div>
                <p className="font-bold">
                  Quick Response
                </p>

                <p className="mt-1 text-sm text-white/60">
                  Send your enquiry directly to our WhatsApp.
                </p>
              </div>

            </div>

            <div className="flex gap-4">

              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <Phone className="size-5" />
              </div>

              <div>
                <p className="font-bold">
                  Talk to Us
                </p>

                <a
                  href={`tel:${school.phonePrimaryRaw}`}
                  className="mt-1 block text-sm text-white/70 hover:text-accent"
                >
                  {school.phonePrimary}
                </a>
              </div>

            </div>

            <div className="flex gap-4">

              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <MapPin className="size-5" />
              </div>

              <div>
                <p className="font-bold">
                  Visit Our Campus
                </p>

                <p className="mt-1 text-sm leading-6 text-white/60">
                  {school.addressLines.join(" ")}
                </p>
              </div>

            </div>

          </div>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">

            <p className="text-xs font-bold uppercase tracking-widest text-accent">
              School Timing
            </p>

            <p className="mt-2 font-bold">
              {school.timing}
            </p>

          </div>

        </div>

      </div>


      {/* =====================================================
          FORM
      ====================================================== */}

      <div className="p-7 md:p-12">

        <div className="mb-8">

          <p className="text-sm font-bold uppercase tracking-widest text-accent">
            Admission Enquiry
          </p>

          <h3 className="mt-2 text-3xl font-black text-primary">
            Tell Us About Your Child
          </h3>

          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Enter your details below. After submitting, WhatsApp will
            open with your enquiry message ready to send.
          </p>

        </div>

        <form
          onSubmit={handleEnquiry}
          className="space-y-5"
        >

          {/* Parent Name */}

          <div>
            <label
              htmlFor="parentName"
              className="text-sm font-bold text-primary"
            >
              Parent / Guardian Name
            </label>

            <input
              id="parentName"
              name="parentName"
              type="text"
              required
              placeholder="Enter parent name"
              className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3.5 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
            />
          </div>


          {/* Child Name */}

          <div>
            <label
              htmlFor="childName"
              className="text-sm font-bold text-primary"
            >
              Child's Name
            </label>

            <input
              id="childName"
              name="childName"
              type="text"
              required
              placeholder="Enter child's name"
              className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3.5 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
            />
          </div>


          {/* Class + Phone */}

          <div className="grid gap-5 sm:grid-cols-2">

            <div>

              <label
                htmlFor="className"
                className="text-sm font-bold text-primary"
              >
                Class Required
              </label>

              <select
                id="className"
                name="className"
                required
                defaultValue=""
                className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3.5 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
              >

                <option value="" disabled>
                  Select class
                </option>

                {school.classes.map((className) => (
                  <option key={className} value={className}>
                    {className}
                  </option>
                ))}

              </select>

            </div>


            <div>

              <label
                htmlFor="phone"
                className="text-sm font-bold text-primary"
              >
                Contact Number
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                required
                inputMode="tel"
                placeholder="10-digit mobile number"
                className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3.5 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
              />

            </div>

          </div>


          {/* Submit */}

          <button
            type="submit"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-primary px-6 py-4 font-bold text-primary-foreground shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >

            <MessageCircle className="size-5 transition-transform group-hover:scale-110" />

            Send Admission Enquiry on WhatsApp

            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />

          </button>

          {submitted && (
            <p className="rounded-2xl bg-accent/10 p-4 text-center text-sm font-semibold text-primary">
              Your enquiry is ready. WhatsApp has been opened for you.
            </p>
          )}

          <p className="text-center text-xs leading-5 text-muted-foreground">
            By submitting this form, you are requesting admission
            information from SPPH School.
          </p>

        </form>

      </div>

    </div>

  </div>
</section>
<section className="bg-cream py-20 md:py-28">
  <div className="container-page">

    <div className="grid gap-8 lg:grid-cols-2">

      {/* Campus Visit */}
      <div className="relative overflow-hidden rounded-[32px] bg-primary p-8 text-white shadow-2xl md:p-10">

        <div className="absolute -right-24 -top-24 size-72 rounded-full bg-accent/20 blur-3xl" />

        <div className="relative">

          <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest">
            Visit Our School
          </span>

          <h2 className="mt-5 text-3xl font-black md:text-4xl">
            See the SPPH Difference Yourself
          </h2>

          <p className="mt-5 leading-8 text-white/75">
            We welcome parents to visit our campus, meet our teachers and
            understand how we create a safe and joyful learning environment
            for children.
          </p>

          <div className="mt-8 flex gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white/10">
              <MapPin className="size-6" />
            </div>

            <div>
              <p className="font-bold">Our Location</p>
              <p className="mt-1 text-sm leading-6 text-white/65">
                {school.addressLines.join(" ")}
              </p>
            </div>
          </div>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              school.addressLines.join(" "),
            )}`}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-bold text-accent-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <MapPin className="size-4" />
            Get Directions
            <ArrowRight className="size-4" />
          </a>

        </div>
      </div>

      {/* Contact */}
      <div className="rounded-[32px] border border-border bg-card p-8 shadow-xl md:p-10">

        <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary">
          Need Help?
        </span>

        <h2 className="mt-5 text-3xl font-black text-primary md:text-4xl">
          Talk to Our Admission Team
        </h2>

        <p className="mt-5 leading-8 text-muted-foreground">
          Have questions about classes, fees, documents, transport or
          admission availability? We are happy to help.
        </p>

        <div className="mt-8 space-y-4">

          <a
            href={`tel:${school.phonePrimaryRaw}`}
            className="flex items-center gap-4 rounded-2xl border border-border p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
          >
            <div className="flex size-12 items-center justify-center rounded-xl bg-primary text-white">
              <Phone className="size-5" />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Call Us
              </p>
              <p className="mt-1 font-bold text-primary">
                {school.phonePrimary}
              </p>
            </div>
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-border p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
          >
            <div className="flex size-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <MessageCircle className="size-5" />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                WhatsApp
              </p>
              <p className="mt-1 font-bold text-primary">
                Chat with the School
              </p>
            </div>
          </a>

        </div>

      </div>

    </div>

  </div>
</section>
    </>
  );
}
