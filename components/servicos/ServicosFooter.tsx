"use client";

import { Mail, Phone } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { servicosTranslations } from "@/lib/servicos-translations";
import { buildWhatsappLink } from "@/lib/servicos-data";

export default function ServicosFooter() {
  const { lang } = useLang();
  const t = servicosTranslations[lang].footer;
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 px-6" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="text-center md:text-left">
          <p className="font-display font-bold text-sm" style={{ color: "var(--text-primary)" }}>
            Ingride Souza
          </p>
          <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
            {t.tagline}
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={buildWhatsappLink("Olá, Ingride! Vim pela sua página de serviços.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm"
            style={{ color: "var(--text-secondary)" }}
          >
            <Phone size={14} />
            {t.whatsapp}
          </a>
          <a
            href="mailto:ingridesouza040@gmail.com"
            className="flex items-center gap-1.5 text-sm"
            style={{ color: "var(--text-secondary)" }}
          >
            <Mail size={14} />
            {t.email}
          </a>
        </div>

        <p className="text-xs" style={{ color: "var(--text-muted)" }}>
          © {year} Ingride Souza
        </p>
      </div>
    </footer>
  );
}
