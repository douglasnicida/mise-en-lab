import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { trabalhos, membros, stats, miseEnPlaceContent } from '../data/content';
import { HiArrowUpRight } from 'react-icons/hi2';
import { HiArrowRight } from 'react-icons/hi';

const rev = {
  hidden: { opacity: 0, y: 32 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const cardBorder = { sage: 'border-teal-500/30', earth: 'border-stone-400/30', clay: 'border-slate-500/30' };
const tagStyle   = { sage: 'border-teal-500/40 text-teal-500', earth: 'border-stone-400/40 text-stone-500', clay: 'border-slate-400/40 text-slate-500' };

function initialFromNome(nome) {
  const t = nome.replace(/^\W+/, '').trim();
  return (t.charAt(0) || '?').toUpperCase();
}

function HeroPortraitWindow({ m, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0 round 1.6rem)', y: 24 }}
      animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0 round 1.6rem)', y: 0 }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      <Link
        to="/membros"
        className="group relative block h-full min-h-80 overflow-hidden rounded-[1.6rem] border border-linen-300 bg-white shadow-[0_18px_44px_rgba(32,51,49,0.08)] transition-all duration-500 ease-out hover:-translate-y-1 lg:hover:flex-[1.22]"
      >
        <div className="absolute inset-0 overflow-hidden bg-surface">
          {m.avatar ? (
            <img
              src={m.avatar}
              alt={m.nome}
              className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
            />
          ) : (
            <div className="flex size-full items-center justify-center font-display text-4xl font-semibold text-dark/28">
              {initialFromNome(m.nome)}
            </div>
          )}
          <div className="absolute inset-0 bg-linear-to-t from-dark/92 via-dark/28 to-transparent" />
        </div>
        <div className="absolute inset-x-0 bottom-0 z-10 p-4 text-linen-50">
          <div className="translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
            <p className="font-display text-[26px] font-semibold leading-none text-white drop-shadow-sm">
              {m.nome}
            </p>
            <p className="mt-1 text-[12px] leading-relaxed text-white/78">
              {m.papel}
            </p>
            {/* <p className="mt-3 max-w-[18rem] text-[12px] leading-6 text-white/0 transition-colors duration-500 group-hover:text-white/78">
              {m.bio || '[Breve apresentação do integrante]'}
            </p> */}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ── Componente de foto com fallback de placeholder ───────────────
function FotoCard({ src, legenda, className = '', aspect = 'aspect-[4/5]', rounded = 'rounded-[1.4rem]', height='h-auto' }) {
  return (
    <figure className={`group relative flex flex-col ${className}`}>
      <div
        className={`relative w-full ${aspect} ${height} overflow-hidden ${rounded} border border-linen-300 ...`}
      >
        {src ? (
          <img
            src={src}
            alt={legenda}
            className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        ) : (
          /* Placeholder visual quando a imagem ainda não foi adicionada */
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-linen-100">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              className="text-stone-300"
            >
              <rect x="3" y="3" width="18" height="18" rx="3" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="m21 15-5-5L5 21" />
            </svg>
            <span className="text-[11px] text-stone-300 text-center px-4">
              {legenda}
            </span>
          </div>
        )}
      </div>
      {legenda && (
        <figcaption className="mt-3 text-center text-[11px] leading-relaxed text-dark/40">
          {legenda}
        </figcaption>
      )}
    </figure>
  );
}
 
// ── Seta de transição antes → depois ────────────────────────────
function ArrowTransition() {
  return (
    <div className="flex shrink-0 flex-col items-center justify-center gap-2 px-2">
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center gap-1"
      >
        {/* Linha pontilhada animada */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          style={{ originY: 0 }}
          className="hidden h-12 w-px origin-top border-l border-dashed border-teal-400/50 md:block"
        />
 
        {/* Badge central */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-teal-500/30 bg-teal-50 shadow-sm">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-teal-600"
          >
            {/* Seta para a direita em desktop, para baixo em mobile */}
            <path d="M5 12h14M12 5l7 7-7 7" className="hidden md:block" />
            <path d="M12 5v14M5 12l7 7 7-7" className="md:hidden" />
          </svg>
        </div>
 
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          style={{ originY: 0 }}
          className="hidden h-12 w-px origin-top border-l border-dashed border-teal-400/50 md:block"
        />
      </motion.div>
 
      {/* Label */}
      {/* <span className="whitespace-nowrap rounded-full border border-teal-500/20 bg-teal-50 px-3 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-teal-600">
        Antes → Depois
      </span> */}
    </div>
  );
}
 
// ── Componente principal ─────────────────────────────────────────
function MiseEnPlaceSection() {
  return (
    <section className="bg-teal-100 py-24 section-divider-top">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
 
        {/* ── Cabeçalho ── */}
        <div className="mb-16 border-b border-stone-200 pb-6">
          <motion.p
            custom={0}
            variants={rev}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="eyebrow mb-4 text-stone-400"
          >
            Técnica · Gastronomia
          </motion.p>
 
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <motion.h2
              custom={1}
              variants={rev}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="font-pally font-semibold leading-[0.95] text-dark"
              style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
            >
              Mise en<br />
              <span className="font-pally font-normal text-teal-600">Place</span>
            </motion.h2>
 
            <motion.p
              custom={2}
              variants={rev}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="max-w-xs text-[11px] font-semibold uppercase tracking-widest text-stone-600"
            >
              "Posto no lugar" — expressão francesa
            </motion.p>
          </div>
        </div>
 
        {/* ── O que é + foto antes/depois ── */}
        <div className="mb-24 grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
 
          {/* Texto explicativo */}
          <motion.div
            custom={0}
            variants={rev}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="font-display mb-6 text-[23px] leading-snug text-dark font-bold">
               🥗 O que é Mise en Place e por que ele vai mudar a sua rotina na cozinha?
            </h3>
 
            <div className="space-y-4 text-[15px] leading-relaxed text-dark/58 text-justify">
              <p>
                Se você já assistiu a um programa de culinária na TV, com certeza já viu aqueles chefs que
                cozinham com tudo perfeitamente separado em potinhos de vidro, sem nenhum pingo de estresse.
                Parece mágica, né? Mas o nome disso é <span className="font-semibold text-dark/80">Mise en Place</span>.
              </p>
              <p>
                Essa expressão francesa significa <em>"posto no lugar"</em> ou{' '}
                <em>"colocado em ordem"</em>. Na gastronomia, ela representa aquela etapa fundamental de organizar,
                separar e picar todos os ingredientes — e separar os utensílios — antes mesmo de acender o fogo.
              </p>
              <p>
                Além de garantir agilidade na hora de cozinhar, o mise en place evita acidentes (como esquecer um
                ingrediente ou queimar o alho enquanto você tenta correr para picar o tomate) e ajuda a manter o
                controle de qualidade de tudo o que você prepara.
              </p>
            </div>
 
            {/* Destaque / pull quote */}
            <blockquote className="mt-8 border-l-2 border-teal-500 pl-5">
              <p className="text-[14px] italic leading-relaxed text-dark/50">
                "Organizar o seu espaço é, essencialmente, organizar as suas ideias."
              </p>
              <footer className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-stone-500">
                — Anthony Bourdain, Cozinha Confidencial
              </footer>
            </blockquote>
          </motion.div>
 
          {/* Antes / Depois */}
          <motion.div
            custom={1}
            variants={rev}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center gap-4 md:flex-row md:items-stretch md:gap-0">
 
              {/* Card ANTES */}
              <div className="relative w-full md:flex-1">
                <div className="absolute -top-3 left-4 z-10 rounded-full border border-stone-300 bg-white px-3 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-stone-500 shadow-sm">
                  Antes
                </div>
                <FotoCard
                  src={miseEnPlaceContent.fotos.antes.src}
                  legenda={miseEnPlaceContent.fotos.antes.legenda}
                  aspect="aspect-square"
                  rounded="rounded-full"
                  className="h-full"
                />
              </div>
 
              {/* Seta de transição */}
              <ArrowTransition />
 
              {/* Card DEPOIS */}
              <div className="relative w-full md:flex-1">
                <div className="absolute -top-3 left-4 z-10 rounded-full border border-teal-400/40 bg-teal-50 px-3 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-teal-600 shadow-sm">
                  Depois
                </div>
                <FotoCard
                  src={miseEnPlaceContent.fotos.depois.src}
                  legenda={miseEnPlaceContent.fotos.depois.legenda}
                  aspect="aspect-square"
                  rounded="rounded-full"
                  className="h-full"
                />
              </div>
 
            </div>
          </motion.div>
        </div>
 
        {/* ── Dicas & Curiosidades ── */}
        <div className="mb-24">
          <motion.div
            custom={0}
            variants={rev}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-10 flex items-center gap-4"
          >
            <div className="h-px flex-1 bg-stone-200" />
            <span className="eyebrow flex items-center gap-2 text-[13px] text-stone-800">
              <span>💡</span> Dicas & Curiosidades que você precisa saber
            </span>
            <div className="h-px flex-1 bg-stone-200" />
          </motion.div>
 
          <div className="grid gap-px bg-stone-200 sm:grid-cols-2">
            {miseEnPlaceContent.curiosidades.map((c, i) => (
              <motion.article
                key={c.id}
                custom={i}
                variants={rev}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="group bg-linen-50 p-8 transition-colors duration-300 hover:bg-teal-50"
              >
                <div className="mb-4 flex items-start gap-3">
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-white text-lg shadow-sm transition-colors duration-300 group-hover:border-teal-300"
                    aria-hidden
                  >
                    {c.icone}
                  </span>
                  <h4 className="font-display mt-1 text-[19px] font-semibold text-dark">
                    {c.titulo}
                  </h4>
                </div>
                <p className="text-[14px] leading-relaxed text-dark/55 text-justify">
                  {c.texto}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
 
        {/* ── Foto do antepasto ── */}
        <div className="mb-24">
          <motion.div
            custom={0}
            variants={rev}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-8"
          >
            <p className="eyebrow mb-2 text-stone-500 font-bold">Na prática</p>
            <h3 className="font-display text-[22px] font-semibold text-dark">
              Mise en Place do Antepasto de Berinjela 🍽️
            </h3>
          </motion.div>
 
          <motion.div
            custom={1}
            variants={rev}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <FotoCard
              src={miseEnPlaceContent.fotos.antepasto.src}
              legenda={miseEnPlaceContent.fotos.antepasto.legenda}
              aspect="aspect-[16/7]"
              height="h-[870px]"
            />
          </motion.div>
        </div>
 
        {/* ── Cuidados ── */}
        <div>
          <motion.div
            custom={0}
            variants={rev}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-10 flex items-center gap-4"
          >
            <div className="h-px flex-1 bg-stone-200" />
            <span className="eyebrow flex items-center gap-2 text-[13px] text-stone-600 font-bold">
              <span>⚠️</span> Cuidados importantes para não errar a mão
            </span>
            <div className="h-px flex-1 bg-stone-200" />
          </motion.div>
 
          <div className="grid gap-6 sm:grid-cols-2">
            {miseEnPlaceContent.cuidados.map((c, i) => (
              <motion.div
                key={c.id}
                custom={i}
                variants={rev}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="group flex gap-5 rounded-[1.2rem] border border-stone-200 bg-white p-6 transition-shadow duration-300 hover:shadow-[0_8px_28px_rgba(32,51,49,0.07)]"
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-stone-100 bg-linen-50 text-xl shadow-sm"
                  aria-hidden
                >
                  {c.icone}
                </div>
                <div>
                  <h4 className="font-display mb-2 text-[18px] font-semibold text-dark">
                    {c.titulo}
                  </h4>
                  <p className="text-[14px] leading-relaxed text-dark/55">{c.texto}</p>
                </div>
              </motion.div>
            ))}
          </div>
 
          {/* Dica dos membros */}
          <motion.div
            custom={2}
            variants={rev}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-8 flex items-start gap-4 rounded-[1.2rem] border border-teal-500/20 bg-teal-50 p-6"
          >
            <span className="mt-0.5 text-xl" aria-hidden>
              🌿
            </span>
            <div>
              <p className="mb-1 text-[12px] font-semibold uppercase tracking-widest text-teal-600">
                Dica dos membros
              </p>
              <p className="text-[14px] leading-relaxed text-dark/65">
                Da próxima vez que for testar aquela receita nova, separe as xícaras, pique os temperos e
                monte o seu mise en place. Cozinhar vai se tornar algo muito mais terapêutico — vale testar!
              </p>
            </div>
          </motion.div>
        </div>
 
      </div>
    </section>
  );
}

export default function Home() {
  const destaques = trabalhos.filter(t => t.destaque).slice(0, 3);
  const heroMembros = membros.slice(0, 5);

  return (
    <div className="bg-bg">
      <section className="relative -mt-12 overflow-hidden bg-linen-50 pt-24 md:pt-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-linear-to-b from-white via-linen-50 to-bg" />
          <div className="absolute top-16 right-0 h-[420px] w-[420px] rounded-full bg-teal-100/75 blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 h-[320px] w-[320px] rounded-full bg-slate-100/75 blur-[110px]" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#203331" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-14 md:px-10 md:pb-20">
          <div className="grid items-start gap-12 pb-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14 h-[calc(100vh - 90px)]">
            <div className="min-w-0 flex flex-col h-full pb-3">
              <motion.div custom={0} variants={rev} initial="hidden" animate="show"
                className="mb-4 flex items-center gap-4">
                <div className="h-px w-10 bg-teal-300" />
                <span className="eyebrow text-teal-600 text-[11px]">[Nutri 2025 · 3 Semestre · Unicamp Limeira]</span>
                <div className="h-px w-10 bg-teal-300" />
              </motion.div>

              <div className="flex gap-4">
                <div className="mb-2 overflow-hidden">
                    <motion.h1
                    initial={{ y: -80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    className="font-tanker text-[90px]! font-semibold tracking-wide text-dark"
                    style={{ fontSize: 'clamp(38px, 6vw, 74px)' }}
                    >
                    Mise En
                    </motion.h1>
                </div>
                <div className="overflow-hidden">
                    <motion.h1
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
                    className="font-tanker text-[90px]! font-semibold tracking-wide text-teal-600"
                    style={{ fontSize: 'clamp(38px, 6vw, 74px)' }}
                    >
                    Lab
                    </motion.h1>
                </div>
              </div>

              <motion.div custom={3} variants={rev} initial="hidden" animate="show"
                className="flex flex-col items-start justify-between flex-1">
                <p className="max-w-[500px] text-[15px] leading-auto text-dark/58 text-justify">
                    Sejam bem-vindos(as) ao nosso espaço de vivências e aprendizados em Nutrição! 👩‍🍳💚<br/><br/> 
                    Este site é o nosso portfolio digital, desenvolvido para a disciplina de Técnica Dietética do curso de Nutrição da UNICAMP e ele funciona como um diário da nossa jornada acadêmica ao longo do semestre, sendo planejado para acompanhar de perto a nossa evolução prática e teórica, conectando os conceitos de sala de aula com os desafios reais da atuação do nutricionista.
                    <br/><br/>
                    A disciplina de Técnica Dietética (TD) é uma das bases mais interessantes da Nutrição. Seu objetivo central é compreender profundamente as transformações físicas, químicas e biológicas que os alimentos sofrem durante todas as etapas de seu preparo. Através dela, aprendemos a enxergar a cozinha e a dietética como áreas científicas essenciais para promover a saúde, otimizar nutrientes no prato e valorizar a nossa identidade cultural.
                </p>
                <div className="flex flex-wrap items-center gap-6">
                  <Link to="/trabalhos" className="btn-cta group">
                    Ver trabalhos <HiArrowUpRight className="text-sm text-linen-600 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <Link to="/sobre" className="eyebrow flex items-center gap-1 text-[12px] font-semibold text-dark/70 transition-colors hover:text-dark group">
                    Grupos de alimentos <HiArrowRight className="text-sm text-dark/42 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-dark" />
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="min-w-0">
              <div className="rounded-[.5rem] border border-linen-300 bg-white/74 p-4 shadow-[0_28px_70px_rgba(32,51,49,0.08)] md:p-5">
              <p className="eyebrow text-teal-600 text-[15px] font-bold w-full mb-4">Integrantes</p>

<div
                    aria-label="Fotos dos integrantes do grupo"
                    className="grid grid-cols-2 gap-3 lg:min-h-116"
                  >
                    {heroMembros.slice(0, 4).map((m, i) => (
                      <HeroPortraitWindow
                        key={m.id}
                        m={m}
                        delay={0.16 + i * 0.08}
                        className="hover:scale-105 transition-transform duration-300"
                      />
                    ))}
                  </div>

                <div className="mt-4 flex flex-col justify-center gap-4">
                    <Link
                        to="/membros"
                        className="relative hidden md:flex items-center gap-1 justify-center text-[14px] text-teal-600 transition-colors duration-300 hover:text-teal-700 group w-fit self-end"
                        >
                        Ver equipe <HiArrowUpRight className="text-sm text-linen-600 transition-transform duration-300 group-hover:translate-x-1" />
                        <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </div>

                <div className="mt-4 flex items-center justify-between rounded-[1.4rem] border border-linen-300 bg-linen-100/72 px-4 py-3 md:hidden">
                  <Link to="/membros" className="shrink-0 pl-4 eyebrow text-teal-600 transition-colors hover:text-teal-700">
                    Ver equipe <HiArrowUpRight className="text-sm text-linen-600 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className=" section-divider-top bg-teal-600">
        <div className="section-inner max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-stone-300">
            {stats.map((s, i) => (
              <motion.div key={s.label}
                custom={i} variants={rev} initial="hidden" whileInView="show" viewport={{ once: true }}
                className="py-10 px-8 text-center first:pl-0 last:pr-0">
                <div className="font-pally text-[52px] font-semibold text-zinc-600 leading-none mb-2">
                  {s.valor}
                </div>
                <div className="eyebrow text-stone-500 text-[12px] font-semibold">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* <section className='bg-teal-100 py-24 section-divider-top'> */}
            <MiseEnPlaceSection />
      {/* </section> */}

      {/* ════════════════════════════════════
          CTA FINAL — dark + bold
          ════════════════════════════════════ */}
      <section className="section-band-dark py-28 section-divider-top">
        {/* Big decorative text */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none select-none pointer-events-none">
          <p className="font-display font-bold text-white/3"
            style={{ fontSize: 'clamp(80px, 15vw, 200px)', whiteSpace: 'nowrap' }}>
            NUTRIÇÃO
          </p>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="section-inner relative max-w-4xl mx-auto px-6 md:px-10">
          {/* <p className="eyebrow text-stone-300/30 mb-6">Entre em contato</p> */}
          <h2 className="font-display font-semibold text-linen-50 leading-[0.95] mb-10"
            style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}>
            {/* CTA: Frase de impacto */}
            [Receitas realizadas<br />
            <em className="font-light text-teal-400">por nós!]</em>
          </h2>
          <div className="flex flex-wrap items-center gap-4">
            {/* <Link to="/contato" className="btn-cta-dark">
              Entrar em contato ↗
            </Link> */}
            <Link to="/trabalhos" className="eyebrow text-stone-200/40 hover:text-stone-300 transition-colors">
              Ver trabalhos →
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
