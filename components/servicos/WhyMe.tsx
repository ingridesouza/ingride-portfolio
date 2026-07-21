"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { servicosTranslations } from "@/lib/servicos-translations";
import { whyMeIcons } from "@/lib/servicos-data";
import SectionTitle from "@/components/ui/SectionTitle";

export default function WhyMe() {
  const { lang } = useLang();
  const t = servicosTranslations[lang].whyMe;

  return (
    <section className="section-padding" style={{ background: "var(--bg-subtle)" }}>
      <div className="max-w-6xl mx-auto">
        <SectionTitle title={t.title} subtitle={t.subtitle} />

        <div className="grid sm:grid-cols-2 gap-6">
          {t.items.map((item: { title: string; description: string }, i: number) => {
            const Icon = whyMeIcons[i];
            return (
              <motion.div
                key={item.title}
                className="flex gap-4 p-6 rounded-2xl"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "var(--accent-bg)", color: "var(--accent)" }}
                >
                  <Icon size={19} />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold mb-1.5" style={{ color: "var(--text-primary)" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
