"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, Phone } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import SectionTitle from "@/components/ui/SectionTitle";

const socials = [
  {
    icon: <Mail size={17} />,
    label: "Email",
    value: "ingridesouza040@gmail.com",
    href: "mailto:ingridesouza040@gmail.com",
    color: "#0f766e",
  },
  {
    icon: <Linkedin size={17} />,
    label: "LinkedIn",
    value: "linkedin.com/in/ingride-souza",
    href: "https://linkedin.com/in/ingride-souza",
    color: "#0a66c2",
  },
  {
    icon: <Github size={17} />,
    label: "GitHub",
    value: "github.com/ingridesouza",
    href: "https://github.com/ingridesouza",
    color: "#1c1917",
  },
  {
    icon: <Phone size={17} />,
    label: "WhatsApp",
    value: "+55 71 98117-0909",
    href: "https://wa.me/5571981170909",
    color: "#16a34a",
  },
];

export default function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 900));
    window.location.href = `mailto:ingridesouza040@gmail.com?subject=Portfolio Contact: ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.name} (${form.email})`;
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 3000);
  };

  const inputBase: React.CSSProperties = {
    background: "var(--bg-card)",
    border: "1px solid var(--border)",
    color: "var(--text-primary)",
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title={t.contact.title} subtitle={t.contact.subtitle} />

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { key: "name", label: t.contact.name, type: "text" },
                { key: "email", label: t.contact.email, type: "email" },
              ].map((field) => (
                <div key={field.key}>
                  <label
                    className="block text-sm mb-1.5 font-mono"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    required
                    value={form[field.key as "name" | "email"]}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-150"
                    style={inputBase}
                    onFocus={(e) => {
                      e.target.style.borderColor = "var(--accent)";
                      e.target.style.boxShadow = "0 0 0 3px rgba(15, 118, 110, 0.08)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "var(--border)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>
              ))}

              <div>
                <label
                  className="block text-sm mb-1.5 font-mono"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {t.contact.message}
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-150 resize-none"
                  style={inputBase}
                  onFocus={(e) => {
                    e.target.style.borderColor = "var(--accent)";
                    e.target.style.boxShadow = "0 0 0 3px rgba(15, 118, 110, 0.08)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "var(--border)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={status !== "idle"}
                className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <span className="font-mono">{t.contact.sending}</span>
                ) : status === "sent" ? (
                  <span>{t.contact.success} ✓</span>
                ) : (
                  <>
                    <Send size={15} />
                    {t.contact.send}
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p
              className="text-sm mb-6"
              style={{ color: "var(--text-secondary)" }}
            >
              {t.contact.or}
            </p>
            <div className="space-y-3">
              {socials.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl transition-all duration-150"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                  }}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  whileHover={{ x: 4 }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border-strong)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(0,0,0,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${social.color}10`,
                      border: `1px solid ${social.color}25`,
                      color: social.color,
                    }}
                  >
                    {social.icon}
                  </div>
                  <div>
                    <p
                      className="text-xs font-mono"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {social.label}
                    </p>
                    <p
                      className="text-sm break-all"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {social.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
