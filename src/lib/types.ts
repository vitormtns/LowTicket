export type Archetype =
  | "beleza"
  | "saude"
  | "alimentacao"
  | "varejo"
  | "automotivo"
  | "fitness"
  | "pet"
  | "servico_local"
  | "educacao"
  | "casa_reforma";

export type ContentAngle =
  | "transformacao"
  | "bastidores"
  | "prova_social"
  | "autoridade"
  | "promocao"
  | "venda_direta"
  | "apetite"
  | "produto_destaque"
  | "educacao"
  | "novidade"
  | "confianca"
  | "rotina"
  | "resultado"
  | "curiosidade"
  | "urgencia"
  | "objecao"
  | "engajamento_local";

export type ContentFormat = "reels" | "post" | "story" | "carrossel";

export type ToneProfileId =
  | "direto"
  | "premium"
  | "acolhedor"
  | "urgente"
  | "tecnico"
  | "aspiracional";

export type ToneProfile = {
  id: ToneProfileId;
  name: string;
  description: string;
  vocabulary: string[];
};

export type ArchetypeData = {
  id: Archetype;
  name: string;
  saleModel: string;
  visualStrength: "baixa" | "media" | "alta";
  trustNeed: "baixo" | "medio" | "alto";
  urgencyStyle: "escassez" | "agenda" | "desejo" | "dor" | "sazonal";
  toneProfile: ToneProfileId[];
  allowedAngles: ContentAngle[];
  strategyDescription: string;
  bestApproach: string;
};

export type BusinessStrategySummary = {
  saleModelLabel: string;
  visualStrengthLabel: string;
  trustNeedLabel: string;
  recommendedAnglesLabel: string[];
  bestApproachLabel: string;
};

export type BusinessClassification = {
  business: string;
  normalizedBusiness: string;
  archetype: Archetype;
  archetypeData: ArchetypeData;
  summary: BusinessStrategySummary;
  matchedAlias?: string;
};

export type BusinessAlias = {
  archetype: Archetype;
  aliases: string[];
};

export type ContentBlock = {
  id: string;
  angle: ContentAngle;
  compatibleArchetypes: Archetype[];
  formats: ContentFormat[];
  titleTemplates: string[];
  bodyTemplates: string[];
  ctaTemplates: string[];
  whyItWorks: string;
  objective: string;
  bestUseCase: string;
  visualTip: string;
  strategyNote: string;
  impactLevel: "baixo" | "medio" | "alto";
  optionalToneProfiles?: ToneProfileId[];
};

export type GeneratedContentItem = {
  format: ContentFormat;
  title: string;
  body: string;
  cta: string;
  why: string;
  objective: string;
  bestUseCase: string;
  visualTip: string;
  tone: string;
  impactLevel: "baixo" | "medio" | "alto";
  strategyNote: string;
  businessName: string;
  archetype: Archetype;
  angle: ContentAngle;
  angleLabel: string;
};

export type GenerateContentResult = BusinessClassification & {
  content: GeneratedContentItem[];
};
