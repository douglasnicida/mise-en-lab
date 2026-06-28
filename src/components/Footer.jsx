import { GiWatermelon } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { PROJECT_NAME } from '../mock';

export default function Footer() {
  return (
    <footer className="bg-dark2 text-linen-200 pt-16 pb-8 border-t border-white/8">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_2fr] gap-10 pb-10 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-white/15 bg-white/5">
                <GiWatermelon className="size-7" />
              </div>
              <span className="font-pally font-semibold text-linen-50 text-xl tracking-tight">
                {PROJECT_NAME}
              </span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="eyebrow text-[13px] text-stone-500 mb-4 tracking-[0.2em]">
              Navegação
            </h3>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Início' },
                { to: '/ficha-tecnica', label: 'Ficha Técnica' },
                { to: '/sobre', label: 'Sobre' },
                { to: '/trabalhos', label: 'Trabalhos' },
                { to: '/membros', label: 'Membros' },
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

          {/* Bibliografia */}
          <div>
            <h3 className="eyebrow text-[13px] text-stone-500 mb-4 tracking-[0.2em]">
              Este site foi elaborado com base nas aulas ministradas na disciplina NT402 - Técnica Dietética - e tem como bibliografia:
            </h3>
            <ul className="space-y-2 text-sm text-stone-400">
              <li className="flex items-center gap-2">Philippi, S.T. Nutrição e técnica dietética. Editora Manole Saúde, 4a ed., 2014.</li>
              <li className="flex items-center gap-2">BRASIL. Agência Nacional de Vigilância Sanitária. Resolução RDC nº 216, de 15 de setembro de 2004. Dispõe sobre o regulamento técnico de boas práticas para serviços de alimentação. </li>
              <li className="flex items-center gap-2">BRASIL. Ministério da Saúde. Guia alimentar para a população brasileira. 2. ed. Brasília, DF: Ministério da Saúde, 2014.</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
