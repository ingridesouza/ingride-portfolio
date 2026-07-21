"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { servicosTranslations } from "@/lib/servicos-translations";
import { pillars, buildWhatsappLink } from "@/lib/servicos-data";
import SectionTitle from "@/components/ui/SectionTitle";

export default function ServicesPillars() {
  const { lang } = useLang();
  const t = servicosTranslations[lang].pillars;

  return (
    <section id="services" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title={t.title} subtitle={t.subtitle} />

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {pillars.map((pillar, i) => {
            const copy = t.items[pillar.key];
            const highlighted = pillar.key === "landing";

            return (
              <motion.div
                key={pillar.key}
                className="relative flex flex-col p-7 rounded-2xl"
                style={{
                  background: highlighted ? "var(--text-primary)" : "var(--bg-card)",
                  border: highlighted ? "1px solid var(--text-primary)" : "1px solid var(--border)",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.45 }}
              >
                {highlighted && (
                  <span
                    className="absolute -top-3 left-7 font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{ background: "var(--accent)", color: "#fff" }}
                  >
                    {t.highlightBadge}
                  </span>
                )}

                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: highlighted ? "rgba(255,255,255,0.1)" : "var(--accent-bg)",
                    color: highlighted ? "#fff" : "var(--accent)",
                  }}
                >
                  <pillar.icon size={20} />
                </div>

                <h3
                  className="font-display text-xl font-bold mb-2"
                  style={{ color: highlighted ? "#fff" : "var(--text-primary)" }}
                >
                  {copy.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: highlighted ? "rgba(255,255,255,0.75)" : "var(--text-secondary)" }}
                >
                  {copy.description}
                </p>

                <ul className="space-y-2.5 mb-6 flex-1">
                  {copy.features.map((feature: string) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm"
                      style={{ color: highlighted ? "rgba(255,255,255,0.8)" : "var(--text-secondary)" }}
                    >
                      <Check
                        size={15}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: highlighted ? "#fff" : "var(--accent)" }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mb-5">
                  {pillar.priceType === "from" ? (
                    <>
                      <span
                        className="text-xs font-mono uppercase"
                        style={{ color: highlighted ? "rgba(255,255,255,0.6)" : "var(--text-muted)" }}
                      >
                        {copy.priceLabel}
                      </span>
                      <p
                        className="font-display text-3xl font-black"
                        style={{ color: highlighted ? "#fff" : "var(--text-primary)" }}
                      >
                        {pillar.price}
                      </p>
                    </>
                  ) : (
                    <p
                      className="font-display text-2xl font-black"
                      style={{ color: highlighted ? "#fff" : "var(--text-primary)" }}
                    >
                      {copy.priceLabel}
                    </p>
                  )}
                </div>

                <a
                  href={buildWhatsappLink(copy.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={highlighted ? "btn-primary w-full justify-center" : "btn-secondary w-full justify-center"}
                  style={highlighted ? { background: "var(--accent)" } : undefined}
                >
                  {copy.cta}
                </a>
              </motion.div>
            );
          })}
        </div>

        <p className="text-sm text-center max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
          {t.note}
        </p>
      </div>
    </section>
  );
}
