import { Link } from "@tanstack/react-router";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85
via-primary/75
to-primary/35 to-primary/40" />

      {/* Decorative Blur */}
      <div className="absolute -left-20 top-20 h-60 w-60 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="container-page relative z-10 flex min-h-[450px] md:min-h-[520px] items-center py-20 md:min-h-[430px]">
        <div className="max-w-3xl text-white">
          <span className="inline-flex rounded-full bg-accent px-4 py-1 text-xs font-bold uppercase tracking-widest text-accent-foreground shadow-lg">
            {eyebrow}
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-6xl">
            {title}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-white/90 md:text-lg">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/admission"
              className="rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Apply for Admission
            </Link>

            <Link
              to="/contact"
              className="rounded-full border border-white/40 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-primary"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}