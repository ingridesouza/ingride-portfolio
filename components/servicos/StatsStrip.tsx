"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

export default function StatsStrip() {
  const { lang } = useLang();

  const stats = [
    { value: "2+", label: lang === "pt" ? "anos de exp." : "years exp." },
    { value: "30+", label: lang === "pt" ? "repositórios" : "repositories" },
    { value: "15+", label: lang === "pt" ? "tecnologias" : "technologies" },
    { value: "3", label: lang === "pt" ? "certificações" : "certifications" },
  ];

  return (
    <div className="py-8 md:py-10 px-5 md:px-12 lg:px-24" style={{ borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center md:justify-between gap-8 md:gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="flex flex-col items-center md:items-start"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.35 }}
          >
            <span className="font-display font-black text-3xl md:text-4xl leading-none" style={{ color: "var(--accent)" }}>
              {stat.value}
            </span>
            <span className="text-xs mt-2 uppercase tracking-widest font-mono" style={{ color: "var(--text-muted)" }}>
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
