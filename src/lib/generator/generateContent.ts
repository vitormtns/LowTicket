import { classifyBusiness } from "@/lib/business/classifier";
import { contentBlocks } from "@/lib/content/blocks";
import type {
  ArchetypeData,
  ContentBlock,
  ContentFormat,
  GenerateContentResult,
  GeneratedContentItem,
} from "@/lib/types";

const fallbackBusiness = "negocio local";

function randomItem<T>(items: T[]) {
  return items[Math.floor(Math.random() * items.length)];
}

function shuffle<T>(items: T[]) {
  return [...items].sort(() => Math.random() - 0.5);
}

function titleCase(input: string) {
  return input
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function renderTemplate(template: string, businessName: string, archetype: ArchetypeData) {
  return template
    .replaceAll("{business}", businessName)
    .replaceAll("{Business}", titleCase(businessName))
    .replaceAll("{archetype}", archetype.name.toLowerCase())
    .replaceAll("{Archetype}", archetype.name);
}

function pickFormat(block: ContentBlock): ContentFormat {
  return randomItem(block.formats);
}

function createItem(
  block: ContentBlock,
  businessName: string,
  archetype: ArchetypeData
): GeneratedContentItem {
  return {
    format: pickFormat(block),
    title: renderTemplate(randomItem(block.titleTemplates), businessName, archetype),
    body: renderTemplate(randomItem(block.bodyTemplates), businessName, archetype),
    cta: renderTemplate(randomItem(block.ctaTemplates), businessName, archetype),
    why: block.whyItWorks,
    businessName,
    archetype: archetype.id,
    angle: block.angle,
  };
}

function compatibleBlocks(archetype: ArchetypeData) {
  return contentBlocks.filter(
    (block) =>
      block.compatibleArchetypes.includes(archetype.id) &&
      archetype.allowedAngles.includes(block.angle)
  );
}

export function generateContent(businessName: string, count = 10): GenerateContentResult {
  const business = businessName.trim() || fallbackBusiness;
  const classification = classifyBusiness(business);
  const blocks = compatibleBlocks(classification.archetypeData);
  const pool = blocks.length > 0 ? blocks : contentBlocks;
  const shuffled = shuffle(pool);
  const selectedBlocks: ContentBlock[] = [];

  for (let index = 0; index < count; index += 1) {
    selectedBlocks.push(shuffled[index % shuffled.length]);
  }

  return {
    ...classification,
    content: selectedBlocks.map((block) =>
      createItem(block, classification.business, classification.archetypeData)
    ),
  };
}
