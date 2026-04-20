import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { reveal } from "@/components/sections/landingMotion";

const included = [
  "10 ideias prontas para barbearia",
  "Gancho, roteiro, legenda e CTA",
  "Acesso imediato por link",
  "Fluxo simples para validar demanda",
];

export function PricingOffer() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <motion.div
        {...reveal}
        className="overflow-hidden rounded-lg border border-amber-300/30 bg-amber-500 text-zinc-950 shadow-[0_0_80px_rgba(245,158,11,0.18)]"
      >
        <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-zinc-800">
              Oferta MVP
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
              R$19 para parar de improvisar post.
            </h2>
            <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-zinc-800">
              Um produto low ticket para validar rapido: voce acessa, gera ideias e ja sai com conteudo copiavel.
            </p>
          </div>

          <div className="rounded-lg border border-zinc-950/15 bg-zinc-950 p-5 text-zinc-50 shadow-2xl shadow-zinc-950/25">
            <div className="flex items-end gap-2">
              <span className="text-5xl font-black tracking-tight">R$19</span>
              <span className="pb-2 text-sm font-medium text-zinc-400">acesso MVP</span>
            </div>
            <ul className="mt-6 space-y-3">
              {included.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-zinc-300">
                  <Check size={18} className="mt-0.5 shrink-0 text-amber-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <MagneticButton href="/app?token=abc123" className="mt-7 w-full gap-2">
              Gerar minhas ideias
              <ArrowRight size={18} />
            </MagneticButton>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
