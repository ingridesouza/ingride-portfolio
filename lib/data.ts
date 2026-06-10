export const projects = [
  {
    id: "visionpro",
    name: "VisionPro",
    tagline: { pt: "Visão computacional em tempo real", en: "Real-time computer vision" },
    description: {
      pt: "Aplicação de visão computacional via webcam que detecta emoções, sonolência, gestos e letras em Libras em tempo real. Arquitetura WebSocket com autenticação e rate limiting.",
      en: "Webcam-based computer vision app detecting emotions, drowsiness, hand gestures, and Brazilian Sign Language letters in real time. WebSocket architecture with auth and rate limiting.",
    },
    tech: ["Python", "FastAPI", "React", "TypeScript", "MediaPipe", "DeepFace", "OpenCV", "Docker", "WebSocket"],
    github: "https://github.com/ingridesouza/visionpro",
    color: "#22d3ee",
    icon: "Eye",
    highlight: {
      pt: "Detecção de 22 letras em Libras + 7 emoções simultâneas",
      en: "Detection of 22 Libras letters + 7 simultaneous emotions",
    },
  },
  {
    id: "imagaine",
    name: "ImagAIne",
    tagline: { pt: "Geração de imagens com IA", en: "AI-powered image generation" },
    description: {
      pt: "Plataforma completa para geração, gerenciamento e compartilhamento de imagens com IA usando o modelo FLUX.1. Pipeline assíncrono com Celery + Redis, galeria pública e sistema de planos.",
      en: "Full platform for generating, managing and sharing AI images using the FLUX.1 model. Async pipeline with Celery + Redis, public gallery, and subscription plan system.",
    },
    tech: ["Django", "Python", "Celery", "Redis", "PostgreSQL", "React", "TypeScript", "Docker", "JWT", "Hugging Face"],
    github: "https://github.com/ingridesouza/ImagAIne",
    color: "#8b5cf6",
    icon: "Palette",
    highlight: {
      pt: "Processamento assíncrono com quotas por plano + galeria com ranking de relevância",
      en: "Async processing with plan quotas + gallery with relevance ranking",
    },
  },
  {
    id: "nexa",
    name: "Nexa",
    tagline: { pt: "Finanças pessoais sem ansiedade", en: "Personal finance without anxiety" },
    description: {
      pt: "App mobile de finanças pessoais focado em bem-estar emocional. Elimina jargão financeiro e responde à pergunta central: 'Posso gastar isso agora?' de forma clara e humana.",
      en: "Personal finance mobile app focused on emotional well-being. Eliminates financial jargon and answers the central question: 'Can I spend this now?' clearly and humanely.",
    },
    tech: ["React Native", "Expo", "TypeScript", "Django", "Python", "PostgreSQL", "JWT", "React Query", "Docker"],
    github: "https://github.com/ingridesouza/nexa-app",
    color: "#10b981",
    icon: "Heart",
    highlight: {
      pt: "UX centrado em bem-estar + 'Modo Decisão' com resposta direta",
      en: "Well-being centered UX + 'Decision Mode' with direct answers",
    },
  },
  {
    id: "showroom",
    name: "Showroom",
    tagline: { pt: "SaaS e-commerce para o Brasil", en: "E-commerce SaaS for Brazil" },
    description: {
      pt: "Plataforma SaaS multi-tenant que transforma pequenos lojistas brasileiros em vitrines profissionais. Go com PostgreSQL RLS, Pix nativo, Mercado Pago e arquitetura hexagonal com 12 bounded contexts.",
      en: "Multi-tenant SaaS platform transforming small Brazilian sellers into professional storefronts. Go with PostgreSQL RLS, native Pix, Mercado Pago, and hexagonal architecture with 12 bounded contexts.",
    },
    tech: ["Go", "PostgreSQL", "Redis", "React", "TypeScript", "Docker", "Fly.io", "Mercado Pago", "OpenTelemetry", "sqlc"],
    github: "https://github.com/ingridesouza/showroom",
    color: "#f59e0b",
    icon: "Store",
    highlight: {
      pt: "Multi-tenancy com PostgreSQL RLS + arquitetura hexagonal em Go",
      en: "Multi-tenancy with PostgreSQL RLS + hexagonal architecture in Go",
    },
  },
];

export const skills = [
  {
    category: "backend",
    items: [
      { name: "Python", level: 95 },
      { name: "Django", level: 90 },
      { name: "Flask", level: 85 },
      { name: "FastAPI", level: 80 },
      { name: "Go", level: 70 },
      { name: "APIs REST", level: 95 },
    ],
  },
  {
    category: "ai",
    items: [
      { name: "BERT / RoBERTa", level: 80 },
      { name: "YOLOv5", level: 80 },
      { name: "LLMs", level: 85 },
      { name: "Embeddings / PLN", level: 85 },
      { name: "MediaPipe", level: 80 },
      { name: "Web Scraping", level: 90 },
    ],
  },
  {
    category: "devops",
    items: [
      { name: "Docker", level: 88 },
      { name: "Docker Compose", level: 88 },
      { name: "GitHub Actions", level: 80 },
      { name: "Celery + Redis", level: 85 },
      { name: "CI/CD", level: 75 },
      { name: "Git", level: 90 },
    ],
  },
  {
    category: "databases",
    items: [
      { name: "PostgreSQL", level: 88 },
      { name: "SQL", level: 85 },
      { name: "Redis", level: 82 },
      { name: "JWT Auth", level: 90 },
    ],
  },
  {
    category: "frontend",
    items: [
      { name: "React", level: 75 },
      { name: "TypeScript", level: 78 },
      { name: "React Native", level: 70 },
    ],
  },
  {
    category: "tools",
    items: [
      { name: "pytest / unittest", level: 85 },
      { name: "Scrum / Kanban", level: 90 },
      { name: "Jira", level: 85 },
      { name: "OpenProject", level: 80 },
    ],
  },
];

export const timeline = [
  {
    year: "2026",
    period: { pt: "Jan 2026 — Atual", en: "Jan 2026 — Present" },
    role: { pt: "Desenvolvedora Full Stack", en: "Full Stack Developer" },
    company: "ATHOM8",
    type: "work",
    photo: "/gallery/athom8-1.jpg",
    description: {
      pt: "Desenvolvimento e manutenção de APIs backend com Django e Python. Modelagem de bancos relacionais, autenticação JWT, containerização com Docker e processamento assíncrono com Redis e Celery.",
      en: "Development and maintenance of backend APIs with Django and Python. Relational database modeling, JWT authentication, Docker containerization, and async processing with Redis and Celery.",
    },
    tags: ["Django", "Python", "Redis", "Celery", "Docker", "JWT"],
  },
  {
    year: "2024",
    period: { pt: "Set 2024 — Jan 2026", en: "Sep 2024 — Jan 2026" },
    role: { pt: "Desenvolvedora de Software", en: "Software Developer" },
    company: "Leiaute Propaganda",
    type: "work",
    photo: "/gallery/leiaute-1.jpg",
    description: {
      pt: "APIs REST com Django e Flask, pipelines assíncronos, integração com APIs externas e desenvolvimento de soluções de IA com BERT, RoBERTa, ALBERT e YOLOv5 para análise de dados e visão computacional.",
      en: "REST APIs with Django and Flask, async pipelines, external API integrations, and AI solutions with BERT, RoBERTa, ALBERT, and YOLOv5 for data analysis and computer vision.",
    },
    tags: ["Django", "Flask", "BERT", "YOLOv5", "Celery", "PostgreSQL", "Docker"],
  },
  {
    year: "2024",
    period: { pt: "Mai 2024 — Set 2024", en: "May 2024 — Sep 2024" },
    role: { pt: "Monitora de Programação", en: "Programming Instructor" },
    company: "Infinity School",
    type: "work",
    photo: "/gallery/infinity-2.jpg",
    description: {
      pt: "Suporte a alunos em Python, JavaScript e lógica de programação. Aulas práticas, live coding e orientação em projetos.",
      en: "Supporting students in Python, JavaScript, and programming logic. Hands-on classes, live coding, and project mentoring.",
    },
    tags: ["Python", "JavaScript", "HTML/CSS", "Teaching"],
  },
  {
    year: "2023",
    period: { pt: "2023 — 2025", en: "2023 — 2025" },
    role: { pt: "Análise e Desenvolvimento de Sistemas", en: "Systems Analysis and Development" },
    company: "UniFavip Wyden",
    type: "education",
    photo: "/gallery/faculdade-biblioteca.jpg",
    description: {
      pt: "Formação técnica com ênfase em desenvolvimento de software, banco de dados, engenharia de requisitos e metodologias ágeis.",
      en: "Technical degree with emphasis on software development, databases, requirements engineering, and agile methodologies.",
    },
    tags: ["ADS", "Graduação"],
  },
  {
    year: "2023",
    period: { pt: "2023 — 2024", en: "2023 — 2024" },
    role: { pt: "Programação Full Stack", en: "Full Stack Programming" },
    company: "Infinity School",
    type: "education",
    photo: "/gallery/infinity-1.jpg",
    description: {
      pt: "Curso intensivo com certificação internacional em desenvolvimento web e mobile.",
      en: "Intensive course with international certification in web and mobile development.",
    },
    tags: ["Full Stack", "Certificação Internacional"],
  },
];

export const certifications = [
  {
    title: "Full Stack Developer",
    issuer: "Infinity School",
    type: "international",
    color: "#0f766e",
    icon: "Award",
    year: "2024",
    files: [
      { label: "Certificado Full Stack", url: "/certs/certificado-fullstack-infinity.pdf", type: "pdf" as const },
      { label: "Carta de Desenvolvedor", url: "/certs/carta-dev-infinity.pdf", type: "pdf" as const },
    ],
  },
  {
    title: "LLMs & Processamento de Linguagem Natural",
    issuer: "UFBA",
    type: "university",
    color: "#7c3aed",
    icon: "Brain",
    year: "2024",
    files: [
      { label: "Certificado UFBA — LLMs & PLN", url: "/certs/certificado-ufba-llms.pdf", type: "pdf" as const },
    ],
  },
  {
    title: "Automação com N8N",
    issuer: "DIO + Santander",
    type: "corporate",
    color: "#0369a1",
    icon: "Zap",
    year: "2024",
    files: [
      { label: "Certificado N8N — Santander 2025", url: "/certs/certificado-n8n-santander.jpg", type: "image" as const },
    ],
  },
];

export const galleryPhotos = [
  {
    src: "/gallery/athom8-1.jpg",
    caption: { pt: "ATHOM8 — Desenvolvedora Full Stack", en: "ATHOM8 — Full Stack Developer" },
    company: "ATHOM8",
    year: "2026",
  },
  {
    src: "/gallery/athom8-2.jpg",
    caption: { pt: "ATHOM8 — Equipe de desenvolvimento", en: "ATHOM8 — Development team" },
    company: "ATHOM8",
    year: "2026",
  },
  {
    src: "/gallery/infinity-1.jpg",
    caption: { pt: "Infinity School — Monitora de Programação", en: "Infinity School — Programming Instructor" },
    company: "Infinity School",
    year: "2024",
  },
  {
    src: "/gallery/infinity-2.jpg",
    caption: { pt: "Infinity School — Aulas práticas de programação", en: "Infinity School — Hands-on coding classes" },
    company: "Infinity School",
    year: "2024",
  },
  {
    src: "/gallery/infinity-3.jpg",
    caption: { pt: "Infinity School — Live coding com os alunos", en: "Infinity School — Live coding with students" },
    company: "Infinity School",
    year: "2024",
  },
  {
    src: "/gallery/infinity-4.jpg",
    caption: { pt: "Infinity School — Mentoria de projetos", en: "Infinity School — Project mentoring" },
    company: "Infinity School",
    year: "2024",
  },
  {
    src: "/gallery/infinity-5.jpg",
    caption: { pt: "Infinity School — Formatura", en: "Infinity School — Graduation" },
    company: "Infinity School",
    year: "2024",
  },
  {
    src: "/gallery/leiaute-1.jpg",
    caption: { pt: "Leiaute Propaganda — Desenvolvedora de Software", en: "Leiaute Propaganda — Software Developer" },
    company: "Leiaute Propaganda",
    year: "2024",
  },
  {
    src: "/gallery/leiaute-2.jpg",
    caption: { pt: "Leiaute Propaganda — APIs REST com Django", en: "Leiaute Propaganda — REST APIs with Django" },
    company: "Leiaute Propaganda",
    year: "2024",
  },
  {
    src: "/gallery/leiaute-3.jpg",
    caption: { pt: "Leiaute Propaganda — Soluções com IA aplicada", en: "Leiaute Propaganda — Applied AI solutions" },
    company: "Leiaute Propaganda",
    year: "2024",
  },
  {
    src: "/gallery/leiaute-4.jpg",
    caption: { pt: "Leiaute Propaganda — Integração com APIs externas", en: "Leiaute Propaganda — External API integrations" },
    company: "Leiaute Propaganda",
    year: "2025",
  },
  {
    src: "/gallery/leiaute-5.jpg",
    caption: { pt: "Leiaute Propaganda — Pipelines assíncronos", en: "Leiaute Propaganda — Async pipelines" },
    company: "Leiaute Propaganda",
    year: "2025",
  },
  {
    src: "/gallery/leiaute-6.jpg",
    caption: { pt: "Leiaute Propaganda — Projetos em produção", en: "Leiaute Propaganda — Projects in production" },
    company: "Leiaute Propaganda",
    year: "2025",
  },
];

export const linkedinPosts = [
  {
    title: {
      pt: "IA, Machine Learning e Deep Learning: Qual é a diferença?",
      en: "AI, Machine Learning and Deep Learning: What's the difference?",
    },
    excerpt: {
      pt: "Um mergulho técnico nas diferenças entre Inteligência Artificial, Machine Learning e Deep Learning — com exemplos práticos e aplicações reais.",
      en: "A technical dive into the differences between Artificial Intelligence, Machine Learning, and Deep Learning — with practical examples and real applications.",
    },
    url: "https://www.linkedin.com/posts/ingride-souza-a21a4518a_inteligenciaartificial-machinelearning-deeplearning-activity-7361138347127271424-1VG0",
    tags: ["#IA", "#MachineLearning", "#DeepLearning"],
    date: "2025",
  },
];

export const terminalCommands: Record<string, { pt: string; en: string }> = {
  help: {
    pt: `Comandos disponíveis:
  whoami      → Sobre Ingride
  skills      → Stack técnica
  projects    → Projetos desenvolvidos
  contact     → Formas de contato
  experience  → Experiência profissional
  clear       → Limpar terminal

  Easter eggs: neofetch · git log · coffee · rm -rf /`,
    en: `Available commands:
  whoami      → About Ingride
  skills      → Tech stack
  projects    → Built projects
  contact     → Contact information
  experience  → Professional experience
  clear       → Clear terminal

  Easter eggs: neofetch · git log · coffee · rm -rf /`,
  },
  whoami: {
    pt: `Ingride Souza
─────────────────────────────────────
Backend Developer & AI Engineer
Salvador, Bahia, Brasil

"Transformo problemas complexos em APIs elegantes,
 pipelines de dados e soluções com IA que funcionam
 em produção — não só no Jupyter Notebook."

Lendo: Arquitetura Limpa + Código Limpo`,
    en: `Ingride Souza
─────────────────────────────────────
Backend Developer & AI Engineer
Salvador, Bahia, Brazil

"I turn complex problems into elegant APIs,
 data pipelines, and AI solutions that work
 in production — not just in Jupyter Notebook."

Currently reading: Clean Architecture + Clean Code`,
  },
  skills: {
    pt: `Stack Técnica
─────────────────────────────────────
Backend     → Python · Django · Flask · FastAPI · Go
IA / ML     → BERT · YOLOv5 · LLMs · Embeddings · PLN
DevOps      → Docker · Celery · Redis · GitHub Actions
Databases   → PostgreSQL · SQL · JWT
Frontend    → React · TypeScript · React Native
Extras      → Web Scraping · pytest · Scrum · Jira`,
    en: `Tech Stack
─────────────────────────────────────
Backend     → Python · Django · Flask · FastAPI · Go
AI / ML     → BERT · YOLOv5 · LLMs · Embeddings · NLP
DevOps      → Docker · Celery · Redis · GitHub Actions
Databases   → PostgreSQL · SQL · JWT
Frontend    → React · TypeScript · React Native
Extras      → Web Scraping · pytest · Scrum · Jira`,
  },
  projects: {
    pt: `Projetos
─────────────────────────────────────
VisionPro   → Visão computacional: emoções + Libras (FastAPI + React)
ImagAIne    → Geração de imagens com FLUX.1 (Django + Celery)
Nexa        → App de finanças pessoais (React Native + Django)
Showroom    → SaaS e-commerce multi-tenant (Go + PostgreSQL RLS)

+30 repositórios → github.com/ingridesouza`,
    en: `Projects
─────────────────────────────────────
VisionPro   → Computer vision: emotions + Sign Language (FastAPI + React)
ImagAIne    → Image generation with FLUX.1 (Django + Celery)
Nexa        → Personal finance app (React Native + Django)
Showroom    → Multi-tenant e-commerce SaaS (Go + PostgreSQL RLS)

+30 repositories → github.com/ingridesouza`,
  },
  contact: {
    pt: `Contato
─────────────────────────────────────
Email    → ingridesouza040@gmail.com
LinkedIn → linkedin.com/in/ingride-souza
GitHub   → github.com/ingridesouza
Phone    → +55 71 98117-0909`,
    en: `Contact
─────────────────────────────────────
Email    → ingridesouza040@gmail.com
LinkedIn → linkedin.com/in/ingride-souza
GitHub   → github.com/ingridesouza
Phone    → +55 71 98117-0909`,
  },
  experience: {
    pt: `Experiência
─────────────────────────────────────
2026–Atual  ATHOM8 · Full Stack Developer
2024–2026   Leiaute Propaganda · Software Developer
2024        Infinity School · Monitora de Programação

Formação:
2023–2025   UniFavip Wyden · Análise e Dev. de Sistemas
2023–2024   Infinity School · Full Stack (Cert. Internacional)`,
    en: `Experience
─────────────────────────────────────
2026–Now    ATHOM8 · Full Stack Developer
2024–2026   Leiaute Propaganda · Software Developer
2024        Infinity School · Programming Instructor

Education:
2023–2025   UniFavip Wyden · Systems Analysis & Dev.
2023–2024   Infinity School · Full Stack (Int'l Certification)`,
  },
  "sudo hire-me": {
    pt: `[sudo] password: ••••••••••

Verificando permissões...
✓ Python skills: EXCELENTE
✓ Django/Flask APIs: APROVADO
✓ IA aplicada: IMPRESSIONANTE
✓ Docker + Celery: SÓLIDO
✓ Go + PostgreSQL RLS: SURPRESA POSITIVA
✓ Atitude: TOP TIER

Permissão concedida! Ingride foi contratada.

→ ingridesouza040@gmail.com`,
    en: `[sudo] password: ••••••••••

Checking permissions...
✓ Python skills: EXCELLENT
✓ Django/Flask APIs: APPROVED
✓ Applied AI: IMPRESSIVE
✓ Docker + Celery: SOLID
✓ Go + PostgreSQL RLS: POSITIVE SURPRISE
✓ Attitude: TOP TIER

Permission granted! Ingride has been hired.

→ ingridesouza040@gmail.com`,
  },

  neofetch: {
    pt: `ingride@portfolio
─────────────────────────────────────
OS:       MacOS (sonha) / Ubuntu 22.04
Host:     Ingride Souza
Shell:    zsh 5.9 + oh-my-zsh
Editor:   VS Code (com tema escuro, claro)
Coffee:   unlimited ☕
Uptime:   2+ anos em produção
Memory:   sempre cheia de ideias

Languages: Python · Go · TypeScript
Currently: ATHOM8 · Full Stack Developer`,
    en: `ingride@portfolio
─────────────────────────────────────
OS:       MacOS (wishful) / Ubuntu 22.04
Host:     Ingride Souza
Shell:    zsh 5.9 + oh-my-zsh
Editor:   VS Code (dark theme, obviously)
Coffee:   unlimited ☕
Uptime:   2+ years in production
Memory:   always full of ideas

Languages: Python · Go · TypeScript
Currently: ATHOM8 · Full Stack Developer`,
  },

  "git log": {
    pt: `commit 0f766e4 (HEAD -> main, origin/main)
Author: Ingride Souza <ingridesouza040@gmail.com>
Date:   2026

    feat: built career from scratch, shipped to production

commit b45309a
Author: Ingride Souza
Date:   2024

    feat: joined Leiaute Propaganda, shipped AI with BERT + YOLOv5

commit 7c3aed1
Author: Ingride Souza
Date:   2024

    feat: taught Python at Infinity School, compiled patience++

commit 1c1917f
Author: Ingride Souza
Date:   2023

    init: started ADS at UniFavip, wrote first "Hello, World"`,
    en: `commit 0f766e4 (HEAD -> main, origin/main)
Author: Ingride Souza <ingridesouza040@gmail.com>
Date:   2026

    feat: built career from scratch, shipped to production

commit b45309a
Author: Ingride Souza
Date:   2024

    feat: joined Leiaute Propaganda, shipped AI with BERT + YOLOv5

commit 7c3aed1
Author: Ingride Souza
Date:   2024

    feat: taught Python at Infinity School, compiled patience++

commit 1c1917f
Author: Ingride Souza
Date:   2023

    init: started ADS at UniFavip, wrote first "Hello, World"`,
  },

  coffee: {
    pt: `Preparando café...
█████████████████████ 100%

☕ Pronto. Nível de produtividade: máximo.
   (Este portfólio foi construído com 47 xícaras)`,
    en: `Brewing coffee...
█████████████████████ 100%

☕ Done. Productivity level: maximum.
   (This portfolio was built with 47 cups)`,
  },

  "rm -rf /": {
    pt: `rm: não é possível remover '/': Operação não permitida

Dica: Não apague a desenvolvedora.
      Contrate-a em vez disso.
      → ingridesouza040@gmail.com`,
    en: `rm: cannot remove '/': Operation not permitted

Tip: Don't delete the developer.
     Hire her instead.
     → ingridesouza040@gmail.com`,
  },

  "python -c \"import antigravity\"": {
    pt: `Abrindo antigravidade...
(easter egg do Python: tente no seu terminal real!)

"There should be one-- and preferably only one
 --obvious way to do it." — Tim Peters

Ingride concorda. E usa pytest pra garantir.`,
    en: `Opening antigravity...
(Python easter egg: try it in your real terminal!)

"There should be one-- and preferably only one
 --obvious way to do it." — Tim Peters

Ingride agrees. And uses pytest to make sure.`,
  },
};
