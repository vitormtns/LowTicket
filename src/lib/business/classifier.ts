import { businessAliases } from "@/lib/business/aliases";
import { archetypes } from "@/lib/business/archetypes";
import type { Archetype, BusinessClassification } from "@/lib/types";

const fallbackArchetype: Archetype = "servico_local";

export function normalizeBusinessInput(input: string) {
  return input
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ");
}

function scoreAlias(normalizedBusiness: string, alias: string) {
  const normalizedAlias = normalizeBusinessInput(alias);

  if (!normalizedAlias) {
    return 0;
  }

  if (normalizedBusiness === normalizedAlias) {
    return normalizedAlias.length + 30;
  }

  if (normalizedBusiness.includes(normalizedAlias)) {
    return normalizedAlias.length + 15;
  }

  const aliasWords = normalizedAlias.split(" ");
  const matchedWords = aliasWords.filter((word) => normalizedBusiness.includes(word));

  if (matchedWords.length === aliasWords.length && aliasWords.length > 1) {
    return normalizedAlias.length + 8;
  }

  if (matchedWords.length > 0 && normalizedAlias.length > 5) {
    return matchedWords.join("").length;
  }

  return 0;
}

export function classifyBusiness(business: string): BusinessClassification {
  const normalizedBusiness = normalizeBusinessInput(business);
  let bestMatch: {
    archetype: Archetype;
    alias: string;
    score: number;
  } | null = null;

  for (const group of businessAliases) {
    for (const alias of group.aliases) {
      const score = scoreAlias(normalizedBusiness, alias);

      if (score > (bestMatch?.score ?? 0)) {
        bestMatch = {
          archetype: group.archetype,
          alias,
          score,
        };
      }
    }
  }

  const archetype = bestMatch?.score ? bestMatch.archetype : fallbackArchetype;

  return {
    business,
    normalizedBusiness,
    archetype,
    archetypeData: archetypes[archetype],
    matchedAlias: bestMatch?.score ? bestMatch.alias : undefined,
  };
}
