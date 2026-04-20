import type { ContentBlock } from "@/lib/types";

export const contentBlocks: ContentBlock[] = [
  {
    id: "transformacao-antes-depois",
    angle: "transformacao",
    compatibleArchetypes: ["beleza", "fitness", "pet", "casa_reforma"],
    formats: ["reels", "post", "story"],
    titleTemplates: [
      "O antes e depois que mostra o valor da {business}",
      "A transformação que o cliente percebe na hora",
      "De problema visível a resultado pronto em poucas cenas",
    ],
    bodyTemplates: [
      "Mostre a situação inicial, revele dois detalhes do processo e finalize com o resultado. Para {business}, esse formato prova valor antes mesmo do cliente pedir preço.",
      "Abra com o antes, corte para o bastidor e termine com um close do resultado. A legenda deve reforçar o cuidado que existe por trás da entrega.",
    ],
    ctaTemplates: [
      "Quer um resultado assim? Chame no direct e veja o melhor horário.",
      "Envie RESULTADO e receba uma sugestão para o seu caso.",
      "Salve para usar como referência no seu próximo atendimento.",
    ],
    whyItWorks:
      "Transformação cria prova visual rápida, reduz dúvida e torna o benefício mais fácil de entender sem uma explicação longa.",
    objective: "Gerar desejo e aumentar pedidos de orçamento ou agendamento",
    bestUseCase: "Ideal para publicar no fim da tarde ou antes dos horários de maior procura.",
    visualTip: "Use o mesmo enquadramento no antes e depois para deixar a mudança mais evidente.",
    strategyNote:
      "Funciona bem para negócios que precisam mostrar resultado concreto antes de pedir uma ação do cliente.",
    impactLevel: "alto",
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
      "O detalhe que quase ninguém vê na {business}",
      "Por dentro do processo antes do resultado final",
      "Bastidor rápido: o cuidado que faz diferença",
    ],
    bodyTemplates: [
      "Grave três cenas curtas: preparação, execução e revisão final. Mostre que existe método por trás do atendimento.",
      "Mostre a rotina real por trás da entrega e explique em uma frase por que esse detalhe melhora a experiência do cliente.",
    ],
    ctaTemplates: [
      "Quer ver esse cuidado no seu atendimento? Fale com a gente.",
      "Responda este story com EU QUERO.",
      "Agende e sinta a diferença no detalhe.",
    ],
    whyItWorks:
      "Bastidores aumentam confiança porque tornam visível o critério, o cuidado e o profissionalismo por trás da entrega.",
    objective: "Aumentar confiança e percepção de valor",
    bestUseCase: "Bom para dias de rotina real, agenda em movimento ou produção acontecendo.",
    visualTip: "Mostre mãos, ferramentas, preparação e revisão final em cortes rápidos.",
    strategyNote:
      "Esse conteúdo ajuda o cliente a perceber que não está comprando apenas o resultado, mas também o processo.",
    impactLevel: "medio",
    optionalToneProfiles: ["premium", "acolhedor", "tecnico"],
  },
  {
    id: "prova-social-cliente",
    angle: "prova_social",
    compatibleArchetypes: [
      "beleza",
      "saude",
      "varejo",
      "fitness",
      "servico_local",
      "educacao",
      "casa_reforma",
      "pet",
    ],
    formats: ["post", "reels", "carrossel"],
    titleTemplates: [
      "O que um cliente percebeu depois de escolher a {business}",
      "Prova real: quando o resultado fala primeiro",
      "Antes de decidir, veja esta experiência",
    ],
    bodyTemplates: [
      "Use um depoimento curto, uma foto ou um print autorizado. Conecte o relato a uma dor comum do público e mostre o próximo passo.",
      "Mostre o contexto do cliente, a solução entregue e o comentário final. Feche com uma chamada simples para conversar.",
    ],
    ctaTemplates: [
      "Quer entender se serve para você? Chame no direct.",
      "Envie AVALIAR e receba uma orientação inicial.",
      "Fale com a gente para dar o primeiro passo com segurança.",
    ],
    whyItWorks:
      "Prova social transfere confiança, reduz risco percebido e ajuda indecisos a se imaginarem no mesmo resultado.",
    objective: "Reduzir insegurança antes da compra",
    bestUseCase: "Use depois de um atendimento bem-sucedido, entrega finalizada ou feedback positivo.",
    visualTip: "Prefira prints curtos, fotos autorizadas e contexto visual limpo.",
    strategyNote:
      "Esse tipo de conteúdo tende a funcionar bem para negócios que dependem de credibilidade e recomendação.",
    impactLevel: "alto",
    optionalToneProfiles: ["acolhedor", "direto"],
  },
  {
    id: "autoridade-mito",
    angle: "autoridade",
    compatibleArchetypes: ["saude", "automotivo", "servico_local", "educacao", "casa_reforma", "beleza"],
    formats: ["post", "carrossel", "reels"],
    titleTemplates: [
      "Um erro comum que custa caro para quem procura {business}",
      "O que você precisa saber antes de contratar esse serviço",
      "Mito rápido: nem sempre o mais barato resolve",
    ],
    bodyTemplates: [
      "Explique um erro frequente, mostre a consequência e apresente o caminho correto em linguagem simples.",
      "Liste três pontos que o cliente deve observar antes de decidir. Termine oferecendo uma avaliação ou conversa inicial.",
    ],
    ctaTemplates: [
      "Salve para não esquecer na hora de decidir.",
      "Envie DÚVIDA e fale com um especialista.",
      "Compartilhe com alguém que precisa saber disso.",
    ],
    whyItWorks:
      "Autoridade educa sem vender de forma agressiva e posiciona o negócio como uma escolha mais segura.",
    objective: "Construir autoridade antes da oferta",
    bestUseCase: "Ideal para carrossel educativo ou vídeo curto com explicação direta.",
    visualTip: "Use capa com pergunta forte e slides com frases curtas.",
    strategyNote:
      "Ótimo para clientes que ainda estão pesquisando e precisam sentir segurança antes do contato.",
    impactLevel: "alto",
    optionalToneProfiles: ["tecnico", "direto"],
  },
  {
    id: "venda-direta-agendamento",
    angle: "venda_direta",
    compatibleArchetypes: ["beleza", "alimentacao", "varejo", "fitness", "servico_local", "casa_reforma"],
    formats: ["story", "post"],
    titleTemplates: [
      "Hoje é um bom dia para resolver isso com a {business}",
      "Se você estava esperando um sinal, aqui está",
      "A forma mais simples de começar com a {business}",
    ],
    bodyTemplates: [
      "Mostre a oferta principal, diga para quem ela é indicada e explique exatamente como chamar. Sem rodeio: uma promessa clara e um próximo passo.",
      "Use uma imagem forte do serviço ou produto, destaque o benefício principal e deixe a chamada fácil de responder.",
    ],
    ctaTemplates: [
      "Envie QUERO e eu te explico o melhor caminho.",
      "Chame agora e confirme a disponibilidade.",
      "Clique no link e escolha o melhor horário.",
    ],
    whyItWorks:
      "Venda direta funciona quando a intenção já existe. Ela remove fricção e transforma interesse em conversa.",
    objective: "Converter pessoas prontas para comprar",
    bestUseCase: "Use em dias com agenda disponível, estoque ativo ou meta de atendimento.",
    visualTip: "Coloque o benefício principal na primeira linha e deixe o CTA muito visível.",
    strategyNote:
      "É o bloco mais indicado para transformar atenção acumulada em contato comercial.",
    impactLevel: "alto",
    optionalToneProfiles: ["direto", "urgente"],
  },
  {
    id: "promocao-com-prazo",
    angle: "promocao",
    compatibleArchetypes: ["beleza", "alimentacao", "varejo", "fitness", "educacao"],
    formats: ["story", "post"],
    titleTemplates: [
      "Condição especial para quem chamar hoje",
      "Oferta da semana para conhecer a {business}",
      "Poucas vagas com condição de entrada",
    ],
    bodyTemplates: [
      "Apresente a oferta, deixe claro para quem ela serve e coloque um prazo simples. Evite prometer demais; foque no benefício real.",
      "Use uma imagem direta do produto ou serviço e destaque a ação que o cliente precisa tomar agora.",
    ],
    ctaTemplates: [
      "Envie QUERO no direct.",
      "Chame agora e confirme a disponibilidade.",
      "Clique no link e garanta sua condição.",
    ],
    whyItWorks:
      "Prazo, clareza e limite de disponibilidade diminuem procrastinação sem depender de copy exagerada.",
    objective: "Acelerar decisões de compra",
    bestUseCase: "Ideal para datas específicas, baixa ocupação ou campanha curta.",
    visualTip: "Use fundo limpo, valor/condição em destaque e uma instrução clara.",
    strategyNote:
      "Promoção funciona melhor quando parece uma oportunidade organizada, não um desconto desesperado.",
    impactLevel: "medio",
    optionalToneProfiles: ["urgente", "direto"],
  },
  {
    id: "apetite-produto",
    angle: "apetite",
    compatibleArchetypes: ["alimentacao"],
    formats: ["reels", "story", "post"],
    titleTemplates: [
      "O pedido que resolve sua fome hoje",
      "Esse detalhe deixa o sabor impossível de ignorar",
      "Se você gosta de comida bem feita, veja isso",
    ],
    bodyTemplates: [
      "Mostre textura, preparo e finalização. Descreva o sabor com frases curtas e termine com chamada para pedido.",
      "Grave o produto sendo montado e destaque um ingrediente principal. O objetivo é ativar desejo imediato.",
    ],
    ctaTemplates: [
      "Peça agora pelo delivery.",
      "Envie CARDÁPIO no WhatsApp.",
      "Marque alguém que pediria isso com você.",
    ],
    whyItWorks:
      "Conteúdo sensorial vende pela vontade imediata, especialmente quando aparece perto do horário de decisão.",
    objective: "Gerar pedidos no curto prazo",
    bestUseCase: "Publique antes do almoço, no fim da tarde ou no começo da noite.",
    visualTip: "Use close de textura, vapor, corte, molho ou montagem.",
    strategyNote:
      "Para alimentação, o visual precisa fazer o cliente sentir que pedir agora é a decisão óbvia.",
    impactLevel: "alto",
    optionalToneProfiles: ["direto", "urgente"],
  },
  {
    id: "produto-destaque",
    angle: "produto_destaque",
    compatibleArchetypes: ["alimentacao", "varejo", "pet"],
    formats: ["post", "story", "reels"],
    titleTemplates: [
      "O destaque da semana na {business}",
      "Se você procura algo prático, comece por aqui",
      "Um produto que merece entrar na sua lista",
    ],
    bodyTemplates: [
      "Mostre o produto em uso, detalhe o principal benefício e explique rapidamente para quem ele é ideal.",
      "Use foto limpa, preço ou condição se fizer sentido, e finalize com uma pergunta simples para gerar resposta.",
    ],
    ctaTemplates: [
      "Chame no direct para conferir disponibilidade.",
      "Envie PRODUTO para receber detalhes.",
      "Passe hoje e veja de perto.",
    ],
    whyItWorks:
      "Produto destacado facilita a decisão porque tira o cliente do excesso de opções e orienta a escolha.",
    objective: "Fazer um produto específico receber atenção",
    bestUseCase: "Use quando houver novidade, reposição de estoque ou item com boa margem.",
    visualTip: "Fotografe o produto em contexto de uso, não apenas isolado.",
    strategyNote:
      "Ajuda a transformar catálogo amplo em recomendação simples, o que aumenta resposta.",
    impactLevel: "medio",
    optionalToneProfiles: ["premium", "direto"],
  },
  {
    id: "educacao-dica",
    angle: "educacao",
    compatibleArchetypes: ["saude", "automotivo", "fitness", "pet", "servico_local", "educacao"],
    formats: ["carrossel", "post", "reels"],
    titleTemplates: [
      "Três sinais de que você precisa prestar atenção nisso",
      "Uma dica simples para evitar problema depois",
      "O que observar antes de marcar um atendimento",
    ],
    bodyTemplates: [
      "Liste três sinais, explique cada um em uma frase e conecte tudo a uma ação preventiva.",
      "Ensine uma orientação prática que o cliente consiga aplicar hoje e convide para uma avaliação se precisar.",
    ],
    ctaTemplates: [
      "Salve para consultar depois.",
      "Envie DÚVIDA se quiser uma orientação.",
      "Compartilhe com alguém que precisa desse cuidado.",
    ],
    whyItWorks:
      "Educação gera valor antes da venda e cria autoridade sem parecer propaganda.",
    objective: "Atrair clientes ainda em fase de pesquisa",
    bestUseCase: "Bom para início de semana, quando o público planeja decisões e cuidados.",
    visualTip: "Use títulos curtos por slide e uma imagem simples de apoio.",
    strategyNote:
      "Conteúdos educativos criam reciprocidade e tornam a abordagem comercial mais natural depois.",
    impactLevel: "medio",
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
      "Use uma cena de revelação e destaque o principal motivo para o cliente prestar atenção agora.",
    ],
    ctaTemplates: [
      "Quer saber primeiro? Chame no direct.",
      "Responda NOVIDADE para receber detalhes.",
      "Passe para conferir enquanto ainda tem.",
    ],
    whyItWorks:
      "Novidade ativa curiosidade e dá um motivo concreto para o cliente voltar a interagir.",
    objective: "Reativar interesse com algo novo",
    bestUseCase: "Use no dia da chegada do produto, serviço novo ou atualização de cardápio.",
    visualTip: "Faça uma revelação gradual: detalhe primeiro, produto completo depois.",
    strategyNote:
      "Funciona porque cria uma razão simples para o público prestar atenção novamente.",
    impactLevel: "medio",
    optionalToneProfiles: ["premium", "urgente"],
  },
  {
    id: "confianca-checklist",
    angle: "confianca",
    compatibleArchetypes: ["saude", "automotivo", "pet", "servico_local", "casa_reforma"],
    formats: ["carrossel", "post"],
    titleTemplates: [
      "Checklist rápido antes de escolher quem vai cuidar disso",
      "Como saber se você está em boas mãos",
      "O mínimo que um bom atendimento precisa ter",
    ],
    bodyTemplates: [
      "Mostre quatro critérios de escolha: atendimento, processo, transparência e pós-venda. Feche com convite sem pressão.",
      "Explique o que o cliente deve perguntar antes de contratar e por que isso evita dor de cabeça.",
    ],
    ctaTemplates: [
      "Salve antes de contratar.",
      "Envie CHECKLIST para conversar com a gente.",
      "Fale conosco e entenda nosso processo.",
    ],
    whyItWorks:
      "Checklist organiza a decisão e reduz insegurança em compras que exigem confiança.",
    objective: "Reduzir risco percebido",
    bestUseCase: "Ideal para clientes que pesquisam bastante antes de chamar.",
    visualTip: "Use ícones simples e uma lista de critérios fáceis de comparar.",
    strategyNote:
      "Esse bloco transforma experiência profissional em critérios claros de escolha.",
    impactLevel: "alto",
    optionalToneProfiles: ["tecnico", "acolhedor"],
  },
  {
    id: "rotina-agenda",
    angle: "rotina",
    compatibleArchetypes: ["beleza", "saude", "alimentacao", "varejo", "fitness", "pet", "educacao"],
    formats: ["story", "reels"],
    titleTemplates: [
      "Agenda aberta para quem quer resolver isso hoje",
      "Um recado rápido da rotina da {business}",
      "Hoje é um bom dia para colocar isso em ordem",
    ],
    bodyTemplates: [
      "Mostre a rotina real, destaque horários ou disponibilidade e deixe o caminho de contato muito claro.",
      "Use um story simples com enquete ou caixa de pergunta para abrir conversa com quem está quase decidindo.",
    ],
    ctaTemplates: [
      "Responda este story com HORÁRIO.",
      "Chame no WhatsApp e confirme disponibilidade.",
      "Clique no link para falar com a gente.",
    ],
    whyItWorks:
      "Rotina aproxima o público e transforma disponibilidade em oportunidade de contato.",
    objective: "Abrir conversas rápidas",
    bestUseCase: "Use no começo do expediente ou quando houver horários vagos.",
    visualTip: "Mostre ambiente, agenda, cadeira pronta, vitrine ou equipe em movimento.",
    strategyNote:
      "A rotina cria proximidade e dá ao cliente uma desculpa simples para chamar.",
    impactLevel: "medio",
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
      "Quando o método aparece no resultado",
    ],
    bodyTemplates: [
      "Mostre o ponto de partida, o processo aplicado e o resultado final. Use linguagem simples e visual forte.",
      "Explique o que foi feito, por que foi feito e qual foi a diferença percebida no final.",
    ],
    ctaTemplates: [
      "Quer avaliar seu caso? Fale com a gente.",
      "Envie RESULTADO e entenda o próximo passo.",
      "Salve para comparar depois.",
    ],
    whyItWorks:
      "Resultado concreto torna a promessa mais crível e aproxima o cliente da decisão.",
    objective: "Provar capacidade de entrega",
    bestUseCase: "Use depois de um caso concluído, turma finalizada ou atendimento com boa evidência.",
    visualTip: "Mostre dado, evolução, acabamento ou comparação visual sem exagerar.",
    strategyNote:
      "Esse conteúdo dá substância à promessa e ajuda o público a confiar no método.",
    impactLevel: "alto",
    optionalToneProfiles: ["aspiracional", "tecnico"],
  },
  {
    id: "curiosidade-pergunta",
    angle: "curiosidade",
    compatibleArchetypes: ["saude", "educacao", "alimentacao"],
    formats: ["reels", "story", "post"],
    titleTemplates: [
      "Você sabe por que isso acontece?",
      "A pergunta que quase ninguém faz antes de decidir",
      "O detalhe curioso que muda a forma de escolher",
    ],
    bodyTemplates: [
      "Comece com uma pergunta simples, dê uma resposta curta e conecte a explicação ao serviço da {business}.",
      "Mostre um detalhe pouco percebido e explique por que ele importa na decisão do cliente.",
    ],
    ctaTemplates: [
      "Quer que eu explique no seu caso? Chame no direct.",
      "Responda com DÚVIDA que a gente continua a conversa.",
      "Salve para lembrar quando for decidir.",
    ],
    whyItWorks:
      "Curiosidade prende atenção sem parecer venda e abre espaço para uma explicação estratégica.",
    objective: "Aumentar retenção e gerar conversa",
    bestUseCase: "Ideal para stories e vídeos curtos com uma pergunta na primeira frase.",
    visualTip: "Use texto grande na tela com a pergunta principal.",
    strategyNote:
      "Funciona bem quando o público não sabe exatamente o que precisa perguntar antes de comprar.",
    impactLevel: "medio",
    optionalToneProfiles: ["tecnico", "acolhedor"],
  },
  {
    id: "urgencia-disponibilidade",
    angle: "urgencia",
    compatibleArchetypes: ["alimentacao", "automotivo"],
    formats: ["story", "post"],
    titleTemplates: [
      "Últimas unidades ou horários do dia",
      "Hoje ainda dá tempo de resolver",
      "Disponibilidade limitada para quem chamar agora",
    ],
    bodyTemplates: [
      "Informe a disponibilidade real, explique o benefício de agir hoje e deixe claro como reservar ou pedir.",
      "Use uma mensagem curta com prazo, quantidade ou horário. A urgência deve ser objetiva e verdadeira.",
    ],
    ctaTemplates: [
      "Envie AGORA para confirmar.",
      "Chame no WhatsApp e reserve.",
      "Responda este story para garantir.",
    ],
    whyItWorks:
      "Urgência funciona quando se baseia em disponibilidade real e dá ao cliente um motivo claro para não adiar.",
    objective: "Acelerar respostas imediatas",
    bestUseCase: "Use quando houver lote, horário, agenda ou estoque realmente limitado.",
    visualTip: "Mostre a quantidade, agenda ou produto disponível de forma simples.",
    strategyNote:
      "Esse bloco cria movimento comercial sem parecer forçado quando a limitação é concreta.",
    impactLevel: "alto",
    optionalToneProfiles: ["urgente", "direto"],
  },
  {
    id: "objecao-preco",
    angle: "objecao",
    compatibleArchetypes: ["beleza", "fitness", "varejo", "saude", "servico_local", "educacao", "casa_reforma", "automotivo"],
    formats: ["carrossel", "post", "reels"],
    titleTemplates: [
      "Antes de comparar preço, compare isto",
      "O barato pode sair caro quando esse detalhe fica de fora",
      "Como saber se vale a pena investir na {business}",
    ],
    bodyTemplates: [
      "Explique o que entra na entrega, quais riscos uma escolha ruim evita e por que o valor precisa ser analisado junto com o resultado.",
      "Compare preço, processo e segurança. Mostre que a decisão mais barata nem sempre é a mais econômica.",
    ],
    ctaTemplates: [
      "Envie VALOR e entenda o que está incluso.",
      "Chame para comparar opções com clareza.",
      "Salve antes de decidir apenas pelo preço.",
    ],
    whyItWorks:
      "Quebra de objeção muda a conversa de preço para valor, processo e segurança da decisão.",
    objective: "Defender valor sem parecer defensivo",
    bestUseCase: "Use quando o público costuma pedir preço antes de entender a entrega.",
    visualTip: "Faça um comparativo simples entre preço, risco e resultado esperado.",
    strategyNote:
      "Esse conteúdo prepara o cliente para uma conversa mais qualificada no direct ou WhatsApp.",
    impactLevel: "alto",
    optionalToneProfiles: ["direto", "premium", "tecnico"],
  },
  {
    id: "engajamento-local",
    angle: "engajamento_local",
    compatibleArchetypes: ["alimentacao", "varejo", "pet", "servico_local"],
    formats: ["story", "post"],
    titleTemplates: [
      "Quem é daqui vai entender",
      "Uma pergunta rápida para quem mora perto da {business}",
      "Ajude a gente a escolher o próximo destaque",
    ],
    bodyTemplates: [
      "Faça uma pergunta simples ligada ao bairro, à rotina local ou à preferência do público. Depois conecte a resposta a uma oferta ou conteúdo futuro.",
      "Use enquete, caixa de pergunta ou comentário. O foco é criar conversa com quem pode comprar localmente.",
    ],
    ctaTemplates: [
      "Responda aqui e ajude a escolher.",
      "Comente sua opção preferida.",
      "Marque alguém da região que também vai gostar.",
    ],
    whyItWorks:
      "Engajamento local aumenta proximidade e faz o algoritmo encontrar pessoas com mais chance de comprar perto.",
    objective: "Aumentar conversa com público da região",
    bestUseCase: "Use em stories, datas locais, eventos do bairro ou decisões de cardápio/estoque.",
    visualTip: "Mostre fachada, rua, balcão, equipe ou referência local reconhecível.",
    strategyNote:
      "Esse conteúdo cria comunidade e aproxima pessoas que já têm barreira logística menor para comprar.",
    impactLevel: "medio",
    optionalToneProfiles: ["acolhedor", "direto"],
  },
];
