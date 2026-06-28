import { motion } from 'framer-motion';
import leguminosasImg from '../assets/images/food-groups/leguminosas.jpeg';
import carnesImg from '../assets/images/food-groups/fundo-carnes.jpeg';
import cortesImg from '../assets/images/food-groups/tipos-de-cortes.jpeg';
import receitaGraoDeBicoImg from '../assets/images/food-groups/receita-grao-de-bico.jpeg';
import mujecaImg from '../assets/images/food-groups/pescado/mujeca.jpeg';
import quinhampiraImg from '../assets/images/food-groups/pescado/quinhampira.jpeg';
import muquiadoImg from '../assets/images/food-groups/pescado/muquiado.jpeg';
import peixeAssadoImg from '../assets/images/food-groups/pescado/peixe-assado.jpeg';

const rev = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

/* ─── LEGUMINOSAS — dados ─────────────────────────────────────────── */

const legDefTopicos = [
  'Feijões: Preto, carioca, branco, vermelho, de corda, entre outros.',
  'Lentilhas: Excelentes para sopas e saladas nutritivas.',
  'Grão-de-bico: Base para pastas deliciosas (como o homus) e pratos quentes.',
  'Ervilha seca: Ideal para caldos e purês aveludados.',
  'Soja e derivados: Como o tofu e extratos solúveis vegetais',
];

const legNutricionalTopicos = [
  'Proteínas vegetais: fundamentais para a construção e a manutenção de todos os tecidos e músculos do corpo.',
  'Fibras alimentares: auxiliam no trânsito intestinal, estendem a saciedade e atuam no controle do colesterol e glicemia.',
  'Carboidratos complexos: fornecem energia estável de forma gradual, evitando picos de açúcar no sangue.',
  'Vitaminas do Complexo B: Nutrientes vitais para a otimização do metabolismo energético do organismo.',
  'Minerais essenciais e compostos bioativos: Ferro; Zinco; Magnésio; Potássio; Fósforo e Compostos bioativos com ação antioxidante.',
];

const legSugestoesCards = [
  {
    titulo: 'Sugestão de preparo: Hambúrguer de grão-de-bico',
    ingredientes: [
      '4 xícaras de Grão-de-bico',
      '1 cebola média picada',
      '1 xícara de aveia em flocos triturada no liquidificador ou farinha de aveia',
      'Água filtrada',
      'Azeite a gosto',
      'Sal a gosto',
      'Cúrcuma, coentro, cebolinha, salsa a gosto',
    ],
    modoDePreparo: [
      'Passo 1) Escorra o grão-de-bico e descarte a água do molho;',
      'Passo 2) Cozinhe o grão-de-bico por 30 minutos na panela de pressão;',
      'Passo 4) Em outra panela, refogue a cebola picada no azeite;',
      'Passo 5) Escorra o grão-de-bico cozido e adicione na panela com cebola e deixe fritar por alguns instantes;',
      'Passo 6) Acrescente o sal e a cúrcuma e refogue;',
      'Passo 7) Transfira o grão-de-bico para um mixer e triture;',
      'Passo 8) Acrescente o restante dos temperos e acerte o sal;',
      'Passo 9) Espere esfriar, acrescente a aveia aos poucos até dar o ponto de hambúrguer;',
      'Passo 10) Molde os hambúrgueres e sele em uma frigideira com um fio de azeite por 2 minutos de cada lado.',
    ],
    fonte: 'Receitas Seara - https://www.seara.com.br/materia/hamburguer-de-grao-de-bico-veja-como-fazer/',
  },
];

/* ─── CARNES & PESCADOS — dados ──────────────────────────────────── */

const carnesNutricionalTopicos = [
  'Proteínas de alto valor biológico.',
  'Minerais: Ferro e Zinco.',
  'Vitaminas: Especialmente a B12.',
  'Elas também são ricas em gorduras em geral, especialmente as gorduras saturadas. Por isso, o consumo deve ser equilibrado.',
];

const carnesTecnicasTopicos = [
  'Assados de forno: O mais indicado para cortes que possuem uma maior quantidade de gordura. Podem ser assados acompanhados de batata, mandioca e/ou legumes!',
  'Grelhados rápidos: Perfeitos para o dia a dia, temperados apenas com sal para valorizar o sabor natural da carne.',
  'Ensopados e Refogados: Ideais para cortes que pedem um cozimento mais lento, deixando a carne desmanchando.',
];

const pescadosNutricionalTopicos = [
  'Proteínas.',
  'Vitaminas e minerais.',
  'Altas doses de Cálcio e Fósforo.',
];

const pescadosTecnicasTopicos = [
  'Assados ou Grelhados: Para quem busca uma opção leve e saudável.',
  'Ensopados (como a Moqueca): Pratos cheios de cor, tempero e suculência.',
  'Caldos: Perfeitos para aquecer ou servir de base para outras receitas (como um bom pirão!).',
];

const outrasPreparacoes = [
  { titulo: 'MUJECA', legenda: 'É um caldo de  peixe cozido, que depois é amassado e misturado com goma (tapioca) até formar um mingau.', img: mujecaImg },
  { titulo: 'QUINHAMPIRA', legenda: 'Caldo de peixe com tucupi e bastante pimenta.', img: quinhampiraImg },
  { titulo: 'MUQUIADO', legenda: 'É defumado sobre um moquetá por horas, o calor e a fumaça cozinham lentamente até ficar nessa cor.', img: muquiadoImg },
  { titulo: 'Assado', legenda: '', img: peixeAssadoImg },
];

const sobreIndexLinks = [
  { href: '#leguminosas', label: 'Leguminosas', level: 'group' },
  { href: '#leg-definicao', label: 'Definição' },
  { href: '#leg-nutricao', label: 'Valor nutricional' },
  { href: '#leg-preparo', label: 'Preparo' },
  { href: '#leg-dicas', label: 'Dicas' },
  { href: '#leg-impacto', label: 'Impacto' },
  { href: '#leg-receita', label: 'Receita' },
  { href: '#carnes-pescados', label: 'Carnes e pescados', level: 'group' },
  { href: '#carnes-nutricao', label: 'Carnes' },
  { href: '#carnes-mise-en-place', label: 'Mise en place' },
  { href: '#cortes-bovinos', label: 'Cortes bovinos' },
  { href: '#pescados', label: 'Pescados', level: 'group' },
  { href: '#pescados-nutricao', label: 'Nutrição dos pescados' },
  { href: '#pescados-preparo', label: 'Preparo dos pescados' },
  { href: '#pescados-curiosidade', label: 'Curiosidade' },
  { href: '#pescados-preparacoes', label: 'Preparações' },
];

/* ─── Componentes reutilizáveis ───────────────────────────────────── */

/** Cabeçalho de seção com linha decorativa */
function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="h-px w-6 bg-teal-400 shrink-0" />
      <span className="font-mono text-[15px] tracking-[0.2em] uppercase text-teal-600">
        {children}
      </span>
    </div>
  );
}

/** Título de sub-bloco dentro de uma seção */
function BlockTitle({ children, className = '' }) {
  return (
    <h3
      className={`font-pally font-semibold text-dark mb-4 ${className}`}
      style={{ fontSize: 'clamp(24px, 3vw, 34px)' }}
    >
      {children}
    </h3>
  );
}

/** Lista de tópicos com marcador teal */
function TopicoList({ items }) {
  return (
    <ul className="space-y-2.5 mt-4">
      {items.map((item, i) => (
        <motion.li
          key={i}
          custom={i}
          variants={rev}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex items-start gap-3"
        >
          <span className="mt-[6px] w-[6px] h-[6px] rounded-full bg-teal-500 shrink-0" />
          <span className="text-[15px] text-dark/60 leading-relaxed">{item}</span>
        </motion.li>
      ))}
    </ul>
  );
}

/** Hero com background image placeholder */
function HeroSection({ id, label, title, subtitle, imgPlaceholder }) {
  return (
    <section id={id} className="relative overflow-hidden min-h-[340px] flex items-end scroll-mt-24">
      {/* Background image placeholder — troque pelo seu <img> ou CSS background-image */}
      <div
        className="absolute inset-0 bg-stone-800"
        style={{
          backgroundImage: `url(${imgPlaceholder})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Overlay de opacidade */}
      <div className="absolute inset-0 bg-dark/60" />

      {/* Gradiente de base para legibilidade do texto */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/30 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pb-14 pt-24">
        <motion.div
          custom={0}
          variants={rev}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-5"
        >
          <div className="h-px w-8 bg-teal-400" />
          <span className="font-mono text-[14px] tracking-[0.2em] uppercase text-teal-300">
            {label}
          </span>
        </motion.div>

        <motion.h2
          custom={1}
          variants={rev}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="font-pally font-semibold text-white leading-[0.95]"
          style={{ fontSize: 'clamp(44px, 6vw, 80px)' }}
        >
          {title}
        </motion.h2>

        {subtitle && (
          <motion.p
            custom={2}
            variants={rev}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-4 text-[16px] text-white/55 max-w-xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}

function PageIndex() {
  return (
    <>
      <nav
        aria-label="Índice da página"
        className="sticky top-0 z-30 border-b border-linen-300 bg-bg/95 backdrop-blur md:hidden"
      >
        <div className="flex gap-2 overflow-x-auto px-4 py-3">
          {sobreIndexLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`shrink-0 border px-3 py-2 font-mono uppercase transition-colors hover:border-teal-400 hover:text-teal-700 ${
                link.level === 'group'
                  ? 'border-teal-400/50 bg-teal-50 text-[12px] font-semibold tracking-[0.16em] text-dark/85'
                  : 'border-linen-300 bg-surface text-[11px] font-medium tracking-[0.12em] text-dark/70'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <nav
        aria-label="Índice da página"
        className="fixed right-5 top-32 z-30 hidden w-52 border-l border-linen-300 bg-bg/90 py-4 pl-5 pr-3 shadow-[0_20px_50px_rgba(29,33,31,0.08)] backdrop-blur xl:block"
      >
        <p className="mb-4 font-mono text-[12px] font-semibold uppercase tracking-[0.22em] text-teal-700">
          Índice
        </p>
        <div className="space-y-1">
          {sobreIndexLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`block border-l transition-colors hover:border-teal-500 hover:text-teal-700 ${
                link.level === 'group'
                  ? 'mt-3 border-teal-400/60 pl-3 pt-1 font-pally text-[15px] font-semibold normal-case tracking-normal text-dark/85 first:mt-0'
                  : 'border-transparent py-1 pl-4 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-dark/62'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PÁGINA PRINCIPAL
═══════════════════════════════════════════════════════════════════ */
export default function Sobre() {
  return (
    <div className="bg-bg">
      <PageIndex />

      {/* ╔═══════════════════════════════════════╗
          ║          LEGUMINOSAS                  ║
          ╚═══════════════════════════════════════╝ */}

      <HeroSection
        id="leguminosas"
        label="Grupo alimentar"
        title={
          <>
            Leguminosas<br />
            <span className="font-light text-white/50">e seus nutrientes</span>
          </>
        }
        subtitle="Muito além de simples acompanhamentos, as leguminosas são pilares de uma alimentação saudável e equilibrada."
        imgPlaceholder={leguminosasImg}
        /* ↑ Substitua pela URL ou caminho da imagem de fundo */
      />

      {/* ── Introdução ───────────────────────────────────────── */}
      <section id="leg-introducao" className="section-band py-20 border-b border-linen-300 scroll-mt-24">
        <div className="section-inner max-w-4xl mx-auto px-6 md:px-10 flex gap-3">
          <p className="text-[17px] text-dark/65 leading-[1.9] max-w-3xl">🌱</p>
          <motion.p
            custom={0}
            variants={rev}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-[17px] text-dark/65 leading-[1.9] max-w-3xl"
          >
             Muito além de simples acompanhamentos, as leguminosas são pilares de uma alimentação saudável e equilibrada. Elas são essenciais para promover a saúde e prevenir doenças crônicas, unindo um altíssimo valor nutricional ao respeito à nossa identidade cultural.
          </motion.p>
        </div>
      </section>

      {/* ── Definição ────────────────────────────────────────── */}
      <section id="leg-definicao" className="section-band-soft py-20 border-b border-linen-300 scroll-mt-24">
        <div className="section-inner max-w-4xl mx-auto px-6 md:px-10">
          <SectionLabel>Definição</SectionLabel>
          <BlockTitle>O que são leguminosas?</BlockTitle>
          <motion.p
            custom={0}
            variants={rev}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-[15px] text-dark/55 leading-relaxed max-w-2xl mb-2"
          >
            São grãos comestíveis produzidos por plantas da família das fabáceas. Na culinária brasileira e global, as grandes estrelas deste grupo são:
          </motion.p>
          <TopicoList items={legDefTopicos} />
        </div>
      </section>

      {/* ── Valor Nutricional ─────────────────────────────────── */}
      <section id="leg-nutricao" className="section-band py-20 border-b border-linen-300 scroll-mt-24">
        <div className="section-inner max-w-4xl mx-auto px-6 md:px-10">
          <SectionLabel>Valor Nutricional</SectionLabel>
          <BlockTitle>Composição e benefícios 🔎</BlockTitle>
          <motion.p
            custom={0}
            variants={rev}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-[15px] text-dark/55 leading-relaxed max-w-2xl mb-2"
          >
            Incluir leguminosas no prato garante um aporte completo de compostos essenciais para o bom funcionamento do organismo:
          </motion.p>
          <TopicoList items={legNutricionalTopicos} />
        </div>
      </section>

      {/* ── Tipo de Preparo ───────────────────────────────────── */}
      <section id="leg-preparo" className="section-band-soft py-20 border-b border-linen-300 scroll-mt-24">
        <div className="section-inner max-w-4xl mx-auto px-6 md:px-10">
          <SectionLabel>Tipo de preparo</SectionLabel>
          <BlockTitle>Como preparar 📋</BlockTitle>
          <motion.p
            custom={0}
            variants={rev}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-[15px] text-dark/55 leading-relaxed max-w-2xl"
          >
            Elas apresentam grande versatilidade na cozinha e são utilizadas em muitos preparos saudáveis. Podem ser consumidas cozidas em água, com pouca gordura e sal, combinadas com legumes e temperos naturais (alho, cebola, louro e especiarias).
          </motion.p>
        </div>
      </section>

      {/* ── Dicas ─────────────────────────────────────────────── */}
      <section id="leg-dicas" className="section-band py-20 border-b border-linen-300 scroll-mt-24">
        <div className="section-inner max-w-4xl mx-auto px-6 md:px-10">
          <SectionLabel>Dicas</SectionLabel>
          <BlockTitle>Boas práticas ✅</BlockTitle>
          <motion.p
            custom={0}
            variants={rev}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-[15px] text-dark/55 leading-relaxed max-w-2xl"
          >
            Dica Técnica: Remolho Antes de preparar o seu mise en place, é essencial deixar os grãos de molho em água por 8 a 12 horas antes do cozimento (descartando essa água) para reduzir os fitatos e compostos antinutricionais. Isso potencializa a absorção de minerais e previne os desconfortos intestinais e gases. E o ideal, assim como nas demais preparações, é evitar ingredientes ultraprocessados, como embutidos, e temperos prontos ricos em sódio.
          </motion.p>
        </div>
      </section>

      {/* ── Impacto ───────────────────────────────────────────── */}
      <section id="leg-impacto" className="section-band-soft py-20 border-b border-linen-300 scroll-mt-24">
        <div className="section-inner max-w-4xl mx-auto px-6 md:px-10">
          <SectionLabel>Impacto</SectionLabel>
          <BlockTitle>Impacto na saúde e no meio ambiente 🌳</BlockTitle>
          <motion.p
            custom={0}
            variants={rev}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-[15px] text-dark/55 leading-relaxed max-w-2xl"
          >
            Impacto real na saúde e no planeta Proteína de alta qualidade: Quando combinadas com cereais (como arroz e feijão), geram uma união perfeita de aminoácidos essenciais. Prevenção de Doenças: Auxiliam ativamente no manejo da obesidade, diabetes tipo 2 e patologias cardiovasculares. Sustentabilidade: A sua produção agrícola demanda significativamente menos recursos hídricos e ambientais do que proteínas de origem animal.
          </motion.p>
        </div>
      </section>

      {/* ── Sugestões de preparo ──────────────────────────────── */}
      <section id="leg-receita" className="section-band py-20 scroll-mt-24">
        <div className="section-inner max-w-7xl mx-auto px-6 md:px-10">
          <SectionLabel>Sugestões de preparo</SectionLabel>
          <BlockTitle className="mb-10">💡 Ideia de Receita</BlockTitle>

          <div className="">
            {legSugestoesCards.map((card, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={rev}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-bg hover:bg-surface transition-colors p-8 group"
              >
                <div className="w-full aspect-[4/3] bg-linen-300 mb-6 overflow-hidden max-w-90">
                  <img
                    src={receitaGraoDeBicoImg}
                    alt="Sugestão de preparo: Hambúrguer de grão-de-bico"
                    className="h-full w-full object-cover"
                  />
                </div>
                <h4
                  className="font-pally font-semibold text-dark mb-2 group-hover:text-teal-700 transition-colors"
                  style={{ fontSize: '20px' }}
                >
                  {card.titulo}
                </h4>
                <div className="space-y-6 text-[15px] text-dark/55 leading-relaxed">
                  <div>
                    <h5 className="font-pally font-semibold text-dark text-[19px] mb-3">
                      Ingredientes:
                    </h5>
                    <ul className="space-y-2">
                      {card.ingredientes.map((ingrediente) => (
                        <li key={ingrediente} className="flex items-start gap-3">
                          <span className="mt-[8px] w-[5px] h-[5px] rounded-full bg-teal-500 shrink-0" />
                          <span>{ingrediente}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-pally font-semibold text-dark text-[19px] mb-3">
                      Modo de preparo:
                    </h5>
                    <div className="space-y-3">
                      {card.modoDePreparo.map((passo) => (
                        <p key={passo}>{passo}</p>
                      ))}
                    </div>
                  </div>

                  <p className="text-[13px] text-dark/40 leading-relaxed">
                    Fonte:{' '}
                    <a
                      href="https://www.seara.com.br/materia/hamburguer-de-grao-de-bico-veja-como-fazer/"
                      target="_blank"
                      rel="noreferrer"
                      className="underline decoration-teal-500/40 underline-offset-4 hover:text-teal-700 text-teal-500 transition-colors"
                    >
                      {card.fonte}
                    </a>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ╔═══════════════════════════════════════╗
          ║       CARNES & PESCADOS               ║
          ╚═══════════════════════════════════════╝ */}

      {/* Divisor visual entre as duas grandes seções */}
      <div className="h-[3px] bg-gradient-to-r from-teal-500/30 via-teal-400 to-teal-500/30" />

      <HeroSection
        id="carnes-pescados"
        label="Grupo alimentar"
        title={
          <>
            Carnes<br />
            <span className="font-light text-white/50">e Pescados</span>
          </>
        }
        subtitle="As carnes e os peixes são os grandes protagonistas das nossas refeições, mas você sabe como tirar o melhor proveito de cada um deles na cozinha?"
        imgPlaceholder={carnesImg}
        /* ↑ Substitua pela URL ou caminho da imagem de fundo */
      />

      {/* ── Introdução ───────────────────────────────────────── */}
      <section id="carnes-introducao" className="section-band py-20 border-b border-linen-300 scroll-mt-24">
        <div className="section-inner max-w-4xl mx-auto px-6 md:px-10 flex gap-3">
          <p className="text-[17px] text-dark/65 leading-[1.9] max-w-3xl">
          🔪
          </p>
          <motion.p
            custom={0}
            variants={rev}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-[17px] text-dark/65 leading-[1.9] max-w-3xl"
          >
            Do Churrasco ao Caldo: As carnes e os peixes são os grandes protagonistas das nossas refeições, mas você sabe como tirar o melhor proveito de cada um deles na cozinha? Preparamos um guia com os valores nutricionais, as melhores técnicas de preparo e até curiosidades culturais!
          </motion.p>
        </div>
      </section>

      {/* ── Valor Nutricional — Carnes ────────────────────────── */}
      <section id="carnes-nutricao" className="section-band-soft py-20 border-b border-linen-300 scroll-mt-24">
        <div className="section-inner max-w-4xl mx-auto px-6 md:px-10">
          <SectionLabel>Valor Nutricional</SectionLabel>
          <BlockTitle>Composição 🥩</BlockTitle>
          <motion.p
            custom={0}
            variants={rev}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-[15px] text-dark/55 leading-relaxed max-w-2xl mb-2"
          >
            Carnes Vermelhas: Sabor e Energia no Dia a Dia As carnes de gado e de porco são super apreciadas e consumidas com muita frequência em todas as regiões do país. Mas, para consumi-las de forma consciente, precisamos entender o que elas trazem para o nosso corpo. Valor Nutricional As carnes vermelhas são excelentes fontes de nutrientes para o nosso organismo:
          </motion.p>
          <TopicoList items={carnesNutricionalTopicos} />

          <div className="mt-10">
            <BlockTitle>Como preparar: 📋</BlockTitle>
            <TopicoList items={carnesTecnicasTopicos} />
          </div>
        </div>
      </section>

      {/* ── Mise en Place ─────────────────────────────────────── */}
      <section id="carnes-mise-en-place" className="section-band py-20 border-b border-linen-300 scroll-mt-24">
        <div className="section-inner max-w-4xl mx-auto px-6 md:px-10">
          <SectionLabel>Mise en Place</SectionLabel>
          <BlockTitle>Organização e preparo antecipado 🍚</BlockTitle>
          <motion.p
            custom={0}
            variants={rev}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-[15px] text-dark/55 leading-relaxed max-w-2xl"
          >
            Pensando no mise en place Depois de separar o que é carne limpa das aparas, é possível preparar marinadas para agregar sabor e até mesmo modificar a textura da carne. E o que foi retirado da carne (gorduras e retalhos) também ganha uma utilidade, as aparas podem ir para potes de mise en place destinados a caldos.
          </motion.p>
        </div>
      </section>

      {/* ── Curiosidade — Carnes ──────────────────────────────── */}
      <section id="cortes-bovinos" className="section-band-soft py-20 border-b border-linen-300 scroll-mt-24">
        <div className="section-inner max-w-4xl mx-auto px-6 md:px-10">
          <SectionLabel>Curiosidade</SectionLabel>
          <BlockTitle>🔪🥩 Cortes de Carne Bovina</BlockTitle>

          <div className="mt-8">
            <motion.div
              custom={0}
              variants={rev}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="w-full aspect-[4/3] md:aspect-[16/9] bg-linen-300 overflow-hidden flex items-center justify-center"
            >
              <img
                src={cortesImg}
                alt="Cortes de Carne Bovina"
                className="h-full w-full object-center border-4 border-teal-900/40 rounded-md"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ╔────────────────────────────────────────╗
          │   SUBTÓPICO — PESCADOS                 │
          ╚────────────────────────────────────────╝ */}
      <section id="pescados" className="section-band py-24 border-b border-linen-300 scroll-mt-24">
        <div className="section-inner max-w-4xl mx-auto px-6 md:px-10">

          {/* Cabeçalho do subtópico */}
          <motion.div
            custom={0}
            variants={rev}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-16 pb-8 border-b border-linen-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-6 bg-teal-400" />
              <span className="font-mono text-[13px] tracking-[0.2em] uppercase text-teal-600">
                Subtópico
              </span>
            </div>
            <h2
              className="font-pally font-semibold text-dark leading-[0.95]"
              style={{ fontSize: 'clamp(34px, 5vw, 60px)' }}
            >
              Pescados 🐟
            </h2>
            <p className="mt-4 text-[15px] text-dark/50 max-w-xl leading-relaxed">
              Ainda que os pescados contemplem crustáceos e moluscos, os peixes são os alimentos mais consumidos desse grupo no Brasil.
            </p>
          </motion.div>

          {/* Valor Nutricional — Pescados */}
          <div id="pescados-nutricao" className="mb-16 scroll-mt-24">
            <SectionLabel>Pescados · Valor Nutricional</SectionLabel>
            <BlockTitle>Composição 🔎</BlockTitle>
            <motion.p
              custom={0}
              variants={rev}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-[15px] text-dark/55 leading-relaxed max-w-2xl mb-2"
            >
              Valor Nutricional: Ao contrário da carne vermelha, o peixe destaca-se pelo seu baixo teor de gordura, além de conter muitos nutrientes:
            </motion.p>
            <TopicoList items={pescadosNutricionalTopicos} />
          </div>

          {/* Técnicas de Preparo — Pescados */}
          <div id="pescados-preparo" className="mb-16 scroll-mt-24">
            <SectionLabel>Pescados · Técnicas de Preparo</SectionLabel>
            <BlockTitle>Na cozinha profissional 👩‍🍳</BlockTitle>
            <motion.p
              custom={0}
              variants={rev}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-[15px] text-dark/55 leading-relaxed max-w-2xl mb-2"
            >
              Técnicas de preparo na cozinha: O peixe aceita muito bem várias técnicas, como:
            </motion.p>
            <TopicoList items={pescadosTecnicasTopicos} />
          </div>

          {/* Curiosidade — Pescados */}
          <div id="pescados-curiosidade" className="mb-20 p-8 bg-surface border-l-2 border-teal-400 scroll-mt-24">
            <SectionLabel>Curiosidade</SectionLabel>
            <motion.p
              custom={0}
              variants={rev}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-[15px] text-dark/55 leading-relaxed max-w-2xl"
            >
              <strong>✨ Curiosidade Cultural (da nossa integrante Rose!):</strong> Os Povos Indígenas do Rio Negro Você sabia que para os Povos Indígenas do Rio Negro, o peixe é o alimento principal da dieta? 
              <br/><br/> <strong>R:</strong> Por lá, ele é consumido diariamente e tem como acompanhamentos indispensáveis a farinha e o beiju. Entre as espécies mais consumidas nessa e em outras regiões do país, destacam-se: Tambaqui, Pacu e Aracu (piau); Surubim (também conhecido como pintado) e Sardinhas; Peixe da Noite: Essa espécie só é encontrada durante a época de cheia dos rios!
            </motion.p>
          </div>

          {/* Outras Preparações */}
          <div id="pescados-preparacoes" className="scroll-mt-24">
            <SectionLabel>Outras Preparações</SectionLabel>
            <BlockTitle className="mb-8">Além do convencional ➡️</BlockTitle>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {outrasPreparacoes.map((prep, i) => (
                <motion.figure
                  key={i}
                  custom={i}
                  variants={rev}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="w-full aspect-[3/4] bg-linen-300 mb-3 overflow-hidden flex items-center justify-center group-hover:bg-linen-400 transition-colors">
                    <img
                      src={prep.img}
                      alt={prep.titulo}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <figcaption className="space-y-1">
                    <p className="font-pally font-semibold text-dark text-[17px] leading-tight">
                      {prep.titulo}
                    </p>
                    {prep.legenda && (
                      <p className="text-[14px] text-dark/60 leading-relaxed">{prep.legenda}</p>
                    )}
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>

          <p className="text-[13px] text-dark/60 leading-relaxed pt-5">
            Fonte:{' '}
            <a
              href="https://www.epagri.sc.gov.br/por-que-consumir-pescados-conheca-os-beneficios-nutricionais-dos-peixes-e-frutos-do-mar/"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-teal-500/40 underline-offset-4 hover:text-teal-700 text-teal-500 transition-colors"
            >
              https://www.epagri.sc.gov.br/por-que-consumir-pescados-conheca-os-beneficios-nutricionais-dos-peixes-e-frutos-do-mar/
            </a>
          </p>

        </div>
      </section>

    </div>
  );
}
