"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Mas isso serve para o meu negócio?",
    answer:
      "Sim. O sistema adapta as ideias com base no tipo de negócio que você tem.",
  },
  {
    question: "Preciso entender de marketing?",
    answer:
      "Não. Você só precisa copiar, adaptar e postar.",
  },
  {
    question: "Funciona mesmo?",
    answer:
      "Os conteúdos são baseados em padrões que funcionam para negócios locais.",
  },
  {
    question: "Isso é só um PDF?",
    answer:
      "Não. Você informa o negócio, recebe ideias adaptadas ao perfil detectado e vê direção estratégica, formato, CTA e contexto de uso.",
  },
];

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-zinc-800 rounded-lg border border-zinc-800 bg-zinc-900/50 shadow-2xl shadow-black/25 backdrop-blur">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={faq.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="focus-ring flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-zinc-50">{faq.question}</span>
              <ChevronDown
                size={20}
                className={`shrink-0 text-zinc-500 transition ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen ? (
              <p className="px-5 pb-5 text-sm leading-6 text-zinc-400">{faq.answer}</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
