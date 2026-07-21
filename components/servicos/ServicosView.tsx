"use client";

import { useLang } from "@/context/LanguageContext";
import { servicosTranslations } from "@/lib/servicos-translations";
import { whatsappNumber, buildWhatsappLink } from "@/lib/servicos-data";
import ServicosNavbar from "@/components/servicos/ServicosNavbar";
import HeroServicos from "@/components/servicos/HeroServicos";
import IdentityStrip from "@/components/servicos/IdentityStrip";
import StatsStrip from "@/components/servicos/StatsStrip";
import ServicesPillars from "@/components/servicos/ServicesPillars";
import TemplateShowcase from "@/components/servicos/TemplateShowcase";
import ProcessSteps from "@/components/servicos/ProcessSteps";
import WhyMe from "@/components/servicos/WhyMe";
import FaqServicos from "@/components/servicos/FaqServicos";
import ContactServicos from "@/components/servicos/ContactServicos";
import ServicosFooter from "@/components/servicos/ServicosFooter";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function ServicosView() {
  const { lang } = useLang();
  const t = servicosTranslations[lang].contact;

  return (
    <>
      <ServicosNavbar />
      <main>
        <HeroServicos />
        <IdentityStrip />
        <StatsStrip />
        <ServicesPillars />
        <TemplateShowcase />
        <ProcessSteps />
        <WhyMe />
        <FaqServicos />
        <ContactServicos />
      </main>
      <ServicosFooter />
      <WhatsAppButton
        href={buildWhatsappLink("Olá, Ingride! Vim pela sua página de serviços.")}
        label={t.whatsappFloatLabel}
      />
    </>
  );
}
