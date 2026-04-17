import { motion } from 'framer-motion';
import { membros } from '../data/content';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

// Cores de avatar por ordem (para diferenciar visualmente sem foto)
const avatarColors = [
  'bg-sage-200 text-sage-700',
  'bg-earth-200 text-earth-700',
  'bg-clay-200 text-clay-700',
  'bg-sage-300 text-sage-800',
  'bg-earth-300 text-earth-800',
];

export default function Membros() {
  return (
    <div>
      {/* =============================================
          SEÇÃO: Hero da página Membros
          ============================================= */}
      <section className="bg-linen-100 py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-sage-100 opacity-50 blur-3xl -translate-x-1/2" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="section-label mb-3"
          >
            Quem faz acontecer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl font-bold text-bark-700 mb-4"
          >
            Nossos Membros
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-earth-600 text-lg max-w-xl mx-auto leading-relaxed"
          >
            {/* MEMBROS HERO: Descrição da equipe */}
            [Breve descrição da equipe — quantas pessoas são, o que têm em comum, o que as une no grupo]
          </motion.p>
        </div>
      </section>

      {/* =============================================
          SEÇÃO: Grid de membros
          Dados em src/data/content.js
          ============================================= */}
      <section className="py-24 bg-linen-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {membros.map((membro, i) => (
              <motion.div
                key={membro.id}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-3xl border border-linen-300 p-8 card-hover flex flex-col items-center text-center"
              >
                {/* Avatar */}
                <div className={`w-24 h-24 rounded-full mb-5 flex items-center justify-center text-3xl font-display font-bold border-4 border-linen-200 overflow-hidden ${avatarColors[i % avatarColors.length]}`}>
                  {membro.avatar
                    ? <img src={membro.avatar} alt={membro.nome} className="w-full h-full object-cover" />
                    : membro.nome.charAt(0)
                  }
                </div>

                {/* Nome */}
                <h2 className="font-display text-xl font-semibold text-bark-700 mb-1">
                  {membro.nome}
                </h2>

                {/* Papel */}
                <p className="section-label text-xs mb-4">{membro.papel}</p>

                {/* Bio */}
                <p className="text-sm text-earth-500 leading-relaxed flex-1 mb-6">
                  {membro.bio}
                </p>

                {/* Link externo */}
                {membro.lattes && membro.lattes !== '#' && (
                  <a
                    href={membro.lattes}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-xs py-2 px-4"
                  >
                    Ver Lattes / Perfil
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================================
          SEÇÃO: Professora / Orientadora
          Substitua pelos dados reais do(a) docente
          ============================================= */}
      <section className="py-20 bg-sage-700">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-sage-600 rounded-3xl p-10 text-center border border-sage-500"
          >
            {/* Avatar docente */}
            <div className="w-20 h-20 rounded-full bg-sage-300 mx-auto mb-5 flex items-center justify-center">
              <span className="text-3xl text-sage-700 font-display font-bold">
                {/* DOCENTE: Inicial do nome */}
                [P]
              </span>
            </div>
            <p className="section-label text-sage-200 mb-2">Orientação</p>
            <h2 className="font-display text-2xl font-bold text-linen-50 mb-1">
              {/* DOCENTE: Nome do(a) professor(a) */}
              [Prof./Profa. Nome do Docente]
            </h2>
            <p className="text-sage-200 text-sm mb-4">
              {/* DOCENTE: Cargo / disciplina */}
              [Cargo e disciplina — ex: Professora Doutora · NT402 - Técnica Dietética]
            </p>
            <p className="text-sage-100 text-sm leading-relaxed max-w-lg mx-auto">
              {/* DOCENTE: Mini bio ou agradecimento */}
              [Breve agradecimento ou apresentação do(a) docente responsável pela disciplina]
            </p>
          </motion.div>
        </div>
      </section>

      {/* =============================================
          SEÇÃO: Agradecimentos / Apoio
          ============================================= */}
      <section className="py-16 bg-linen-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="section-label mb-3">Agradecimentos</p>
          <h2 className="font-display text-2xl font-bold text-bark-700 mb-4">
            {/* AGRADECIMENTOS: Título */}
            [Título — ex: "Obrigada a todos que tornaram isso possível"]
          </h2>
          <p className="text-earth-600 leading-relaxed max-w-lg mx-auto">
            {/* AGRADECIMENTOS: Texto de agradecimento */}
            [Agradecimentos à instituição, professores, laboratórios, colegas de turma, etc.]
          </p>
        </div>
      </section>
    </div>
  );
}