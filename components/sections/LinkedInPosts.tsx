"use client";

import { motion } from "framer-motion";
import { ExternalLink, Linkedin } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import SectionTitle from "@/components/ui/SectionTitle";
import { linkedinPosts } from "@/lib/data";

export default function LinkedInPosts() {
  const { t, lang } = useLang();

  return (
    <section id="linkedin" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title={t.linkedin.title} subtitle={t.linkedin.subtitle} />

        <div className="grid md:grid-cols-1 gap-6 max-w-2xl mx-auto">
          {linkedinPosts.map((post, i) => (
            <motion.a
              key={i}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl p-6 block group transition-all duration-200"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border-strong)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 24px rgba(0,0,0,0.07)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(10,102,194,0.08)",
                      border: "1px solid rgba(10,102,194,0.2)",
                    }}
                  >
                    <Linkedin size={17} style={{ color: "#0a66c2" }} />
                  </div>
                  <div>
                    <p
                      className="text-xs font-mono"
                      style={{ color: "var(--text-muted)" }}
                    >
                      linkedin.com/in/ingride-souza
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {post.date}
                    </p>
                  </div>
                </div>
                <ExternalLink
                  size={15}
                  className="flex-shrink-0 mt-1 transition-colors"
                  style={{ color: "var(--text-muted)" }}
                />
              </div>

              <h3
                className="font-semibold mb-2 leading-snug"
                style={{ color: "var(--text-primary)" }}
              >
                {post.title[lang]}
              </h3>

              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "var(--text-secondary)" }}
              >
                {post.excerpt[lang]}
              </p>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2 py-0.5 rounded"
                    style={{
                      background: "var(--bg-hover)",
                      color: "var(--text-secondary)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p
                className="text-sm mt-4 font-medium"
                style={{ color: "var(--accent)" }}
              >
                {t.linkedin.read_more} ↗
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
