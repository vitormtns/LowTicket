"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import { barberContentIdeas } from "@/constants/content";
import { Button } from "@/components/ui/Button";

const previewIdeas = barberContentIdeas.slice(0, 3);

export function GeneratorPreview() {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
      <div className="overflow-hidden rounded-lg border border-[#E5E5E5] bg-white">
        <Image
          src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=80"
          alt="Barbeiro finalizando um corte masculino"
          width={900}
          height={720}
          sizes="(min-width: 1024px) 42vw, 100vw"
          className="h-72 w-full object-cover sm:h-full"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.35 }}
        className="rounded-lg border border-[#E5E5E5] bg-white p-4 sm:p-6"
      >
        <div className="flex items-center justify-between gap-4 border-b border-[#E5E5E5] pb-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#007AFF]">
              Gerador ativo
            </p>
            <h3 className="mt-1 text-xl font-bold text-black">Barbearia local</h3>
          </div>
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EAF4FF] text-[#007AFF]">
            <Sparkles size={22} />
          </div>
        </div>

        <Button href="/app?token=abc123" className="mt-5 w-full">
          Gerar 10 ideias agora
        </Button>

        <div className="mt-5 space-y-3">
          {previewIdeas.map((idea, index) => (
            <motion.div
              key={idea.id}
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: index * 0.12 }}
              className="rounded-lg border border-[#E5E5E5] bg-[#FAFAFA] p-4"
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-bold text-black">
                  {idea.format}
                </span>
                <span className="text-xs text-[#666666]">Pronto para postar</span>
              </div>
              <p className="font-semibold leading-snug text-black">{idea.title}</p>
              <p className="mt-2 text-sm leading-6 text-[#666666]">{idea.cta}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
