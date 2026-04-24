"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { BentoFeatures } from "@/components/sections/BentoFeatures";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { PricingOffer } from "@/components/sections/PricingOffer";
import { TypingDemoBox } from "@/components/sections/TypingDemoBox";
import { staggerContainer, staggerItem } from "@/components/sections/landingMotion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import type { GenerateContentResult, GeneratedContentItem } from "@/lib/types";

const painPoints = [
  "Fica sem ideia do que postar",
  "Posta qualquer coisa só para não ficar parado",
  "Não sabe o que realmente atrai cliente",
  "Perde tempo pensando e não vê resultado",
];

const analysisSteps = [
  "Analisando o seu tipo de negócio...",
  "Identificando o perfil de conteúdo ideal...",
  "Selecionando os melhores ângulos para atrair clientes...",
];

type PreviewState = "idle" | "analyzing" | "ready" | "error";

function wait(milliseconds: number) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, milliseconds);
  });
}

function PreviewIdeaCard({
  idea,
  index,
  featured = false,
}: {
  idea: GeneratedContentItem;
  index: number;
  featured?: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`rounded-lg border border-zinc-800 bg-zinc-950/60 p-5 text-left shadow-2xl shadow-black/20 backdrop-blur ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-bold text-amber-300 ring-1 ring-amber-400/20">
          {idea.format.toUpperCase()}
        </span>
        <span className="rounded-full border border-zinc-800 px-3 py-1 text-xs font-semibold text-zinc-400">
          {idea.angleLabel}
        </span>
      </div>
      <h3
        className={
          featured
            ? "text-2xl font-black leading-tight text-zinc-50"
            : "text-xl font-black leading-tight text-zinc-50"
        }
      >
        {idea.title}
      </h3>
      <p className="mt-4 text-sm leading-6 text-zinc-400">{idea.body}</p>
      <p className="mt-4 text-sm font-bold text-zinc-100">{idea.cta}</p>
      <p className="mt-4 rounded-lg border border-zinc-800 bg-zinc-900/70 p-3 text-xs leading-5 text-zinc-400">
        <span className="font-bold text-amber-300">Insight: </span>
        {idea.strategyNote}
      </p>
    </motion.article>
  );
}

export function PremiumLandingPage() {
  const [heroBusiness, setHeroBusiness] = useState("");
  const [previewState, setPreviewState] = useState<PreviewState>("idle");
  const [analysisIndex, setAnalysisIndex] = useState(0);
  const [previewResult, setPreviewResult] = useState<GenerateContentResult | null>(null);
  const [previewError, setPreviewError] = useState("");
  const previewRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (previewState !== "analyzing") {
      return;
    }

    const interval = window.setInterval(() => {
      setAnalysisIndex((current) => (current + 1) % analysisSteps.length);
    }, 520);

    return () => window.clearInterval(interval);
  }, [previewState]);

  async function handleHeroSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const business = heroBusiness.trim();

    if (!business) {
      setPreviewError("Digite o seu tipo de negócio para gerar uma prévia personalizada.");
      setPreviewState("error");
      return;
    }

    setPreviewError("");
    setPreviewState("analyzing");
    setAnalysisIndex(0);
    setPreviewResult(null);

    window.setTimeout(() => {
      previewRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 80);

    try {
      const [response] = await Promise.all([
        fetch("/api/generate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ business }),
        }),
        wait(1500),
      ]);

      if (!response.ok) {
        throw new Error("Falha ao gerar prévia.");
      }

      const data = (await response.json()) as GenerateContentResult;
      setPreviewResult(data);
      setPreviewState("ready");
    } catch {
      setPreviewError("Não foi possível gerar sua prévia agora. Tente novamente em alguns segundos.");
      setPreviewState("error");
    }
  }

  const previewIdeas = previewResult?.content.slice(0, 3) ?? [];

  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-50">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.12),transparent_34%),linear-gradient(to_bottom,rgba(39,39,42,0.2),transparent_30%)]" />

      <header className="absolute inset-x-0 top-0 z-20 px-5 py-5 sm:px-8">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-lg border border-zinc-800 bg-zinc-900/40 px-4 py-3 backdrop-blur">
          <a href="#" className="text-sm font-black tracking-tight text-zinc-50">
            Content Blueprint
          </a>
          <a href="#preco" className="text-sm font-semibold text-zinc-400 transition hover:text-zinc-50">
            Ver oferta
          </a>
        </nav>
      </header>

      <section className="relative z-10 flex min-h-[90vh] items-center px-5 pb-16 pt-28 sm:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.45 }}
          className="mx-auto flex max-w-5xl flex-col items-center text-center"
        >
          <motion.div
            variants={staggerItem}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm font-bold text-amber-300 backdrop-blur"
          >
            <Sparkles size={16} />
            Conteúdo estratégico para negócios locais
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="max-w-5xl text-5xl font-black leading-[0.98] tracking-tight text-zinc-50 sm:text-7xl lg:text-8xl"
          >
            Você posta... mas não aparece cliente?
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-xl"
          >
            Descubra exatamente o que postar para o seu negócio atrair clientes todos os dias, sem precisar pensar.
          </motion.p>

          <motion.form
            variants={staggerItem}
            onSubmit={handleHeroSubmit}
            className="mt-8 w-full max-w-2xl rounded-lg border border-zinc-800 bg-zinc-900/55 p-3 text-left shadow-2xl shadow-black/25 backdrop-blur sm:flex sm:items-end sm:gap-3"
          >
            <label className="block flex-1">
              <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
                Qual é o seu negócio?
              </span>
              <input
                value={heroBusiness}
                onChange={(event) => setHeroBusiness(event.target.value)}
                placeholder="Ex: barbearia, hamburgueria, clínica..."
                className="focus-ring min-h-12 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-amber-400"
              />
            </label>
            <MagneticButton
              type="submit"
              disabled={previewState === "analyzing"}
              className="mt-3 w-full gap-2 sm:mt-0 sm:w-auto"
            >
              {previewState === "analyzing" ? "Analisando..." : "Ver ideias para o meu negócio"}
              <ArrowRight size={18} />
            </MagneticButton>
          </motion.form>

          <motion.div
            variants={staggerItem}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
          >
            <MagneticButton href="#demo" variant="ghost" className="w-full sm:w-auto">
              Ver demonstração
            </MagneticButton>
          </motion.div>

          <div ref={previewRef} className="mt-8 w-full max-w-5xl">
            {previewState === "analyzing" ? (
              <motion.div
                initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                className="rounded-lg border border-zinc-800 bg-zinc-900/55 p-5 text-left shadow-2xl shadow-black/25 backdrop-blur sm:p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-amber-300/20 bg-amber-400/10 text-amber-300">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
                      Análise estratégica
                    </p>
                    <motion.p
                      key={analysisSteps[analysisIndex]}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.28 }}
                      className="mt-1 text-base font-bold text-zinc-100"
                    >
                      {analysisSteps[analysisIndex]}
                    </motion.p>
                  </div>
                </div>
                <div className="mt-5 h-2 overflow-hidden rounded-full bg-zinc-800">
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 1.15, repeat: Infinity, ease: "easeInOut" }}
                    className="h-full w-1/2 rounded-full bg-amber-400"
                  />
                </div>
              </motion.div>
            ) : null}

            {previewState === "error" && previewError ? (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-lg border border-red-400/20 bg-red-500/10 p-4 text-left text-sm text-red-200"
              >
                {previewError}
              </motion.p>
            ) : null}

            {previewState === "ready" && previewResult ? (
              <motion.div
                initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-5 text-left shadow-2xl shadow-black/30 backdrop-blur sm:p-6"
              >
                <div className="mb-5 flex flex-col gap-4 border-b border-zinc-800 pb-5 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-400">
                      Prévia personalizada para: {previewResult.business}
                    </p>
                    <h2 className="mt-2 text-2xl font-black tracking-tight text-zinc-50 sm:text-4xl">
                      Conteúdos com maior chance de atrair clientes para esse perfil.
                    </h2>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-400">
                      Com base no seu negócio, o sistema priorizou{" "}
                      {previewResult.summary.recommendedAnglesLabel.slice(0, 3).join(", ")}.
                    </p>
                  </div>
                  <div className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-4">
                    <p className="text-xs font-bold text-zinc-500">Melhor abordagem</p>
                    <p className="mt-1 text-sm font-semibold text-zinc-200">
                      {previewResult.summary.bestApproachLabel}
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                  {previewIdeas.map((idea, index) => (
                    <PreviewIdeaCard
                      key={`${idea.angle}-${idea.title}`}
                      idea={idea}
                      index={index}
                      featured={index === 0}
                    />
                  ))}
                </div>

                <div className="mt-5 rounded-lg border border-amber-300/20 bg-amber-400/10 p-4 sm:flex sm:items-center sm:justify-between sm:gap-5">
                  <div className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-amber-300" size={20} />
                    <p className="text-sm leading-6 text-zinc-200">
                      Isso é só uma amostra do que o sistema pode gerar para o seu negócio. Desbloqueie o acesso completo para gerar quantas ideias quiser.
                    </p>
                  </div>
                  <MagneticButton href="https://pay.kiwify.com.br/mgUnDLf" className="mt-4 w-full shrink-0 gap-2 sm:mt-0 sm:w-auto">
                    Quero desbloquear o acesso completo
                    <ArrowRight size={18} />
                  </MagneticButton>
                </div>
              </motion.div>
            ) : null}
          </div>
        </motion.div>
      </section>

      <section className="relative z-10 mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.35 }}
          className="rounded-lg border border-zinc-800 bg-zinc-900/45 p-5 shadow-2xl shadow-black/25 backdrop-blur sm:p-8"
        >
          <motion.h2
            variants={staggerItem}
            className="max-w-3xl text-3xl font-black tracking-tight text-zinc-50 sm:text-5xl"
          >
            Se você tem um negócio local, provavelmente passa por isso:
          </motion.h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {painPoints.map((item) => (
              <motion.div
                key={item}
                variants={staggerItem}
                className="rounded-lg border border-zinc-800 bg-zinc-950/55 p-4 text-sm font-semibold text-zinc-200"
              >
                {item}
              </motion.div>
            ))}
          </div>
          <motion.p
            variants={staggerItem}
            className="mt-7 border-t border-zinc-800 pt-5 text-lg font-bold text-amber-300"
          >
            E o problema não é o Instagram... é o que você posta.
          </motion.p>
        </motion.div>
      </section>

      <TypingDemoBox />
      <BentoFeatures />

      <div id="preco">
        <PricingOffer />
      </div>

      <section className="relative z-10 mx-auto w-full max-w-4xl px-5 py-16 sm:px-8 sm:py-24">
        <motion.div {...staggerItem} className="mb-8 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-400">
            Perguntas rápidas
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-zinc-50 sm:text-5xl">
            O que você precisa saber antes de começar
          </h2>
        </motion.div>
        <FAQAccordion />
      </section>

      <section className="relative z-10 mx-auto w-full max-w-5xl px-5 pb-20 text-center sm:px-8 sm:pb-28">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.35 }}
          className="rounded-lg border border-zinc-800 bg-zinc-900/45 p-6 shadow-2xl shadow-black/25 backdrop-blur sm:p-10"
        >
          <motion.h2
            variants={staggerItem}
            className="text-4xl font-black tracking-tight text-zinc-50 sm:text-6xl"
          >
            Pare de perder tempo pensando no que postar.
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-400 sm:text-xl"
          >
            Comece a postar com estratégia e veja a diferença.
          </motion.p>
          <motion.div variants={staggerItem} className="mt-8">
            <MagneticButton href="https://pay.kiwify.com.br/mgUnDLf" className="w-full gap-2 sm:w-auto">
              Começar agora
              <ArrowRight size={18} />
            </MagneticButton>
          </motion.div>
        </motion.div>
      </section>

      <footer className="relative z-10 border-t border-zinc-800 px-5 py-8 text-center text-sm text-zinc-500 sm:px-8">
        Content Blueprint. Conteúdo com estratégia para negócios locais.
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-zinc-800 bg-zinc-950/90 p-3 backdrop-blur sm:hidden">
        <MagneticButton href="https://pay.kiwify.com.br/mgUnDLf" className="w-full gap-2">
          Quero desbloquear o acesso completo
          <ArrowRight size={18} />
        </MagneticButton>
      </div>
    </main>
  );
}
