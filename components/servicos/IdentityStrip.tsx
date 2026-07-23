"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, ArrowRight } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { servicosTranslations } from "@/lib/servicos-translations";

export default function IdentityStrip() {
  const { lang } = useLang();
  const t = servicosTranslations[lang].identity;

  return (
    <section className="py-10 md:py-14 px-5 md:px-12 lg:px-24" style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-center gap-4 flex-shrink-0">
          <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0" style={{ border: "1px solid var(--border-strong)" }}>
            <Image src="/capelo_sentada_livros-avatar.jpg" alt="Ingride Souza" fill sizes="64px" className="object-cover object-top" />
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-widest uppercase mb-1" style={{ color: "var(--accent)" }}>
              {t.eyebrow}
            </p>
            <p className="font-display font-bold text-base" style={{ color: "var(--text-primary)" }}>
              {t.name}
            </p>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>
              {t.role}
            </p>
          </div>
        </div>

        <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-secondary)" }}>
          {t.bio}
        </p>

        <div className="flex items-center gap-3 flex-shrink-0 w-full md:w-auto">
          <a
            href="https://github.com/ingridesouza"
            target="_blank"
            rel="noopener noreferrer"
            className="tech-tag"
          >
            <Github size={14} />
            {t.ctaGithub}
          </a>
          <a
            href="https://www.linkedin.com/in/ingride-souza-a21a4518a/"
            target="_blank"
            rel="noopener noreferrer"
            className="tech-tag"
          >
            <Linkedin size={14} />
            {t.ctaLinkedin}
          </a>
          <Link href="/" className="text-sm font-medium flex items-center gap-1 whitespace-nowrap" style={{ color: "var(--accent)" }}>
            {t.ctaPortfolio}
            <ArrowRight size={13} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
