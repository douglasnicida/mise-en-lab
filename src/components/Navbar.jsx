import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { GiPineapple, GiWatermelon } from 'react-icons/gi';

const links = [
  { to: '/', label: 'Início' },
  { to: '/ficha-tecnica', label: 'Ficha Técnica' },
  { to: '/grupos-alimentos', label: 'Grupos de Alimentos' },
  { to: '/trabalhos', label: 'Trabalhos' },
  { to: '/membros', label: 'Membros' },
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
      'eyebrow relative text-[12px] inline-flex items-center rounded-md px-3.5 py-2 tracking-[0.18em] transition-all duration-200 font-bold',
      isActive
        ? 'bg-teal-500 text-white shadow-[0_10px_24px_rgba(94,143,136,0.24)]'
        : 'text-dark hover:text-dark hover:bg-white/70',
    ].join(' ');

  const mobileLinkClass = ({ isActive }) =>
    [
      'eyebrow flex items-center justify-between rounded-[1rem] px-4 py-4 tracking-[0.2em] transition-colors',
      isActive ? 'text-teal-700 bg-teal-100/90' : 'text-dark/55 hover:text-dark hover:bg-surface',
    ].join(' ');

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className={[
          'fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow,border-color] duration-300',
          scrolled
            ? 'bg-transparent backdrop-blur-xl shadow-[0_16px_44px_rgba(32,51,49,0.08)]'
            : 'bg-transparent',
        ].join(' ')}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-3">
          <div className={[
            'flex items-center justify-between gap-6 rounded-md border px-4 md:px-5 h-16 transition-all duration-300',
            scrolled
              ? 'border-linen-300 bg-teal-500/74'
              : 'border-linen-300/70 bg-teal-500/74 backdrop-blur-md shadow-[0_10px_30px_rgba(32,51,49,0.06)]',
          ].join(' ')}>
          <Link
            to="/"
            className="group flex items-center gap-3 min-w-0 shrink group"
            onClick={() => setOpen(false)}
          >
            <div className="flex min-w-0 flex-col group cursor-pointer">
              <span className="flex items-center gap-2 font-inter text-[1.05rem] sm:text-[18px] font-bold tracking-tight leading-tight truncate">
                
                {/* Ícone */}
                <span className="relative flex items-center justify-center overflow-visible bg-dark/40 group-hover:bg-dark rounded-full p-1 transition-colors">
                  <GiWatermelon
                    className="
                      text-[35px]
                      text-linen-50
                      transition-all duration-500 ease-out
                      group-hover:text-red-400
                      group-hover:rotate-[25deg]
                    "
                  />
                </span>
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1 rounded-md  px-2 py-2" aria-label="Principal">
            {links.map(({ to, label }) => (
              <NavLink key={to} to={to} end={to === '/'} className={linkClass}>
                {label}
              </NavLink>
            ))}
          </nav>

            <img src="https://www.unicamp.br/wp-content/uploads/sites/33/2024/09/uec.svg" alt="" className="w-10 h-10"/>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-[0.95rem] border border-linen-300 bg-white/78 text-dark transition hover:border-teal-300 hover:bg-white"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-px w-4 bg-dark origin-center"
            />
            <motion.span
              animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              className="block h-px w-4 bg-dark"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block h-px w-4 bg-dark origin-center"
            />
          </button>
          </div>
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
            className="fixed inset-0 z-40 bg-dark/35 backdrop-blur-sm md:hidden"
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
            className="fixed left-4 right-4 top-[5.2rem] z-40 rounded-[1.5rem] border border-linen-300 bg-white/96 backdrop-blur-xl shadow-[0_24px_48px_-24px_rgba(32,51,49,0.24)] md:hidden max-h-[min(70vh,calc(100dvh-5.2rem))] overflow-y-auto"
          >
            <div className="px-2 py-2">
              <div className="px-4 py-3 border-b border-linen-300">
                <p className="eyebrow text-dark/38 tracking-[0.22em]">Navegação</p>
              </div>
              <nav className="flex flex-col gap-1 py-2" aria-label="Mobile">
                {links.map(({ to, label }) => (
                  <NavLink key={to} to={to} end={to === '/'} className={mobileLinkClass}>
                    <span>{label}</span>
                    <span className="text-dark/30 text-lg" aria-hidden>
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
