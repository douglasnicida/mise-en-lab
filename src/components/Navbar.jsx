import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { to: '/', label: 'Início' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/trabalhos', label: 'Trabalhos' },
  { to: '/membros', label: 'Membros' },
  { to: '/contato', label: 'Contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => setOpen(false), [location]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const linkClass = ({ isActive }) =>
    [
      'eyebrow relative inline-flex items-center px-3 py-2 tracking-[0.18em] transition-colors duration-200',
      isActive
        ? 'text-teal-400 after:absolute after:left-3 after:right-3 after:bottom-0 after:h-px after:bg-teal-400/90'
        : 'text-stone-500 hover:text-linen-50',
    ].join(' ');

  const mobileLinkClass = ({ isActive }) =>
    [
      'eyebrow flex items-center justify-between px-4 py-4 tracking-[0.2em] border-b border-white/6 transition-colors',
      isActive ? 'text-teal-400 bg-white/3' : 'text-stone-400 hover:text-linen-50 hover:bg-white/2',
    ].join(' ');

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className={[
          'fixed top-0 left-0 right-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-300',
          scrolled
            ? 'bg-dark/90 backdrop-blur-xl border-white/10 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.45)]'
            : 'bg-dark/65 backdrop-blur-md border-white/6',
        ].join(' ')}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between gap-6">
          <Link
            to="/"
            className="group flex items-center gap-3 min-w-0 shrink"
            onClick={() => setOpen(false)}
          >
            <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-white/15 bg-white/4 transition-colors duration-200 group-hover:border-teal-500/45 group-hover:bg-teal-500/8">
              <span className="font-display text-[17px] font-semibold leading-none text-linen-50">N</span>
            </div>
            <div className="flex min-w-0 flex-col">
              <span className="font-display text-[1.05rem] sm:text-lg font-semibold text-linen-50 tracking-tight leading-tight truncate">
                NutriGrupo
              </span>
              <span className="eyebrow text-[9px] text-stone-500 tracking-[0.2em] mt-0.5 hidden sm:block">
                Nutrição · Unicamp Limeira
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-0.5 lg:gap-1" aria-label="Principal">
            {links.map(({ to, label }) => (
              <NavLink key={to} to={to} end={to === '/'} className={linkClass}>
                {label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-sm border border-white/10 bg-white/3 text-linen-100 transition hover:border-white/20 hover:bg-white/6"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-px w-4 bg-linen-200 origin-center"
            />
            <motion.span
              animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              className="block h-px w-4 bg-linen-200"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block h-px w-4 bg-linen-200 origin-center"
            />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-dark/70 backdrop-blur-sm md:hidden"
            aria-label="Fechar menu"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed left-0 right-0 top-16 z-40 border-b border-white/8 bg-dark2/98 backdrop-blur-xl shadow-[0_24px_48px_-24px_rgba(0,0,0,0.6)] md:hidden max-h-[min(70vh,calc(100dvh-4rem))] overflow-y-auto"
          >
            <div className="px-2 py-2">
              <div className="px-4 py-3 border-b border-white/6">
                <p className="eyebrow text-stone-500 tracking-[0.22em]">Navegação</p>
              </div>
              <nav className="flex flex-col py-1" aria-label="Mobile">
                {links.map(({ to, label }) => (
                  <NavLink key={to} to={to} end={to === '/'} className={mobileLinkClass}>
                    <span>{label}</span>
                    <span className="text-stone-600 text-lg opacity-60" aria-hidden>
                      →
                    </span>
                  </NavLink>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
