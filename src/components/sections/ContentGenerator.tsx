"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Sparkles } from "lucide-react";
import { FormEvent, useState } from "react";
import { ContentIdeaCard } from "@/components/cards/ContentIdeaCard";
import { reveal } from "@/components/sections/landingMotion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import type { GenerateContentResult, GeneratedContentItem } from "@/lib/types";

function AppBackground() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.13),transparent_30%),radial-gradient(circle_at_top_left,rgba(255,255,255,0.07),transparent_24%)]" />
    </>
  );
}

function SkeletonCards() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-5 shadow-2xl shadow-black/20 backdrop-blur"
        >
          <div className="h-6 w-20 animate-pulse rounded-full bg-zinc-800" />
          <div className="mt-5 h-7 w-4/5 animate-pulse rounded bg-zinc-800" />
          <div className="mt-4 space-y-3">
            <div className="h-4 w-full animate-pulse rounded bg-zinc-800" />
            <div className="h-4 w-10/12 animate-pulse rounded bg-zinc-800" />
            <div className="h-20 w-full animate-pulse rounded-lg bg-zinc-800" />
          </div>
          <div className="mt-5 h-12 w-full animate-pulse rounded-lg bg-zinc-800" />
        </div>
      ))}
    </div>
  );
}

export function ContentGenerator() {
  const [business, setBusiness] = useState("barbearia premium");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<GenerateContentResult | null>(null);
  const [error, setError] = useState("");

  async function handleGenerate(event?: FormEvent<HTMLFormElement>) {
    event?.preventDefault();

    if (!business.trim()) {
      setError("Informe o tipo de negocio para gerar ideias personalizadas.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ business }),
      });

      if (!response.ok) {
        throw new Error("Falha ao gerar conteudo.");
      }

      const data = (await response.json()) as GenerateContentResult;
      setResult(data);
    } catch {
      setError("Nao foi possivel gerar agora. Tente novamente em alguns segundos.");
    } finally {
      setIsLoading(false);
    }
  }

  const content: GeneratedContentItem[] = result?.content ?? [];

  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 pb-8 text-zinc-50">
      <AppBackground />

      <header className="relative z-10 border-b border-zinc-800/80 px-5 py-5 sm:px-8">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 rounded-lg border border-zinc-800 bg-zinc-900/45 px-4 py-3 backdrop-blur">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-400">
              Content Blueprint
            </p>
            <h1 className="mt-1 text-xl font-black tracking-tight text-zinc-50 sm:text-3xl">
              Gerador de Conteudo
            </h1>
          </div>
          <MagneticButton href="/" variant="ghost" className="hidden gap-2 sm:inline-flex">
            <ArrowLeft size={16} />
            Landing
          </MagneticButton>
        </div>
      </header>

      <section className="relative z-10 px-5 py-8 sm:px-8 sm:py-10">
        <div className="mx-auto w-full max-w-6xl">
          <motion.div
            {...reveal}
            className="mb-8 overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/50 shadow-2xl shadow-black/25 backdrop-blur"
          >
            <div className="grid gap-6 p-5 sm:p-7 lg:grid-cols-[1fr_0.45fr] lg:items-center">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/70 px-3 py-1.5 text-xs font-bold text-amber-300">
                  <Sparkles size={14} />
                  Motor mockado inteligente
                </div>
                <h2 className="max-w-3xl text-4xl font-black leading-[1.02] tracking-tight text-zinc-50 sm:text-5xl">
                  Crie uma pauta pronta para o seu tipo de negocio.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
                  Informe o negocio. O sistema classifica o arquitipo e combina blocos de conteudo compativeis.
                </p>

                {result ? (
                  <div className="mt-5 rounded-lg border border-zinc-800 bg-zinc-950/60 p-4">
                    <p className="text-sm font-semibold text-zinc-200">
                      Ideias para:{" "}
                      <span className="text-amber-300">{result.business}</span>
                    </p>
                    <p className="mt-1 text-xs text-zinc-500">
                      Gerado com base no seu tipo de negocio: {result.archetypeData.name}.
                    </p>
                  </div>
                ) : null}
              </div>

              <form
                onSubmit={handleGenerate}
                className="rounded-lg border border-zinc-800 bg-zinc-950/70 p-4"
              >
                <label className="text-sm font-semibold text-zinc-300" htmlFor="business">
                  Qual e o seu negocio?
                </label>
                <input
                  id="business"
                  value={business}
                  onChange={(event) => setBusiness(event.target.value)}
                  placeholder="Ex: hamburgueria artesanal"
                  className="focus-ring mt-3 min-h-12 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-amber-400"
                />
                <MagneticButton
                  type="submit"
                  disabled={isLoading}
                  className="mt-4 w-full gap-2"
                >
                  <Sparkles size={18} />
                  {isLoading ? "Analisando negocio..." : "Gerar 10 ideias agora"}
                </MagneticButton>
                {error ? <p className="mt-3 text-sm text-red-300">{error}</p> : null}
              </form>
            </div>
          </motion.div>

          {isLoading ? <SkeletonCards /> : null}

          {!isLoading && content.length === 0 ? (
            <motion.div
              {...reveal}
              className="rounded-lg border border-dashed border-zinc-700 bg-zinc-900/35 p-8 text-center backdrop-blur"
            >
              <h2 className="text-2xl font-black tracking-tight text-zinc-50">
                Sua estrategia personalizada vai aparecer aqui
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-zinc-400">
                Digite um exemplo como clinica odontologica, pet shop ou loja feminina para ver o motor adaptar os cards.
              </p>
            </motion.div>
          ) : null}

          {!isLoading && content.length > 0 ? (
            <div className="grid gap-4 lg:grid-cols-2">
              {content.map((idea, index) => (
                <ContentIdeaCard key={`${idea.angle}-${idea.title}`} idea={idea} index={index} />
              ))}
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}
