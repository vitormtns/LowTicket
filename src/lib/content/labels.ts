import type { ContentAngle, ContentFormat } from "@/lib/types";

export const contentAngleLabels: Record<ContentAngle, string> = {
  transformacao: "Transformação",
  bastidores: "Bastidores",
  prova_social: "Prova social",
  autoridade: "Autoridade",
  promocao: "Promoção",
  venda_direta: "Venda direta",
  apetite: "Apetite",
  produto_destaque: "Produto em destaque",
  educacao: "Educação",
  novidade: "Novidade",
  confianca: "Confiança",
  rotina: "Rotina",
  resultado: "Resultado",
  curiosidade: "Curiosidade",
  urgencia: "Urgência",
  objecao: "Objeção",
  engajamento_local: "Engajamento local",
};

export const contentFormatLabels: Record<ContentFormat, string> = {
  reels: "Reels",
  post: "Post",
  story: "Story",
  carrossel: "Carrossel",
};
