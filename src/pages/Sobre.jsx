import { motion } from 'framer-motion';
import { stats } from '../data/content';

const rev = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

/* SOBRE: Edite valores/princípios */
const valores = [
  { n: '01', titulo: '[Valor 1 — ex: Rigor Científico]',  desc: '[Descrição de como este valor orienta o grupo]' },
  { n: '02', titulo: '[Valor 2 — ex: Colaboração]',       desc: '[Descrição de como este valor orienta o grupo]' },
  { n: '03', titulo: '[Valor 3 — ex: Sustentabilidade]',  desc: '[Descrição de como este valor orienta o grupo]' },
  { n: '04', titulo: '[Valor 4 — ex: Curiosidade]',       desc: '[Descrição de como este valor orienta o grupo]' },
];

/* SOBRE: Edite marcos da linha do tempo */
const timeline = [
  { data: '[Mês/Ano]', evento: '[Evento/marco 1]', desc: '[Detalhes]' },
  { data: '[Mês/Ano]', evento: '[Evento/marco 2]', desc: '[Detalhes]' },
  { data: '[Mês/Ano]', evento: '[Evento/marco 3]', desc: '[Detalhes]' },
  { data: '[Mês/Ano]', evento: '[Evento/marco 4]', desc: '[Detalhes]' },
];

export default function Sobre() {
  return (
    <div className="bg-bg">

      {/* ══════════════════════════
          HERO — dark, headline grande
          ══════════════════════════ */}
      <section className="page-hero">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[520px] h-[520px] rounded-full bg-teal-200/70 blur-[140px]" />
          <div className="absolute left-0 bottom-0 w-[420px] h-[420px] rounded-full bg-slate-100/80 blur-[130px]" />
        </div>
        <div className="page-hero-shell">

          <div className="lg:col-span-5">
              <motion.div custom={0} variants={rev} initial="hidden" whileInView="show" viewport={{ once: true }}
                className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-teal-400" />
                <span className="font-mono text-[13px] tracking-[0.2em] uppercase text-teal-600">
                  Dentre os grupos de alimentos...
                </span>
              </motion.div>
              <motion.h2
                custom={1} variants={rev} initial="hidden" whileInView="show" viewport={{ once: true }}
                className="font-pally font-semibold text-dark leading-[0.95] mb-0"
                style={{ fontSize: 'clamp(30px, 4vw, 52px)' }}
              >
                Leguminosas<br />
                <span className="font-light text-stone-500/60">e Carnes</span>
              </motion.h2>
            </div>
        </div>
      </section>

      {/* ══════════════════════════
          HISTÓRIA — grid com cards info
          ══════════════════════════ */}
      {/* <section className="section-band py-24"> */}
        {/* <div className="section-inner max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"> */}

          {/* Texto principal */}
          {/* <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="lg:col-span-6">
            <p className="eyebrow text-stone-500 mb-6">Nossa história</p>
            <h2 className="font-display font-semibold text-dark leading-tight mb-8"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
              
              [Como tudo<br /><em className="font-light text-stone-500">começou]</em>
            </h2>
            <div className="space-y-5 text-[13px] text-dark/55 leading-[1.85]">
      
              <p>[Parágrafo 1 — contexto: qual disciplina, professor/a, semestre, campus.]</p>
              <p>[Parágrafo 2 — motivação: por que criaram este site, o que querem comunicar.]</p>
              <p>[Parágrafo 3 — aspirações: o que esperam alcançar com as publicações.]</p>
            </div>
          </motion.div> */}

          {/* Info cards */}
          {/* <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="lg:col-span-5 lg:col-start-8 grid grid-cols-2 gap-px bg-linen-300">
            {[
              { emoji: '🎓', t: 'Unicamp Limeira',  s: '[Semestre/Ano]' },
              { emoji: '📖', t: '[Disciplina]',     s: '[Código]' },
              { emoji: '🌿', t: '[Tema 1]',         s: '[Detalhe]' },
              { emoji: '🧪', t: '[Tema 2]',         s: '[Detalhe]' },
            ].map((c, i) => (
              <div key={i} className="bg-bg hover:bg-surface transition-colors p-6">
                <span className="text-2xl block mb-4">{c.emoji}</span>
                <p className="font-display text-[17px] font-semibold text-dark leading-tight mb-1">{c.t}</p>
                <p className="eyebrow text-[9px] text-stone-500">{c.s}</p>
              </div>
            ))}
          </motion.div> */}
        {/* </div> */}
      {/* </section> */}

      {/* ══════════════════════════
          STATS
          ══════════════════════════ */}
      {/* <section className="section-band-dark border-y border-white/8">
        <div className="section-inner max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/8">
            {stats.map((s, i) => (
              <motion.div key={s.label} custom={i} variants={rev} initial="hidden"
                whileInView="show" viewport={{ once: true }}
                className="py-12 px-8 text-center">
                <div className="font-display text-[50px] font-light text-linen-50 leading-none mb-2">
                  {s.valor}
                </div>
                <div className="eyebrow text-linen-300/40">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ══════════════════════════
          VALORES — lista com linhas
          ══════════════════════════ */}
      {/* <section className="section-band-soft py-24">
        <div className="section-inner max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-end justify-between mb-12 pb-6 border-b border-linen-300">
            <div>
              <p className="eyebrow text-stone-500 mb-4">Princípios</p>
              <h2 className="font-display font-semibold text-dark"
                style={{ fontSize: 'clamp(30px, 4vw, 50px)' }}>
                Nossos valores
              </h2>
            </div>
          </div>

          <div className="divide-y divide-linen-300">
            {valores.map((v, i) => (
              <motion.div key={v.n} custom={i} variants={rev} initial="hidden"
                whileInView="show" viewport={{ once: true }}
                className="grid grid-cols-12 gap-6 py-8 group hover:bg-surface -mx-6 md:-mx-10 px-6 md:px-10 transition-colors">
                <span className="col-span-1 eyebrow text-dark/20 text-[9px] pt-1">{v.n}</span>
                <h3 className="col-span-12 md:col-span-5 font-display text-[20px] font-semibold text-dark leading-tight">
                  {v.titulo}
                </h3>
                <p className="col-span-12 md:col-span-5 md:col-start-8 text-[13px] text-dark/50 leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ══════════════════════════
          TIMELINE
          ══════════════════════════ */}
      <section className="section-band py-24 border-t border-linen-300">
        <div className="section-inner max-w-4xl mx-auto px-6 md:px-10">
          <p className="eyebrow text-stone-500 mb-4">Trajetória</p>
          <h2 className="font-display font-semibold text-dark mb-14"
            style={{ fontSize: 'clamp(30px, 4vw, 50px)' }}>
            Linha do tempo
          </h2>

          <div className="relative border-l border-linen-300 pl-8 space-y-10">
            {timeline.map((item, i) => (
              <motion.div key={i} custom={i} variants={rev} initial="hidden"
                whileInView="show" viewport={{ once: true }}
                className="relative">
                {/* Dot */}
                <div className="absolute -left-[33px] top-1.5 w-[9px] h-[9px] border border-teal-500 bg-bg" />
                <p className="eyebrow text-stone-500 mb-2">{item.data}</p>
                <h3 className="font-display text-[19px] font-semibold text-dark mb-1">{item.evento}</h3>
                <p className="text-[13px] text-dark/45 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
