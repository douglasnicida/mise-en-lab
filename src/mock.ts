import linguica from './assets/images/members/linguica.jpeg';
import rose from './assets/images/members/rose.jpeg';
import julia from './assets/images/members/julia.jpeg';
import gabriella from './assets/images/members/gabi.jpeg';

import salad from './assets/images/salad/salad.jpeg';
import mise_salad from './assets/images/salad/mise-en-place-salad.jpeg';


/**
 * DADOS DO SITE — nutri-unicamp
 *
 * Substitua os placeholders abaixo pelos dados reais do grupo.
 * Cada objeto representa um item que aparece no site.
 */

export const PROJECT_NAME = 'Mise En Lab';

// ==========================================
// MEMBROS DO GRUPO
// Substitua com os dados reais de cada integrante
// ==========================================
export const membros = [
    {
      id: 1,
      nome: 'Gabriella Lunai',
      papel: '---',
      bio: '',
      // URL da foto — placeholders estáveis (picsum); substitua pelas fotos reais do grupo
      avatar: gabriella,
      lattes: '#',  // Link para o Lattes / LinkedIn
    },
    {
      id: 2,
      nome: 'Giovanna Nicida',
      papel: '---',
      bio: '',
      avatar: linguica,
      lattes: '#',
    },
    {
      id: 3,
      nome: 'Julia Sodre',
      papel: '---',
      bio: '',
      avatar: julia,
      lattes: '#',
    },
    {
      id: 4,
      nome: 'Maria Rose Matos',
      papel: '---',
      bio: '',
      avatar: rose,
      lattes: '#',
    },
    {
      id: 5,
      nome: 'Sophia Mendes',
      papel: '---',
      bio: '',
      avatar: '',
      lattes: '#',
    },
  ];
  
// ==========================================
// TRABALHOS E PESQUISAS
//
// Campos obrigatórios da receita:
//   fotos        → array com exatamente 2 URLs de imagem
//   ingredientes → array de strings (bullet list no modal)
//   modoPreparo  → array de strings (numbered list no modal)
// ==========================================
export const trabalhos = [
  {
    id: 1,
    titulo: 'Salada de Grãos',
    descricao:
      'Resumo do trabalho — explique o objetivo, metodologia e principais conclusões em 2 a 3 frases.',
    autores: ['Membro 1', 'Membro 2'],
    data: 'Mês/Ano',
    destaque: true,
    link: '#',
    cor: 'sage' as const,

    fotos: [
      salad,
      mise_salad,
    ],
    ingredientes: [
      // ── Salada
      'Salada:',
      '1 xícara de arroz 7 grãos',
      '3 xícaras de água',
      '2 colheres de azeite ou óleo vegetal',
      '1/2 cebola picada',
      '2 dentes de alho picados',
      '1/2 xícara de quinoa',
      '2 xícaras de água (para a quinoa)',
      '2 colheres de chá de sal',
      '1 pimentão vermelho picado em cubos pequenos',
      '1/2 xícara de azeitonas verdes ou pretas com caroço picadas',
      '2 cenouras raladas',
      '1/2 pé de alface americana',
      // TODO: tirar molho de topico (ele esta aparecendo como um topico da listagem)
      // ── Molho
      'Molho:',
      '1/2 maço de cebolinha picada',
      '2 colheres de sopa de vinagre balsâmico ou vinagre de maçã',
      '1 colher de sopa de mostarda',
      '2 colheres de chá de azeite',
    ],
    modoPreparo: [
      'Higienize todos os legumes e hortaliças e depois que escorrer a água, pique cada ingrediente conforme indicado na lista de ingredientes.',
      'Higienize a alface e reserve.',
      'Para o molho: Misture o azeite, o vinagre, a mostarda, o sal e a cebolinha e reserve.',
      'Para a salada: Em uma panela cozinhe o arroz sete grãos em água, adicione 1 colher de chá de sal e cozinhe até amolecer e secar toda a água (1 xícara de arroz para 3 xícaras de água). Utilize fogo baixo e panela semi tampada.',
      'Em outra panela, cozinhe a quinoa em água e adicione 1 colher de chá de sal. Cozinhe até amolecer (1 xícara de quinoa para 2 xícaras de água). Utilize fogo baixo e panela semi tampada.',
      'Coloque os pimentões e a cebola picados em uma assadeira, regue com 1 colher de azeite e leve ao forno por 15 minutos a 180 °C para amolecer.',
      'Quando os grãos estiverem cozidos, misture com os demais ingredientes: cenoura, pimentão e cebola assados e azeitonas.',
      'Coloque a salada disposta em uma travessa com as folhas de alface picadas grosseiramente.',
      'Acrescente o molho, pese e sirva.',
    ],
  },

  {
    id: 2,
    titulo: 'Poke Vegano',
    descricao:
      'Resumo do trabalho — explique o objetivo, metodologia e principais conclusões em 2 a 3 frases.',
    autores: ['Membro 3'],
    data: 'Mês/Ano',
    destaque: true,
    link: '#',
    cor: 'earth' as const,

    fotos: [
      '/img/poke-vegano-1.jpg',
      '/img/poke-vegano-2.jpg',
    ],
    ingredientes: [
      // ── Poke
      'Poke:',
      '1/2 manga palmer',
      '1/4 cebola roxa picada',
      '30 g de amendoim torrado, descascado e sem sal',
      '1/2 pepino japonês',
      '6 unidades de tomate cereja',
      '1 xícara de repolho roxo ou verde',
      '1/4 de xícara de cebolinha',
      '1 cenoura',
      '1/4 xícara de gergelim branco e preto a gosto',
      '1/2 xícara de couve picada',
      '1/2 xícara de grão-de-bico cozido (lata ou processado)',
      '1/2 xícara de arroz japonês cozido',
      // ── Molho
      'Molho:',
      '1/2 dente de alho',
      '1/2 limão',
      '1 xícara de molho shoyo',
      '1 colher de chá de óleo de gergelim ou azeite',
      '1 colher de café de gengibre em pó',
    ],
    modoPreparo: [],
  },

  {
    id: 3,
    titulo: 'Antepasto de Berinjela',
    descricao:
      'Resumo do trabalho — explique o objetivo, metodologia e principais conclusões em 2 a 3 frases.',
    autores: ['Membro 1', 'Membro 4'],
    data: 'Mês/Ano',
    destaque: false,
    link: '#',
    cor: 'clay' as const,

    fotos: [
      '/img/antepasto-berinjela-1.jpg',
      '/img/antepasto-berinjela-2.jpg',
    ],
    ingredientes: [
      '700 g de berinjela cortada em cubos',
      '4 talos de salsão',
      '1 cebola grande picada',
      '4 colheres (sopa) de azeite',
      '1 colher (sopa) de açúcar',
      '5 colheres (sopa) de vinagre de vinho tinto',
      '1 lata de tomate pelado',
      '2 colheres (sopa) de extrato de tomate',
      '1 filé de anchova picado',
      '125 g de azeitona verde sem caroço picada',
      '2 colheres (sopa) de uva-passa preta',
      '1 1/2 colher (sopa) de alcaparra',
      '2 colheres (sopa) de salsinha picada',
      'Sal e pimenta-do-reino moída na hora a gosto',
    ],
    modoPreparo: [
      'Lave os talos de salsão muito bem sob água corrente. Corte em fatias bem finas. Reserve.',
      'Descasque a cebola e pique em pedaços pequenos. Lave a berinjela, corte a tampa e despreze. Corte a berinjela em rodelas (1 cm de espessura), a rodela em tiras (1 cm de largura) e as tiras em cubos (1 cm).',
      'Retire os tomates da lata e despreze a água. Pique-os grosseiramente e reserve.',
      'Leve uma panela grande ao fogo baixo para aquecer. Acrescente o azeite e o salsão picado e refogue, mexendo sempre, por 10 minutos. Adicione a cebola e refogue por mais 10 minutos, sem parar de mexer, ou até que comece a dourar.',
      'Retire a cebola e o salsão da panela e reserve. Volte a panela ao fogo e acrescente os cubos de berinjela. Refogue, mexendo sempre, até que comecem a dourar. Recoloque o salsão e a cebola na panela e misture.',
      'Junte o vinagre, o açúcar, os tomates picados, o extrato de tomate, as anchovas, as azeitonas, as uvas-passas e as alcaparras. Misture bem e tempere com sal e pimenta-do-reino.',
      'Espere a mistura ferver e deixe cozinhar por 15 minutos.',
      'Retire a caponata do fogo e transfira para uma tigela. Acrescente a salsinha e deixe esfriar antes de servir.',
    ],
  },

  {
    id: 4,
    titulo: 'Bolinho de Arroz',
    descricao:
      'Resumo do trabalho — explique o objetivo, metodologia e principais conclusões em 2 a 3 frases.',
    autores: ['Membro 2', 'Membro 5'],
    data: 'Mês/Ano',
    destaque: false,
    link: '#',
    cor: 'sage' as const,

    fotos: [
      '/img/bolinho-arroz-1.jpg',
      '/img/bolinho-arroz-2.jpg',
    ],
    ingredientes: [
      '2 xícaras (chá) de arroz polido (branco) cru',
      '2 ovos',
      '1/4 de xícara (chá) de farinha de trigo ou amido de milho (se houver celíaco na turma)',
      '1/4 de xícara (chá) de queijo parmesão ralado',
      '2 colheres (sopa) de salsinha picada grosseiramente',
      'Sal e pimenta-do-reino moída na hora a gosto',
      '3 xícaras (chá) de óleo para fritar',
    ],
    modoPreparo: [
      'Cozinhe o arroz conforme a receita do arroz integral, ajustando os ingredientes e a quantidade de água (2 partes de água para 1 parte de arroz).',
      'Em um recipiente, coloque o arroz, a farinha de trigo, o queijo parmesão, a salsinha e os ovos. Tempere com sal e pimenta a gosto e misture bem com uma colher para incorporar.',
      'Com uma colher de sopa, retire uma porção da massa e, com a ajuda de outra colher, modele formando um bolinho e transfira para um prato.',
      'Com a escumadeira, transfira um bolinho de cada vez para uma panela com óleo quente para fritar. Transfira os bolinhos fritos para uma travessa forrada com papel-toalha e repita com o restante. Sirva a seguir.',
    ],
  },

  {
    id: 5,
    titulo: 'Feijoada Vegana',
    descricao:
      'Resumo do trabalho — explique o objetivo, metodologia e principais conclusões em 2 a 3 frases.',
    autores: ['Membro 3', 'Membro 4', 'Membro 5'],
    data: 'Mês/Ano',
    destaque: false,
    link: '#',
    cor: 'earth' as const,

    fotos: [
      '/img/feijoada-vegana-1.jpg',
      '/img/feijoada-vegana-2.jpg',
    ],
    ingredientes: [
      '2 1/2 xícaras de feijão preto cru (deixar de molho no dia anterior)',
      '250 g de abóbora com casca',
      '300 g de vagem',
      '200 g de berinjela',
      '2 dentes de alho',
      '1 cebola média (50 g)',
      '150 g de tofu defumado',
      '2 folhas de louro',
      '2 colheres de chá de sal',
      '1 colher de sopa de azeite',
      '1 colher de sopa de shoyu',
      '2 bandejas (400 g) de cogumelos Portobello fatiados',
      'Páprica defumada e pimenta-do-reino a gosto',
      '1 xícara de cebolinha picada',
    ],
    modoPreparo: [
      'Deixe o feijão preto de molho em água por 8 h. Descarte toda a água do molho, coloque o feijão em uma panela de pressão, adicione água para o cozimento e o sal. Cozinhe por 5 a 10 min na pressão. Confirme se o feijão está bem cozido; se necessário, cozinhe por mais alguns minutos.',
      'Lave e corte a abóbora em cubos pequenos; lave e corte a vagem em rodelas; lave e corte a berinjela em cubos pequenos; lave e corte o alho e a cebola em cubos bem pequenos e reserve.',
      'Pique o tofu defumado em cubos pequenos e reserve.',
      'Retire o feijão da pressão e adicione o azeite, o alho, a cebola, as folhas de louro, o tofu e os legumes picados. Deixe cozinhar em fogo brando ou médio por cerca de 20 a 30 min.',
      'Em uma frigideira, refogue os cogumelos com o shoyu.',
      'Adicione os cogumelos quando a feijoada já estiver cozida, misture bem e desligue o fogo.',
      'Ajuste o sal e adicione a cebolinha higienizada e picada antes de servir.',
    ],
  },
];

// ── tipo inferido (útil em outros arquivos) ──────────────────
export type Trabalho = typeof trabalhos[number];
  
  // ==========================================
  // CATEGORIAS DE TRABALHOS
  // Para filtro na página de Trabalhos
  // ==========================================
  export const categorias = [
    'Todos',
    'Nutrição Clínica',
    'Saúde Pública',
    'Gastronomia',
    'Técnica Dietética',
  ];
  
  // ==========================================
  // ESTATÍSTICAS — SOBRE / HOME
  // ==========================================
  export const stats = [
    { valor: '4', label: 'Membros' },
    { valor: '2', label: 'Trabalhos Publicados' },
    { valor: '3', label: 'Semestres Ativos' },
    { valor: '8', label: 'Disciplinas' },
  ];



