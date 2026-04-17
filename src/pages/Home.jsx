import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { trabalhos, membros, stats } from '../data/content';

// Variantes de animação reutilizáveis
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

// Mapa de cores para os cards
const cardColors = {
  sage:  'bg-sage-100 border-sage-200 hover:border-sage-400',
  earth: 'bg-earth-50 border-earth-200 hover:border-earth-400',
  clay:  'bg-clay-50 border-clay-200 hover:border-clay-400',
};

const tagColors = {
  sage:  'bg-sage-200 text-sage-800',
  earth: 'bg-earth-200 text-earth-800',
  clay:  'bg-clay-200 text-clay-800',
};

export default function Home() {
  const destaques = trabalhos.filter(t => t.destaque).slice(0, 3);

  return (
    <div>
      {/* =============================================
          SEÇÃO: Hero — Apresentação principal do site
          Substitua o título, subtítulo e descrição
          ============================================= */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-linen-50">
        {/* Fundo decorativo */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-sage-100 opacity-60 blur-3xl translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-earth-100 opacity-50 blur-3xl -translate-x-1/3" />
          {/* Círculos decorativos */}
          <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full border border-sage-200 opacity-40" />
          <div className="absolute top-1/3 right-20 w-40 h-40 rounded-full border border-sage-300 opacity-30" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div>
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="section-label mb-4"
            >
              {/* HERO: Label — ex: "Turma 2024 · Nutrição · Unicamp Limeira" */}
              [Turma / Semestre · Nutrição · Unicamp Limeira]
            </motion.p>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-display text-5xl lg:text-6xl font-bold text-bark-700 leading-tight mb-6"
            >
              {/* HERO: Título principal — nome do grupo ou frase de efeito */}
              [Nome do Grupo]
              <span className="block text-sage-500 italic font-normal text-4xl lg:text-5xl mt-1">
                {/* HERO: Subtítulo em itálico — frase de impacto */}
                [Subtítulo ou slogan do grupo]
              </span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-earth-600 text-lg leading-relaxed mb-8 max-w-lg"
            >
              {/* HERO: Descrição — apresentação em 2-3 frases sobre o grupo e o propósito do site */}
              [Breve descrição do grupo: quem são, qual disciplina ou semestre, e o que este site apresenta. Exemplo: "Somos estudantes de Nutrição da Unicamp Limeira e este site reúne nossos trabalhos, pesquisas e descobertas ao longo do curso."]
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-3"
            >
              <Link to="/trabalhos" className="btn-primary">
                Ver Trabalhos →
              </Link>
              <Link to="/sobre" className="btn-outline">
                Sobre o grupo
              </Link>
            </motion.div>
          </div>

          {/* Card visual decorativo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Card principal */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-linen-300">
                <div className="w-14 h-14 bg-sage-100 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-3xl">🥗</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-bark-700 mb-2">
                  {/* HERO CARD: Título do card decorativo */}
                  [Tema Principal do Grupo]
                </h3>
                <p className="text-sm text-earth-500 leading-relaxed">
                  {/* HERO CARD: Subtexto do card */}
                  [Uma frase que resume a abordagem ou especialidade do grupo]
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {/* HERO CARD: Tags de áreas de interesse — adicione ou remova conforme necessário */}
                  {['[Área 1]', '[Área 2]', '[Área 3]'].map(tag => (
                    <span key={tag} className="tag bg-sage-100 text-sage-700 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {/* Mini cards flutuantes */}
              <div className="absolute -top-4 -right-4 bg-clay-500 text-white rounded-2xl px-4 py-2 text-sm font-medium shadow-lg">
                🌿 Unicamp
              </div>
              <div className="absolute -bottom-4 -left-4 bg-earth-100 border border-earth-200 rounded-2xl px-4 py-2 text-sm text-earth-700 shadow">
                📚 {/* HERO: Semestre atual */} [Semestre]
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-linen-400"
        >
          <div className="w-6 h-9 border-2 border-linen-300 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-linen-400 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* =============================================
          SEÇÃO: Estatísticas
          Substitua os números em src/data/content.js
          ============================================= */}
      <section className="bg-sage-700 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="font-display text-4xl font-bold text-linen-50 mb-1">
                  {stat.valor}
                </div>
                <div className="text-sage-200 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================================
          SEÇÃO: Trabalhos em Destaque
          Os trabalhos com destaque: true aparecem aqui
          Edite em src/data/content.js
          ============================================= */}
      <section className="py-24 bg-linen-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="section-label mb-2">Produções acadêmicas</p>
              <h2 className="font-display text-4xl font-bold text-bark-700">
                Trabalhos em Destaque
              </h2>
            </div>
            <Link to="/trabalhos" className="hidden sm:flex btn-outline text-sm">
              Ver todos
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {destaques.map((trabalho, i) => (
              <motion.div
                key={trabalho.id}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`card-hover rounded-2xl p-6 border ${cardColors[trabalho.cor] || cardColors.sage} cursor-pointer`}
              >
                <span className={`tag mb-4 ${tagColors[trabalho.cor] || tagColors.sage}`}>
                  {trabalho.categoria}
                </span>
                <h3 className="font-display text-xl font-semibold text-bark-700 mb-3 leading-snug">
                  {trabalho.titulo}
                </h3>
                <p className="text-sm text-earth-600 leading-relaxed mb-4">
                  {trabalho.descricao}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <p className="text-xs text-earth-400 font-accent">
                    {trabalho.autores.slice(0, 2).join(', ')}
                    {trabalho.autores.length > 2 && ' +' + (trabalho.autores.length - 2)}
                  </p>
                  <span className="text-xs text-earth-400">{trabalho.data}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link to="/trabalhos" className="btn-outline">Ver todos os trabalhos</Link>
          </div>
        </div>
      </section>

      {/* =============================================
          SEÇÃO: Prévia de Membros
          ============================================= */}
      <section className="py-24 bg-linen-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-label mb-2">As pessoas por trás do site</p>
            <h2 className="font-display text-4xl font-bold text-bark-700">
              Nossa Equipe
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {membros.slice(0, 4).map((membro, i) => (
              <motion.div
                key={membro.id}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center group"
              >
                {/* Avatar placeholder */}
                <div className="w-20 h-20 rounded-full bg-sage-200 border-2 border-sage-300 group-hover:border-sage-500 transition-colors mx-auto mb-3 flex items-center justify-center overflow-hidden">
                  {membro.avatar
                    ? <img src={membro.avatar} alt={membro.nome} className="w-full h-full object-cover" />
                    : <span className="text-2xl text-sage-600 font-display">
                        {membro.nome.charAt(0)}
                      </span>
                  }
                </div>
                <p className="text-sm font-medium text-bark-700">{membro.nome}</p>
                <p className="text-xs text-earth-500">{membro.papel}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/membros" className="btn-primary">
              Conhecer todos os membros
            </Link>
          </div>
        </div>
      </section>

      {/* =============================================
          SEÇÃO: CTA Final — Chamada para ação
          ============================================= */}
      <section className="py-24 bg-bark-800 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-sage-700 opacity-20 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-earth-600 opacity-20 blur-3xl" />
        </div>
        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label text-sage-400 mb-4">Entre em contato</p>
            <h2 className="font-display text-4xl font-bold text-linen-50 mb-4">
              {/* CTA: Título da chamada — convite à interação */}
              [Título da Chamada — ex: "Quer saber mais sobre nossos projetos?"]
            </h2>
            <p className="text-linen-400 leading-relaxed mb-8">
              {/* CTA: Texto de apoio */}
              [Breve texto convidando o visitante a entrar em contato ou explorar o site]
            </p>
            <Link to="/contato" className="btn-primary bg-sage-500 hover:bg-sage-400">
              Entrar em Contato →
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
