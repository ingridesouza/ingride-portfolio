"use client";

import { useEffect, useState, useRef } from "react";

const KONAMI = [
  "ArrowUp", "ArrowUp",
  "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight",
  "ArrowLeft", "ArrowRight",
  "b", "a",
];

interface Toast {
  id: number;
  command: string;
  message: string;
}

const secretSequences: Record<string, { command: string; message: string }> = {
  "npm i ingride": {
    command: "npm i ingride",
    message: "✓ installed ingride@latest — 0 vulnerabilities, 100% coverage",
  },
  "git blame": {
    command: "git blame life.py",
    message: "^0f766e Ingride Souza — wrote everything correctly the first time",
  },
  "sudo": {
    command: "sudo be-hired",
    message: "Permission granted. You hired the best engineer.",
  },
  "hire me": {
    command: "hire --ingride --now",
    message: "✓ Best decision made today. ingridesouza040@gmail.com",
  },
};

export default function EasterEggs() {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [konamiVisible, setKonamiVisible] = useState(false);
  const [konamiExiting, setKonamiExiting] = useState(false);
  const konamiProgress = useRef<string[]>([]);
  const originalTitle = useRef<string>("");
  const toastIdRef = useRef(0);
  const typedBuffer = useRef("");

  const addToast = (command: string, message: string) => {
    const id = ++toastIdRef.current;
    setToasts((prev) => [...prev, { id, command, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  useEffect(() => {
    originalTitle.current = document.title;

    // ── Console easter egg ──
    console.log(
      "%c\n  Ingride Souza  \n",
      "background:#0f766e;color:#fff;padding:6px 14px;font-weight:bold;font-size:15px;font-family:monospace"
    );
    console.log(
      "%c  Backend Developer & AI Engineer — Salvador, Brasil",
      "color:#57534e;font-size:11px;font-family:monospace"
    );
    console.log(
      "%c\n  ✦ Você achou o console. Isso já é um bom sinal.\n",
      "color:#0f766e;font-style:italic;font-family:monospace"
    );
    console.log(
      "%c  Quer contratar quem lê o código-fonte?",
      "color:#1c1917;font-size:12px;font-family:monospace"
    );
    console.log(
      "%c  → ingridesouza040@gmail.com\n  → github.com/ingridesouza",
      "color:#0d9488;font-size:12px;font-family:monospace"
    );
    console.log(
      "%c\n  // Construído com Next.js, TypeScript, Tailwind, Framer Motion e muito café.\n  // Tente: npm i ingride  |  git blame  |  hire me\n",
      "color:#a8a29e;font-size:10px;font-style:italic;font-family:monospace"
    );

    // ── Tab visibility easter egg ──
    const handleVisibility = () => {
      document.title = document.hidden ? "psst, volte aqui 👀" : originalTitle.current;
    };
    document.addEventListener("visibilitychange", handleVisibility);

    // ── Konami code ──
    const handleKey = (e: KeyboardEvent) => {
      konamiProgress.current.push(e.key);
      if (konamiProgress.current.length > KONAMI.length) {
        konamiProgress.current.shift();
      }
      if (
        konamiProgress.current.length === KONAMI.length &&
        konamiProgress.current.every((k, i) => k === KONAMI[i])
      ) {
        konamiProgress.current = [];
        setKonamiVisible(true);
        setKonamiExiting(false);
        setTimeout(() => {
          setKonamiExiting(true);
          setTimeout(() => {
            setKonamiVisible(false);
            setKonamiExiting(false);
          }, 350);
        }, 4000);
      }

      // ── Typed sequence detection ──
      if (e.key.length === 1) {
        typedBuffer.current = (typedBuffer.current + e.key).slice(-20).toLowerCase();
        for (const [trigger, data] of Object.entries(secretSequences)) {
          if (typedBuffer.current.endsWith(trigger)) {
            typedBuffer.current = "";
            addToast(data.command, data.message);
            break;
          }
        }
      }
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <>
      {/* Hidden HTML comment for source-code readers */}
      <span
        style={{ display: "none" }}
        dangerouslySetInnerHTML={{
          __html: "<!-- Made with care by Ingride Souza. You found the source. Email her. -->",
        }}
      />

      {/* Konami toast */}
      {konamiVisible && (
        <div
          className={`fixed bottom-6 right-6 z-[9999] ${
            konamiExiting ? "konami-toast-exit" : "konami-toast-enter"
          }`}
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border-strong)",
            borderRadius: "10px",
            padding: "16px 20px",
            maxWidth: "340px",
            boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
          }}
        >
          <p
            className="font-mono text-sm mb-1.5 font-semibold"
            style={{ color: "var(--accent)" }}
          >
            $ sudo hire ingride --now
          </p>
          <p className="font-mono text-xs" style={{ color: "var(--text-secondary)" }}>
            Checking qualifications...
          </p>
          <p className="font-mono text-xs mt-1" style={{ color: "var(--accent)" }}>
            ✓ Permission granted. You hired the best.
          </p>
          <p className="font-mono text-[10px] mt-2" style={{ color: "var(--text-muted)" }}>
            Konami code accepted — nice moves
          </p>
        </div>
      )}

      {/* Typed sequence toasts */}
      <div className="fixed bottom-6 left-6 z-[9999] flex flex-col gap-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="konami-toast-enter"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-strong)",
              borderRadius: "10px",
              padding: "14px 18px",
              maxWidth: "320px",
              boxShadow: "0 12px 36px rgba(0,0,0,0.1)",
            }}
          >
            <p className="font-mono text-xs mb-1" style={{ color: "var(--text-muted)" }}>
              $ {toast.command}
            </p>
            <p className="font-mono text-sm" style={{ color: "var(--accent)" }}>
              {toast.message}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
