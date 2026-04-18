import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { trabalhos, categorias } from '../data/content';

const rev = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] },
  }),
};

const tagStyle = {
  sage:  'border-teal-500/40 text-teal-600',
  earth: 'border-stone-400/40 text-stone-600',
  clay:  'border-slate-400/40 text-slate-600',
};

export default function Trabalhos() {
  const [cat, setCat] = useState('Todos');

  const filtered = cat === 'Todos' ? trabalhos : trabalhos.filter(t => t.categoria === cat);

  return (
    <div className="bg-bg">

      {/* ══════════════════
          HERO
          ══════════════════ */}
      <section className="page-hero">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full bg-slate-100/85 blur-[110px]" />
          <div className="absolute top-0 right-0 w-[520px] h-[520px] rounded-full bg-teal-100/75 blur-[140px]" />
        </div>
        <div className="page-hero-shell">
          <div className="page-hero-kicker">
            <div className="page-hero-rule" />
            <span className="eyebrow text-teal-600">Produções acadêmicas</span>
          </div>
          <div className="overflow-hidden mb-1">
            <motion.h1 initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="page-hero-title font-semibold">
              Trabalhos
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-7">
            <motion.h1 initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
              className="page-hero-accent">
              & Pesquisas
            </motion.h1>
          </div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="page-hero-copy">
            {/* TRABALHOS HERO: Descrição */}
            [Breve descrição do que o visitante encontrará — tipos de trabalho, período, disciplinas.]
          </motion.p>
        </div>
      </section>

      {/* ══════════════════
          FILTRO — sticky
          ══════════════════ */}
      <div className="sticky top-16 z-30 bg-bg/95 backdrop-blur-sm border-b border-linen-300">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
          <span className="eyebrow text-dark/30 mr-3 shrink-0">Filtrar:</span>
          {categorias.map(c => (
            <button key={c} onClick={() => setCat(c)}
              className={`shrink-0 eyebrow text-[10px] px-4 py-2 border transition-all duration-200 ${
                cat === c
                  ? 'bg-dark text-linen-50 border-dark'
                  : 'bg-transparent text-dark/50 border-linen-300 hover:border-dark/40 hover:text-dark'
              }`}>
              {c}
            </button>
          ))}
          <span className="ml-auto pl-4 eyebrow text-dark/25 text-[9px] shrink-0">
            {filtered.length} {filtered.length === 1 ? 'resultado' : 'resultados'}
          </span>
        </div>
      </div>

      {/* ══════════════════
          GRID
          ══════════════════ */}
      <section className="section-band py-16">
        <div className="section-inner max-w-7xl mx-auto px-6 md:px-10">
          <AnimatePresence mode="wait">
            <motion.div key={cat} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              exit={{ opacity: 0 }} transition={{ duration: 0.15 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-linen-300">
              {filtered.map((t, i) => {
                const tg = tagStyle[t.cor] || tagStyle.sage;
                return (
                  <motion.article key={t.id} custom={i} variants={rev} initial="hidden" animate="show"
                    className="bg-bg hover:bg-surface transition-colors duration-300 p-8 flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                      <span className={`tag-sm ${tg}`}>{t.categoria}</span>
                      <span className="eyebrow text-dark/20 text-[9px]">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <h2 className="font-display text-[21px] font-semibold text-dark leading-snug mb-3">
                      {t.titulo}
                    </h2>
                    <p className="text-[13px] text-dark/50 leading-relaxed flex-1 mb-7 line-clamp-4">
                      {t.descricao}
                    </p>
                    <div className="border-t border-linen-300 pt-5 flex items-end justify-between gap-2">
                      <div>
                        <p className="eyebrow text-[9px] text-dark/25 mb-1">Autores</p>
                        <p className="text-[12px] text-dark/60 font-medium">
                          {t.autores.slice(0,2).join(' · ')}{t.autores.length > 2 && ` +${t.autores.length-2}`}
                        </p>
                      </div>
                      <a href={t.link} target="_blank" rel="noopener noreferrer"
                        className="eyebrow text-[10px] text-teal-600 hover:text-teal-800 transition-colors shrink-0">
                        Ver ↗
                      </a>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="py-32 text-center">
              <p className="font-display text-[22px] text-dark/30">Nenhum resultado</p>
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════
          CTA — adicionar trabalho
          ══════════════════ */}
      <section className="section-band-soft py-20 border-t border-linen-300">
        <div className="section-inner max-w-3xl mx-auto px-6 text-center">
          <p className="eyebrow text-stone-500 mb-5">Contribua</p>
          <h2 className="font-display font-semibold text-dark mb-4"
            style={{ fontSize: 'clamp(26px, 3.5vw, 44px)' }}>
            {/* CTA: Título */}
            [Quer compartilhar<br /><em className="font-light text-stone-500">seu trabalho?]</em>
          </h2>
          <p className="text-[13px] text-dark/50 leading-relaxed max-w-md mx-auto">
            {/* CTA: Instrução */}
            [Instrução sobre como membros podem adicionar seus trabalhos, ou contato para contribuições.]
          </p>
        </div>
      </section>
    </div>
  );
}
