"use client";

import { motion } from "framer-motion";
import { Check, Copy, Sparkles } from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { reveal } from "@/components/sections/landingMotion";
import type { GenerateContentResult } from "@/lib/types";

type DemoBlock = {
  label: string;
  text: string;
};

function getDemoBlocks(result: GenerateContentResult | null, business: string): DemoBlock[] {
  const first = result?.content[0];
  const second = result?.content[1];

  return [
    {
      label: "Entrada",
      text: `${business || "barbearia premium"}. Quero posts para atrair clientes hoje.`,
    },
    {
      label: "Analise",
      text: result
        ? `Arquetipo detectado: ${result.archetypeData.name}. Angulos priorizados: ${result.archetypeData.allowedAngles.slice(0, 3).join(", ")}.`
        : "Analisando o tipo de negocio, modelo de venda e angulos com maior potencial.",
    },
    {
      label: "Gancho",
      text: first?.title ?? "O detalhe que muda o resultado antes do cliente decidir.",
    },
    {
      label: "Roteiro",
      text: first?.body ?? "Mostre o problema, revele o processo e finalize com uma chamada simples.",
    },
    {
      label: "CTA",
      text: second?.cta ?? "Envie QUERO no direct e receba uma sugestao.",
    },
  ];
}

export function TypingDemoBox() {
  const [business, setBusiness] = useState("barbearia premium");
  const [visibleBlocks, setVisibleBlocks] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<GenerateContentResult | null>(null);
  const blocks = useMemo(() => getDemoBlocks(result, business), [business, result]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setVisibleBlocks((current) => (current >= blocks.length ? 1 : current + 1));
    }, 1300);

    return () => window.clearInterval(interval);
  }, [blocks.length]);

  async function handleAnalyze(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!business.trim()) {
      return;
    }

    setIsLoading(true);
    setVisibleBlocks(1);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ business }),
      });

      if (!response.ok) {
        throw new Error("Falha ao analisar.");
      }

      const data = (await response.json()) as GenerateContentResult;
      setResult(data);
    } finally {
      window.setTimeout(() => setIsLoading(false), 450);
    }
  }

  return (
    <motion.section
      id="demo"
      {...reveal}
      className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-8 sm:py-24"
    >
      <div className="mb-8 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-400">
          Demo inteligente
        </p>
        <h2 className="mt-4 text-3xl font-black tracking-tight text-zinc-50 sm:text-5xl">
          Digite um negocio e veja a pauta se adaptar
        </h2>
      </div>

      <div className="overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/50 shadow-2xl shadow-black/40 backdrop-blur">
        <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-zinc-500">
            <Sparkles size={14} />
            Content Blueprint Engine
          </div>
        </div>

        <div className="grid gap-0 md:grid-cols-[0.9fr_1.1fr]">
          <div className="border-b border-zinc-800 p-5 md:border-b-0 md:border-r">
            <form onSubmit={handleAnalyze}>
              <label
                htmlFor="demo-business"
                className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500"
              >
                Tipo de negocio
              </label>
              <input
                id="demo-business"
                value={business}
                onChange={(event) => setBusiness(event.target.value)}
                placeholder="Ex: hamburgueria artesanal"
                className="focus-ring mt-3 min-h-12 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-amber-400"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="focus-ring mt-3 flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-amber-500 px-4 py-3 text-sm font-bold text-zinc-950 shadow-[0_0_0_rgba(245,158,11,0)] transition hover:bg-amber-400 hover:shadow-[0_0_42px_rgba(245,158,11,0.34)] active:scale-95 disabled:pointer-events-none disabled:opacity-60"
              >
                <Sparkles size={16} />
                {isLoading ? "Analisando..." : "Analisar negocio"}
              </button>
            </form>

            <div className="mt-5 rounded-lg border border-zinc-800 bg-zinc-950/70 p-4">
              <p className="min-h-20 text-sm leading-7 text-zinc-300">
                {isLoading ? "Classificando modelo de venda, tom e angulos..." : blocks[0].text}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="ml-1 inline-block h-5 w-2 translate-y-1 rounded-sm bg-amber-400"
                />
              </p>
            </div>
          </div>

          <div className="space-y-3 p-5">
            {blocks.slice(1).map((block, index) => {
              const isVisible = !isLoading && visibleBlocks > index + 1;

              return (
                <motion.article
                  key={`${block.label}-${block.text}`}
                  initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
                  animate={
                    isVisible
                      ? { opacity: 1, y: 0, filter: "blur(0px)" }
                      : { opacity: 0.28, y: 10, filter: "blur(4px)" }
                  }
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-4"
                >
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-bold text-amber-300">
                      {block.label}
                    </span>
                    {isVisible ? <Check size={16} className="text-emerald-400" /> : null}
                  </div>
                  <p className="text-sm leading-6 text-zinc-300">{block.text}</p>
                </motion.article>
              );
            })}

            <button
              type="button"
              className="focus-ring flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-zinc-50 px-4 py-3 text-sm font-bold text-zinc-950 transition active:scale-95"
            >
              <Copy size={16} />
              Copiar ideia gerada
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
