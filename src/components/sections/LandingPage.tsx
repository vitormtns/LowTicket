import { Clock3, FileText, MousePointerClick, Users } from "lucide-react";
import Image from "next/image";
import { BenefitCard } from "@/components/cards/BenefitCard";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { GeneratorPreview } from "@/components/sections/GeneratorPreview";

const steps = [
  "Clique para gerar",
  "Receba ideias prontas",
  "Poste e atraia clientes",
];

const benefits = [
  {
    icon: Clock3,
    title: "Economiza tempo",
    description: "Pare de travar pensando no post do dia. Gere ideias em segundos.",
  },
  {
    icon: FileText,
    title: "Conteúdo pronto",
    description: "Gancho, roteiro, legenda e CTA organizados em um só card.",
  },
  {
    icon: MousePointerClick,
    title: "Fácil de usar",
    description: "Um botão, uma lista de ideias e texto pronto para copiar.",
  },
  {
    icon: Users,
    title: "Foco em clientes",
    description: "Conteúdos pensados para atrair mais agendamentos no negócio local.",
  },
];

export function LandingPage() {
  return (
    <main className="min-h-screen bg-white pb-24 text-black sm:pb-0">
      <Section className="pt-8 sm:pt-10">
        <header className="mb-14 flex items-center justify-between gap-4">
          <div className="text-base font-bold tracking-tight">Content Blueprint</div>
          <Button href="https://pay.kiwify.com.br/mgUnDLf" variant="secondary" className="hidden sm:inline-flex">
            Ver gerador
          </Button>
        </header>

        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-[#E5E5E5] px-3 py-1 text-sm font-semibold text-[#007AFF]">
              Para barbearias que precisam postar melhor
            </p>
            <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-tight text-black sm:text-6xl lg:text-7xl">
              Pare de perder clientes por não saber o que postar
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4A4A4A] sm:text-xl">
              Receba ideias prontas de conteúdo para sua barbearia em segundos.
              Menos tela em branco, mais clientes chamando no direct.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="https://pay.kiwify.com.br/mgUnDLf" className="w-full sm:w-auto">
                Gerar minhas ideias agora
              </Button>
              <Button href="#demo" variant="secondary" className="w-full sm:w-auto">
                Ver demonstração
              </Button>
            </div>
          </div>

          <div className="rounded-lg border border-[#E5E5E5] bg-[#FAFAFA] p-3">
            <Image
              src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=900&q=80"
              alt="Cliente em uma barbearia moderna"
              width={900}
              height={900}
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="h-80 w-full rounded-lg object-cover sm:h-[440px]"
            />
          </div>
        </div>
      </Section>

      <Section id="demo" className="border-y border-[#E5E5E5] bg-[#FAFAFA]">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#007AFF]">
            Demonstração
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
            A interface real do gerador, pronta para validar o produto
          </h2>
        </div>
        <GeneratorPreview />
      </Section>

      <Section>
        <div className="mb-8 max-w-2xl">
          <h2 className="text-3xl font-black tracking-tight sm:text-5xl">Como funciona</h2>
          <p className="mt-4 text-lg leading-8 text-[#666666]">
            Um fluxo simples para transformar ideia em post sem depender de briefing, planilha ou agência.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step} className="rounded-lg border border-[#E5E5E5] p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#007AFF] text-sm font-bold text-white">
                {index + 1}
              </span>
              <h3 className="mt-5 text-xl font-bold">{step}</h3>
            </article>
          ))}
        </div>
      </Section>

      <Section className="border-y border-[#E5E5E5] bg-[#FAFAFA]">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-3xl font-black tracking-tight sm:text-5xl">Benefícios diretos</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.title} {...benefit} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 rounded-lg border border-[#E5E5E5] p-6 sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#007AFF]">
              Oferta MVP
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
              Comece por R$19
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-[#666666]">
              Acesse o gerador, copie ideias prontas e valide uma rotina de conteúdo mais leve para sua barbearia.
            </p>
          </div>
          <div className="lg:text-right">
            <Button href="https://pay.kiwify.com.br/mgUnDLf" className="w-full lg:w-auto">
              Gerar minhas ideias agora
            </Button>
            <p className="mt-3 text-sm text-[#666666]">Acesso por link. Sem instalação.</p>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-3xl font-black tracking-tight sm:text-5xl">Perguntas rápidas</h2>
          <FAQAccordion />
        </div>
      </Section>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#E5E5E5] bg-white/95 p-3 backdrop-blur sm:hidden">
        <Button href="https://pay.kiwify.com.br/mgUnDLf" className="w-full">
          Gerar minhas ideias agora
        </Button>
      </div>
    </main>
  );
}
