import type { ToneProfile, ToneProfileId } from "@/lib/types";

export const tones: Record<ToneProfileId, ToneProfile> = {
  direto: {
    id: "direto",
    name: "Direto",
    description: "Claro, objetivo e orientado a acao.",
    vocabulary: ["agende", "peca", "reserve", "veja", "compare"],
  },
  premium: {
    id: "premium",
    name: "Premium",
    description: "Refinado, cuidadoso e focado em percepcao de valor.",
    vocabulary: ["experiencia", "detalhe", "cuidado", "selecionado", "acabamento"],
  },
  acolhedor: {
    id: "acolhedor",
    name: "Acolhedor",
    description: "Humano, proximo e seguro.",
    vocabulary: ["cuidado", "tranquilo", "bem atendido", "com carinho", "sem pressa"],
  },
  urgente: {
    id: "urgente",
    name: "Urgente",
    description: "Cria momento e decisao rapida sem exagero.",
    vocabulary: ["hoje", "ultimas vagas", "essa semana", "por pouco tempo", "agora"],
  },
  tecnico: {
    id: "tecnico",
    name: "Tecnico",
    description: "Educativo, confiavel e especifico.",
    vocabulary: ["avaliacao", "processo", "diagnostico", "metodo", "criterio"],
  },
  aspiracional: {
    id: "aspiracional",
    name: "Aspiracional",
    description: "Mostra evolucao, desejo e identidade.",
    vocabulary: ["resultado", "evolucao", "visual", "rotina", "conquista"],
  },
};
