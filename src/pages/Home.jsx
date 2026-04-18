import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { trabalhos, membros, stats } from '../data/content';
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
        className="group relative block h-full min-h-[26rem] overflow-hidden rounded-[1.6rem] border border-linen-300 bg-white shadow-[0_18px_44px_rgba(32,51,49,0.08)] transition-all duration-500 ease-out hover:-translate-y-1 lg:hover:flex-[1.22]"
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
          <div className="absolute inset-0 bg-gradient-to-t from-dark/92 via-dark/28 to-transparent" />
          <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm">
            Integrante
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 z-10 p-4 text-linen-50">
          <div className="translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
            <p className="font-display text-[26px] font-semibold leading-none text-white drop-shadow-sm">
              {m.nome}
            </p>
            <p className="mt-1 text-[12px] leading-relaxed text-white/78">
              {m.papel}
            </p>
            <p className="mt-3 max-w-[18rem] text-[12px] leading-6 text-white/0 transition-colors duration-500 group-hover:text-white/78">
              {m.bio || '[Breve apresentação do integrante]'}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}


export default function Home() {
  const destaques = trabalhos.filter(t => t.destaque).slice(0, 3);
  const heroMembros = membros.slice(0, 5);

  return (
    <div className="bg-bg">
      <section className="relative -mt-16 overflow-hidden bg-linen-50 pt-24 md:pt-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-linen-50 to-bg" />
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
          <div className="grid items-start gap-12  pb-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14">
            <div className="min-w-0">
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
                    className="eyebrow text-[60px]! font-semibold tracking-wide text-dark"
                    style={{ fontSize: 'clamp(38px, 6vw, 74px)' }}
                    >
                    Nome
                    </motion.h1>
                </div>
                <div className="overflow-hidden">
                    <motion.h1
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
                    className="eyebrow text-[60px]! font-semibold tracking-wide text-slate-500"
                    style={{ fontSize: 'clamp(38px, 6vw, 74px)' }}
                    >
                    Grupo
                    </motion.h1>
                </div>
              </div>

              <motion.div custom={3} variants={rev} initial="hidden" animate="show"
                className="flex flex-col items-start gap-10">
                <p className="max-w-[500px] text-[14px] leading-auto text-dark/58">
                    Somos alunos da turma 024 de Nutrição da Unicamp – FCA, atualmente cursando a disciplina de Técnica e Dietética. Este espaço foi criado para apresentar os trabalhos desenvolvidos ao longo das atividades teóricas e práticas da disciplina. <br/><br/>

                    Aqui, você encontrará conteúdos sobre ficha técnica de preparações, grupos alimentares — com foco em leguminosas, carnes e pescados — além de estudos sobre elaboração de cardápios e segurança dos alimentos.<br/><br/>

                    Comece conhecendo um pouco mais sobre o nosso grupo e, em seguida, explore os temas que organizamos ao longo do curso.
                </p>
                <div className="flex flex-wrap items-center gap-6">
                  <Link to="/trabalhos" className="btn-cta group">
                    Ver trabalhos <HiArrowUpRight className="text-sm text-linen-600 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <Link to="/sobre" className="eyebrow flex items-center gap-1 text-[12px] font-semibold text-dark/70 transition-colors hover:text-dark group">
                    Sobre <HiArrowRight className="text-sm text-dark/42 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-dark" />
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="min-w-0">
              <div className="rounded-[2rem] border border-linen-300 bg-white/74 p-4 shadow-[0_28px_70px_rgba(32,51,49,0.08)] md:p-5">
              <p className="eyebrow text-teal-600 text-[15px] font-bold w-full mb-4">Integrantes</p>

              <div
                  aria-label="Fotos dos integrantes do grupo"
                  className="flex items-stretch gap-3 overflow-x-auto pb-1 scrollbar-hide lg:min-h-[29rem]"
                >
                  {heroMembros.slice(0, 4).map((m, i) => (
                    <HeroPortraitWindow
                      key={m.id}
                      m={m}
                      delay={0.16 + i * 0.08}
                      className="min-w-[15rem] flex-1 lg:min-w-0"
                    />
                  ))}
                </div>

                <div className="mt-4 flex flex-col justify-center gap-4">
                    <Link
                        to="/membros"
                        className="relative hidden md:flex items-center gap-1 justify-center text-[14px] text-teal-600 transition-colors duration-300 hover:text-teal-700 group w-fit self-end"
                        >
                        Ver equipe <HiArrowUpRight className="text-sm text-linen-600 transition-transform duration-300 group-hover:translate-x-1" />
                        <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
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

      <section className="section-band section-divider-top">
        <div className="section-inner max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-stone-300">
            {stats.map((s, i) => (
              <motion.div key={s.label}
                custom={i} variants={rev} initial="hidden" whileInView="show" viewport={{ once: true }}
                className="py-10 px-8 text-center first:pl-0 last:pr-0">
                <div className="font-display text-[52px] font-bold text-dark leading-none mb-2">
                  {s.valor}
                </div>
                <div className="eyebrow text-stone-500 text-[12px] font-semibold">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          TRABALHOS EM DESTAQUE
          ════════════════════════════════════ */}
      <section className="section-band-soft py-24 section-divider-top">
        <div className="section-inner max-w-7xl mx-auto px-6 md:px-10">

          {/* Header */}
          <div className="flex items-end justify-between mb-16 pb-6 border-b border-stone-300">
            <div>
              <p className="eyebrow text-stone-500 mb-4">Produções acadêmicas</p>
              <h2 className="font-display font-semibold text-dark leading-[0.95]"
                style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
                Trabalhos<br /><em className="font-light text-stone-400">em destaque</em>
              </h2>
            </div>
            <Link to="/trabalhos"
              className="hidden sm:flex eyebrow text-dark/40 hover:text-dark transition-colors items-center gap-2">
              Ver todos ↗
            </Link>
          </div>

          {/* Card grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-300">
            {destaques.map((t, i) => {
              const brd = cardBorder[t.cor] || cardBorder.sage;
              const tg  = tagStyle[t.cor]   || tagStyle.sage;
              return (
                <motion.div key={t.id}
                  custom={i} variants={rev} initial="hidden" whileInView="show" viewport={{ once: true }}
                  className="bg-bg p-8 group hover:bg-surface transition-colors duration-300 cursor-default">
                  <div className="flex items-start justify-between mb-6">
                    <span className={`tag-sm ${tg}`}>{t.categoria}</span>
                    <span className="eyebrow text-dark/25 text-[9px]">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="font-display text-[22px] font-semibold text-dark leading-snug mb-4">
                    {t.titulo}
                  </h3>
                  <p className="text-[13px] text-dark/50 leading-relaxed mb-8 line-clamp-3">
                    {t.descricao}
                  </p>
                  <div className="border-t border-stone-300 pt-5 flex items-center justify-between">
                    <p className="text-[11px] text-dark/40">
                      {t.autores.slice(0, 2).join(' · ')}{t.autores.length > 2 && ` +${t.autores.length - 2}`}
                    </p>
                    <span className="eyebrow text-[9px] text-dark/30">{t.data}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-8 sm:hidden">
            <Link to="/trabalhos" className="btn-outline-dark w-full justify-center">Ver todos</Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          SOBRE — split escuro/claro
          ════════════════════════════════════ */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[520px] section-divider-top">
        {/* Dark col */}
        <div className="section-band-dark px-10 md:px-16 py-20 flex flex-col justify-between">
          <div className="section-inner flex h-full flex-col justify-between">
          <p className="eyebrow text-stone-300/30 mb-16">Sobre o grupo</p>
          <div>
            <h2 className="font-display font-light text-bg leading-tight mb-6"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
              {/* SOBRE SPLIT: Título — quem são */}
              [Uma frase impactante<br />
              <em className="text-teal-400">sobre o grupo]</em>
            </h2>
            <p className="text-[13px] text-stone-300/50 leading-relaxed max-w-[340px] mb-10">
              {/* SOBRE SPLIT: Parágrafo curto */}
              [Breve texto apresentando o grupo — origem, missão e o que os une como equipe.]
            </p>
            <Link to="/sobre" className="btn-cta-dark self-start">
              Conhecer o grupo ↗
            </Link>
          </div>
          </div>
        </div>

        {/* Light col — valores rápidos */}
        <div className="section-band-soft px-10 md:px-16 py-20 flex flex-col justify-between border-l border-stone-300">
          <div className="section-inner flex h-full flex-col justify-between">
          <p className="eyebrow text-stone-500 mb-16">Nossos valores</p>
          <div className="space-y-6">
            {[
              { n: '01', label: '[Valor 1 — ex: Rigor científico]' },
              { n: '02', label: '[Valor 2 — ex: Colaboração]' },
              { n: '03', label: '[Valor 3 — ex: Sustentabilidade]' },
            ].map(v => (
              <div key={v.n} className="flex items-center gap-5 pb-6 border-b border-stone-300 last:border-0 last:pb-0">
                <span className="eyebrow text-dark/20 text-[9px] shrink-0">{v.n}</span>
                <p className="font-display text-[18px] font-semibold text-dark">{v.label}</p>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          MEMBROS — horizontal strip
          ════════════════════════════════════ */}
      <section className="section-band py-24 section-divider-top">
        <div className="section-inner max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="eyebrow text-stone-500 mb-4">Equipe</p>
              <h2 className="font-display font-semibold text-dark leading-tight"
                style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}>
                As pessoas<br /><em className="font-light text-stone-400">por trás</em>
              </h2>
            </div>
            <Link to="/membros" className="eyebrow text-dark/40 hover:text-dark transition-colors">
              Ver todos ↗
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-stone-300">
            {membros.slice(0, 5).map((m, i) => (
              <motion.div key={m.id}
                custom={i} variants={rev} initial="hidden" whileInView="show" viewport={{ once: true }}
                className="bg-bg hover:bg-surface transition-colors duration-300 p-6 flex flex-col items-center text-center">
                {/* Avatar */}
                <div className="w-16 h-16 bg-surface border border-stone-300 rounded-full mb-4 flex items-center justify-center overflow-hidden">
                  {m.avatar
                    ? <img src={m.avatar} alt={m.nome} className="w-full h-full object-cover" />
                    : <span className="font-display text-2xl font-semibold text-dark/40">{m.nome.charAt(0)}</span>
                  }
                </div>
                <p className="font-semibold text-[13px] text-dark mb-1">{m.nome}</p>
                <p className="eyebrow text-[9px] text-stone-500">{m.papel}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
          <p className="eyebrow text-stone-300/30 mb-6">Entre em contato</p>
          <h2 className="font-display font-semibold text-linen-50 leading-[0.95] mb-10"
            style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}>
            {/* CTA: Frase de impacto */}
            [Quer saber mais<br />
            <em className="font-light text-teal-400">sobre os projetos?]</em>
          </h2>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/contato" className="btn-cta-dark">
              Entrar em contato ↗
            </Link>
            <Link to="/trabalhos" className="eyebrow text-stone-300/40 hover:text-stone-300 transition-colors">
              Ver trabalhos →
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
