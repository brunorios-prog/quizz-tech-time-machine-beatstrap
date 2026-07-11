// ============================================================
//  TECH QUIZ — PAINEL DE CONTROLE
//  Edite este arquivo para ajustar textos, imagens,
//  perguntas e configurações gerais do jogo.
// ============================================================

// Tudo dentro de uma IIFE para não vazar "identidade", "cores",
// "config", "rodadas" e "resultado" como bindings globais — o único
// ponto de acesso global é window.QUIZ, montado no final do arquivo.
(function () {

// ── 1. IDENTIDADE ────────────────────────────────────────────
const identidade = {
  nomeProduto:  "Tech Time Machine",
  tagline:      "Você sabe quando a tecnologia mudou o mundo?",
  subtitulo:    "10 imagens. 10 momentos históricos. Descubra o ano e acerte o fato — teste seu conhecimento sobre os marcos que moldaram a tecnologia e o empreendedorismo global.",
  rodape:       "Um produto The Beatstrap · Todos os direitos reservados",
  totalRodadas: 8,
};


// ── 2. CORES — Identidade visual Beatstrap ───────────────────
const cores = {
  fundo:         "#070F1A",   // fundo escuro — clima de quiz
  superficie:    "#111827",   // cards e painéis
  superficie2:   "#1F2937",   // inputs e hover
  borda:         "#374151",   // linhas divisórias

  texto:         "#F9FAFB",   // texto principal
  textoMuted:    "#9CA3AF",   // texto secundário
  textoSuave:    "#6B7280",   // placeholders e hints

  roxo:          "#5B4FE8",   // acento principal Beatstrap
  roxoDim:       "#1E1B4B",   // fundo roxo escuro
  roxoClaro:     "#A5B4FC",   // roxo suave para textos sobre escuro

  verde:         "#10B981",   // acerto
  verdeDim:      "#064E3B",   // fundo acerto
  vermelho:      "#EF4444",   // erro
  vermelhoDim:   "#7F1D1D",   // fundo erro
  amarelo:       "#F59E0B",   // neutro / quase certo
  amareloDim:    "#78350F",   // fundo quase certo
};


// ── 3. CONFIGURAÇÕES DO JOGO ─────────────────────────────────
const config = {
  // Pontuação por acerto de ano (quanto mais próximo, mais pontos)
  pontuacaoAnoExato:    500,   // acertou o ano exato
  pontuacaoAno1ano:     400,   // errou por 1 ano
  pontuacaoAno2anos:    300,   // errou por 2 anos
  pontuacaoAno5anos:    150,   // errou por até 5 anos
  pontuacaoAno10anos:   50,    // errou por até 10 anos
  pontuacaoAnoErrou:    0,     // errou por mais de 10 anos

  // Pontuação por múltipla escolha
  pontuacaoMultipla:    500,   // acertou a múltipla escolha

  // Pontuação máxima possível por rodada
  pontuacaoMaxRodada:   1000,  // 500 (ano) + 500 (múltipla)
};


// ── 3B. SLIDER — Range único, igual para todas as rodadas ────
// A alça inicia sempre no centro matemático exato de min/max
// (calculado em runtime), sem representar um valor confirmado.
const sliderConfig = {
  min: 1970,
  max: 2026,
};


// ── 4. RODADAS ───────────────────────────────────────────────
// Para adicionar uma nova rodada, copie um bloco e ajuste os campos.
// imagem: caminho relativo à pasta /Imagens/ do repositório
const rodadas = [

  // ── RODADA 1 ──
  {
    id: 1,
    imagem:      "Imagens/apple-garagem-1976.jfif",
    imagemAlt:   "Steve Jobs e Steve Wozniak jovens, na garagem onde a Apple foi fundada",
    ano:         1976,

    // Pergunta de múltipla escolha
    pergunta:    "O que Jobs e Wozniak estavam construindo nesta garagem?",
    opcoes: [
      "O primeiro computador pessoal da Apple, o Apple I",
      "O protótipo do Macintosh",
      "Um sistema operacional para a IBM",
      "Um videogame chamado Breakout"
    ],
    correta: 0,

    // Revelado após o usuário responder
    curiosidade: "A garagem dos pais de Steve Jobs em Los Altos, Califórnia, é considerada o berço da Apple. Jobs e Wozniak montaram os primeiros 50 computadores Apple I à mão e os venderam por US$ 666,66 cada — Wozniak escolheu o preço por achar engraçado repetir os dígitos.",
  },

  // ── RODADA 2 ──
  {
    id: 2,
    imagem:      "Imagens/macintosh-1984.webp",
    imagemAlt:   "Steve Jobs e John Sculley no lançamento do Macintosh em 1984",
    ano:         1984,

    pergunta:    "Quem é o homem ao lado de Steve Jobs nesta imagem?",
    opcoes: [
      "Steve Wozniak, cofundador da Apple",
      "John Sculley, CEO da Apple na época",
      "Bill Gates, da Microsoft",
      "Jonathan Ive, designer-chefe da Apple"
    ],
    correta: 1,

    curiosidade: "John Sculley foi recrutado por Jobs da PepsiCo com a famosa frase: 'Você quer vender água com açúcar pelo resto da vida ou quer mudar o mundo?' Ironicamente, dois anos depois, Sculley liderou o conselho que demitiu Jobs da própria empresa que ele fundou.",
  },

  // ── RODADA 3 ──
  {
    id: 3,
    imagem:      "Imagens/microsoft-1981.webp",
    imagemAlt:   "Paul Allen e Bill Gates jovens, rodeados de computadores, na imagem oficial da Microsoft de 1981",
    ano:         1981,

    pergunta:    "O que a Microsoft havia acabado de licenciar para a IBM neste ano?",
    opcoes: [
      "O processador Intel 8086",
      "O sistema operacional MS-DOS",
      "O software Excel para planilhas",
      "O navegador Internet Explorer"
    ],
    correta: 1,

    curiosidade: "A Microsoft não criou o MS-DOS — comprou os direitos de um sistema chamado QDOS por US$ 50.000 e o licenciou para a IBM sem ceder a exclusividade. Essa decisão, considerada ingênua pela IBM na época, tornou a Microsoft a empresa mais valiosa do mundo décadas depois.",
  },

  // ── RODADA 4 ──
  {
    id: 4,
    imagem:      "Imagens/amazon-garagem-1994.jfif",
    imagemAlt:   "Jeff Bezos na garagem de sua casa em Bellevue, Washington, com a placa Amazon.com escrita à mão",
    ano:         1994,

    pergunta:    "O que a Amazon vendia exclusivamente quando foi fundada?",
    opcoes: [
      "Eletrônicos e gadgets",
      "Livros",
      "CDs e DVDs",
      "Softwares e jogos"
    ],
    correta: 1,

    curiosidade: "Bezos escolheu livros como primeiro produto porque havia mais títulos disponíveis do que qualquer loja física poderia estocar. Ele escreveu o plano de negócios no carro enquanto sua esposa MacKenzie dirigia de Nova York para Seattle — onde fundou a Amazon na garagem de casa.",
  },

  // ── RODADA 5 ──
  {
    id: 5,
    imagem:      "Imagens/google-interface-1998.webp",
    imagemAlt:   "Primeira interface do Google em 1998 — página quase em branco com o logo colorido e uma caixa de busca",
    ano:         1998,

    pergunta:    "Qual era o nome original do Google antes de ser renomeado?",
    opcoes: [
      "PageRank",
      "BackRub",
      "SearchNet",
      "WebCrawler"
    ],
    correta: 1,

    curiosidade: "Larry Page e Sergey Brin chamavam o projeto de 'BackRub' porque o algoritmo analisava os backlinks (links que apontavam para uma página) para determinar sua relevância. O nome Google vem de 'googol' — o número 1 seguido de 100 zeros — escolhido para representar a quantidade massiva de informação que queriam organizar.",
  },

  // ── RODADA 6 ──
  {
    id: 6,
    imagem:      "Imagens/facebook-harvard-2004.jfif",
    imagemAlt:   "Mark Zuckerberg jovem no quarto da república em Harvard, rodeado de computadores e monitores",
    ano:         2004,

    pergunta:    "Para quem o Facebook foi aberto quando foi lançado?",
    opcoes: [
      "Para qualquer pessoa com e-mail",
      "Apenas para estudantes de Harvard",
      "Para estudantes de universidades americanas",
      "Para funcionários de empresas de tecnologia"
    ],
    correta: 1,

    curiosidade: "O Facebook começou como 'TheFacebook', exclusivo para estudantes de Harvard. Em duas semanas, metade dos alunos havia criado um perfil. Só depois expandiu para outras universidades da Ivy League, depois para todas as universidades americanas, e finalmente para o mundo inteiro — em 2006.",
  },

  // ── RODADA 7 ──
  {
    id: 7,
    imagem:      "Imagens/iphone-macworld-2007.jpg",
    imagemAlt:   "Steve Jobs no palco do Macworld 2007, tirando o primeiro iPhone do bolso da calça jeans",
    ano:         2007,

    pergunta:    "Como Jobs descreveu o iPhone na apresentação deste dia?",
    opcoes: [
      "\"O computador mais avançado que já criamos\"",
      "\"Um iPod, um telefone e um comunicador de internet\"",
      "\"O dispositivo que vai substituir o laptop\"",
      "\"O futuro da comunicação humana\""
    ],
    correta: 1,

    curiosidade: "Jobs disse que a Apple estava lançando 'três produtos revolucionários': um iPod de tela widescreen com controles touch, um telefone celular revolucionário e um comunicador de internet. Ele repetiu a frase três vezes antes de revelar que eram todos o mesmo dispositivo — o iPhone. A plateia demorou alguns segundos para entender e explodir em aplausos.",
  },

  // ── RODADA 8 ──
  {
    id: 8,
    imagem:      "Imagens/me-at-the-zoo-2005.webp",
    imagemAlt:   "Jawed Karim em frente ao recinto dos elefantes no San Diego Zoo, cena do vídeo Me at the zoo",
    ano:         2005,

    pergunta:    "Do que se trata esta imagem histórica?",
    opcoes: [
      "Um vlog viral que antecedeu o TikTok",
      "O primeiro vídeo já publicado no YouTube",
      "Uma propaganda antiga de um zoológico americano",
      "O primeiro vídeo com mais de 1 bilhão de visualizações"
    ],
    correta: 1,

    curiosidade: "Esta é a imagem de Jawed Karim, cofundador do YouTube, no vídeo 'Me at the zoo', o primeiro vídeo já enviado à plataforma, publicado em 23 de abril de 2005, com apenas 19 segundos, filmado por seu amigo Yakov Lapitsky em frente aos elefantes do San Diego Zoo, sem nenhuma pretensão histórica na época, apenas um teste técnico da plataforma, que décadas depois se tornou um marco cultural da internet com centenas de milhões de visualizações.",
  },

];


// ── 5. TELA DE RESULTADO ─────────────────────────────────────
// Ícones monocromáticos (SVG inline, cor herdada via currentColor) —
// substituem os antigos emojis coloridos, seguindo a paleta Beatstrap.
const svgIcone = (path) =>
  `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;

const resultado = {
  faixas: [
    {
      minPontos:  0,
      maxPontos:  1999,
      titulo:     "Iniciante Digital",
      descricao:  "Você ainda está começando sua jornada pela história da tecnologia. Mas não se preocupe — os maiores fundadores também começaram do zero.",
      icone:      svgIcone('<circle cx="12" cy="12" r="9"></circle><circle cx="12" cy="12" r="3.5"></circle>'),
    },
    {
      minPontos:  2000,
      maxPontos:  3999,
      titulo:     "Curioso de Tecnologia",
      descricao:  "Você conhece alguns momentos marcantes, mas ainda há muita história para explorar. Continue mergulhando no ecossistema.",
      icone:      svgIcone('<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>'),
    },
    {
      minPontos:  4000,
      maxPontos:  5499,
      titulo:     "Entusiasta do Ecossistema",
      descricao:  "Você tem um bom conhecimento dos marcos que moldaram a tecnologia. Claramente acompanha o setor de perto.",
      icone:      svgIcone('<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>'),
    },
    {
      minPontos:  5500,
      maxPontos:  8000,
      titulo:     "Enciclopédia Tech",
      descricao:  "Impressionante. Você conhece a história da tecnologia como poucos. O ecossistema de startups agradece sua presença.",
      icone:      svgIcone('<circle cx="12" cy="8" r="6.5"></circle><polyline points="8.3 13.9 7 22 12 19.3 17 22 15.7 13.9"></polyline>'),
    },
  ],

  // Medalha do Desafio 1 (ano) para a rodada, calculada a partir da
  // pontuação obtida naquele desafio especificamente (não da rodada toda).
  medalhaAno: (pontosAno) => {
    if (pontosAno === 500) return '🥇';
    if (pontosAno >= 250)  return '🥈';
    if (pontosAno >= 50)   return '🥉';
    return '➖';
  },

  // Formata a linha de detalhamento de uma rodada para o texto de
  // compartilhamento (WhatsApp, LinkedIn, X, copiar link).
  linhaDetalhamento: function (numero, pontosAno, pontosObtidos, pontosMax, acertouPergunta) {
    const medalha = this.medalhaAno(pontosAno);
    return `Imagem ${numero}: ${pontosObtidos} / ${pontosMax} ${medalha}    - Pergunta: ${acertouPergunta ? '✅' : '❌'}`;
  },

  // Texto para compartilhamento nas redes
  compartilharTexto: (pontos, total, faixa, linhasDetalhamento) =>
    `Fiz ${pontos} de ${total} pontos no Tech Time Machine da @Beatstrap e fui classificado como "${faixa}"!\n\n${linhasDetalhamento.join('\n')}\n\nVocê consegue mais?`,

  compartilharUrl: "https://techtimemachine.beatstrap.com.br/",
};


// ── 6. EXPOSIÇÃO GLOBAL (sem ES Modules) ──────────────────────
window.QUIZ = { identidade, cores, config, rodadas, resultado, sliderConfig };

})();
