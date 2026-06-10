"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download, ArrowRight } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

export default function Hero() {
  const { t, lang } = useLang();

  return (
    <section className="relative min-h-[100dvh] flex items-center bg-bg-primary overflow-hidden">

      {/* Dot-grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #b0ada6 1.2px, transparent 1.2px)",
          backgroundSize: "28px 28px",
          opacity: 0.55,
        }}
      />
      {/* Fade: strong left (text area) → transparent right (photo area) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, var(--bg-primary) 0%, rgba(250,250,249,0.82) 30%, rgba(250,250,249,0.2) 58%, transparent 100%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-20 pb-10 md:py-28">
        <div className="flex flex-col-reverse md:flex-row md:items-stretch gap-6 md:gap-0">

          {/* Left — text block */}
          <div className="w-full md:w-[55%] min-w-0 flex flex-col justify-center md:pr-12">

            <motion.p
              className="font-mono text-xs tracking-[0.18em] uppercase mb-5 flex items-center gap-3"
              style={{ color: "var(--text-muted)" }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span
                className="inline-block w-5 h-px flex-shrink-0"
                style={{ background: "var(--accent)" }}
              />
              Salvador, Brasil · Backend Dev
            </motion.p>

            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1
                className="font-display font-black text-left leading-[0.92] tracking-tight"
                style={{
                  fontSize: "clamp(2.2rem, 4.2vw, 3.6rem)",
                  color: "var(--text-primary)",
                }}
              >
                <span className="block">BACKEND</span>
                <span className="block">DEVELOPER</span>
                <span className="block" style={{ color: "var(--accent)" }}>
                  &amp; AI ENGINEER.
                </span>
              </h1>
            </motion.div>

            <motion.p
              className="text-sm md:text-base leading-relaxed mb-8 max-w-md font-light"
              style={{ color: "var(--text-secondary)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              {lang === "pt"
                ? "Ingride Souza — construo APIs, pipelines de dados e soluções com IA que funcionam em produção."
                : "Ingride Souza — I build APIs, data pipelines and AI solutions that work in production."}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <button
                className="btn-primary"
                onClick={() =>
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {t.hero.cta_projects}
                <ArrowRight size={15} />
              </button>
              <a href="/Ingride_Souza.pdf" download className="btn-secondary">
                <Download size={15} />
                {t.hero.cta_cv}
              </a>
            </motion.div>
          </div>

          {/* Right — photo */}
          <motion.div
            className="flex-shrink-0 w-full md:w-[45%] flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.65 }}
          >
            {/* Mobile: fixed width centered. Desktop: fills 45% column up to 380px */}
            <div
              className="relative w-40 sm:w-56 md:w-full md:max-w-[380px]"
              style={{ aspectRatio: "3/4" }}
            >
              {/* Decorative offset frame */}
              <div
                className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-full h-full pointer-events-none"
                style={{
                  border: "1px solid var(--accent)",
                  opacity: 0.22,
                  borderRadius: "3px",
                }}
              />
              <div
                className="w-full h-full overflow-hidden"
                style={{
                  borderRadius: "3px",
                  border: "1px solid var(--border)",
                }}
              >
                <Image
                  src="/profile.jpg"
                  alt="Ingride Souza"
                  fill
                  sizes="(max-width: 640px) 160px, (max-width: 768px) 224px, 380px"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator — hidden on mobile to save space */}
        <motion.div
          className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span
            className="font-mono text-[10px] tracking-widest uppercase"
            style={{ color: "var(--text-muted)" }}
          >
            scroll
          </span>
          <div
            className="w-px h-10"
            style={{
              background: "linear-gradient(to bottom, var(--accent), transparent)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
