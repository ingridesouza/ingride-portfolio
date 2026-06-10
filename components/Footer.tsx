"use client";

import { Heart } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer
      className="py-10 px-6 text-center"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <p
        className="text-sm font-mono flex items-center justify-center gap-2"
        style={{ color: "var(--text-muted)" }}
      >
        {t.footer.built}
        <Heart size={12} className="fill-current" style={{ color: "var(--accent)" }} />
        {t.footer.by}
      </p>
      <p
        className="text-xs mt-1.5"
        style={{ color: "var(--text-muted)", opacity: 0.5 }}
      >
        Next.js · TypeScript · Tailwind · Framer Motion
      </p>
    </footer>
  );
}
