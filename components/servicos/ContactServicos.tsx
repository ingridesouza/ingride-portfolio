"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { servicosTranslations } from "@/lib/servicos-translations";
import { serviceOptions, buildWhatsappLink } from "@/lib/servicos-data";
import SectionTitle from "@/components/ui/SectionTitle";

export default function ContactServicos() {
  const { lang } = useLang();
  const t = servicosTranslations[lang].contact;
  const [form, setForm] = useState<{ name: string; service: (typeof serviceOptions)[number]; message: string }>({
    name: "",
    service: serviceOptions[0],
    message: "",
  });

  const inputBase: React.CSSProperties = {
    background: "var(--bg-card)",
    border: "1px solid var(--border)",
    color: "var(--text-primary)",
  };

  const focusHandlers = {
    onFocus: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      e.target.style.borderColor = "var(--accent)";
      e.target.style.boxShadow = "0 0 0 3px rgba(15, 118, 110, 0.08)";
    },
    onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      e.target.style.borderColor = "var(--border)";
      e.target.style.boxShadow = "none";
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceLabel = t.serviceOptions[form.service];
    const message = `${form.name ? `${form.name} — ` : ""}${serviceLabel}\n\n${form.message}`;
    window.open(buildWhatsappLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-2xl mx-auto">
        <SectionTitle title={t.title} subtitle={t.subtitle} />

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <label className="block text-sm mb-1.5 font-mono" style={{ color: "var(--text-secondary)" }}>
              {t.name}
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-150"
              style={inputBase}
              {...focusHandlers}
            />
          </div>

          <div>
            <label className="block text-sm mb-1.5 font-mono" style={{ color: "var(--text-secondary)" }}>
              {t.service}
            </label>
            <select
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value as typeof serviceOptions[number] })}
              className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-150"
              style={inputBase}
              {...focusHandlers}
            >
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {t.serviceOptions[opt]}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1.5 font-mono" style={{ color: "var(--text-secondary)" }}>
              {t.message}
            </label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-150 resize-none"
              style={inputBase}
              {...focusHandlers}
            />
          </div>

          <button type="submit" className="btn-primary w-full justify-center">
            <MessageCircle size={15} />
            {t.cta}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
