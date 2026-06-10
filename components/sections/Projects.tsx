"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Github } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import SectionTitle from "@/components/ui/SectionTitle";
import { projects } from "@/lib/data";

const bentoClasses: Record<string, string> = {
  visionpro: "col-span-3 sm:col-span-2",
  imagaine: "col-span-3 sm:col-span-1",
  nexa: "col-span-3 sm:col-span-1",
  showroom: "col-span-3 sm:col-span-2",
};

export default function Projects() {
  const { t, lang } = useLang();

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title={t.projects.title} subtitle={t.projects.subtitle} />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              className={`${bentoClasses[project.id] ?? "col-span-1 sm:col-span-1"} group relative flex flex-col p-5 sm:p-7 rounded-xl overflow-hidden transition-all duration-200`}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderTop: `2px solid ${project.color}`,
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = `0 8px 32px ${project.color}18`;
                el.style.borderColor = "var(--border-strong)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = "none";
                el.style.borderColor = "var(--border)";
              }}
            >
              {/* GitHub link */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-5 right-5 opacity-30 group-hover:opacity-80 transition-opacity"
                aria-label="GitHub"
                style={{ color: project.color }}
              >
                <ArrowUpRight size={18} />
              </a>

              {/* Project name */}
              <h3
                className="font-display font-bold text-2xl mb-2 leading-tight"
                style={{ color: "var(--text-primary)" }}
              >
                {project.name}
              </h3>

              {/* Tagline */}
              <p
                className="text-sm font-mono mb-4"
                style={{ color: project.color }}
              >
                {project.tagline[lang]}
              </p>

              {/* Description */}
              <p
                className="text-sm leading-relaxed mb-5 flex-1"
                style={{ color: "var(--text-secondary)" }}
              >
                {project.description[lang]}
              </p>

              {/* Highlight */}
              <div
                className="text-xs font-mono mb-4 px-3 py-2 rounded"
                style={{
                  background: `${project.color}0a`,
                  color: project.color,
                  border: `1px solid ${project.color}20`,
                }}
              >
                ✦ {project.highlight[lang]}
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-mono transition-all duration-150"
                    style={{
                      background: "var(--bg-hover)",
                      color: "var(--text-secondary)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/ingridesouza"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            <Github size={16} />
            {lang === "pt"
              ? "Ver todos os 30+ repositórios no GitHub"
              : "See all 30+ repositories on GitHub"}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
