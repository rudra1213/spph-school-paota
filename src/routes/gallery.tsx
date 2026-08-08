import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
  Play,
  X,
} from "lucide-react";

import { Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { gallery, media, videos } from "@/lib/school";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      {
        title: "Gallery | School Life, Events & Activities | SPPH School Paota",
      },
      {
        name: "description",
        content:
          "Explore school life, classroom activities, celebrations, sports, drawing activities, campus moments and videos from Shishu Pearl's Play House Academy Paota.",
      },
      {
        property: "og:title",
        content: "Gallery | SPPH School Paota",
      },
      {
        property: "og:description",
        content:
          "Explore memorable moments, school activities, celebrations and everyday life at SPPH School Paota.",
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
  component: Gallery,
});

const categories = [
  "All",
  ...Array.from(new Set(gallery.map((item) => item.tag))),
];

 
  function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [videoOnly, setVideoOnly] = useState(false);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleVideoPlay = (playingIndex: number) => {
    videoRefs.current.forEach((video, index) => {
      if (video && index !== playingIndex) {
        video.pause();
      }
    });
  };

  const filteredImages = useMemo(() => {
    if (activeCategory === "All") {
      return gallery;
    }

    return gallery.filter((item) => item.tag === activeCategory);
  }, [activeCategory]);

  const selectedImage =
    selectedIndex !== null ? filteredImages[selectedIndex] : null;

  const openImage = (index: number) => {
    setSelectedIndex(index);
  };

  const closeImage = () => {
    setSelectedIndex(null);
  };

  const showPrevious = () => {
    if (selectedIndex === null || filteredImages.length === 0) return;

    setSelectedIndex(
      selectedIndex === 0
        ? filteredImages.length - 1
        : selectedIndex - 1,
    );
  };

  const showNext = () => {
    if (selectedIndex === null || filteredImages.length === 0) return;

    setSelectedIndex(
      selectedIndex === filteredImages.length - 1
        ? 0
        : selectedIndex + 1,
    );
  };

  return (
    <>
      {/* =========================================================
          GALLERY HERO
      ========================================================= */}

      <PageHero
        eyebrow="Our Gallery"
        title="Moments That Make School Life Special"
        description="Explore the classrooms, celebrations, activities, friendships and everyday moments that make SPPH School Paota a joyful place to learn and grow."
        image={media.mainTwo}
      />

      {/* =========================================================
          INTRO
      ========================================================= */}

      <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/30 py-16 md:py-24">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

        <div className="container-page relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <ImageIcon className="size-4" />
              Memories & Moments
            </span>

            <h2 className="mt-5 text-4xl font-black tracking-tight text-primary md:text-5xl">
              Life at SPPH
            </h2>

            <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
              From morning assembly and classroom learning to festivals,
              picnics, sports and creative activities — every moment is part
              of our children's journey.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          GALLERY CONTROLS
      ========================================================= */}

      <section className="container-page pb-8">
        <div className="sticky top-20 z-30 rounded-3xl border border-border/70 bg-background/90 p-3 shadow-lg backdrop-blur-xl">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((category) => {
              const isActive = category === activeCategory;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setActiveCategory(category);
                    setSelectedIndex(null);
                    setVideoOnly(false);
                  }}
                  className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-secondary text-foreground/70 hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {category}
                </button>
              );
            })}

            <button
              type="button"
              onClick={() => {
                setVideoOnly((value) => !value);
                setSelectedIndex(null);
              }}
              className={`ml-auto shrink-0 rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
                videoOnly
                  ? "bg-accent text-accent-foreground shadow-md"
                  : "border border-border bg-background text-foreground/70 hover:bg-secondary"
              }`}
            >
              Videos
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          PHOTO GALLERY
      ========================================================= */}

      {!videoOnly && (
        <section className="container-page pb-20 md:pb-28">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">
                School Moments
              </p>

              <h2 className="mt-2 text-3xl font-black text-primary md:text-4xl">
                Explore Our Gallery
              </h2>
            </div>

            <span className="hidden rounded-full bg-secondary px-4 py-2 text-sm font-bold text-muted-foreground sm:block">
              {filteredImages.length} moments
            </span>
          </div>

          <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:gap-5 md:grid-cols-3 lg:auto-rows-[250px]">
            {filteredImages.map((item, index) => {
              const featured =
                index === 0 ||
                index === 5 ||
                index === 10;

              return (
                <button
                  key={`${item.caption}-${item.src}`}
                  type="button"
                  onClick={() => openImage(index)}
                  className={`group relative overflow-hidden rounded-[24px] text-left shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${
                    featured
                      ? "col-span-2 row-span-2"
                      : "col-span-1 row-span-1"
                  }`}
                >
                  <img
                    src={item.src}
                    alt={item.caption}
                    loading="lazy"
                    className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-6">
                    <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                      {item.tag}
                    </span>

                    <h3
                      className={`mt-2 font-bold ${
                        featured
                          ? "text-xl sm:text-2xl"
                          : "text-sm sm:text-base"
                      }`}
                    >
                      {item.caption}
                    </h3>

                    <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-white/75 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      View photo
                      <ArrowRight className="size-3.5" />
                    </span>
                  </div>

                  <div className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                    <ImageIcon className="size-4" />
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      )}

      {/* =========================================================
          VIDEO SECTION
      ========================================================= */}

      <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground md:py-28">
        <div className="absolute -left-40 top-20 size-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -right-40 bottom-0 size-96 rounded-full bg-white/5 blur-3xl" />

        <div className="container-page relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
              <Play className="size-4 fill-current" />
              Watch School Life
            </span>

            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              See SPPH in Action
            </h2>

            <p className="mt-5 text-base leading-8 text-white/75 md:text-lg">
              Watch real moments from our classrooms, celebrations, sports
              activities and creative learning experiences.
            </p>
          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-2">
            {videos.map((video, index) => (
              <article
                key={video.src}
                className={`group overflow-hidden rounded-[30px] border border-white/10 bg-white/10 shadow-2xl backdrop-blur-sm ${
                  index === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden bg-black ${
                    index === 0 ? "aspect-video md:aspect-[21/9]" : "aspect-video"
                  }`}
                >
                  <video
  ref={(element) => {
    videoRefs.current[index] = element;
  }}
  src={video.src}
  poster={video.poster}
  controls
  playsInline
  preload="metadata"
  onPlay={() => handleVideoPlay(index)}
  className="size-full object-cover"
/>

                  <div className="pointer-events-none absolute left-5 top-5">
                    <span className="rounded-full bg-black/50 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
                      {video.tag}
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-7">
                  <h3 className="text-xl font-bold text-white md:text-2xl">
                    {video.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/65">
                    {video.caption}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          GALLERY CTA
      ========================================================= */}

      <section className="container-page py-20 md:py-28">
        <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-primary via-primary to-accent p-8 text-center text-white shadow-2xl md:p-14">
          <div className="absolute -left-20 -top-20 size-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 size-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">
            <span className="rounded-full bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-md">
              Come & See Us
            </span>

            <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-black md:text-5xl">
              Want to Experience SPPH Yourself?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
              Visit our campus and discover a safe, caring and joyful learning
              environment for your child.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                to="/admission"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-bold text-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Apply for Admission
                <ArrowRight className="size-5" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-primary"
              >
                Visit Campus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FULLSCREEN IMAGE LIGHTBOX
      ========================================================= */}

      {selectedImage && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={closeImage}
        >
          <button
            type="button"
            onClick={closeImage}
            aria-label="Close image viewer"
            className="absolute right-5 top-5 z-10 flex size-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
          >
            <X className="size-6" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous image"
            className="absolute left-3 z-10 flex size-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 sm:left-6"
          >
            <ChevronLeft className="size-7" />
          </button>

          <div
            className="max-h-[90vh] max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.caption}
              className="max-h-[75vh] max-w-full rounded-2xl object-contain shadow-2xl"
            />

            <div className="mt-4 text-center text-white">
              <h3 className="text-lg font-bold md:text-xl">
                {selectedImage.caption}
              </h3>

              <p className="mt-1 text-sm text-white/60">
                {selectedImage.tag}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
            className="absolute right-3 z-10 flex size-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 sm:right-6"
          >
            <ChevronRight className="size-7" />
          </button>
        </div>
      )}
    </>
  );
}
