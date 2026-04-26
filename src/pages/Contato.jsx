import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowUpRight, HiArrowLongRight } from 'react-icons/hi2';
import { FaClipboardList } from 'react-icons/fa';
import { BsDot } from 'react-icons/bs';
import SectionHeader from '../components/SectionHeader';

import Ficha from '../assets/images/Ficha_Tecnica_Feijoada_Vegana.1.jpeg'
import FichaIngredientes from '../assets/images/Ficha_Tecnica_Feijoada_Vegana.2.jpeg'


/* ─── animation ─────────────────────────────────────────── */
const ease = [0.16, 1, 0.3, 1];

const rev = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease },
  }),
};

/* ─── data ───────────────────────────────────────────────── */
const termos = [
  {
    sigla: 'PB',
    nome: 'Peso Bruto',
    definicao: 'Alimento in natura sem a retirada das partes não utilizadas.',
    exemplo: 'Peso da cenoura com casca.',
  },
  {
    sigla: 'PL',
    nome: 'Peso Líquido',
    definicao: 'Alimento após a retirada das partes não utilizadas.',
    exemplo: 'Peso da cenoura sem casca.',
  },
  {
    sigla: 'Pcoz',
    nome: 'Peso Cozido',
    definicao: 'Peso do alimento após cozimento com a utilização de água.',
    exemplo: null,
  },
  {
    sigla: 'FC',
    nome: 'Fator de Correção',
    definicao: 'Calculado pela divisão de PB por PL. Quanto mais próximo de 1, menor o desperdício.',
    formula: 'FC = PB ÷ PL',
  },
  {
    sigla: 'IC',
    nome: 'Índice de Cozimento',
    definicao: 'Calculado pela divisão entre Peso Cozido e Peso Líquido. Indica se a preparação perdeu ou absorveu água.',
    formula: 'IC = Pcoz ÷ PL',
  },
  {
    sigla: 'MC',
    nome: 'Medida Caseira',
    definicao: 'Quantidade de cada alimento expressa em utensílios domésticos.',
    exemplo: '½ xícara de chá, 1 colher de sopa.',
  },
  // {
  //   sigla: 'PC',
  //   nome: 'Per Capita',
  //   definicao: 'Quantidade de alimento destinada a cada comensal, expressa em peso bruto.',
  //   exemplo: null,
  // },
];

const outrosTermos = [
  { label: 'Mercado', desc: 'Valor do alimento no mercado.' },
  { label: 'Receita', desc: 'Valor do alimento em relação à quantidade utilizada na receita, calculada a partir do PL.' },
  { label: 'Cálculo dietético', desc: 'Feito a partir das tabelas TACO e TBCA — inclui carboidratos, lipídios, fibra alimentar, sódio e proteína de cada alimento e da preparação total.' },
  { label: 'Rendimento', desc: 'Peso total da preparação pronta.' },
  { label: 'Peso da porção', desc: 'Peso de cada porção que será consumida.' },
  { label: 'Número de porções', desc: 'Quantidade de porções em relação ao peso total. Ex: 1 kg de preparação → 10 porções de 100 g.' },
  { label: 'Custo da preparação', desc: 'Valor total em dinheiro necessário para preparar a receita.' },
  { label: 'Modo de preparo', desc: 'Descrição de todas as etapas de execução da receita.' },
  { label: 'Utensílios e equipamentos', desc: 'Lista dos equipamentos necessários à preparação.' },
];

const gruposNOVA = [
  {
    num: '1',
    titulo: 'In natura/Minimamente processados',
    desc: 'De acordo com o guia, eles devem ser a base da receita e da alimentação. Os alimentos In Natura são aqueles obtidos diretamente de plantas ou animais, sem alteração e os minimamente processados são alimentos que passaram por processos simples como limpeza, remoção de partes não comestíveis, secagem, moagem ou pasteurização.',
    cor: 'teal',
  },
  {
    num: '2',
    titulo: 'Alimentos Processados',
    desc: 'Devem ser limitados na ficha, priorizando os in natura. São produtos fabricados pela indústria com a adição de sal, açúcar ou outra substância de uso culinário a alimentos in natura. O objetivo é aumentar a durabilidade e tornar o alimento mais palatável.',
    cor: 'stone',
  },
  {
    num: '3',
    titulo: 'Alimentos Ultraprocessados',
    desc: 'São formulações industriais feitas inteiramente ou majoritariamente de substâncias extraídas de alimentos (óleos, gorduras, açúcar, proteínas isoladas) e aditivos (corantes, aromatizantes, realçadores de sabor). Possuem pouco ou nenhum alimento inteiro na composição.',
    cor: 'slate',
  },
  {
    num: '4',
    titulo: 'Ingredientes culinários',
    desc: 'Sal, óleos e gorduras, que são utilizados em quantidades mínimas para temperar e cozinhar.',
    cor: 'stone',
  },
];

const refs = [
  'BENETTI, Gisele Bizon (org.). Manual de técnicas dietéticas. 1. ed. São Paulo: Yendis, 2013.',
  'BRASIL. Ministério da Saúde. Guia Alimentar para a População Brasileira. 2. ed. Brasília, 2014.',
  'CHEMIN, Sandra. Guia prático para elaboração de cardápios. Brasília: FNDE, 2014.',
  'TBCA — Tabela Brasileira de Composição de Alimentos. Disponível em: tbca.net.br',
  'EXPANDIDO, R. Ficha Técnica de Preparo: Informações e Aplicações para Estabelecimentos Produtores de Alimentos. Anais SSA, UFFS.',
];

/* ─── TermoCard ──────────────────────────────────────────── */
function TermoCard({ t, i }) {
  return (
    <motion.div
      custom={i} variants={rev} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-40px' }}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-linen-300/80 bg-white/70 p-6 transition-all duration-300 hover:bg-teal-100 hover:shadow-[0_8px_32px_rgba(32,51,49,0.07)]"
    >
      {/* bottom sweep */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-teal-500 transition-all duration-500 ease-out group-hover:w-full" />

      <div className="flex items-start justify-between mb-4">
        <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-teal-600 bg-teal-50 border border-teal-200/60 px-2 py-1 rounded">
          {t.sigla}
        </span>
        {t.formula && (
          <span className="font-mono text-[11px] text-dark/60 bg-stone-200 border border-stone-200/60 px-2 py-1 rounded">
            {t.formula}
          </span>
        )}
      </div>

      <p className="font-tacker text-[1.2rem] font-semibold text-dark mb-2">{t.nome}</p>
      <p className="text-[14.5px] text-dark/50 leading-relaxed flex-1">{t.definicao}</p>

      {t.exemplo && (
        <p className="mt-3 text-[13px] text-dark/45 italic border-t border-stone-100 pt-3">
          Ex: {t.exemplo}
        </p>
      )}
    </motion.div>
  );
}

/* ─── NovaCard ───────────────────────────────────────────── */
function NovaCard({ g, i }) {
  const accent = {
    teal:  { bar: 'bg-teal-500',  badge: 'bg-teal-50 text-teal-600 border-teal-200/60' },
    stone: { bar: 'bg-stone-400', badge: 'bg-stone-50 text-stone-500 border-stone-200/60' },
    slate: { bar: 'bg-slate-400', badge: 'bg-slate-50 text-slate-500 border-slate-200/60' },
  }[g.cor];

  return (
    <motion.div
      custom={i} variants={rev} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-40px' }}
      className="group relative flex items-start gap-5 py-3"
    >
      {/* index dot + line */}
      <div className="flex flex-col items-center shrink-0 -pt-2">
        <span className={`h-7 w-7 rounded-full ${accent.bar} flex items-center justify-center font-mono text-[13px] font-bold text-white`}>
          {g.num}
        </span>
        {i < gruposNOVA.length - 1 && (
          <div className="mt-2 w-[2px] flex-1 min-h-8 bg-teal-200" />
        )}
      </div>

      <div className="flex-1 pb-2">
        <p className="font-pally text-[1.1rem] font-normal text-dark mb-1.5 leading-snug">
          {g.titulo}
        </p>
        <p className="font-inter text-[13px] text-dark/50 leading-relaxed text-justify">{g.desc}</p>
      </div>
    </motion.div>
  );
}

/* ─── Page ───────────────────────────────────────────────── */
export default function FichaTecnica() {
  const [openRef, setOpenRef] = useState(false);

  return (
    <div className="bg-bg">

      {/* ══════════════════════════════════════
          HERO
          ══════════════════════════════════════ */}
      <section className="page-hero -mt-9 border-b-0">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full bg-teal-100/70 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[380px] h-[380px] rounded-full bg-slate-100/60 blur-[110px]" />
        </div>
        <div className="page-hero-shell">
          <div className="overflow-hidden mb-1 w-full relative">
            <motion.h2
                custom={1} variants={rev} initial="hidden" whileInView="show" viewport={{ once: true }}
                className="font-pally font-semibold text-dark leading-[0.92] flex items-center gap-3"
                style={{ fontSize: 'clamp(30px, 4vw, 86px)' }}
              >
                <FaClipboardList className="bg-teal-400 p-3 text-white rounded-md"/> Ficha <span className="font-semibold text-stone-500 leading-[0.92]">Técnica</span>
              </motion.h2>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          O QUE É — intro block
          ══════════════════════════════════════ */}
      <section className="section-band py-20 bg-teal-900">
        <div className="section-inner max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            <div className="lg:col-span-5">
              <motion.div custom={0} variants={rev} initial="hidden" whileInView="show" viewport={{ once: true }}
                className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-teal-400" />
                <span className="font-mono text-[13px] tracking-[0.2em] uppercase text-teal-600">O que é</span>
              </motion.div>
              <motion.h2
                custom={1} variants={rev} initial="hidden" whileInView="show" viewport={{ once: true }}
                className="font-pally font-semibold text-dark leading-[0.95] mb-0"
                style={{ fontSize: 'clamp(30px, 4vw, 52px)' }}
              >
                Uma ficha técnica<br />
                <span className="font-light text-stone-500/60">de preparação</span>
              </motion.h2>
            </div>

            <motion.div
              custom={2} variants={rev} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="lg:col-span-7 space-y-5"
            >
              <p className="text-[15px] text-dark/60 leading-[1.85] text-justify">
                A <strong className="text-dark/75 font-semibold">Ficha Técnica Padronizada (FTP)</strong> é uma ferramenta fundamental nos serviços de alimentação que ajuda a organizar, padronizar e controlar a produção. Ela não é apenas um documento técnico, é uma ferramenta de gestão que une teoria e prática com o objetivo de aprimorar o controle de qualidade, a segurança alimentar (com o registro do valor nutricional de cada alimento utilizado) e a redução de desperdícios devido a melhor administração dos recursos disponíveis e cálculo do custo de produção da preparação.
              </p>
              {/* <p className="text-[15px] text-dark/55 leading-[1.85] text-justify">
                Sua utilização contribui para <strong className="text-dark/75 font-semibold">prevenir desperdícios</strong> na unidade
                de alimentação e otimizar aproveitamento e investimentos financeiros em todas as etapas
                da preparação — resultando em ganhos de produtividade e qualidade em uma Unidade de
                Alimentação e Nutrição (UAN).
              </p> */}

              {/* quick stats */}
              <div className="mt-8 grid grid-cols-3 gap-px bg-stone-200/80 rounded-xl overflow-hidden">
                {[
                  { val: 'FC', label: 'Fator de Correção' },
                  { val: 'IC', label: 'Índice de Cozimento' },
                  { val: 'IH', label: 'Índice de Hidratação' },
                ].map((s, i) => (
                  <div key={i} className="bg-dark/10 px-4 py-6 text-center flex flex-col">
                    <p className="font-pally text-[2rem] font-bold text-teal-600 leading-none mb-1 flex-1">{s.val}</p>
                    <p className="font-mono text-[13px] tracking-widest uppercase text-dark/80 flex justify-center items-center flex-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <p className="text-[15px] text-dark/60 leading-[1.85] text-justify mt-12">
          <span className="font-semibold text-dark/75">Quando a sua utilização é necessária?</span><br/>
Na prática, a FTP é amplamente utilizada em unidades de alimentação como restaurantes, escolas, hospitais e cozinhas industriais; ou sempre que houver necessidade de padronizar uma receita. Um fator que exemplifica a sua importância é a organização dos funcionários nas unidades de alimentação, que ocorre em turnos diferentes, ou seja, pessoas com o mesmo cargo e executando as mesmas atividades, o que poderia acarretar em variabilidades no processo, desperdícios e perda de produtividade caso não houvesse o uso da ficha técnica.

<br /><br />
          <span className="font-semibold text-dark/75">O que é preciso para montar uma FTP?</span><br/>
Para elaborar uma FTP, é preciso reunir informações técnicas da preparação, como ingredientes, quantidades, rendimento, peso bruto e peso líquido, fatores de correção, índice de cocção, modo de preparo, custo por porção e valor nutricional. Esses dados permitem que a receita seja reproduzida de forma padronizada, mantendo a qualidade e evitando variações no resultado final.

          </p>
        </div>
      </section>

      

      {/* ══════════════════════════════════════
          TERMOS — card grid
          ══════════════════════════════════════ */}
      <section className="section-divider-top relative overflow-hidden bg-linen-50 py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-0 h-[350px] w-[350px] rounded-full bg-teal-100/35 blur-[110px]" />
        </div>

        <div className="section-inner relative mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <motion.div custom={0} variants={rev} initial="hidden" whileInView="show" viewport={{ once: true }}
                className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-teal-400" />
                <span className="font-mono text-[13px] tracking-[0.2em] uppercase text-teal-600">Glossário</span>
              </motion.div>
              <motion.h2
                custom={1} variants={rev} initial="hidden" whileInView="show" viewport={{ once: true }}
                className="font-pally font-semibold text-dark leading-[0.92]"
                style={{ fontSize: 'clamp(30px, 4vw, 56px)' }}
              >
                Termos e siglas<br />
                <span className="font-normal text-stone-400/70">da ficha técnica</span>
              </motion.h2>
            </div>
          </div>

          {/* primary terms — cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {termos.map((t, i) => (
              <TermoCard key={t.sigla} t={t} i={i} />
            ))}
          </div>

          {/* secondary terms — list */}
          <motion.div
            custom={0} variants={rev} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="rounded-2xl border border-linen-300 bg-zinc-100/60 overflow-hidden"
          >
            <div className="px-6 py-5 border-b border-linen-300 bg-zinc-200">
              <span className="font-inter font-semibold text-[14px] tracking-wide uppercase text-dark/50">
                Demais informações da ficha
              </span>
            </div>
            <div className="divide-y divide-linen-300/70">
              {outrosTermos.map((o, i) => (
                <motion.div
                  key={o.label}
                  custom={i} variants={rev} initial="hidden" whileInView="show" viewport={{ once: true }}
                  className="group flex items-start gap-6 px-6 py-5 hover:bg-teal-100 transition-colors duration-200"
                >
                  <span className="font-mono flex justify-center items-center text-[14px] text-dark/50 shrink-0 p-4 rounded-md bg-teal-400/20">{String(i + 1).padStart(2, '0')}.</span>
                  <div className="flex-1">
                    <p className="font-tracker text-[1rem] font-bold text-dark/90">{o.label}</p>
                    <p className="font-inter text-[14.5px] text-dark/48 ">{o.desc}</p>
                  </div>
                  <div className="h-1 rounded-full w-0 self-center bg-teal-400 transition-all duration-500 group-hover:w-12 shrink-0" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CLASSIFICAÇÃO NOVA
          ══════════════════════════════════════ */}
      <section className="section-divider-top h-screen flex justify-center items-center bg-teal-700/10">
        <div className="section-inner max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* left — intro text */}
            <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
              <div className="mb-4 flex items-end justify-between">
                <div>
<SectionHeader
        label="Guia Alimentar Brasileiro"
        title="Classificação"
        subtitle="dos alimentos"
      />
                </div>
              </div>

              <motion.p
                custom={2} variants={rev} initial="hidden" whileInView="show" viewport={{ once: true }}
                className="font-inter text-[15px] text-justify text-dark/55 leading-[1.85] mb-8"
              >
                Os alimentos são classificados a partir do <strong className="text-dark/75 font-semibold">Guia Alimentar para
                a População Brasileira</strong>, divididos em <strong>4</strong> categorias.
              </motion.p>

              <motion.a
                custom={3} variants={rev} initial="hidden" whileInView="show" viewport={{ once: true }}
                href="https://bvsms.saude.gov.br/bvs/publicacoes/guia_alimentar_populacao_brasileira_2ed.pdf"
                target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.15em] uppercase text-teal-600 border border-teal-400/40 px-4 py-2.5 rounded-lg transition-all duration-300 hover:bg-teal-100"
              >
                Acessar o Guia Alimentar
                <HiArrowUpRight className="text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>

                <motion.div custom={0} variants={rev} initial="hidden" whileInView="show" viewport={{ once: true }} className="font-inter text-[13px] text-dark/70 leading-relaxed mb-6">
                  <h4 className="font-pally text-[1rem] font-semibold text-dark mb-2">Regionalidade</h4>
                  <p>A regionalidade no guia alimentar e na ficha técnica valorizam a cultura alimentar local e a sustentabilidade, como por exemplo a sazonalidade (priorização de ingredientes da época); a identidade cultural, onde deve se registrar se a preparação é típica de alguma região; o acesso e origem, considerando‑se os ingredientes que são facilmente encontrados na sua região.</p>
                </motion.div>
                <motion.div custom={1} variants={rev} initial="hidden" whileInView="show" viewport={{ once: true }} className="font-inter text-[13px] text-dark/70 leading-relaxed mb-6">
                  <h4 className="font-pally text-[1rem] font-semibold text-dark mb-2">Custo da Receita</h4>
                  <p>O custo é o fator de viabilidade da FTP. No contexto do GAPB, o que se busca é o equilíbrio entre saúde e economia.</p>
                </motion.div>
                <motion.div custom={2} variants={rev} initial="hidden" whileInView="show" viewport={{ once: true }} className="font-inter text-[13px] text-dark/70 leading-relaxed mb-6">
                  <h4 className="font-pally text-[1rem] font-semibold text-dark mb-2">Custo Unitário e Total</h4>
                  <p>É calculado o custo de cada ingrediente com base no Peso Bruto (PB) utilizado.</p>
                </motion.div>
                <motion.div custom={3} variants={rev} initial="hidden" whileInView="show" viewport={{ once: true }} className="font-inter text-[13px] text-dark/70 leading-relaxed mb-6">
                  <h4 className="font-pally text-[1rem] font-semibold text-dark mb-2">Aproveitamento Integral</h4>
                  <p>Para reduzir o custo e o desperdício, a FTP pode incluir o uso de cascas, talos e sementes (alinhado com o consumo consciente).</p>
                </motion.div>
                <motion.div custom={4} variants={rev} initial="hidden" whileInView="show" viewport={{ once: true }} className="font-inter text-[13px] text-dark/70 leading-relaxed mb-6">
                  <h4 className="font-pally text-[1rem] font-semibold text-dark mb-2">Custo por Porção</h4>
                  <p>É calculado o valor final de cada preparo. Alimentos in natura, quando comprados na safra e de produtores locais costumam ter um custo‑benefício muito superior aos processados.</p>
                </motion.div>
                <motion.div custom={5} variants={rev} initial="hidden" whileInView="show" viewport={{ once: true }} className="font-inter text-[13px] text-dark/70 leading-relaxed mb-6">
                  <h4 className="font-pally text-[1rem] font-semibold text-dark mb-2">Acesso aos Ingredientes</h4>
                  <p>Disponibilidade nos comércios locais, facilidade de substituição e dependência da época de colheita permitem adaptar receitas para diferentes rendas.</p>
                </motion.div>
                <motion.div custom={6} variants={rev} initial="hidden" whileInView="show" viewport={{ once: true }} className="font-inter text-[13px] text-dark/70 leading-relaxed mb-6">
                  <h4 className="font-pally text-[1rem] font-semibold text-dark mb-2">Destinação da Preparação</h4>
                  <p>As receitas podem atender a diversos públicos: alimentação escolar, dietas específicas (hipertensão, diabetes), público geral, crianças, idosos e atletas.</p>
                </motion.div>
                <motion.div custom={7} variants={rev} initial="hidden" whileInView="show" viewport={{ once: true }} className="font-inter text-[13px] text-dark/70 leading-relaxed mb-6">
                  <h4 className="font-pally text-[1rem] font-semibold text-dark mb-2">Possibilidade de Adaptação</h4>
                  <p>Substituição de ingredientes caros por opções locais, redução de sal, açúcar e gordura, troca de ultraprocessados por alimentos in natura e adaptações para restrições alimentares (sem lactose, sem glúten).</p>
                </motion.div>
            </div>

            {/* right — NOVA classification timeline */}
            <div className="lg:col-span-6 lg:col-start-7">
              <motion.div
                custom={0} variants={rev} initial="hidden" whileInView="show" viewport={{ once: true }}
                className="rounded-2xl border border-linen-300 bg-white/70 px-8 py-6"
              >
                <p className="font-inter leading-1 text-[13.5px] tracking-widest uppercase text-dark/70 font-semibold mb-6 pb-4 border-b-2 border-teal-500/40">
                  Classificação NOVA
                </p>
                {gruposNOVA.map((g, i) => (
                  <NovaCard key={g.num} g={g} i={i} />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          EXEMPLO — ficha do grupo
          ══════════════════════════════════════ */}
      <section className="section-divider-top section-band-soft py-24">
        <div className="section-inner max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-end justify-between mb-20">
            <div>
              <motion.div custom={0} variants={rev} initial="hidden" whileInView="show" viewport={{ once: true }}
                className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-teal-400" />
                <span className="font-mono text-[13px] tracking-[0.2em] uppercase text-teal-600">Exemplo Prático</span>
              </motion.div>
              <motion.h2
                custom={1} variants={rev} initial="hidden" whileInView="show" viewport={{ once: true }}
                className="font-pally font-semibold text-dark leading-[0.92]"
                style={{ fontSize: 'clamp(30px, 4vw, 56px)' }}
              >
                Fichas realizadas<br />
                <span className="font-normal text-stone-400/70">pelo grupo</span>
              </motion.h2>
            </div>
          </div>

          {/* example card — Feijoada Vegana */}
          <motion.div
            custom={2} variants={rev} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="rounded-2xl border border-linen-300 bg-white overflow-hidden shadow-[0_8px_40px_rgba(32,51,49,0.06)]"
          >
            <div className="flex items-center justify-between px-8 py-6 border-b border-linen-300">
              <div>
                <p className="font-mono text-[9px] tracking-widest uppercase text-dark/25 mb-1">
                  Aula Leguminosas
                </p>
                <h3 className="font-display text-[1.4rem] font-semibold text-dark">
                  Feijoada Vegana
                </h3>
              </div>
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.16em] uppercase text-teal-600">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                Ficha técnica
              </span>
            </div>

            {/* placeholder for actual ficha image */}
            <div className="px-8 py-10 text-center bg-linen-50/60">
              <p className="font-mono text-[10px] tracking-widest uppercase text-dark/20 mb-4">
                {/* Imagem da ficha técnica completa */}
                <img src={Ficha} alt="" className="" />
                <img src={FichaIngredientes} alt="" className="" />
              </p>
              {/* <div className="mx-auto max-w-2xl aspect-4/3 rounded-xl border border-dashed border-stone-300 flex items-center justify-center bg-white/60">
                
              </div> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          REFERÊNCIAS
          ══════════════════════════════════════ */}
      <section className="section-divider-top py-16 bg-bg">
        <div className="section-inner max-w-7xl mx-auto px-6 md:px-10">
          <button
            onClick={() => setOpenRef(v => !v)}
            className="group flex w-full items-center justify-between py-4 cursor-pointer hover:bg-teal-500/20 transition-colors duration-300 px-3"
          >
            <span className="font-mono text-[14px] font-semibold tracking-widest uppercase text-dark/60">
              Referências bibliográficas
            </span>
            <span className={`font-mono text-dark/80 text-2xl transition-transform duration-300 ${!openRef ? 'rotate-45' : ''}`}>
              +
            </span>
          </button>

          <AnimatePresence>
            {!openRef && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease }}
                className="overflow-hidden"
              >
                <div className="border-t-2 border-linen-300 pt-6 pb-2 space-y-3">
                  {refs.map((r, i) => (
                    <p key={i} className="flex items-center text-[14px] text-dark/70  pl-4 border-l border-stone-200">
                      <BsDot className="size-7" />
                      <span>{r}</span>
                    </p>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

    </div>
  );
}