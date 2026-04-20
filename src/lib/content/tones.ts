import type { ToneProfile, ToneProfileId } from "@/lib/types";

export const tones: Record<ToneProfileId, ToneProfile> = {
  direto: {
    id: "direto",
    name: "Direto",
    description: "Claro, objetivo e orientado à ação.",
    vocabulary: ["agende", "peça", "reserve", "veja", "compare"],
  },
  premium: {
    id: "premium",
    name: "Premium",
    description: "Refinado, cuidadoso e focado em percepção de valor.",
    vocabulary: ["experiência", "detalhe", "cuidado", "selecionado", "acabamento"],
  },
  acolhedor: {
    id: "acolhedor",
    name: "Acolhedor",
    description: "Humano, próximo e seguro.",
    vocabulary: ["cuidado", "tranquilo", "bem atendido", "com carinho", "sem pressa"],
  },
  urgente: {
    id: "urgente",
    name: "Urgente",
    description: "Cria momento e decisão rápida sem exagero.",
    vocabulary: ["hoje", "últimas vagas", "esta semana", "por pouco tempo", "agora"],
  },
  tecnico: {
    id: "tecnico",
    name: "Técnico",
    description: "Educativo, confiável e específico.",
    vocabulary: ["avaliação", "processo", "diagnóstico", "método", "critério"],
  },
  aspiracional: {
    id: "aspiracional",
    name: "Aspiracional",
    description: "Mostra evolução, desejo e identidade.",
    vocabulary: ["resultado", "evolução", "visual", "rotina", "conquista"],
  },
};
