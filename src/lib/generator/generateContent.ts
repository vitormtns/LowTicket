import { classifyBusiness } from "@/lib/business/classifier";
import { contentBlocks } from "@/lib/content/blocks";
import { contentAngleLabels } from "@/lib/content/labels";
import { tones } from "@/lib/content/tones";
import type {
  ArchetypeData,
  ContentBlock,
  ContentFormat,
  GenerateContentResult,
  GeneratedContentItem,
} from "@/lib/types";

const fallbackBusiness = "negócio local";

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
  const toneProfile = randomItem(block.optionalToneProfiles ?? archetype.toneProfile);

  return {
    format: pickFormat(block),
    title: renderTemplate(randomItem(block.titleTemplates), businessName, archetype),
    body: renderTemplate(randomItem(block.bodyTemplates), businessName, archetype),
    cta: renderTemplate(randomItem(block.ctaTemplates), businessName, archetype),
    why: renderTemplate(block.whyItWorks, businessName, archetype),
    objective: renderTemplate(block.objective, businessName, archetype),
    bestUseCase: renderTemplate(block.bestUseCase, businessName, archetype),
    visualTip: renderTemplate(block.visualTip, businessName, archetype),
    tone: tones[toneProfile].name,
    impactLevel: block.impactLevel,
    strategyNote: renderTemplate(block.strategyNote, businessName, archetype),
    businessName,
    archetype: archetype.id,
    angle: block.angle,
    angleLabel: contentAngleLabels[block.angle],
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
