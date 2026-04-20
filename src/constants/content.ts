export type ContentIdea = {
  id: number;
  format: "REELS" | "POST" | "STORY";
  title: string;
  script: string;
  caption: string;
  cta: string;
  whyItWorks: string;
};

export const barberContentIdeas: ContentIdea[] = [
  {
    id: 1,
    format: "REELS",
    title: "O degradê que muda o rosto em 30 segundos",
    script:
      "Mostre o antes, corte rápido em três cenas e finalize com o resultado de frente e de lado.",
    caption:
      "Um degradê bem feito valoriza o formato do rosto e deixa o visual mais alinhado na hora.",
    cta: "Agende seu horário hoje.",
    whyItWorks:
      "Transformação visual prende atenção e prova o resultado sem precisar explicar demais.",
  },
  {
    id: 2,
    format: "POST",
    title: "Três sinais de que sua barba precisa de manutenção",
    script:
      "Liste falhas aparentes, fios sem direção e desenho perdendo definição. Use uma foto limpa do acabamento.",
    caption:
      "Barba bonita não é só deixar crescer. Manutenção certa mantém o desenho e melhora o visual.",
    cta: "Me chame no direct e reserve seu ajuste.",
    whyItWorks:
      "Educa o cliente e cria urgência com problemas que ele reconhece no espelho.",
  },
  {
    id: 3,
    format: "STORY",
    title: "Agenda de hoje com poucos horários",
    script:
      "Publique uma foto da cadeira pronta, adicione enquete e destaque os horários disponíveis.",
    caption:
      "Ainda tenho alguns horários hoje para corte e barba. Quer sair alinhado?",
    cta: "Responda este story com HORÁRIO.",
    whyItWorks:
      "Stories com resposta direta reduzem atrito e aceleram a conversa no WhatsApp ou direct.",
  },
  {
    id: 4,
    format: "REELS",
    title: "Antes e depois sem filtro",
    script:
      "Comece com o cliente chegando, mostre o processo em cortes curtos e termine com o giro final.",
    caption:
      "Sem filtro, sem truque. Só corte bem executado e acabamento no detalhe.",
    cta: "Salve este resultado para pedir no seu próximo corte.",
    whyItWorks:
      "Prova social visual aumenta confiança e facilita o cliente pedir algo parecido.",
  },
  {
    id: 5,
    format: "POST",
    title: "Qual corte combina com rotina corrida?",
    script:
      "Explique um corte prático, manutenção ideal e para quem ele funciona melhor.",
    caption:
      "Se você não quer perder tempo arrumando o cabelo todo dia, escolha um corte que trabalhe por você.",
    cta: "Comente PRÁTICO que eu te indico um estilo.",
    whyItWorks:
      "Fala com uma dor cotidiana e gera comentários com uma chamada simples.",
  },
  {
    id: 6,
    format: "STORY",
    title: "Bastidor do acabamento",
    script:
      "Grave cinco segundos da navalha, cinco segundos da escova e cinco segundos do resultado final.",
    caption:
      "O detalhe do acabamento é o que separa um corte comum de um corte bem feito.",
    cta: "Toque no link e marque seu horário.",
    whyItWorks:
      "Bastidores criam percepção de cuidado e aproximam o cliente do serviço.",
  },
  {
    id: 7,
    format: "REELS",
    title: "A tendência masculina que mais pedem aqui",
    script:
      "Mostre o corte finalizado e explique em uma frase por que ele está em alta.",
    caption:
      "Visual limpo, fácil de manter e com presença. Por isso esse corte virou pedido frequente.",
    cta: "Quer adaptar para seu cabelo? Fale comigo.",
    whyItWorks:
      "Tendência desperta curiosidade e posiciona a barbearia como atualizada.",
  },
  {
    id: 8,
    format: "POST",
    title: "Promoção relâmpago para novos clientes",
    script:
      "Use uma imagem do ambiente e texto curto com condição, prazo e como reservar.",
    caption:
      "Primeira visita com condição especial esta semana. Corte alinhado, atendimento pontual e resultado sem enrolação.",
    cta: "Envie PRIMEIRA VEZ no WhatsApp.",
    whyItWorks:
      "Oferta com prazo claro ajuda indecisos a tomarem uma decisão agora.",
  },
  {
    id: 9,
    format: "STORY",
    title: "Escolha o próximo conteúdo",
    script:
      "Crie uma enquete com duas opções: dica de barba ou cortes em alta.",
    caption:
      "O que você quer ver por aqui amanhã?",
    cta: "Vote na enquete.",
    whyItWorks:
      "Interação simples aumenta alcance e entrega conteúdo que o público já pediu.",
  },
  {
    id: 10,
    format: "REELS",
    title: "O erro que estraga seu corte em casa",
    script:
      "Mostre um erro comum ao pentear ou usar produto e ensine a correção em poucos segundos.",
    caption:
      "Às vezes o corte está bom, mas a finalização em casa derruba o visual. Ajuste isso hoje.",
    cta: "Salve para testar amanhã.",
    whyItWorks:
      "Dica prática gera salvamentos e mantém a barbearia presente fora do dia do corte.",
  },
];
