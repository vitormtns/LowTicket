"use client";

import { motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import type { GeneratedContentItem } from "@/lib/types";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { contentFormatLabels } from "@/lib/content/labels";

const badgeTone: Record<GeneratedContentItem["format"], string> = {
  reels: "bg-amber-500/10 text-amber-300 ring-1 ring-amber-400/20",
  post: "bg-zinc-800 text-zinc-200 ring-1 ring-zinc-700",
  story: "bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-400/20",
  carrossel: "bg-sky-500/10 text-sky-300 ring-1 ring-sky-400/20",
};

const impactLabels: Record<GeneratedContentItem["impactLevel"], string> = {
  baixo: "Impacto baixo",
  medio: "Impacto médio",
  alto: "Impacto alto",
};

export function ContentIdeaCard({
  idea,
  index = 0,
}: {
  idea: GeneratedContentItem;
  index?: number;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    const text = `${idea.title}\n\n${idea.body}\n\n${idea.cta}\n\nPor que funciona: ${idea.why}\nDica visual: ${idea.visualTip}`;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.6, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-5 shadow-2xl shadow-black/20 backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-zinc-700 hover:bg-zinc-900/70"
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className={`rounded-full px-3 py-1 text-xs font-bold ${badgeTone[idea.format]}`}>
          {contentFormatLabels[idea.format]}
        </span>
        <span className="rounded-full border border-zinc-800 px-3 py-1 text-xs font-semibold text-zinc-400">
          {idea.angleLabel}
        </span>
      </div>

      <h3 className="text-xl font-black leading-tight tracking-tight text-zinc-50">
        {idea.title}
      </h3>
      <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
        <div className="rounded-lg border border-zinc-800 bg-zinc-950/50 p-3">
          <p className="font-bold text-zinc-500">Objetivo</p>
          <p className="mt-1 font-semibold text-zinc-200">{idea.objective}</p>
        </div>
        <div className="rounded-lg border border-zinc-800 bg-zinc-950/50 p-3">
          <p className="font-bold text-zinc-500">Tom e impacto</p>
          <p className="mt-1 font-semibold text-zinc-200">
            {idea.tone} · {impactLabels[idea.impactLevel]}
          </p>
        </div>
      </div>

      <div className="mt-4 space-y-4 text-sm leading-6 text-zinc-400">
        <p>
          <strong className="text-zinc-100">Mini roteiro: </strong>
          {idea.body}
        </p>
        <p>
          <strong className="text-zinc-100">CTA sugerido: </strong>
          {idea.cta}
        </p>
        <p className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-4">
          <strong className="text-zinc-100">Por que esse post funciona: </strong>
          {idea.why}
        </p>
        <div className="grid gap-3 text-xs leading-5 sm:grid-cols-2">
          <p className="rounded-lg border border-zinc-800 bg-zinc-950/45 p-3">
            <strong className="block text-zinc-100">Dica visual</strong>
            {idea.visualTip}
          </p>
          <p className="rounded-lg border border-zinc-800 bg-zinc-950/45 p-3">
            <strong className="block text-zinc-100">Melhor contexto</strong>
            {idea.bestUseCase}
          </p>
        </div>
        <p className="text-xs leading-5 text-zinc-500">
          <strong className="text-amber-300">Nota estratégica: </strong>
          {idea.strategyNote}
        </p>
      </div>

      <MagneticButton
        type="button"
        variant={copied ? "ghost" : "primary"}
        onClick={handleCopy}
        className="mt-5 w-full gap-2"
      >
        {copied ? <Check size={18} /> : <Copy size={18} />}
        {copied ? "Copiado!" : "Copiar legenda"}
      </MagneticButton>
    </motion.article>
  );
}
