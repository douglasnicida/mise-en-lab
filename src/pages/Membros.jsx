import { motion } from 'framer-motion';
import { membros } from '../data/content';

const rev = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Membros() {
  return (
    <div className="bg-bg">

      {/* ══════════════════
          HERO
          ══════════════════ */}
      <section className="page-hero">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[420px] h-[420px] rounded-full bg-teal-100/80 blur-[120px]" />
          <div className="absolute right-0 bottom-0 w-[480px] h-[480px] rounded-full bg-slate-100/75 blur-[130px]" />
        </div>
        <div className="page-hero-shell">
          <div className="page-hero-kicker">
            <div className="page-hero-rule" />
            <span className="eyebrow text-teal-600">Equipe</span>
          </div>
          <div className="overflow-hidden mb-1">
            <motion.h1 initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="page-hero-title font-semibold">
              Nossos
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-7">
            <motion.h1 initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
              className="page-hero-accent">
              Membros
            </motion.h1>
          </div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="page-hero-copy">
            {/* MEMBROS HERO: Descrição da equipe */}
            [Breve descrição — quantas pessoas, o que têm em comum, o que as une no grupo.]
          </motion.p>
        </div>
      </section>

      {/* ══════════════════
          GRID DE MEMBROS
          ══════════════════ */}
      <section className="section-band py-16">
        <div className="section-inner max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-linen-300">
            {membros.map((m, i) => (
              <motion.div key={m.id} custom={i} variants={rev} initial="hidden"
                whileInView="show" viewport={{ once: true }}
                className="bg-bg hover:bg-surface transition-colors duration-300 p-10 flex flex-col">

                {/* Avatar grande */}
                <div className="w-20 h-20 bg-linen-200 border border-linen-300 rounded-full mb-6 flex items-center justify-center overflow-hidden">
                  {m.avatar
                    ? <img src={m.avatar} alt={m.nome} className="w-full h-full object-cover" />
                    : <span className="font-display text-3xl font-semibold text-dark/30">{m.nome.charAt(0)}</span>
                  }
                </div>

                {/* Info */}
                <p className="eyebrow text-stone-500 mb-2">{m.papel}</p>
                <h2 className="font-display text-[26px] font-semibold text-dark leading-tight mb-4">
                  {m.nome}
                </h2>
                <p className="text-[13px] text-dark/45 leading-relaxed flex-1 mb-6">
                  {m.bio}
                </p>

                {/* Link */}
                {m.lattes && m.lattes !== '#' && (
                  <a href={m.lattes} target="_blank" rel="noopener noreferrer"
                    className="eyebrow text-[10px] text-teal-600 hover:text-teal-800 transition-colors">
                    Lattes / Perfil ↗
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════
          ORIENTAÇÃO — dark strip
          ══════════════════ */}
      <section className="section-band-dark border-y border-white/8">
        <div className="section-inner max-w-7xl mx-auto px-6 md:px-10 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="eyebrow text-linen-300/30 mb-5">Orientação</p>
            <h2 className="font-display font-semibold text-linen-50 leading-tight mb-4"
              style={{ fontSize: 'clamp(28px, 3.5vw, 44px)' }}>
              {/* DOCENTE: Nome do professor */}
              [Prof./Profa.<br /><em className="font-light text-teal-400">[Nome do Docente]]</em>
            </h2>
            <p className="eyebrow text-linen-300/30 mb-6">
              {/* DOCENTE: Cargo / disciplina */}
              [Cargo · Disciplina]
            </p>
            <p className="text-[13px] text-linen-300/45 leading-relaxed max-w-[380px]">
              {/* DOCENTE: Mini bio / agradecimento */}
              [Breve agradecimento ou apresentação do/a docente responsável pela disciplina.]
            </p>
          </div>
          {/* Avatar grande docente */}
          <div className="flex justify-center md:justify-end">
            <div className="w-40 h-40 bg-dark border border-white/10 rounded-full flex items-center justify-center">
              <span className="font-display text-5xl font-semibold text-linen-300/20">
                {/* DOCENTE: Inicial do nome */}
                [P]
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════
          AGRADECIMENTOS
          ══════════════════ */}
      <section className="section-band-soft py-20 border-t border-linen-300">
        <div className="section-inner max-w-3xl mx-auto px-6 text-center">
          <p className="eyebrow text-stone-500 mb-5">Agradecimentos</p>
          <h2 className="font-display font-semibold text-dark mb-4"
            style={{ fontSize: 'clamp(24px, 3vw, 40px)' }}>
            {/* AGRADECIMENTOS: Título */}
            [Obrigado/a a quem<br /><em className="font-light text-stone-500">tornou isso possível]</em>
          </h2>
          <p className="text-[13px] text-dark/50 leading-relaxed max-w-lg mx-auto">
            {/* AGRADECIMENTOS: Texto */}
            [Agradecimentos à instituição, professores, laboratórios, colegas de turma, etc.]
          </p>
        </div>
      </section>

    </div>
  );
}
