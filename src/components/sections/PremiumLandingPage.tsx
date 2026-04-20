"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { BentoFeatures } from "@/components/sections/BentoFeatures";
import { PricingOffer } from "@/components/sections/PricingOffer";
import { TypingDemoBox } from "@/components/sections/TypingDemoBox";
import { staggerContainer, staggerItem } from "@/components/sections/landingMotion";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function PremiumLandingPage() {
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
            Conteudo pronto para barbearias venderem melhor
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="max-w-5xl text-5xl font-black leading-[0.98] tracking-tight text-zinc-50 sm:text-7xl lg:text-8xl"
          >
            Pare de postar no improviso. Gere ideias que viram clientes.
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-xl"
          >
            O Content Blueprint entrega ganchos, roteiros, legendas e chamadas prontas para sua barbearia publicar com clareza hoje.
          </motion.p>

          <motion.div
            variants={staggerItem}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
          >
            <MagneticButton href="/app?token=abc123" className="w-full gap-2 sm:w-auto">
              Gerar minhas ideias agora
              <ArrowRight size={18} />
            </MagneticButton>
            <MagneticButton href="#demo" variant="ghost" className="w-full sm:w-auto">
              Ver demo ao vivo
            </MagneticButton>
          </motion.div>
        </motion.div>
      </section>

      <TypingDemoBox />
      <BentoFeatures />

      <div id="preco">
        <PricingOffer />
      </div>

      <footer className="relative z-10 border-t border-zinc-800 px-5 py-8 text-center text-sm text-zinc-500 sm:px-8">
        Content Blueprint. MVP pronto para validar demanda.
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-zinc-800 bg-zinc-950/90 p-3 backdrop-blur sm:hidden">
        <MagneticButton href="/app?token=abc123" className="w-full gap-2">
          Gerar minhas ideias
          <ArrowRight size={18} />
        </MagneticButton>
      </div>
    </main>
  );
}
