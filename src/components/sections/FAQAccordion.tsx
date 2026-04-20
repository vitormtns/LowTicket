"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Como funciona?",
    answer:
      "Você acessa o gerador, clica para criar ideias e recebe cards com gancho, roteiro, legenda e chamada para ação.",
  },
  {
    question: "Preciso saber marketing?",
    answer:
      "Não. A proposta é entregar ideias simples, prontas e fáceis de adaptar para a rotina da sua barbearia.",
  },
  {
    question: "Serve para outros negócios?",
    answer:
      "Este MVP está focado em barbearias, mas a estrutura pode ser adaptada para estética, clínicas, restaurantes e outros negócios locais.",
  },
  {
    question: "Como acesso?",
    answer:
      "No MVP, o acesso funciona por um link com token. Exemplo: /app?token=abc123.",
  },
];

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-[#E5E5E5] rounded-lg border border-[#E5E5E5] bg-white">
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
              <span className="font-semibold text-black">{faq.question}</span>
              <ChevronDown
                size={20}
                className={`shrink-0 text-[#666666] transition ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen ? (
              <p className="px-5 pb-5 text-sm leading-6 text-[#666666]">{faq.answer}</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
