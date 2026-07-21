import type { Metadata } from "next";
import ServicosView from "@/components/servicos/ServicosView";

export const metadata: Metadata = {
  title: "Landing Pages, Sistemas e Automações sob Medida | Ingride Souza",
  description:
    "Desenvolvedora backend e de IA em Salvador, Brasil. Crio landing pages que convertem, sistemas sob medida e automações de fluxo para o seu negócio. Orçamento rápido pelo WhatsApp.",
  keywords: [
    "landing page",
    "criação de landing page",
    "sistema sob medida",
    "automação de processos",
    "automação n8n",
    "desenvolvedora freelancer",
    "freelancer Salvador",
    "desenvolvimento web Salvador",
  ],
  openGraph: {
    title: "Landing Pages, Sistemas e Automações sob Medida | Ingride Souza",
    description: "Landing pages que convertem, sistemas sob medida e automações de fluxo. Orçamento pelo WhatsApp.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Landing Pages, Sistemas e Automações sob Medida | Ingride Souza",
    description: "Landing pages que convertem, sistemas sob medida e automações de fluxo. Orçamento pelo WhatsApp.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Web development, custom software and workflow automation",
  provider: {
    "@type": "Person",
    name: "Ingride Souza",
  },
  areaServed: "BR",
  description:
    "Landing pages, sistemas sob medida e automações de fluxo desenvolvidos sob demanda para pequenos negócios e profissionais.",
};

export default function ServicosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicosView />
    </>
  );
}
