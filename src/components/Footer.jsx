import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-bark-800 text-linen-200 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-bark-700">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-sage-500 rounded-full flex items-center justify-center">
                <span className="text-linen-50 text-xs font-display font-bold">N</span>
              </div>
              {/* FOOTER: Substitua pelo nome do grupo */}
              <span className="font-display font-semibold text-linen-50 text-lg">NutriGrupo</span>
            </div>
            {/* FOOTER: Substitua pela descrição curta do grupo */}
            <p className="text-sm text-linen-400 leading-relaxed">
              [Descrição curta do grupo — turma, semestre e propósito do site]
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-earth-300 mb-4 font-medium">
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
                    className="text-sm text-linen-400 hover:text-sage-300 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-earth-300 mb-4 font-medium">
              Contato
            </h3>
            {/* FOOTER: Substitua pelos dados de contato reais */}
            <ul className="space-y-2 text-sm text-linen-400">
              <li>📧 [email.do.grupo@dac.unicamp.br]</li>
              <li>🏫 Unicamp — Limeira, SP</li>
              <li>📅 [Ano letivo / Semestre]</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-linen-500">
          {/* FOOTER: Substitua pelo nome do grupo e ano */}
          <p>© [Ano] [Nome do Grupo] — Nutrição Unicamp Limeira</p>
          <p className="text-earth-400">Feito com 🌿 para a turma de Nutrição</p>
        </div>
      </div>
    </footer>
  );
}
