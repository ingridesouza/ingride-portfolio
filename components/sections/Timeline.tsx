"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Briefcase, GraduationCap } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import SectionTitle from "@/components/ui/SectionTitle";
import { timeline } from "@/lib/data";

export default function Timeline() {
  const { t, lang } = useLang();

  return (
    <section id="timeline" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title={t.timeline.title} subtitle={t.timeline.subtitle} />

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px"
            style={{
              background: "linear-gradient(to bottom, transparent, var(--border-strong), transparent)",
            }}
          />

          <div className="space-y-8">
            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0;
              const accentColor = item.type === "work" ? "var(--accent)" : "var(--accent-code)";
              const accentHex = item.type === "work" ? "#0f766e" : "#7c3aed";

              return (
                <motion.div
                  key={`${item.company}-${i}`}
                  className={`relative flex items-start gap-4 md:gap-6 flex-row ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.09 }}
                >
                  <div className="hidden md:block md:flex-1" />

                  {/* Icon node */}
                  <div
                    className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      background: `${accentHex}0f`,
                      border: `1px solid ${accentHex}30`,
                    }}
                  >
                    {item.type === "work" ? (
                      <Briefcase size={17} style={{ color: accentColor }} />
                    ) : (
                      <GraduationCap size={17} style={{ color: accentColor }} />
                    )}
                  </div>

                  {/* Card */}
                  <div
                    className="flex-1 rounded-xl overflow-hidden transition-all duration-200"
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--border-strong)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    {/* Photo strip */}
                    {item.photo && (
                      <div className="relative h-36 overflow-hidden">
                        <Image
                          src={item.photo}
                          alt={item.company}
                          fill
                          sizes="(max-width: 768px) 100vw, 560px"
                          className="object-cover object-center"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src = "/profile.jpg";
                          }}
                        />
                        <div
                          className="absolute inset-0"
                          style={{
                            background: "linear-gradient(to bottom, transparent 45%, rgba(255,255,255,0.95) 100%)",
                          }}
                        />
                      </div>
                    )}

                    <div className="p-4 md:p-6">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div className="min-w-0">
                          <h3
                            className="font-semibold"
                            style={{ color: "var(--text-primary)" }}
                          >
                            {item.role[lang]}
                          </h3>
                          <p
                            className="font-mono text-sm font-medium"
                            style={{ color: accentColor }}
                          >
                            {item.company}
                          </p>
                        </div>
                        <span
                          className="text-xs font-mono px-2.5 py-1 rounded-full flex-shrink-0"
                          style={{
                            background: "var(--bg-hover)",
                            color: "var(--text-muted)",
                            border: "1px solid var(--border)",
                          }}
                        >
                          {item.period[lang]}
                        </span>
                      </div>

                      <p
                        className="text-sm leading-relaxed mb-4"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {item.description[lang]}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span key={tag} className="tech-tag text-xs">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
