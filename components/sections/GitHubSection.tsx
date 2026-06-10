"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useLang } from "@/context/LanguageContext";
import SectionTitle from "@/components/ui/SectionTitle";
import { Github, BookOpen, Users } from "lucide-react";

const GitHubCalendar = dynamic(() => import("react-github-calendar"), { ssr: false });

const calendarTheme = {
  light: ["#f0efec", "#c6f0ea", "#7dd6cb", "#2fb3a7", "#0f766e"],
};

export default function GitHubSection() {
  const { t, lang } = useLang();

  const stats = [
    { icon: <BookOpen size={18} />, label: t.github.repos, value: "30+" },
    { icon: <Github size={18} />, label: t.github.contributions, value: "—" },
    { icon: <Users size={18} />, label: t.github.followers, value: "—" },
  ];

  return (
    <section id="github" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title={t.github.title} subtitle={t.github.subtitle} />

        <motion.div
          className="grid grid-cols-3 sm:grid-cols-3 gap-3 sm:gap-4 mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl p-3 sm:p-5 text-center glass glass-hover"
            >
              <div
                className="flex items-center justify-center mb-2"
                style={{ color: "var(--accent)" }}
              >
                {stat.icon}
              </div>
              <p
                className="text-xl font-bold font-mono"
                style={{ color: "var(--text-primary)" }}
              >
                {stat.value}
              </p>
              <p
                className="text-xs mt-0.5 leading-tight"
                style={{ color: "var(--text-muted)" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="rounded-2xl p-6 overflow-x-auto glass"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <Github size={15} style={{ color: "var(--accent)" }} />
            <p
              className="text-sm font-mono"
              style={{ color: "var(--text-secondary)" }}
            >
              {lang === "pt" ? "Contribuições no último ano" : "Contributions in the last year"}
            </p>
          </div>
          <GitHubCalendar
            username="ingridesouza"
            colorScheme="light"
            theme={calendarTheme}
            hideColorLegend={false}
            hideTotalCount={false}
            labels={{
              totalCount:
                lang === "pt"
                  ? "{{count}} contribuições no último ano"
                  : "{{count}} contributions in the last year",
            }}
            style={{ color: "var(--text-secondary)", fontSize: "12px" }}
          />
        </motion.div>

        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
        >
          <a
            href="https://github.com/ingridesouza"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            <Github size={16} />
            {lang === "pt" ? "Ver todos os repositórios" : "View all repositories"}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
