"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, MessageCircle, Layout, Sparkles } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { servicosTranslations } from "@/lib/servicos-translations";
import { templates, buildWhatsappLink } from "@/lib/servicos-data";
import SectionTitle from "@/components/ui/SectionTitle";

function TemplateThumbnail({ src, alt }: { src: string; alt: string }) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        className="w-full h-full flex items-center justify-center"
        style={{ background: "var(--accent-bg)", color: "var(--accent)" }}
      >
        <Layout size={40} />
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} className="w-full h-full object-cover object-top" onError={() => setErrored(true)} />
  );
}

export default function TemplateShowcase() {
  const { lang } = useLang();
  const t = servicosTranslations[lang].templates;

  const featuredList = templates.filter((tpl) => tpl.status === "available");
  const upcoming = templates.filter((tpl) => tpl.status === "soon");

  return (
    <section id="templates" className="section-padding" style={{ background: "var(--bg-subtle)" }}>
      <div className="max-w-6xl mx-auto">
        <SectionTitle title={t.title} subtitle={t.subtitle} />

        {/* Featured real templates */}
        {featuredList.map((featured) => {
          const featuredCopy = t.items[featured.id];
          return (
            <motion.div
              key={featured.id}
              className="rounded-2xl overflow-hidden flex flex-col md:flex-row mb-6"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <div className="relative w-full md:w-[45%]" style={{ background: "var(--bg-hover)" }}>
                <div className="md:hidden w-full aspect-[9/19.5]">
                  {featured.mobileImage && <TemplateThumbnail src={featured.mobileImage} alt={featuredCopy.name} />}
                </div>
                <div className="hidden md:block w-full h-full">
                  {featured.image && <TemplateThumbnail src={featured.image} alt={featuredCopy.name} />}
                </div>
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-1 justify-center">
                <span className="font-mono text-[10px] tracking-widest uppercase mb-2" style={{ color: "var(--accent)" }}>
                  {featuredCopy.nicheLabel}
                </span>
                <h3 className="font-display text-2xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
                  {featuredCopy.name}
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                  {featuredCopy.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-2.5">
                  <a
                    href={featured.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary justify-center text-sm"
                  >
                    <ExternalLink size={14} />
                    {t.ctaLive}
                  </a>
                  <a
                    href={buildWhatsappLink(featuredCopy.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary justify-center text-sm"
                  >
                    <MessageCircle size={14} />
                    {t.ctaWant}
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Consolidated "coming soon" card */}
        <motion.div
          className="rounded-2xl p-6 md:p-7 flex flex-col md:flex-row md:items-center gap-5"
          style={{ border: "1px dashed var(--border-strong)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: "var(--accent-bg)", color: "var(--accent)" }}
          >
            <Sparkles size={19} />
          </div>

          <div className="flex-1">
            <h4 className="font-display text-base font-bold mb-1" style={{ color: "var(--text-primary)" }}>
              {t.moreComingSoonTitle}
            </h4>
            <p className="text-sm mb-3" style={{ color: "var(--text-secondary)" }}>
              {t.moreComingSoonDescription}
            </p>
            <div className="flex flex-wrap gap-2">
              {upcoming.map((tpl) => (
                <span key={tpl.id} className="tech-tag">
                  {t.items[tpl.id].name}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
