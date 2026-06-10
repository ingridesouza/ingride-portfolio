"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Brain, Zap, X, Download, FileText, Image as ImageIcon, ExternalLink } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import SectionTitle from "@/components/ui/SectionTitle";
import { certifications } from "@/lib/data";
import Image from "next/image";

const iconMap: Record<string, LucideIcon> = { Award, Brain, Zap };

interface CertFile {
  label: string;
  url: string;
  type: "pdf" | "image";
}

interface ModalState {
  cert: (typeof certifications)[0];
  file: CertFile;
}

export default function Certifications() {
  const { t, lang } = useLang();
  const [modal, setModal] = useState<ModalState | null>(null);

  const openModal = (cert: (typeof certifications)[0], file: CertFile) => {
    setModal({ cert, file });
  };

  const closeModal = () => setModal(null);

  return (
    <section id="certifications" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title={t.certifications.title} subtitle={t.certifications.subtitle} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => {
            const IconComponent = iconMap[cert.icon] ?? Award;
            const hasFiles = cert.files && cert.files.length > 0;

            return (
              <motion.div
                key={cert.title}
                className="rounded-xl p-6 relative overflow-hidden flex flex-col transition-all duration-200"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderTop: `2px solid ${cert.color}`,
                }}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -3 }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(0,0,0,0.07)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
                  style={{ background: `${cert.color}12`, border: `1px solid ${cert.color}28` }}
                >
                  <IconComponent size={20} style={{ color: cert.color }} />
                </div>

                <span
                  className="text-[10px] font-mono uppercase tracking-widest mb-1"
                  style={{ color: cert.color }}
                >
                  {cert.type}
                </span>

                <h3
                  className="font-semibold leading-snug mb-1 flex-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  {cert.title}
                </h3>

                <div className="flex items-center justify-between mt-3 mb-4">
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    {cert.issuer}
                  </p>
                  <span
                    className="text-xs font-mono px-2 py-0.5 rounded"
                    style={{ background: `${cert.color}0f`, color: cert.color }}
                  >
                    {cert.year}
                  </span>
                </div>

                {/* File buttons */}
                {hasFiles ? (
                  <div className="flex flex-col gap-2 mt-auto pt-3"
                    style={{ borderTop: "1px solid var(--border)" }}
                  >
                    {cert.files.map((file) => (
                      <div key={file.url} className="flex gap-2">
                        <button
                          onClick={() => openModal(cert, file)}
                          className="flex-1 flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-150"
                          style={{
                            background: `${cert.color}0a`,
                            color: cert.color,
                            border: `1px solid ${cert.color}20`,
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.background = `${cert.color}18`;
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.background = `${cert.color}0a`;
                          }}
                        >
                          {file.type === "pdf" ? <FileText size={12} /> : <ImageIcon size={12} />}
                          <span className="truncate">{file.label}</span>
                          <ExternalLink size={10} className="ml-auto flex-shrink-0" />
                        </button>
                        <a
                          href={file.url}
                          download
                          className="flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-150 flex-shrink-0"
                          style={{
                            background: "var(--bg-hover)",
                            color: "var(--text-muted)",
                            border: "1px solid var(--border)",
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.color = cert.color;
                            (e.currentTarget as HTMLAnchorElement).style.borderColor = `${cert.color}40`;
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)";
                            (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
                          }}
                          title={`Baixar ${file.label}`}
                        >
                          <Download size={13} />
                        </a>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p
                    className="text-xs font-mono mt-auto pt-3"
                    style={{
                      borderTop: "1px solid var(--border)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {lang === "pt" ? "Certificado físico" : "Physical certificate"}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modal && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[100]"
              style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            />

            {/* Modal panel */}
            <motion.div
              className="fixed inset-4 md:inset-8 lg:inset-16 z-[101] flex flex-col rounded-2xl overflow-hidden"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                boxShadow: "0 32px 80px rgba(0,0,0,0.2)",
              }}
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.22 }}
            >
              {/* Modal header */}
              <div
                className="flex items-center justify-between px-5 py-4 flex-shrink-0"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <div>
                  <p className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
                    {modal.cert.issuer} · {modal.cert.year}
                  </p>
                  <h3 className="font-semibold text-sm mt-0.5" style={{ color: "var(--text-primary)" }}>
                    {modal.file.label}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={modal.file.url}
                    download
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150"
                    style={{
                      background: "var(--accent)",
                      color: "#fff",
                    }}
                  >
                    <Download size={13} />
                    {lang === "pt" ? "Baixar" : "Download"}
                  </a>
                  <button
                    onClick={closeModal}
                    className="w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-150"
                    style={{
                      background: "var(--bg-hover)",
                      color: "var(--text-muted)",
                      border: "1px solid var(--border)",
                    }}
                    aria-label="Fechar"
                  >
                    <X size={15} />
                  </button>
                </div>
              </div>

              {/* Modal content */}
              <div className="flex-1 overflow-auto bg-[#f0f0f0]">
                {modal.file.type === "pdf" ? (
                  <iframe
                    src={`${modal.file.url}#toolbar=1&view=FitH`}
                    className="w-full h-full min-h-[400px]"
                    title={modal.file.label}
                  />
                ) : (
                  <div className="flex items-center justify-center h-full p-6">
                    <div className="relative max-w-2xl w-full" style={{ aspectRatio: "4/3" }}>
                      <Image
                        src={modal.file.url}
                        alt={modal.file.label}
                        fill
                        className="object-contain rounded-lg"
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
