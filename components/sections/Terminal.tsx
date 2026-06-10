"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import SectionTitle from "@/components/ui/SectionTitle";
import { terminalCommands } from "@/lib/data";
import { Terminal as TerminalIcon } from "lucide-react";

interface HistoryEntry {
  type: "input" | "output";
  text: string;
}

const allCommands = Object.keys(terminalCommands).concat(["clear", "help"]);

export default function Terminal() {
  const { t, lang } = useLang();
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([
    { type: "output", text: t.terminal.welcome },
    { type: "output", text: t.terminal.hint },
  ]);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [cmdIdx, setCmdIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom whenever history changes
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

  const addToHistory = (entries: HistoryEntry[]) => {
    setHistory((prev) => [...prev, ...entries]);
  };

  const handleCommand = (raw: string) => {
    const trimmed = raw.trim().toLowerCase();

    // Always clear input first
    setInput("");
    setCmdIdx(-1);

    // Don't add blank lines
    if (trimmed === "") return;

    // Record in command history (for ↑↓)
    setCmdHistory((prev) => [raw.trim(), ...prev]);

    const entries: HistoryEntry[] = [{ type: "input", text: raw.trim() }];

    if (trimmed === "clear") {
      setHistory([
        { type: "output", text: t.terminal.welcome },
        { type: "output", text: t.terminal.hint },
      ]);
      return;
    }

    const response = terminalCommands[trimmed];
    if (response) {
      entries.push({ type: "output", text: response[lang] });
    } else {
      entries.push({
        type: "output",
        text:
          lang === "pt"
            ? `comando não encontrado: ${trimmed}\nDigite 'help' para ver os comandos disponíveis.`
            : `command not found: ${trimmed}\nType 'help' to see available commands.`,
      });
    }

    addToHistory(entries);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const next = Math.min(cmdIdx + 1, cmdHistory.length - 1);
      setCmdIdx(next);
      setInput(cmdHistory[next]);
      // Move cursor to end after state update
      requestAnimationFrame(() => {
        const el = inputRef.current;
        if (el) el.setSelectionRange(el.value.length, el.value.length);
      });
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (cmdIdx <= 0) {
        setCmdIdx(-1);
        setInput("");
        return;
      }
      const next = cmdIdx - 1;
      setCmdIdx(next);
      setInput(cmdHistory[next]);
      requestAnimationFrame(() => {
        const el = inputRef.current;
        if (el) el.setSelectionRange(el.value.length, el.value.length);
      });
    } else if (e.key === "Tab") {
      e.preventDefault();
      const typed = input.trim().toLowerCase();
      if (!typed) return;
      const match = allCommands.find((cmd) => cmd.startsWith(typed) && cmd !== typed);
      if (match) setInput(match);
    } else if (e.key === "l" && e.ctrlKey) {
      // Ctrl+L clears like a real terminal
      e.preventDefault();
      setHistory([
        { type: "output", text: t.terminal.welcome },
        { type: "output", text: t.terminal.hint },
      ]);
    }
  };

  return (
    <section id="terminal" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title={t.terminal.title} subtitle={t.terminal.subtitle} />

        <motion.div
          className="rounded-xl overflow-hidden"
          style={{
            border: "1px solid rgba(15,118,110,0.2)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
          }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Title bar */}
          <div
            className="flex items-center gap-3 px-4 py-3 flex-shrink-0"
            style={{ background: "#161616", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
          >
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
              <div className="w-3 h-3 rounded-full" style={{ background: "#ffbd2e" }} />
              <div className="w-3 h-3 rounded-full" style={{ background: "#28c940" }} />
            </div>
            <div className="flex items-center gap-2 ml-1">
              <TerminalIcon size={11} style={{ color: "#0f766e" }} />
              <span className="font-mono text-xs" style={{ color: "#5a5a5a" }}>
                ingride@portfolio — bash
              </span>
            </div>
          </div>

          {/* Body — click anywhere to focus input */}
          <div
            ref={bodyRef}
            className="terminal-text p-4 sm:p-5 text-sm overflow-y-auto cursor-text"
            style={{
              background: "#0d0d0d",
              minHeight: "220px",
              maxHeight: "320px",
            }}
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((entry, i) => (
              <div key={i} className="mb-1 leading-relaxed">
                {entry.type === "input" ? (
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="flex-shrink-0" style={{ color: "#0f766e" }}>
                      {t.terminal.prompt}
                    </span>
                    <span style={{ color: "#e5e7eb" }}>{entry.text}</span>
                  </div>
                ) : (
                  <pre
                    className="whitespace-pre-wrap pl-0 text-xs sm:text-sm"
                    style={{ color: "#8b9698", lineHeight: "1.6" }}
                  >
                    {entry.text}
                  </pre>
                )}
              </div>
            ))}

            {/* Live input line */}
            <div className="flex items-baseline gap-2 mt-1">
              <span className="flex-shrink-0" style={{ color: "#0f766e" }}>
                {t.terminal.prompt}
              </span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  setCmdIdx(-1);
                }}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent outline-none min-w-0 text-xs sm:text-sm"
                style={{
                  color: "#e5e7eb",
                  caretColor: "#0f766e",
                  fontFamily: "inherit",
                }}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
                inputMode="none"
                aria-label="Terminal input"
              />
            </div>
          </div>
        </motion.div>

        {/* Hint */}
        <p className="hidden sm:block text-center text-xs font-mono mt-3" style={{ color: "var(--text-muted)" }}>
          {lang === "pt"
            ? "↑↓ histórico · Tab autocomplete · Ctrl+L limpar"
            : "↑↓ history · Tab autocomplete · Ctrl+L clear"}
        </p>
      </div>
    </section>
  );
}
