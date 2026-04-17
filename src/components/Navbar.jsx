import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { to: '/',         label: 'Início' },
  { to: '/sobre',    label: 'Sobre' },
  { to: '/trabalhos',label: 'Trabalhos' },
  { to: '/membros',  label: 'Membros' },
  { to: '/contato',  label: 'Contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Fecha menu ao navegar
  useEffect(() => setOpen(false), [location]);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-linen-50/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          {/* LOGO — substitua o texto pelo nome do grupo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-sage-500 rounded-full flex items-center justify-center">
              <span className="text-linen-50 text-xs font-display font-bold">N</span>
            </div>
            <span className="font-display font-semibold text-bark-700 text-lg leading-tight">
              {/* LOGO: Substitua pelo nome do grupo */}
              NutriGrupo
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-sage-100 text-sage-700'
                      : 'text-bark-700 hover:text-sage-600 hover:bg-sage-50'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-bark-700 origin-center"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="block w-5 h-0.5 bg-bark-700"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-bark-700 origin-center"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-16 z-40 bg-linen-50/98 backdrop-blur-md border-b border-linen-300 md:hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {links.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-sage-100 text-sage-700'
                        : 'text-bark-700 hover:bg-sage-50'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
