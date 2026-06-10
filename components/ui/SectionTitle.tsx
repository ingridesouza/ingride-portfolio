"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  accent?: string; // unused — kept for call-site compat
}

export default function SectionTitle({ title, subtitle, align = "center" }: Props) {
  return (
    <motion.div
      className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
    >
      <div
        className={`flex items-center gap-2.5 mb-4 ${align === "center" ? "justify-center" : ""}`}
      >
        <span
          className="w-4 h-px flex-shrink-0"
          style={{ background: "var(--accent)" }}
        />
        <span
          className="font-mono text-[10px] tracking-[0.2em] uppercase font-medium"
          style={{ color: "var(--accent)" }}
        >
          {title}
        </span>
      </div>
      <h2
        className="font-display text-3xl md:text-4xl font-bold leading-tight"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-base md:text-lg max-w-2xl ${align === "center" ? "mx-auto" : ""}`}
          style={{ color: "var(--text-secondary)" }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
