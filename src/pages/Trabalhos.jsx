import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { trabalhos, categorias } from '../data/content';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

const cardColors = {
  sage:  'bg-sage-50 border-sage-200 hover:border-sage-400',
  earth: 'bg-earth-50 border-earth-200 hover:border-earth-400',
  clay:  'bg-clay-50 border-clay-200 hover:border-clay-400',
};

const tagColors = {
  sage:  'bg-sage-100 text-sage-700',
  earth: 'bg-earth-100 text-earth-700',
  clay:  'bg-clay-100 text-clay-700',
};

export default function Trabalhos() {
  const [catAtiva, setCatAtiva] = useState('Todos');

  const filtrados = catAtiva === 'Todos'
    ? trabalhos
    : trabalhos.filter(t => t.categoria === catAtiva);

  return (
    <div>
      {/* =============================================
          SEÇÃO: Hero da página de Trabalhos
          ============================================= */}
      <section className="bg-linen-100 py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-earth-100 opacity-60 blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="section-label mb-3"
          >
            Produções acadêmicas
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl font-bold text-bark-700 mb-4"
          >
            {/* TRABALHOS HERO: Título da página */}
            Trabalhos & Pesquisas
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-earth-600 text-lg max-w-xl mx-auto leading-relaxed"
          >
            {/* TRABALHOS HERO: Descrição da seção */}
            [Breve descrição do que o visitante encontrará aqui: tipos de trabalho, período coberto, disciplinas, etc.]
          </motion.p>
        </div>
      </section>

      {/* =============================================
          SEÇÃO: Filtro por categoria
          As categorias são definidas em src/data/content.js
          ============================================= */}
      <section className="sticky top-16 z-30 bg-linen-50/95 backdrop-blur-sm border-b border-linen-300 py-4">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap gap-2 items-center">
          <span className="section-label mr-2 hidden sm:block">Filtrar:</span>
          {categorias.map(cat => (
            <button
              key={cat}
              onClick={() => setCatAtiva(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                catAtiva === cat
                  ? 'bg-sage-500 text-white shadow-sm'
                  : 'bg-linen-200 text-earth-600 hover:bg-sage-100 hover:text-sage-700'
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto text-xs text-earth-400">
            {filtrados.length} {filtrados.length === 1 ? 'trabalho' : 'trabalhos'}
          </span>
        </div>
      </section>

      {/* =============================================
          SEÇÃO: Grid de Trabalhos
          ============================================= */}
      <section className="py-16 bg-linen-50">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={catAtiva}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtrados.map((trabalho, i) => (
                <motion.article
                  key={trabalho.id}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className={`card-hover rounded-2xl border p-6 flex flex-col ${cardColors[trabalho.cor] || cardColors.sage}`}
                >
                  {/* Header do card */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <span className={`tag ${tagColors[trabalho.cor] || tagColors.sage}`}>
                      {trabalho.categoria}
                    </span>
                    <span className="text-xs text-earth-400 shrink-0 mt-1">{trabalho.data}</span>
                  </div>

                  {/* Título */}
                  <h2 className="font-display text-xl font-semibold text-bark-700 mb-3 leading-snug">
                    {trabalho.titulo}
                  </h2>

                  {/* Descrição */}
                  <p className="text-sm text-earth-600 leading-relaxed flex-1 mb-4">
                    {trabalho.descricao}
                  </p>

                  {/* Footer do card */}
                  <div className="flex items-center justify-between pt-4 border-t border-linen-300">
                    <div>
                      <p className="text-xs text-earth-400 font-medium mb-0.5">Autores</p>
                      <p className="text-xs text-bark-600">
                        {trabalho.autores.slice(0, 2).join(', ')}
                        {trabalho.autores.length > 2 && ` +${trabalho.autores.length - 2}`}
                      </p>
                    </div>
                    <a
                      href={trabalho.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-sage-600 hover:text-sage-800 transition-colors"
                      onClick={e => e.stopPropagation()}
                    >
                      Ver trabalho →
                    </a>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Estado vazio */}
          {filtrados.length === 0 && (
            <div className="text-center py-24">
              <p className="text-4xl mb-4">🔍</p>
              <p className="text-earth-500">Nenhum trabalho nesta categoria ainda.</p>
            </div>
          )}
        </div>
      </section>

      {/* =============================================
          SEÇÃO: Aviso para adicionar trabalhos
          Remova ou substitua quando houver conteúdo real
          ============================================= */}
      <section className="py-16 bg-earth-50 border-t border-earth-200">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-3xl mb-4">📝</p>
          <h2 className="font-display text-2xl font-semibold text-bark-700 mb-3">
            {/* AVISO: Substitua por chamada para contribuição */}
            [Título — ex: "Quer compartilhar seu trabalho?"]
          </h2>
          <p className="text-earth-600 text-sm leading-relaxed">
            {/* AVISO: Texto de convite */}
            [Instrução sobre como os membros podem adicionar seus trabalhos ao site, ou informação de contato para contribuições]
          </p>
        </div>
      </section>
    </div>
  );
}