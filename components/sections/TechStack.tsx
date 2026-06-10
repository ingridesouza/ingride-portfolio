"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import SectionTitle from "@/components/ui/SectionTitle";

const categoryColors: Record<string, string> = {
  backend: "#0f766e",    // teal — primary accent
  ai: "#7c3aed",         // violet
  devops: "#0369a1",     // deep blue
  databases: "#b45309",  // amber
  frontend: "#be185d",   // rose
  tools: "#57534e",      // warm gray
};

const techCategories = [
  {
    key: "backend",
    items: ["Python", "Django", "Flask", "FastAPI", "Go", "APIs REST"],
  },
  {
    key: "ai",
    items: ["BERT / RoBERTa", "YOLOv5", "LLMs", "Embeddings / PLN", "MediaPipe", "Web Scraping"],
  },
  {
    key: "devops",
    items: ["Docker", "Docker Compose", "GitHub Actions", "Celery + Redis", "CI/CD", "Git"],
  },
  {
    key: "databases",
    items: ["PostgreSQL", "SQL", "Redis", "JWT Auth"],
  },
  {
    key: "frontend",
    items: ["React", "TypeScript", "React Native"],
  },
  {
    key: "tools",
    items: ["pytest / unittest", "Scrum / Kanban", "Jira", "OpenProject"],
  },
];

const categoryLabels: Record<string, { pt: string; en: string }> = {
  backend: { pt: "Backend", en: "Backend" },
  ai: { pt: "IA & ML", en: "AI & ML" },
  devops: { pt: "DevOps", en: "DevOps" },
  databases: { pt: "Databases", en: "Databases" },
  frontend: { pt: "Frontend", en: "Frontend" },
  tools: { pt: "Ferramentas", en: "Tools" },
};

export default function TechStack() {
  const { t, lang } = useLang();

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title={t.skills.title} subtitle={t.skills.subtitle} />

        <div className="flex flex-col gap-7">
          {techCategories.map((group, groupIdx) => {
            const color = categoryColors[group.key];
            const label =
              lang === "pt"
                ? categoryLabels[group.key].pt
                : categoryLabels[group.key].en;

            return (
              <motion.div
                key={group.key}
                className="flex flex-col sm:flex-row sm:items-start gap-4"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: groupIdx * 0.06 }}
              >
                {/* Category label */}
                <div className="sm:w-36 flex-shrink-0 flex items-center gap-3 pt-0.5">
                  <span
                    className="text-xs font-mono font-semibold tracking-widest uppercase"
                    style={{ color }}
                  >
                    {label}
                  </span>
                  <div
                    className="hidden sm:block flex-1 h-px"
                    style={{ background: color, opacity: 0.15 }}
                  />
                </div>

                <div
                  className="sm:hidden h-px w-full"
                  style={{ background: color, opacity: 0.12 }}
                />

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, itemIdx) => (
                    <motion.span
                      key={item}
                      className="px-3 py-1 rounded text-xs font-mono border transition-all duration-150 cursor-default"
                      style={{
                        background: "var(--bg-card)",
                        borderColor: "var(--border)",
                        color: "var(--text-secondary)",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLSpanElement;
                        el.style.borderColor = `${color}50`;
                        el.style.color = color;
                        el.style.background = `${color}08`;
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLSpanElement;
                        el.style.borderColor = "var(--border)";
                        el.style.color = "var(--text-secondary)";
                        el.style.background = "var(--bg-card)";
                      }}
                      initial={{ opacity: 0, scale: 0.92 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: groupIdx * 0.06 + itemIdx * 0.025 }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
