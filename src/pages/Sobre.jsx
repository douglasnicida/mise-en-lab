import { motion } from 'framer-motion';
import { stats } from '../data/content';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

// =============================================
// Valores / princípios do grupo
// Substitua os textos abaixo pelos valores reais
// =============================================
const valores = [
  {
    icone: '🌱',
    titulo: '[Valor 1 — ex: Sustentabilidade]',
    descricao: '[Descrição deste valor e como ele orienta o trabalho do grupo]',
  },
  {
    icone: '🔬',
    titulo: '[Valor 2 — ex: Rigor Científico]',
    descricao: '[Descrição deste valor e como ele orienta o trabalho do grupo]',
  },
  {
    icone: '🤝',
    titulo: '[Valor 3 — ex: Colaboração]',
    descricao: '[Descrição deste valor e como ele orienta o trabalho do grupo]',
  },
  {
    icone: '💡',
    titulo: '[Valor 4 — ex: Inovação]',
    descricao: '[Descrição deste valor e como ele orienta o trabalho do grupo]',
  },
];

// =============================================
// Linha do tempo / marcos do grupo
// =============================================
const timeline = [
  {
    data: '[Mês/Ano]',
    evento: '[Evento 1 — ex: Início do grupo / semestre]',
    descricao: '[Detalhes sobre este marco]',
  },
  {
    data: '[Mês/Ano]',
    evento: '[Evento 2 — ex: Primeiro trabalho publicado]',
    descricao: '[Detalhes sobre este marco]',
  },
  {
    data: '[Mês/Ano]',
    evento: '[Evento 3 — ex: Participação em evento / feira]',
    descricao: '[Detalhes sobre este marco]',
  },
  {
    data: '[Mês/Ano]',
    evento: '[Evento 4 — ex: Apresentação de pesquisa]',
    descricao: '[Detalhes sobre este marco]',
  },
];

export default function Sobre() {
  return (
    <div>
      {/* =============================================
          SEÇÃO: Hero da página Sobre
          ============================================= */}
      <section className="bg-linen-100 py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-sage-100 opacity-60 blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <motion.p
            variants={fadeUp} custom={0} initial="hidden" animate="visible"
            className="section-label mb-3"
          >
            Sobre o grupo
          </motion.p>
          <motion.h1
            variants={fadeUp} custom={1} initial="hidden" animate="visible"
            className="font-display text-5xl font-bold text-bark-700 mb-6"
          >
            {/* SOBRE HERO: Título — ex: "Quem somos nós" */}
            [Título da Seção Sobre — ex: "Quem somos nós"]
          </motion.h1>
          <motion.p
            variants={fadeUp} custom={2} initial="hidden" animate="visible"
            className="text-earth-600 text-lg leading-relaxed max-w-2xl mx-auto"
          >
            {/* SOBRE HERO: Texto de introdução — apresentação geral do grupo */}
            [Texto introdutório sobre o grupo: origem, semestre, disciplina, motivação para criar o site e o que pretendem compartilhar. Aprox. 3-4 frases.]
          </motion.p>
        </div>
      </section>

      {/* =============================================
          SEÇÃO: Missão e história
          ============================================= */}
      <section className="py-24 bg-linen-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label mb-3">Nossa história</p>
            <h2 className="font-display text-3xl font-bold text-bark-700 mb-6">
              {/* MISSÃO: Título — ex: "Como tudo começou" */}
              [Título: "Como este grupo surgiu" ou similar]
            </h2>
            <div className="space-y-4 text-earth-600 leading-relaxed">
              <p>
                {/* MISSÃO: Parágrafo 1 — origem e contexto */}
                [Parágrafo sobre o contexto em que o grupo foi formado: qual disciplina, professor/a responsável, semestre, campus, etc.]
              </p>
              <p>
                {/* MISSÃO: Parágrafo 2 — motivação e propósito */}
                [Parágrafo sobre a motivação para criar este site e o que pretendem comunicar: divulgação acadêmica, portfólio, comunidade, etc.]
              </p>
              <p>
                {/* MISSÃO: Parágrafo 3 — aspirações futuras */}
                [Parágrafo sobre planos futuros ou o que o grupo espera alcançar com estas publicações.]
              </p>
            </div>
          </motion.div>

          {/* Card visual decorativo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-sage-100 rounded-2xl p-6 border border-sage-200">
              <div className="text-3xl mb-3">🎓</div>
              <h3 className="font-display text-lg font-semibold text-bark-700 mb-2">
                Unicamp Limeira
              </h3>
              <p className="text-sm text-earth-500">
                {/* CARD: Substitua pelo semestre/ano */}
                [Semestre e ano]
              </p>
            </div>
            <div className="bg-earth-50 rounded-2xl p-6 border border-earth-200">
              <div className="text-3xl mb-3">📖</div>
              <h3 className="font-display text-lg font-semibold text-bark-700 mb-2">
                {/* CARD: Disciplina principal */}
                [Nome da Disciplina]
              </h3>
              <p className="text-sm text-earth-500">
                {/* CARD: Professor(a) responsável */}
                [Prof. Nome do/a Professor/a]
              </p>
            </div>
            <div className="col-span-2 bg-clay-50 rounded-2xl p-6 border border-clay-200">
              <div className="text-3xl mb-3">🌿</div>
              <h3 className="font-display text-lg font-semibold text-bark-700 mb-2">
                {/* CARD: Tema central do grupo */}
                [Tema / foco central do grupo]
              </h3>
              <p className="text-sm text-earth-500">
                {/* CARD: Breve descrição do foco */}
                [Breve descrição da linha temática ou abordagem do grupo]
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =============================================
          SEÇÃO: Estatísticas
          Edite os valores em src/data/content.js
          ============================================= */}
      <section className="py-16 bg-sage-600">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="font-display text-5xl font-bold text-linen-50 mb-1">{s.valor}</div>
              <div className="text-sage-200 text-sm">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =============================================
          SEÇÃO: Valores / Princípios
          Edite o array `valores` neste arquivo
          ============================================= */}
      <section className="py-24 bg-linen-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-label mb-2">O que nos guia</p>
            <h2 className="font-display text-3xl font-bold text-bark-700">
              Nossos Valores
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((v, i) => (
              <motion.div
                key={v.titulo}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-linen-300 card-hover text-center"
              >
                <div className="text-4xl mb-4">{v.icone}</div>
                <h3 className="font-display text-lg font-semibold text-bark-700 mb-2">
                  {v.titulo}
                </h3>
                <p className="text-sm text-earth-500 leading-relaxed">{v.descricao}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================================
          SEÇÃO: Linha do Tempo
          Edite o array `timeline` neste arquivo
          ============================================= */}
      <section className="py-24 bg-linen-100">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-label mb-2">Nossa trajetória</p>
            <h2 className="font-display text-3xl font-bold text-bark-700">
              Linha do Tempo
            </h2>
          </div>

          <div className="relative">
            {/* Linha vertical */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-linen-300" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative pl-16"
                >
                  {/* Ponto na linha */}
                  <div className="absolute left-4 top-1.5 w-4 h-4 rounded-full bg-sage-500 border-2 border-linen-50 -translate-x-1/2" />
                  <p className="section-label text-xs mb-1">{item.data}</p>
                  <h3 className="font-display text-lg font-semibold text-bark-700 mb-1">
                    {item.evento}
                  </h3>
                  <p className="text-sm text-earth-500 leading-relaxed">{item.descricao}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}