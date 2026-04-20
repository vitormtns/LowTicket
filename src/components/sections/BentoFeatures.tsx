import { motion } from "framer-motion";
import { BarChart3, Clock3, FileText, MessageCircle } from "lucide-react";
import Image from "next/image";
import { reveal } from "@/components/sections/landingMotion";

const features = [
  {
    icon: FileText,
    title: "Ideias com estrutura pronta",
    description:
      "Cada card entrega gancho, mini roteiro, legenda e CTA para sair do zero sem depender de brainstorming.",
    className: "md:col-span-2",
  },
  {
    icon: Clock3,
    title: "Pauta em segundos",
    description:
      "Gere uma leva de conteudos e escolha o melhor formato para postar hoje.",
    className: "",
  },
  {
    icon: MessageCircle,
    title: "Chamadas que puxam conversa",
    description:
      "CTAs pensados para direct, WhatsApp e agendamento rapido.",
    className: "",
  },
  {
    icon: BarChart3,
    title: "Clareza para vender sem parecer anuncio",
    description:
      "O conteudo educa, mostra prova visual e aproxima clientes locais da barbearia.",
    className: "md:col-span-2",
  },
];

export function BentoFeatures() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <motion.div {...reveal} className="mb-10 max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-400">
          Sistema de conteudo
        </p>
        <h2 className="mt-4 text-3xl font-black tracking-tight text-zinc-50 sm:text-5xl">
          Menos calendario vazio. Mais posts que viram atendimento.
        </h2>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.article
              key={feature.title}
              {...reveal}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`min-h-64 rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur transition hover:border-zinc-700 hover:bg-zinc-900/70 ${feature.className}`}
            >
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 text-amber-400">
                <Icon size={22} />
              </div>
              <h3 className="text-2xl font-black tracking-tight text-zinc-50">
                {feature.title}
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400">
                {feature.description}
              </p>
            </motion.article>
          );
        })}

        <motion.article
          {...reveal}
          className="overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/50 backdrop-blur md:col-span-3"
        >
          <div className="grid md:grid-cols-[0.9fr_1.1fr]">
            <div className="p-6 sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-400">
                Feito para negocios locais
              </p>
              <h3 className="mt-4 text-3xl font-black tracking-tight text-zinc-50">
                Conteudo que parece simples porque ja vem com a decisao tomada.
              </h3>
              <p className="mt-4 text-sm leading-7 text-zinc-400">
                O dono so escolhe o card, copia a legenda e posta. Sem tela em branco, sem briefing longo.
              </p>
            </div>
            <div className="relative min-h-72 border-t border-zinc-800 md:border-l md:border-t-0">
              <Image
                src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1000&q=80"
                alt="Barbeiro preparando um cliente para corte"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-zinc-950/20" />
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
