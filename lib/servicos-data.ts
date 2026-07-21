import { Layout, Cog, Workflow, MessageCircle, FileText, Code2, Rocket } from "lucide-react";

export const whatsappNumber = "5571981170909";

export function buildWhatsappLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export type PillarKey = "landing" | "system" | "automation";

export const pillars: { key: PillarKey; icon: typeof Layout; priceType: "from" | "quote"; price?: string }[] = [
  { key: "landing", icon: Layout, priceType: "from", price: "R$ 500" },
  { key: "system", icon: Cog, priceType: "quote" },
  { key: "automation", icon: Workflow, priceType: "quote" },
];

export type TemplateStatus = "available" | "soon";

export const templates: {
  id: string;
  niche: string;
  status: TemplateStatus;
  liveUrl?: string;
  image?: string;
}[] = [
  {
    id: "advogado-criminal",
    niche: "law",
    status: "available",
    liveUrl: "https://advogado-criminal-template.netlify.app/",
    image: "/templates/advogado-criminal.png",
  },
  { id: "infoproduct", niche: "infoproduct", status: "soon" },
  { id: "clinic", niche: "clinic", status: "soon" },
  { id: "event", niche: "event", status: "soon" },
  { id: "personal", niche: "personal", status: "soon" },
];

export const processIcons = [MessageCircle, FileText, Code2, Rocket];

export const processStepKeys = ["briefing", "proposal", "development", "delivery"] as const;

export const whyMeIcons = [Code2, MessageCircle];

export const faqKeys = [
  "timeline",
  "revisions",
  "hosting",
  "maintenance",
  "payment",
  "confidentiality",
] as const;

export const serviceOptions = ["landing", "system", "automation", "unsure"] as const;
