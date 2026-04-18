import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark2 text-linen-200 pt-16 pb-8 border-t border-white/8">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-white/15 bg-white/5">
                <span className="font-display text-[15px] font-semibold leading-none text-linen-50">N</span>
              </div>
              <span className="font-display font-semibold text-linen-50 text-lg tracking-tight">
                NutriGrupo
              </span>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed">
              [Descrição curta do grupo — turma, semestre e propósito do site]
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="eyebrow text-stone-500 mb-4 tracking-[0.2em]">
              Navegação
            </h3>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Início' },
                { to: '/sobre', label: 'Sobre' },
                { to: '/trabalhos', label: 'Trabalhos' },
                { to: '/membros', label: 'Membros' },
                { to: '/contato', label: 'Contato' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-stone-400 hover:text-teal-300 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="eyebrow text-stone-500 mb-4 tracking-[0.2em]">
              Contato
            </h3>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>📧 [email.do.grupo@dac.unicamp.br]</li>
              <li>🏫 Unicamp — Limeira, SP</li>
              <li>📅 [Ano letivo / Semestre]</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-500">
          <p>© [Ano] [Nome do Grupo] — Nutrição Unicamp Limeira</p>
          <p className="text-stone-500">
            Feito com <span className="text-teal-500/80">🌿</span> para a turma de Nutrição
          </p>
        </div>
      </div>
    </footer>
  );
}
