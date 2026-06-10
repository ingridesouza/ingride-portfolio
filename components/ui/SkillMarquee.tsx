"use client";

const row1 = [
  "Python", "Django", "FastAPI", "Flask", "PostgreSQL",
  "Docker", "Celery", "Redis",
  "Python", "Django", "FastAPI", "Flask", "PostgreSQL",
  "Docker", "Celery", "Redis",
];

const row2 = [
  "BERT", "YOLOv5", "LLMs", "Embeddings", "React",
  "TypeScript", "Go", "GitHub Actions",
  "BERT", "YOLOv5", "LLMs", "Embeddings", "React",
  "TypeScript", "Go", "GitHub Actions",
];

export default function SkillMarquee() {
  return (
    <div
      className="relative py-8 overflow-hidden"
      aria-hidden="true"
      style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
    >
      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, var(--bg-primary), transparent)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, var(--bg-primary), transparent)" }}
      />

      {/* Row 1 */}
      <div className="flex overflow-hidden mb-3.5">
        <div className="flex animate-marquee whitespace-nowrap">
          {row1.map((skill, i) => (
            <span
              key={i}
              className="font-mono text-xs uppercase tracking-widest mx-6"
              style={{ color: "var(--text-muted)" }}
            >
              {skill}
              <span className="mx-3" style={{ color: "var(--border-strong)" }}>·</span>
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex overflow-hidden">
        <div className="flex animate-marquee-reverse whitespace-nowrap">
          {row2.map((skill, i) => (
            <span
              key={i}
              className="font-mono text-xs uppercase tracking-widest mx-6"
              style={{ color: "var(--text-muted)" }}
            >
              {skill}
              <span className="mx-3" style={{ color: "var(--border-strong)" }}>·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
