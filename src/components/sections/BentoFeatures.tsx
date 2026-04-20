import { motion } from "framer-motion";
import { BarChart3, Clock3, FileText, MessageCircle, MousePointerClick, Sparkles } from "lucide-react";
import Image from "next/image";
import { reveal } from "@/components/sections/landingMotion";

const steps = [
  "Digite seu negócio",
  "O sistema identifica o seu perfil",
  "Você recebe ideias prontas para postar",
];

const features = [
  {
    icon: FileText,
    title: "Ideias prontas de conteúdo",
    description:
      "Ganchos, roteiros e legendas organizados para você sair da tela em branco e postar com clareza.",
    className: "md:col-span-2",
  },
  {
    icon: MessageCircle,
    title: "CTAs que incentivam ação",
    description:
      "Chamadas pensadas para direct, WhatsApp, pedido, orçamento ou agendamento.",
    className: "",
  },
  {
    icon: BarChart3,
    title: "Estratégia por trás de cada post",
    description:
      "Cada ideia vem com contexto de uso, formato sugerido e explicação do motivo de funcionar.",
    className: "",
  },
  {
    icon: Sparkles,
    title: "Dicas visuais para melhorar resultado",
    description:
      "Sugestões simples de imagem, cena ou enquadramento para o conteúdo parecer mais forte.",
    className: "md:col-span-2",
  },
];

export function BentoFeatures() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <motion.div {...reveal} className="mb-10 max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-400">
          Solução
        </p>
        <h2 className="mt-4 text-3xl font-black tracking-tight text-zinc-50 sm:text-5xl">
          O Content Blueprint analisa o seu negócio e entrega conteúdos prontos para atrair clientes.
        </h2>
        <p className="mt-5 text-base leading-8 text-zinc-400">
          Não é só ideia. É conteúdo pensado para o seu tipo de venda.
        </p>
      </motion.div>

      <motion.div
        {...reveal}
        className="mb-4 overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/50 backdrop-blur"
      >
        <div className="grid md:grid-cols-[0.9fr_1.1fr]">
          <div className="p-6 sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-400">
              Para negócios como o seu
            </p>
            <h3 className="mt-4 text-3xl font-black tracking-tight text-zinc-50">
              Uma direção clara antes de postar qualquer coisa.
            </h3>
            <div className="mt-6 grid gap-3">
              {[
                "Melhor estratégia: urgência + prova social",
                "Tipo de venda: impulso/local",
                "Conteúdos que mais funcionam: promoções, destaques de produto e conteúdo visual forte",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-zinc-800 bg-zinc-950/55 p-4 text-sm font-semibold leading-6 text-zinc-200"
                >
                  {item}
                </div>
              ))}
            </div>
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
      </motion.div>

      <div className="mb-4 grid gap-4 md:grid-cols-3">
        {steps.map((step, index) => (
          <motion.article
            key={step}
            {...reveal}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur transition hover:border-zinc-700 hover:bg-zinc-900/70"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 text-amber-400">
              <MousePointerClick size={22} />
            </div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-zinc-500">
              Passo {index + 1}
            </p>
            <h3 className="mt-3 text-2xl font-black tracking-tight text-zinc-50">
              {step}
            </h3>
          </motion.article>
        ))}
      </div>

      <motion.div {...reveal} className="mb-10 max-w-3xl pt-10">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-400">
          O que você recebe
        </p>
        <h2 className="mt-4 text-3xl font-black tracking-tight text-zinc-50 sm:text-5xl">
          Um pacote simples de usar, mas com cara de estratégia.
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
          className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur md:col-span-3"
        >
          <div className="grid gap-3 sm:grid-cols-3">
            {["Sugestões de formato: Reels, Story e Post", "Legendas já estruturadas", "Contexto de uso para cada conteúdo"].map((item) => (
              <div key={item} className="rounded-lg border border-zinc-800 bg-zinc-950/55 p-4 text-sm font-semibold text-zinc-200">
                <Clock3 size={18} className="mb-3 text-amber-400" />
                {item}
              </div>
            ))}
          </div>
        </motion.article>
      </div>
    </section>
  );
}
