"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { servicosTranslations } from "@/lib/servicos-translations";
import { processIcons } from "@/lib/servicos-data";
import SectionTitle from "@/components/ui/SectionTitle";

export default function ProcessSteps() {
  const { lang } = useLang();
  const t = servicosTranslations[lang].process;

  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title={t.title} subtitle={t.subtitle} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.steps.map((step: { title: string; description: string }, i: number) => {
            const Icon = processIcons[i];
            return (
              <motion.div
                key={step.title}
                className="relative p-6 rounded-2xl glass"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <span
                  className="absolute top-5 right-5 font-mono text-xs font-bold"
                  style={{ color: "var(--text-muted)" }}
                >
                  0{i + 1}
                </span>
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: "var(--accent-bg)", color: "var(--accent)" }}
                >
                  <Icon size={18} />
                </div>
                <h3 className="font-display text-base font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
