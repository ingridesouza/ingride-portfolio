"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { servicosTranslations } from "@/lib/servicos-translations";
import { faqKeys } from "@/lib/servicos-data";
import SectionTitle from "@/components/ui/SectionTitle";

export default function FaqServicos() {
  const { lang } = useLang();
  const t = servicosTranslations[lang].faq;
  const [openKey, setOpenKey] = useState<string | null>(faqKeys[0]);

  return (
    <section id="faq" className="section-padding" style={{ background: "var(--bg-subtle)" }}>
      <div className="max-w-3xl mx-auto">
        <SectionTitle title={t.title} />

        <div className="space-y-3">
          {faqKeys.map((key, i) => {
            const item = t.items[key];
            const isOpen = openKey === key;

            return (
              <motion.div
                key={key}
                className="rounded-xl overflow-hidden"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
              >
                <button
                  onClick={() => setOpenKey(isOpen ? null : key)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
                >
                  <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ color: "var(--accent)" }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown size={18} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="px-5 pb-4 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
