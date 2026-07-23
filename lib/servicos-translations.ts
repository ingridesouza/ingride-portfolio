import type { Lang } from "@/lib/translations";

export const servicosTranslations: Record<Lang, any> = {
  pt: {
    meta: {
      title: "Landing Pages, Sistemas e Automações sob Medida | Ingride Souza",
      description:
        "Desenvolvedora backend e de IA em Salvador, Brasil. Crio landing pages que convertem, sistemas sob medida e automações de fluxo para o seu negócio. Orçamento rápido pelo WhatsApp.",
    },
    nav: {
      services: "Serviços",
      templates: "Templates",
      faq: "FAQ",
      contact: "Contato",
      backToPortfolio: "Portfólio",
    },
    hero: {
      eyebrow: "Salvador, Brasil · Freelancer",
      title: ["LANDING PAGES,", "SISTEMAS E", "AUTOMAÇÕES."],
      titleAccentIndex: 2,
      description:
        "Sou Ingride Souza, desenvolvedora backend e de IA. Construo landing pages que convertem, sistemas sob medida e automações que tiram trabalho manual do seu dia a dia — com código de produção, não gambiarra.",
      ctaWhatsapp: "Falar no WhatsApp",
      ctaTemplates: "Ver templates",
      whatsappMessage: "Olá, Ingride! Vim pela sua página de serviços e quero conversar sobre um projeto.",
      ctaReassurance: "Sem compromisso — respondo rápido no WhatsApp.",
      trustBar: ["APIs em produção", "IA aplicada", "Prazo combinado", "Suporte incluso"],
    },
    identity: {
      eyebrow: "Quem está por trás",
      name: "Ingride Souza",
      role: "Desenvolvedora Backend & AI Engineer",
      bio: "Trabalho também fora do freela como desenvolvedora backend, construindo APIs e sistemas em produção. Meu código e minha trajetória são públicos — confira antes de fechar negócio.",
      ctaGithub: "GitHub",
      ctaLinkedin: "LinkedIn",
      ctaPortfolio: "Ver portfólio completo",
    },
    pillars: {
      eyebrow: "Serviços & Investimento",
      title: "Serviços & Preços",
      subtitle: "Três formas de tirar seu projeto do papel — com valor transparente desde já.",
      highlightBadge: "Mais procurado",
      note: "Valores de sistemas e automações variam conforme escopo e são fechados em proposta, sem compromisso.",
      items: {
        landing: {
          title: "Landing Pages",
          description: "Página única, focada em converter visitante em cliente.",
          features: [
            "Design responsivo mobile-first",
            "Otimização para Google (SEO técnico)",
            "Formulário de contato + integração WhatsApp",
            "Até 2 rodadas de ajuste inclusas",
          ],
          priceLabel: "a partir de",
          cta: "Quero uma landing page",
          whatsappMessage: "Olá, Ingride! Quero uma landing page para o meu negócio.",
        },
        system: {
          title: "Sistemas Sob Medida",
          description: "Aplicações web feitas sob medida para o seu processo — sem funcionalidade genérica.",
          features: [
            "Levantamento de requisitos",
            "Backend em Python/Django",
            "Painel administrativo",
            "Documentação da API",
          ],
          priceLabel: "Sob consulta",
          cta: "Quero um orçamento",
          whatsappMessage: "Olá, Ingride! Preciso de um sistema sob medida para o meu negócio.",
        },
        automation: {
          title: "Automações de Fluxo",
          description: "Conecto as ferramentas que você já usa e elimino tarefas repetitivas.",
          features: [
            "Mapeamento do fluxo atual",
            "Automação com n8n, Python ou APIs nativas",
            "Notificações automáticas (WhatsApp/e-mail)",
            "Ajustes durante o primeiro mês",
          ],
          priceLabel: "Sob consulta",
          cta: "Quero automatizar",
          whatsappMessage: "Olá, Ingride! Quero automatizar um processo do meu negócio.",
        },
      },
    },
    templates: {
      eyebrow: "Vitrine",
      title: "Templates",
      subtitle: "Modelos prontos pra usar como inspiração ou ponto de partida — mais rápido e mais barato que começar do zero.",
      comingSoonBadge: "Em breve",
      ctaLive: "Ver ao vivo",
      ctaWant: "Quero um assim",
      moreComingSoonTitle: "Mais nichos em produção",
      moreComingSoonDescription: "Novos templates entrando na vitrine em breve, um por nicho.",
      items: {
        "advogado-criminal": {
          name: "Advogado Criminalista",
          nicheLabel: "Direito · Serviços Locais",
          description:
            "Landing page completa para advocacia: hero com CTA de consulta, banner de credibilidade, 6 áreas de atuação, seção sobre, processo em 3 passos, depoimentos, FAQ e formulário de contato.",
          whatsappMessage: "Olá! Vi o template de Advogado Criminalista e quero algo parecido para o meu negócio.",
        },
        infoproduct: {
          name: "Infoprodutos",
          nicheLabel: "Cursos & Mentorias",
          description: "Página de vendas para cursos, ebooks e mentorias, com foco em conversão.",
        },
        clinic: {
          name: "Clínicas & Consultórios",
          nicheLabel: "Saúde & Bem-estar",
          description:
            "Landing page completa para profissionais da saúde: hero com CTA de agendamento, selo de credibilidade (CRM), especialidades, seção sobre, depoimentos de pacientes e FAQ.",
          whatsappMessage: "Olá! Vi o template de Clínicas & Consultórios e quero algo parecido para o meu negócio.",
        },
        event: {
          name: "Eventos",
          nicheLabel: "Lançamentos & Inscrições",
          description: "Inscrição e contagem regressiva para lançamentos e eventos.",
        },
        personal: {
          name: "Portfólio Pessoal",
          nicheLabel: "Profissionais & Criadores",
          description: "Para profissionais liberais e criadores mostrarem seu trabalho.",
        },
      },
    },
    process: {
      eyebrow: "Como funciona",
      title: "Do briefing à entrega",
      subtitle: "Um processo simples, sem burocracia, com prazo e escopo combinados antes de começar.",
      steps: [
        {
          title: "Briefing",
          description: "Conversamos sobre seu negócio, objetivo e prazo. Direto no WhatsApp, sem burocracia.",
        },
        {
          title: "Proposta & Prazo",
          description: "Você recebe escopo, valor e prazo fechados antes de qualquer pagamento.",
        },
        {
          title: "Desenvolvimento",
          description: "Construo com atualizações periódicas, para você acompanhar o progresso.",
        },
        {
          title: "Entrega & Suporte",
          description: "Publicação, orientação rápida de uso e suporte incluso após a entrega.",
        },
      ],
    },
    whyMe: {
      eyebrow: "Diferencial",
      title: "Por que trabalhar comigo",
      subtitle: "Não é só uma página bonita. É um sistema que funciona de verdade.",
      items: [
        {
          title: "Backend de verdade",
          description: "Construo a lógica por trás: banco de dados, API, integrações. O site funciona de verdade.",
        },
        {
          title: "Comunicação direta",
          description: "Sem intermediário. Você fala comigo do orçamento à entrega.",
        },
      ],
    },
    faq: {
      eyebrow: "Dúvidas",
      title: "Perguntas frequentes",
      items: {
        timeline: {
          question: "Qual o prazo médio de entrega?",
          answer:
            "Landing pages ficam prontas em até uma semana. Sistemas e automações dependem do escopo — o prazo fica combinado na proposta, antes de começar.",
        },
        revisions: {
          question: "Quantas revisões estão inclusas?",
          answer:
            "Toda landing page inclui até 2 rodadas de ajustes após a primeira entrega. Para sistemas e automações, os ajustes ficam definidos junto com o escopo.",
        },
        hosting: {
          question: "A hospedagem está inclusa?",
          answer:
            "Ajudo a configurar hospedagem (Vercel, Netlify ou VPS, dependendo do projeto). O custo do serviço de hospedagem em si, quando houver, é à parte.",
        },
        maintenance: {
          question: "Preciso pagar manutenção depois?",
          answer:
            "Não é obrigatório. Ofereço planos de manutenção e suporte contínuo para quem quiser atualizações e monitoramento depois da entrega.",
        },
        payment: {
          question: "Como funciona o pagamento?",
          answer:
            "Normalmente 50% no início e 50% na entrega. Para projetos maiores, podemos combinar parcelas por etapa.",
        },
        confidentiality: {
          question: "Meu projeto fica em sigilo?",
          answer: "Sim. Posso assinar um NDA antes de começarmos, se for necessário para o seu negócio.",
        },
      },
    },
    contact: {
      title: "Vamos tirar sua ideia do papel",
      subtitle: "Me conta o que você precisa — eu respondo rápido pelo WhatsApp.",
      name: "Nome",
      service: "Tipo de serviço",
      serviceOptions: {
        landing: "Landing Page",
        system: "Sistema Sob Medida",
        automation: "Automação de Fluxo",
        unsure: "Ainda não sei",
      },
      message: "Conte um pouco sobre seu projeto",
      cta: "Enviar no WhatsApp",
      whatsappFloatLabel: "Falar no WhatsApp",
    },
    footer: {
      tagline: "Landing Pages · Sistemas Sob Medida · Automações",
      email: "E-mail",
      whatsapp: "WhatsApp",
    },
  },
  en: {
    meta: {
      title: "Custom Landing Pages, Systems & Automations | Ingride Souza",
      description:
        "Backend & AI developer based in Salvador, Brazil. I build landing pages that convert, custom systems and workflow automations for your business. Fast quotes via WhatsApp.",
    },
    nav: {
      services: "Services",
      templates: "Templates",
      faq: "FAQ",
      contact: "Contact",
      backToPortfolio: "Portfolio",
    },
    hero: {
      eyebrow: "Salvador, Brazil · Freelancer",
      title: ["LANDING PAGES,", "SYSTEMS &", "AUTOMATIONS."],
      titleAccentIndex: 2,
      description:
        "I'm Ingride Souza, a backend and AI developer. I build landing pages that convert, custom systems, and automations that remove manual work from your day-to-day — with production-grade code, not a quick hack.",
      ctaWhatsapp: "Chat on WhatsApp",
      ctaTemplates: "View templates",
      whatsappMessage: "Hi Ingride! I found your services page and I'd like to talk about a project.",
      ctaReassurance: "No commitment — I reply fast on WhatsApp.",
      trustBar: ["APIs in production", "Applied AI", "Agreed deadlines", "Support included"],
    },
    identity: {
      eyebrow: "Who's behind this",
      name: "Ingride Souza",
      role: "Backend Developer & AI Engineer",
      bio: "I also work outside of freelancing as a backend developer, building APIs and systems in production. My code and background are public — check it out before you commit to anything.",
      ctaGithub: "GitHub",
      ctaLinkedin: "LinkedIn",
      ctaPortfolio: "See full portfolio",
    },
    pillars: {
      eyebrow: "Services & Investment",
      title: "Services & Pricing",
      subtitle: "Three ways to get your project off the ground — with transparent pricing up front.",
      highlightBadge: "Most requested",
      note: "Prices for systems and automations vary by scope and are set in a proposal, with no commitment.",
      items: {
        landing: {
          title: "Landing Pages",
          description: "A single page focused on turning visitors into customers.",
          features: [
            "Mobile-first responsive design",
            "Technical SEO optimization",
            "Contact form + WhatsApp integration",
            "Up to 2 rounds of revisions included",
          ],
          priceLabel: "starting at",
          cta: "I want a landing page",
          whatsappMessage: "Hi Ingride! I'd like a landing page for my business.",
        },
        system: {
          title: "Custom Systems",
          description: "Web applications built around your process — no generic features.",
          features: [
            "Requirements gathering",
            "Python/Django backend",
            "Admin dashboard",
            "API documentation",
          ],
          priceLabel: "Custom quote",
          cta: "Get a quote",
          whatsappMessage: "Hi Ingride! I need a custom system for my business.",
        },
        automation: {
          title: "Workflow Automations",
          description: "I connect the tools you already use and remove repetitive tasks.",
          features: [
            "Current workflow mapping",
            "Automation with n8n, Python or native APIs",
            "Automatic notifications (WhatsApp/email)",
            "Adjustments during the first month",
          ],
          priceLabel: "Custom quote",
          cta: "I want to automate",
          whatsappMessage: "Hi Ingride! I'd like to automate a process in my business.",
        },
      },
    },
    templates: {
      eyebrow: "Showcase",
      title: "Templates",
      subtitle: "Ready-made models to use as inspiration or a starting point — faster and cheaper than starting from scratch.",
      comingSoonBadge: "Coming soon",
      ctaLive: "View live",
      ctaWant: "I want one like this",
      items: {
        "advogado-criminal": {
          name: "Criminal Defense Attorney",
          nicheLabel: "Law · Local Services",
          description:
            "Full landing page for a law practice: hero with consultation CTA, credibility banner, 6 practice areas, about section, 3-step process, testimonials, FAQ and contact form.",
          whatsappMessage: "Hi! I saw the Criminal Defense Attorney template and I'd like something similar for my business.",
        },
        infoproduct: {
          name: "Digital Products",
          nicheLabel: "Courses & Mentorships",
          description: "Sales page for courses, ebooks and mentorships, focused on conversion.",
        },
        clinic: {
          name: "Clinics & Practices",
          nicheLabel: "Health & Wellness",
          description:
            "Full landing page for healthcare professionals: hero with booking CTA, credibility badge (medical license), specialties, about section, patient testimonials and FAQ.",
          whatsappMessage: "Hi! I saw the Clinics & Practices template and I'd like something similar for my business.",
        },
        event: {
          name: "Events",
          nicheLabel: "Launches & Signups",
          description: "Signup and countdown pages for launches and events.",
        },
        personal: {
          name: "Personal Portfolio",
          nicheLabel: "Professionals & Creators",
          description: "For freelancers and creators to showcase their work.",
        },
      },
    },
    process: {
      eyebrow: "How it works",
      title: "From briefing to delivery",
      subtitle: "A simple process, no red tape, with scope and timeline agreed before we start.",
      steps: [
        {
          title: "Briefing",
          description: "We talk about your business, goal and deadline. Straight on WhatsApp, no red tape.",
        },
        {
          title: "Proposal & Timeline",
          description: "You get scope, price and deadline locked in before any payment.",
        },
        {
          title: "Development",
          description: "I build with periodic updates, so you can follow the progress.",
        },
        {
          title: "Delivery & Support",
          description: "Publishing, a quick usage walkthrough, and support included after delivery.",
        },
      ],
    },
    whyMe: {
      eyebrow: "Difference",
      title: "Why work with me",
      subtitle: "It's not just a pretty page. It's a system that actually works.",
      items: [
        {
          title: "Real backend",
          description: "I build the logic behind it: database, API, integrations. The site actually works.",
        },
        {
          title: "Direct communication",
          description: "No middleman. You talk to me from quote to delivery.",
        },
      ],
    },
    faq: {
      eyebrow: "Questions",
      title: "Frequently asked questions",
      items: {
        timeline: {
          question: "What's the average delivery time?",
          answer:
            "Landing pages are ready within one week. Systems and automations depend on scope — the timeline is agreed in the proposal, before we start.",
        },
        revisions: {
          question: "How many revisions are included?",
          answer:
            "Every landing page includes up to 2 rounds of adjustments after the first delivery. For systems and automations, adjustments are defined together with the scope.",
        },
        hosting: {
          question: "Is hosting included?",
          answer:
            "I help set up hosting (Vercel, Netlify or a VPS, depending on the project). The hosting service cost itself, when applicable, is separate.",
        },
        maintenance: {
          question: "Do I need to pay for maintenance afterwards?",
          answer:
            "It's not mandatory. I offer maintenance and ongoing support plans for those who want updates and monitoring after delivery.",
        },
        payment: {
          question: "How does payment work?",
          answer: "Usually 50% upfront and 50% on delivery. For larger projects, we can split payments by milestone.",
        },
        confidentiality: {
          question: "Is my project kept confidential?",
          answer: "Yes. I can sign an NDA before we start, if that's needed for your business.",
        },
      },
    },
    contact: {
      title: "Let's get your idea off the ground",
      subtitle: "Tell me what you need — I reply fast on WhatsApp.",
      name: "Name",
      service: "Service type",
      serviceOptions: {
        landing: "Landing Page",
        system: "Custom System",
        automation: "Workflow Automation",
        unsure: "Not sure yet",
      },
      message: "Tell me a bit about your project",
      cta: "Send on WhatsApp",
      whatsappFloatLabel: "Chat on WhatsApp",
    },
    footer: {
      tagline: "Landing Pages · Custom Systems · Automations",
      email: "Email",
      whatsapp: "WhatsApp",
    },
  },
};
