import type { ContentBlock } from "@/lib/types";

export const contentBlocks: ContentBlock[] = [
  {
    id: "transformacao-antes-depois",
    angle: "transformacao",
    compatibleArchetypes: ["beleza", "fitness", "pet", "casa_reforma"],
    formats: ["reels", "post", "story"],
    titleTemplates: [
      "O antes e depois que mostra o valor da {business}",
      "A transformacao que o cliente percebe na hora",
      "De problema visivel a resultado pronto em poucas cenas",
    ],
    bodyTemplates: [
      "Mostre a situacao inicial, revele 2 detalhes do processo e finalize com o resultado. Para {business}, esse formato prova valor sem precisar explicar demais.",
      "Abra com o antes, corte para o bastidor e termine com um close do resultado. A legenda deve reforcar o cuidado que existe por tras da entrega.",
    ],
    ctaTemplates: [
      "Quer um resultado assim? Chame no direct.",
      "Envie RESULTADO e veja o melhor horario.",
      "Salve para usar como referencia no seu proximo atendimento.",
    ],
    whyItWorks:
      "Transformacao cria prova visual rapida e reduz a duvida do cliente antes do contato.",
    optionalToneProfiles: ["aspiracional", "premium"],
  },
  {
    id: "bastidor-processo",
    angle: "bastidores",
    compatibleArchetypes: [
      "beleza",
      "alimentacao",
      "automotivo",
      "pet",
      "servico_local",
      "casa_reforma",
    ],
    formats: ["reels", "story"],
    titleTemplates: [
      "O detalhe que quase ninguem ve na {business}",
      "Por dentro do processo antes do resultado final",
      "Bastidor rapido: o cuidado que faz diferenca",
    ],
    bodyTemplates: [
      "Grave 3 cenas curtas: preparacao, execucao e revisao final. Mostre que existe metodo por tras do atendimento.",
      "Mostre a rotina real por tras da entrega e explique em uma frase por que esse detalhe melhora a experiencia.",
    ],
    ctaTemplates: [
      "Quer ver isso no seu atendimento? Fale com a gente.",
      "Responda este story com EU QUERO.",
      "Agende e sinta a diferenca no detalhe.",
    ],
    whyItWorks:
      "Bastidores aumentam confianca porque mostram criterio, cuidado e profissionalismo.",
    optionalToneProfiles: ["premium", "acolhedor", "tecnico"],
  },
  {
    id: "prova-social-cliente",
    angle: "prova_social",
    compatibleArchetypes: ["beleza", "saude", "varejo", "fitness", "servico_local", "educacao", "casa_reforma"],
    formats: ["post", "reels", "carrossel"],
    titleTemplates: [
      "O que um cliente percebeu depois de escolher a {business}",
      "Prova real: quando o resultado fala primeiro",
      "Antes de decidir, veja essa experiencia",
    ],
    bodyTemplates: [
      "Use um depoimento curto, uma foto ou um print autorizado. Conecte o relato a uma dor comum do publico.",
      "Mostre o contexto do cliente, a solucao entregue e o comentario final. Feche com uma chamada simples para conversar.",
    ],
    ctaTemplates: [
      "Quer entender se serve para voce? Chame no direct.",
      "Envie AVALIAR e receba uma orientacao.",
      "Fale com a gente para dar o primeiro passo.",
    ],
    whyItWorks:
      "Prova social transfere confianca e ajuda indecisos a se verem no mesmo resultado.",
    optionalToneProfiles: ["acolhedor", "direto"],
  },
  {
    id: "autoridade-mito",
    angle: "autoridade",
    compatibleArchetypes: ["saude", "automotivo", "servico_local", "educacao", "casa_reforma", "beleza"],
    formats: ["post", "carrossel", "reels"],
    titleTemplates: [
      "Um erro comum que custa caro para quem procura {business}",
      "O que voce precisa saber antes de contratar esse servico",
      "Mito rapido: nem sempre o mais barato resolve",
    ],
    bodyTemplates: [
      "Explique um erro frequente, mostre a consequencia e apresente o caminho correto em linguagem simples.",
      "Liste 3 pontos que o cliente deve observar antes de decidir. Termine oferecendo uma avaliacao ou conversa inicial.",
    ],
    ctaTemplates: [
      "Salve para nao esquecer na hora de decidir.",
      "Envie DUVIDA e fale com um especialista.",
      "Compartilhe com alguem que precisa saber disso.",
    ],
    whyItWorks:
      "Autoridade educa sem vender agressivamente e posiciona o negocio como escolha segura.",
    optionalToneProfiles: ["tecnico", "direto"],
  },
  {
    id: "promocao-com-prazo",
    angle: "promocao",
    compatibleArchetypes: ["beleza", "alimentacao", "varejo", "fitness", "educacao"],
    formats: ["story", "post"],
    titleTemplates: [
      "Condicao especial para quem chamar hoje",
      "Oferta da semana para conhecer a {business}",
      "Poucas vagas com condicao de entrada",
    ],
    bodyTemplates: [
      "Apresente a oferta, deixe claro para quem ela serve e coloque um prazo simples. Evite prometer demais.",
      "Use uma imagem direta do produto ou servico e destaque a acao que o cliente precisa tomar agora.",
    ],
    ctaTemplates: [
      "Envie QUERO no direct.",
      "Chame agora e confirme a disponibilidade.",
      "Clique no link e garanta sua condicao.",
    ],
    whyItWorks:
      "Prazo e clareza diminuem a procrastinacao sem depender de copy exagerada.",
    optionalToneProfiles: ["urgente", "direto"],
  },
  {
    id: "apetite-produto",
    angle: "apetite",
    compatibleArchetypes: ["alimentacao"],
    formats: ["reels", "story", "post"],
    titleTemplates: [
      "O pedido que resolve sua fome hoje",
      "Esse detalhe deixa o sabor impossivel de ignorar",
      "Se voce gosta de comida bem feita, veja isso",
    ],
    bodyTemplates: [
      "Mostre textura, preparo e finalizacao. Descreva o sabor com frases curtas e termine com chamada para pedido.",
      "Grave o produto sendo montado e destaque um ingrediente principal. O objetivo e ativar desejo imediato.",
    ],
    ctaTemplates: [
      "Peca agora pelo delivery.",
      "Envie CARDAPIO no WhatsApp.",
      "Marque alguem que pediria isso com voce.",
    ],
    whyItWorks:
      "Conteudo sensorial vende pela vontade imediata, especialmente em alimentacao.",
    optionalToneProfiles: ["direto", "urgente"],
  },
  {
    id: "produto-destaque",
    angle: "produto_destaque",
    compatibleArchetypes: ["alimentacao", "varejo", "pet"],
    formats: ["post", "story", "reels"],
    titleTemplates: [
      "O destaque da semana na {business}",
      "Se voce procura algo pratico, comece por aqui",
      "Um produto que merece entrar na sua lista",
    ],
    bodyTemplates: [
      "Mostre o produto em uso, detalhe o principal beneficio e explique rapidamente para quem ele e ideal.",
      "Use foto limpa, preco ou condicao se fizer sentido, e finalize com uma pergunta simples para gerar resposta.",
    ],
    ctaTemplates: [
      "Chame no direct para conferir disponibilidade.",
      "Envie PRODUTO para receber detalhes.",
      "Passe hoje e veja de perto.",
    ],
    whyItWorks:
      "Produto destacado facilita a decisao porque tira o cliente do excesso de opcoes.",
    optionalToneProfiles: ["premium", "direto"],
  },
  {
    id: "educacao-dica",
    angle: "educacao",
    compatibleArchetypes: ["saude", "automotivo", "fitness", "pet", "servico_local", "educacao"],
    formats: ["carrossel", "post", "reels"],
    titleTemplates: [
      "3 sinais de que voce precisa prestar atencao nisso",
      "Uma dica simples para evitar problema depois",
      "O que observar antes de marcar um atendimento",
    ],
    bodyTemplates: [
      "Liste 3 sinais, explique cada um em uma frase e conecte a uma acao preventiva.",
      "Ensine uma orientacao pratica que o cliente consiga aplicar hoje e convide para uma avaliacao se precisar.",
    ],
    ctaTemplates: [
      "Salve para consultar depois.",
      "Envie DUVIDA se quiser uma orientacao.",
      "Compartilhe com alguem que precisa desse cuidado.",
    ],
    whyItWorks:
      "Educacao gera valor antes da venda e cria autoridade sem parecer propaganda.",
    optionalToneProfiles: ["tecnico", "acolhedor"],
  },
  {
    id: "novidade-lancamento",
    angle: "novidade",
    compatibleArchetypes: ["beleza", "alimentacao", "varejo"],
    formats: ["story", "post", "reels"],
    titleTemplates: [
      "Novidade chegando na {business}",
      "Tem algo novo para quem acompanha a gente",
      "Primeiro olhar: o que acabou de chegar",
    ],
    bodyTemplates: [
      "Mostre a novidade em poucos detalhes, explique para quem ela combina e convide para experimentar.",
      "Use uma cena de revelacao e destaque o principal motivo para o cliente prestar atencao agora.",
    ],
    ctaTemplates: [
      "Quer saber primeiro? Chame no direct.",
      "Responda NOVIDADE para receber detalhes.",
      "Passe para conferir enquanto ainda tem.",
    ],
    whyItWorks:
      "Novidade ativa curiosidade e da um motivo concreto para o cliente voltar a interagir.",
    optionalToneProfiles: ["premium", "urgente"],
  },
  {
    id: "confianca-checklist",
    angle: "confianca",
    compatibleArchetypes: ["saude", "automotivo", "pet", "servico_local", "casa_reforma"],
    formats: ["carrossel", "post"],
    titleTemplates: [
      "Checklist rapido antes de escolher quem vai cuidar disso",
      "Como saber se voce esta em boas maos",
      "O minimo que um bom atendimento precisa ter",
    ],
    bodyTemplates: [
      "Mostre 4 criterios de escolha: atendimento, processo, transparencia e pos-venda. Feche com convite sem pressao.",
      "Explique o que o cliente deve perguntar antes de contratar e por que isso evita dor de cabeca.",
    ],
    ctaTemplates: [
      "Salve antes de contratar.",
      "Envie CHECKLIST para conversar com a gente.",
      "Fale conosco e entenda nosso processo.",
    ],
    whyItWorks:
      "Checklist organiza a decisao e reduz inseguranca em compras que exigem confianca.",
    optionalToneProfiles: ["tecnico", "acolhedor"],
  },
  {
    id: "rotina-agenda",
    angle: "rotina",
    compatibleArchetypes: ["beleza", "saude", "alimentacao", "varejo", "fitness", "pet", "educacao"],
    formats: ["story", "reels"],
    titleTemplates: [
      "Agenda aberta para quem quer resolver isso hoje",
      "Um recado rapido da rotina da {business}",
      "Hoje e um bom dia para colocar isso em ordem",
    ],
    bodyTemplates: [
      "Mostre a rotina real, destaque horarios ou disponibilidade e deixe o caminho de contato muito claro.",
      "Use um story simples com enquete ou caixa de pergunta para abrir conversa com quem esta quase decidindo.",
    ],
    ctaTemplates: [
      "Responda este story com HORARIO.",
      "Chame no WhatsApp e confirme disponibilidade.",
      "Clique no link para falar com a gente.",
    ],
    whyItWorks:
      "Rotina aproxima o publico e transforma disponibilidade em oportunidade de contato.",
    optionalToneProfiles: ["direto", "urgente"],
  },
  {
    id: "resultado-metrica",
    angle: "resultado",
    compatibleArchetypes: ["beleza", "fitness", "automotivo", "educacao", "casa_reforma", "saude"],
    formats: ["post", "reels", "carrossel"],
    titleTemplates: [
      "O resultado que vale mais do que promessa",
      "Veja o que mudou depois do processo certo",
      "Quando o metodo aparece no resultado",
    ],
    bodyTemplates: [
      "Mostre o ponto de partida, o processo aplicado e o resultado final. Use linguagem simples e visual forte.",
      "Explique o que foi feito, por que foi feito e qual foi a diferenca percebida no final.",
    ],
    ctaTemplates: [
      "Quer avaliar seu caso? Fale com a gente.",
      "Envie RESULTADO e entenda o proximo passo.",
      "Salve para comparar depois.",
    ],
    whyItWorks:
      "Resultado concreto torna a promessa mais crivel e aproxima o cliente da decisao.",
    optionalToneProfiles: ["aspiracional", "tecnico"],
  },
  {
    id: "autoridade-pergunta",
    angle: "autoridade",
    compatibleArchetypes: ["saude", "educacao", "servico_local", "automotivo"],
    formats: ["story", "post"],
    titleTemplates: [
      "Pergunta que todo cliente deveria fazer antes de escolher",
      "Antes de contratar, pergunte isso",
      "Uma pergunta simples que evita escolha errada",
    ],
    bodyTemplates: [
      "Apresente a pergunta, explique por que ela importa e responda com base no seu processo profissional.",
      "Transforme uma duvida comum em orientacao clara. Isso mostra dominio sem precisar vender diretamente.",
    ],
    ctaTemplates: [
      "Envie sua pergunta no direct.",
      "Quer uma resposta para o seu caso? Chame a gente.",
      "Salve para lembrar quando precisar.",
    ],
    whyItWorks:
      "Perguntas bem escolhidas demonstram criterio e criam uma conversa consultiva.",
    optionalToneProfiles: ["tecnico", "direto"],
  },
  {
    id: "comparativo-escolha",
    angle: "educacao",
    compatibleArchetypes: ["varejo", "alimentacao", "fitness", "casa_reforma", "servico_local"],
    formats: ["carrossel", "post"],
    titleTemplates: [
      "Como escolher a melhor opcao para voce",
      "Comparativo rapido para decidir sem erro",
      "Nem toda opcao serve para o mesmo objetivo",
    ],
    bodyTemplates: [
      "Compare duas ou tres alternativas e explique para quem cada uma funciona melhor.",
      "Monte uma lista simples com criterio, indicacao e erro comum. Feche orientando o cliente a pedir ajuda.",
    ],
    ctaTemplates: [
      "Envie ESCOLHER para receber uma indicacao.",
      "Comente sua duvida que a gente responde.",
      "Salve antes de decidir.",
    ],
    whyItWorks:
      "Comparativo reduz indecisao e ajuda o cliente a pedir recomendacao personalizada.",
    optionalToneProfiles: ["direto", "tecnico"],
  },
  {
    id: "historia-cliente",
    angle: "prova_social",
    compatibleArchetypes: ["pet", "beleza", "fitness", "educacao", "servico_local", "saude"],
    formats: ["reels", "post"],
    titleTemplates: [
      "A historia por tras desse atendimento",
      "Nao e so servico: e o que muda depois",
      "Um caso real para mostrar como funciona",
    ],
    bodyTemplates: [
      "Conte a situacao inicial, a decisao tomada e o resultado percebido. Mantenha detalhes sensiveis fora do post.",
      "Use uma narrativa curta com inicio, meio e fim. O objetivo e fazer o publico se reconhecer no caso.",
    ],
    ctaTemplates: [
      "Quer conversar sobre o seu caso? Chame no direct.",
      "Envie HISTORIA e fale com a gente.",
      "Compartilhe com alguem que precisa desse cuidado.",
    ],
    whyItWorks:
      "Historias criam empatia e tornam o valor do servico mais facil de entender.",
    optionalToneProfiles: ["acolhedor", "aspiracional"],
  },
  {
    id: "erro-evitavel",
    angle: "confianca",
    compatibleArchetypes: ["automotivo", "saude", "casa_reforma", "servico_local", "pet"],
    formats: ["reels", "carrossel", "post"],
    titleTemplates: [
      "O erro que muita gente so percebe tarde demais",
      "Isso parece pequeno, mas pode virar problema",
      "Evite esse erro antes de gastar mais",
    ],
    bodyTemplates: [
      "Mostre o erro, explique a consequencia e apresente a forma correta de resolver ou prevenir.",
      "Use uma cena simples do problema e uma explicacao direta. Termine convidando para uma avaliacao.",
    ],
    ctaTemplates: [
      "Envie AVALIAR se quiser evitar esse problema.",
      "Salve para nao cair nesse erro.",
      "Chame a gente antes de decidir.",
    ],
    whyItWorks:
      "Alertas uteis aumentam percepcao de valor e posicionam o negocio como protetor da decisao do cliente.",
    optionalToneProfiles: ["tecnico", "direto"],
  },
  {
    id: "desejo-identidade",
    angle: "resultado",
    compatibleArchetypes: ["beleza", "fitness", "varejo"],
    formats: ["reels", "post", "story"],
    titleTemplates: [
      "O detalhe que muda como voce se sente",
      "Mais do que visual: presenca",
      "Quando a escolha combina com sua rotina",
    ],
    bodyTemplates: [
      "Associe o produto ou servico a autoestima, praticidade e identidade. Mostre uma cena final forte.",
      "Fale menos de caracteristicas e mais da sensacao depois da escolha certa.",
    ],
    ctaTemplates: [
      "Quer encontrar sua melhor opcao? Chame a gente.",
      "Envie ESTILO para receber uma sugestao.",
      "Salve para testar essa ideia.",
    ],
    whyItWorks:
      "Desejo de identidade vende quando o cliente consegue imaginar a versao melhor de si mesmo.",
    optionalToneProfiles: ["aspiracional", "premium"],
  },
];
