import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { trabalhos } from '../data/content';
import SectionHeader from '../components/SectionHeader';

/* ─── animation presets ─────────────────────────────────────── */
const rev = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] },
  }),
};

const backdropVariants = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.22 } },
  exit:   { opacity: 0, transition: { duration: 0.18 } },
};

const panelVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.975 },
  show:   { opacity: 1, y: 0,  scale: 1,     transition: { duration: 0.38, ease: [0.16, 1, 0.3, 1] } },
  exit:   { opacity: 0, y: 14, scale: 0.98,  transition: { duration: 0.2  } },
};

/* ═══════════════════════════════════════════════════════════════
   CARD CAROUSEL — apenas nos cards do grid
═══════════════════════════════════════════════════════════════ */
function CardCarousel({ fotos, titulo }) {
  const [idx, setIdx] = useState(0);

  /* auto-avança a cada 3 s */
  useEffect(() => {
    if (fotos.length <= 1) return;
    const id = setInterval(() => setIdx(i => (i + 1) % fotos.length), 3000);
    return () => clearInterval(id);
  }, [fotos.length]);

  const go = (dir, e) => {
    e.stopPropagation();
    setIdx(i => (i + dir + fotos.length) % fotos.length);
  };

  return (
    <div className="w-full aspect-[16/9] overflow-hidden mb-5 bg-surface relative group/car">

      {/* imagens com crossfade */}
      <AnimatePresence mode="sync" initial={false}>
        <motion.img
          key={idx}
          src={fotos[idx]}
          alt={titulo}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </AnimatePresence>

      {fotos.length > 1 && (
        <>
          {/* setas — aparecem no hover do card */}
          <button
            onClick={e => go(-1, e)}
            aria-label="Foto anterior"
            className="
              absolute left-2 top-1/2 -translate-y-1/2 z-10
              w-7 h-7 flex items-center justify-center
              bg-dark/30 hover:bg-dark/55 text-white
              opacity-0 group-hover/car:opacity-100
              transition-all duration-200
            "
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M8 2L4 6L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button
            onClick={e => go(1, e)}
            aria-label="Próxima foto"
            className="
              absolute right-2 top-1/2 -translate-y-1/2 z-10
              w-7 h-7 flex items-center justify-center
              bg-dark/30 hover:bg-dark/55 text-white
              opacity-0 group-hover/car:opacity-100
              transition-all duration-200
            "
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex gap-[5px]">
            {fotos.map((_, i) => (
              <button
                key={i}
                onClick={e => { e.stopPropagation(); setIdx(i); }}
                aria-label={`Foto ${i + 1}`}
                className={`w-[6px] h-[6px] rounded-full transition-all duration-200 ${
                  i === idx ? 'bg-white scale-110' : 'bg-white/45 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   LIGHTBOX — abre ao clicar nas fotos dentro do modal
═══════════════════════════════════════════════════════════════ */
function Lightbox({ fotos, startIdx, onClose }) {
  const [idx, setIdx] = useState(startIdx);

  const prev = () => setIdx(i => (i - 1 + fotos.length) % fotos.length);
  const next = () => setIdx(i => (i + 1) % fotos.length);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[60] bg-dark/95 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      onClick={onClose}
    >
      {/* fechar */}
      <button
        onClick={onClose}
        aria-label="Fechar"
        className="
          absolute top-5 right-5 z-10
          w-8 h-8 flex items-center justify-center
          text-white/50 hover:text-white transition-colors
        "
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>

      {/* seta esquerda */}
      {fotos.length > 1 && (
        <button
          onClick={e => { e.stopPropagation(); prev(); }}
          aria-label="Foto anterior"
          className="
            absolute left-4 top-1/2 -translate-y-1/2 z-10
            w-10 h-10 flex items-center justify-center
            text-white/60 hover:text-white transition-colors
          "
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M13 3L7 10L13 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}

      {/* imagem com crossfade */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.img
          key={idx}
          src={fotos[idx]}
          alt={`Foto ${idx + 1}`}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.22 }}
          className="max-w-[90vw] max-h-[88vh] object-contain select-none"
          onClick={e => e.stopPropagation()}
          draggable={false}
        />
      </AnimatePresence>

      {/* seta direita */}
      {fotos.length > 1 && (
        <button
          onClick={e => { e.stopPropagation(); next(); }}
          aria-label="Próxima foto"
          className="
            absolute right-4 top-1/2 -translate-y-1/2 z-10
            w-10 h-10 flex items-center justify-center
            text-white/60 hover:text-white transition-colors
          "
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7 3L13 10L7 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}

      {/* contador */}
      {fotos.length > 1 && (
        <span className="absolute bottom-5 left-1/2 -translate-x-1/2 eyebrow text-[10px] text-white/40 tracking-widest">
          {idx + 1} / {fotos.length}
        </span>
      )}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MODAL
═══════════════════════════════════════════════════════════════ */
function WorkModal({ trabalho, onClose }) {
  const [lightboxIdx, setLightboxIdx] = useState(null);

  /* ESC: fecha lightbox primeiro, depois o modal */
  useEffect(() => {
    const handler = (e) => {
      if (e.key !== 'Escape') return;
      if (lightboxIdx !== null) { setLightboxIdx(null); return; }
      onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, lightboxIdx]);

  /* trava scroll do body */
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <>
      {/* ── backdrop + painel ──────────────────────────────── */}
      <motion.div
        variants={backdropVariants}
        initial="hidden" animate="show" exit="exit"
        className="fixed inset-0 z-50 bg-dark/40 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-6 md:p-10"
        onClick={onClose}
      >
        <motion.div
          variants={panelVariants}
          initial="hidden" animate="show" exit="exit"
          className="
            bg-bg w-full sm:max-w-2xl
            h-[92dvh] sm:h-auto sm:max-h-[88vh]
            overflow-y-auto relative
            rounded-t-2xl sm:rounded-none
          "
          onClick={e => e.stopPropagation()}
        >
          {/* fechar */}
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="
              absolute top-5 right-5 z-20
              w-8 h-8 flex items-center justify-center
              text-dark/35 hover:text-dark transition-colors duration-150
            "
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>

          {/* ── fotos clicáveis (abre lightbox) ───────────── */}
          {trabalho.fotos?.length > 0 && (
            <div className="flex gap-px bg-linen-300 w-full">
              {trabalho.fotos.map((foto, i) => (
                <div
                  key={i}
                  className="flex-1 aspect-[4/3] overflow-hidden bg-surface cursor-zoom-in group/thumb"
                  onClick={() => setLightboxIdx(i)}
                >
                  <img
                    src={foto}
                    alt={`${trabalho.titulo} — foto ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-400 group-hover/thumb:scale-[1.04]"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}

          {/* ── conteúdo ───────────────────────────────────── */}
          <div className="p-8 md:p-10">

            <h2 className="font-display text-[26px] md:text-[32px] font-semibold text-dark leading-tight mb-8">
              {trabalho.titulo}
            </h2>

            {/* ingredientes */}
            {trabalho.ingredientes?.length > 0 && (
              <div className="mb-8">
                <h3 className="eyebrow text-[14px] text-dark/55 tracking-widest mb-4 uppercase">
                  Ingredientes
                </h3>
                <ul className="space-y-[10px]">
                  {trabalho.ingredientes.map((item, i) => {
                    const isHeader = item.endsWith(':');
                    return isHeader ? (
                      <li key={i} className={`${i > 0 ? 'pt-3' : ''} eyebrow text-[14px] text-teal-600/70 tracking-widest uppercase`}>
                        {item.slice(0, -1)}
                      </li>
                    ) : (
                      <li key={i} className="flex items-start gap-3 pl-5 text-[18px] text-dark/65 leading-relaxed">
                        <span className="mt-[7px] w-[5px] h-[5px] rounded-full bg-teal-500/50 shrink-0" />
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {/* divisor */}
            {trabalho.ingredientes?.length > 0 && trabalho.modoPreparo?.length > 0 && (
              <div className="border-t border-black/30 mb-8" />
            )}

            {/* modo de preparo */}
            {trabalho.modoPreparo?.length > 0 && (
              <div>
                <h3 className="eyebrow text-[14px] text-dark/55 tracking-widest mb-4 uppercase">
                  Modo de Preparo
                </h3>
                <ol className="space-y-5">
                  {trabalho.modoPreparo.map((passo, i) => (
                    <li key={i} className="flex items-start gap-4 text-[18px] text-dark/65 leading-relaxed">
                      <span className="font-display font-bold text-[22px] text-teal-500/80 leading-none shrink-0 w-5 text-right select-none">
                        {i + 1}.
                      </span>
                      <span>{passo}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            { trabalho.fonte && (
              <div className="mt-8 flex gap-2 font-display text-[19px]">
                Fonte: 
                <a className="space-y-5 underline text-teal-600 font-semibold" href={trabalho.fonte} target="_blank" rel="noopener noreferrer">
                  {trabalho.texto_fonte}
                </a>
              </div>
            )}
          </div>

        </motion.div>
      </motion.div>

      {/* ── lightbox (sobre o modal) ───────────────────────── */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <Lightbox
            key="lightbox"
            fotos={trabalho.fotos}
            startIdx={lightboxIdx}
            onClose={() => setLightboxIdx(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════════ */
export default function Trabalhos() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-bg font-handwritten">

      {/* ══════════════════
          HERO
          ══════════════════ */}
      <section className="page-hero">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full bg-slate-100/85 blur-[110px]" />
          <div className="absolute top-0 right-0 w-[520px] h-[520px] rounded-full bg-teal-100/75 blur-[140px]" />
        </div>
        <div className="page-hero-shell">
          <SectionHeader
            label="Produções acadêmicas"
            title="Trabalhos"
            subtitle="& Pesquisas"
          />
        </div>
      </section>

      {/* ══════════════════
          GRID
          ══════════════════ */}
      <section className="section-band py-16">
        <div className="section-inner max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  bg-linen-300"
          >
            {trabalhos.map((t, i) => (
              <motion.article
                key={t.id}
                custom={i}
                variants={rev}
                initial="hidden"
                animate="show"
                onClick={() => setSelected(t)}
                className={`${i %2 === 0 ? 'bg-surface' : 'bg-teal-100'} border border-teal-500/20 hover:bg-surface
                  transition-colors duration-300
                  p-8 flex flex-col
                  cursor-pointer group`}
              >
                {/* carrossel de fotos */}
                {t.fotos?.length > 0 && (
                  <CardCarousel fotos={t.fotos} titulo={t.titulo} />
                )}

                <h2 className="font-display text-[21px] font-bold text-dark leading-snug mb-3">
                  {t.titulo}
                </h2>
                <p className="text-[16px] text-dark/50 leading-relaxed flex-1 mb-7 line-clamp-4">
                  {t.descricao}
                </p>

                <span className="eyebrow text-[12px] text-teal-600/70 font-bold group-hover:text-teal-600 transition-colors tracking-widest">
                  Ver receita →
                </span>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════
          MODAL
          ══════════════════ */}
      <AnimatePresence>
        {selected && (
          <WorkModal
            key="modal"
            trabalho={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>

    </div>
  );
}
