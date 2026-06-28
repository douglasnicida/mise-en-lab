import { motion } from 'framer-motion';
import { membros } from '../data/content';
import SectionHeader from '../components/SectionHeader';
import { useState } from 'react';


const rev = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Membros() {
  const [openMemberImg, setOpenMemberImg] = useState(null);
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
            <SectionHeader
            label="Equipe"
            title="Nossos"
            subtitle="Membros"
          />
          {/* <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="page-hero-copy">
            [Breve descrição — quantas pessoas, o que têm em comum, o que as une no grupo.]
          </motion.p> */}
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
            <p className="eyebrow text-linen-300/60 mb-5">Orientação</p>
            <h2 className="font-display font-semibold text-linen-50 leading-tight mb-4"
              style={{ fontSize: 'clamp(28px, 3.5vw, 44px)' }}>
              {/* DOCENTE: Nome do professor */}
              Profa. <em className="font-light text-teal-400">Andressa Mara Baseggio</em><br />
              Profa. <em className="font-light text-teal-400">Caroline Capitani</em><br />
            </h2>
            <p className="eyebrow text-linen-300/60 mb-6">
              {/* DOCENTE: Cargo / disciplina */}
              [Docente · NT402 - Técnica Dietética]
            </p>
            <p className="text-[13px] text-linen-300/45 leading-relaxed max-w-[800px] text-justify">
              {/* DOCENTE: Mini bio / agradecimento */}
              Nosso sincero agradecimento às professoras pela orientação e pelo olhar atento que transformou cada etapa da disciplina em aprendizado. Este trabalho carrega um pouco da dedicação e inspiração que recebemos em sala, no laboratório e em cada detalhe do processo.
              <br/><br/> E um agradecimento especial às PEDs que ajudaram em diversas receitas!
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
