"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLang } from "@/context/LanguageContext";

const statementPt = "Construo sistemas que funcionam em produção.";
const statementEn = "I build systems that work in production.";

export default function About() {
  const { t, lang } = useLang();

  const stats = [
    { value: "2+", label: t.about.stats.experience },
    { value: "30+", label: lang === "pt" ? "repositórios" : "repositories" },
    { value: "15+", label: t.about.stats.technologies },
    { value: "3", label: t.about.stats.certifications },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Editorial statement */}
        <motion.h2
          className="font-display font-black leading-tight mb-16 max-w-3xl"
          style={{
            fontSize: "clamp(1.9rem, 4.5vw, 3.5rem)",
            color: "var(--text-primary)",
          }}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          {lang === "pt" ? statementPt : statementEn}
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12 md:gap-16 md:justify-end">
          {/* Photo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div
              className="relative w-56 h-64 overflow-hidden"
              style={{
                borderRadius: "4px",
                border: "1px solid var(--border)",
              }}
            >
              <Image
                src="/profile.jpg"
                alt="Ingride Souza"
                fill
                sizes="224px"
                className="object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            className="flex-1 max-w-xl"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "var(--text-secondary)" }}
            >
              {t.about.bio}
            </p>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "var(--text-secondary)" }}
            >
              {t.about.bio2}
            </p>

            <div className="flex gap-3">
              <a
                href="https://linkedin.com/in/ingride-souza"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/ingridesouza"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm"
              >
                GitHub ↗
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          className="flex flex-wrap gap-12 mt-20 pt-10"
          style={{ borderTop: "1px solid var(--border)" }}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex flex-col"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
            >
              <span
                className="font-display font-black text-4xl leading-none"
                style={{ color: "var(--accent)" }}
              >
                {stat.value}
              </span>
              <span
                className="text-xs mt-2 uppercase tracking-widest font-mono"
                style={{ color: "var(--text-muted)" }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
