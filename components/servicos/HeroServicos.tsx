"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle, ArrowRight, Layout, Cog, Workflow } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { servicosTranslations } from "@/lib/servicos-translations";
import { buildWhatsappLink } from "@/lib/servicos-data";

const floatingCards = [
  { icon: Layout, label: "Landing Page", offset: "top-0 right-8", delay: 0 },
  { icon: Cog, label: "Sistema", offset: "top-32 right-0", delay: 1.2 },
  { icon: Workflow, label: "Automação", offset: "top-64 right-16", delay: 2.4 },
];

export default function HeroServicos() {
  const { lang } = useLang();
  const t = servicosTranslations[lang].hero;

  return (
    <section className="relative min-h-[100dvh] flex items-center bg-bg-primary overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #b0ada6 1.2px, transparent 1.2px)",
          backgroundSize: "28px 28px",
          opacity: 0.55,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, var(--bg-primary) 0%, rgba(250,250,249,0.82) 30%, rgba(250,250,249,0.2) 58%, transparent 100%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-24 pb-10 md:py-28">
        <div className="flex flex-col md:flex-row md:items-stretch gap-10 md:gap-0">
          {/* Left — text block */}
          <div className="w-full md:w-[58%] min-w-0 flex flex-col justify-center md:pr-12">
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
            >
              <div
                className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0"
                style={{ border: "1px solid var(--border)" }}
              >
                <Image src="/sentada_close_frontal-avatar.jpg" alt="Ingride Souza" fill sizes="44px" className="object-cover object-top" />
              </div>
              <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                Ingride Souza
              </p>
            </motion.div>

            <motion.p
              className="font-mono text-xs tracking-[0.18em] uppercase mb-5 flex items-center gap-3"
              style={{ color: "var(--text-muted)" }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="inline-block w-5 h-px flex-shrink-0" style={{ background: "var(--accent)" }} />
              {t.eyebrow}
            </motion.p>

            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1
                className="font-display font-black text-left leading-[0.92] tracking-tight text-[clamp(1.3rem,6.5vw,2.4rem)] md:text-[clamp(1.6rem,3.2vw,2.2rem)] lg:text-[clamp(1.9rem,3.3vw,2.9rem)] xl:text-[2.9rem]"
                style={{ color: "var(--text-primary)" }}
              >
                {t.title.map((line: string, i: number) => (
                  <span
                    key={line}
                    className="block"
                    style={i === t.titleAccentIndex ? { color: "var(--accent)" } : undefined}
                  >
                    {line}
                  </span>
                ))}
              </h1>
            </motion.div>

            <motion.p
              className="text-sm md:text-base leading-relaxed mb-8 max-w-lg font-light"
              style={{ color: "var(--text-secondary)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              {t.description}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 mb-3"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <a href={buildWhatsappLink(t.whatsappMessage)} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <MessageCircle size={15} />
                {t.ctaWhatsapp}
              </a>
              <button
                className="btn-secondary"
                onClick={() => document.querySelector("#templates")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t.ctaTemplates}
                <ArrowRight size={15} />
              </button>
            </motion.div>

            <motion.p
              className="font-mono text-xs mb-6"
              style={{ color: "var(--text-secondary)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {t.ctaReassurance}
            </motion.p>
          </div>

          {/* Right — floating service cards */}
          <div className="hidden md:flex flex-shrink-0 w-[42%] relative items-center justify-center">
            <div className="relative w-full max-w-[320px] h-[360px]">
              {floatingCards.map((card, i) => (
                <motion.div
                  key={card.label}
                  className={`absolute ${card.offset} flex items-center gap-3 px-5 py-4 rounded-xl animate-float`}
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                    animationDelay: `${card.delay}s`,
                  }}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "var(--accent-bg)", color: "var(--accent)" }}
                  >
                    <card.icon size={17} />
                  </div>
                  <span className="text-sm font-medium whitespace-nowrap" style={{ color: "var(--text-primary)" }}>
                    {card.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
