"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import SectionTitle from "@/components/ui/SectionTitle";
import { galleryPhotos } from "@/lib/data";

const AUTOPLAY_MS = 4000;

export default function Gallery() {
  const { lang } = useLang();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const title = lang === "pt" ? "Por Dentro da Jornada" : "Behind the Journey";
  const subtitle =
    lang === "pt"
      ? "Momentos reais de uma carreira construída com dedicação"
      : "Real moments from a career built with dedication";

  const total = galleryPhotos.length;

  const goTo = useCallback(
    (idx: number, dir: number) => {
      setDirection(dir);
      setCurrent((idx + total) % total);
    },
    [total]
  );

  const next = useCallback(() => goTo(current + 1, 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1, -1), [current, goTo]);

  // Autoplay
  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(next, AUTOPLAY_MS);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, next]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  const photo = galleryPhotos[current];

  return (
    <section id="gallery" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title={title} subtitle={subtitle} />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Carousel container */}
          <div
            className="relative overflow-hidden rounded-xl"
            style={{
              border: "1px solid var(--border)",
              background: "var(--bg-card)",
            }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Image area */}
            <div className="relative h-[260px] sm:h-[380px] md:h-[480px] overflow-hidden">
              <AnimatePresence custom={direction} mode="popLayout">
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={photo.src}
                    alt={photo.caption[lang]}
                    fill
                    sizes="(max-width: 768px) 100vw, 900px"
                    className="object-cover object-center"
                    priority={current === 0}
                  />
                  {/* Gradient overlay at bottom */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.95) 100%)",
                    }}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Company + year badge — top left */}
              <div
                className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium"
                style={{
                  background: "rgba(255,255,255,0.92)",
                  border: "1px solid var(--border)",
                  backdropFilter: "blur(8px)",
                  color: "var(--accent)",
                }}
              >
                <MapPin size={10} />
                {photo.company} · {photo.year}
              </div>

              {/* Pause indicator */}
              {paused && (
                <div
                  className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded-full text-[10px] font-mono"
                  style={{
                    background: "rgba(255,255,255,0.85)",
                    border: "1px solid var(--border)",
                    color: "var(--text-muted)",
                  }}
                >
                  pausado
                </div>
              )}

              {/* Prev / Next arrows */}
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-150"
                style={{
                  background: "rgba(255,255,255,0.9)",
                  border: "1px solid var(--border)",
                  color: "var(--text-secondary)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--accent)";
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--text-secondary)";
                }}
                aria-label="Anterior"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-150"
                style={{
                  background: "rgba(255,255,255,0.9)",
                  border: "1px solid var(--border)",
                  color: "var(--text-secondary)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--accent)";
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--text-secondary)";
                }}
                aria-label="Próximo"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Caption + dots */}
            <div className="px-4 py-3 md:px-6 md:py-4 flex items-center justify-between gap-4">
              <p
                className="text-sm leading-snug"
                style={{ color: "var(--text-secondary)" }}
              >
                {photo.caption[lang]}
              </p>

              <div className="flex items-center gap-1.5 flex-shrink-0">
                {galleryPhotos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i, i > current ? 1 : -1)}
                    className="rounded-full transition-all duration-200 p-2"
                    style={{
                      width: i === current ? "20px" : "6px",
                      height: "6px",
                      background: i === current ? "var(--accent)" : "var(--border-strong)",
                    }}
                    aria-label={`Ir para foto ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Progress bar */}
            {!paused && (
              <div
                className="absolute bottom-0 left-0 h-0.5"
                style={{ background: "var(--border)" }}
              >
                <motion.div
                  key={current}
                  className="h-full"
                  style={{ background: "var(--accent)" }}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
                />
              </div>
            )}
          </div>

          {/* Counter */}
          <p
            className="text-center text-xs font-mono mt-4"
            style={{ color: "var(--text-muted)" }}
          >
            {current + 1} / {total}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
