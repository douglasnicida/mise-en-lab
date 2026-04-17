import { useState } from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

// =============================================
// Informações de contato
// Substitua pelos dados reais do grupo
// =============================================
const infoContato = [
  {
    icone: '📧',
    titulo: 'E-mail',
    valor: '[email.do.grupo@dac.unicamp.br]',
    link: 'mailto:[email.do.grupo@dac.unicamp.br]',
  },
  {
    icone: '🏫',
    titulo: 'Instituição',
    valor: 'Unicamp — Faculdade de Ciências Aplicadas, Limeira',
    link: null,
  },
  {
    icone: '📱',
    titulo: 'Instagram',
    valor: '@[perfil_do_grupo]',
    link: 'https://instagram.com/[perfil_do_grupo]',
  },
];

// =============================================
// FAQ — Perguntas Frequentes
// Substitua pelas dúvidas mais comuns sobre o grupo
// =============================================
const faq = [
  {
    pergunta: '[Pergunta frequente 1 — ex: Posso usar os conteúdos deste site?]',
    resposta: '[Resposta completa à pergunta 1]',
  },
  {
    pergunta: '[Pergunta frequente 2 — ex: Como posso colaborar com o grupo?]',
    resposta: '[Resposta completa à pergunta 2]',
  },
  {
    pergunta: '[Pergunta frequente 3 — ex: O site ainda será atualizado?]',
    resposta: '[Resposta completa à pergunta 3]',
  },
];

export default function Contato() {
  const [formData, setFormData] = useState({ nome: '', email: '', mensagem: '' });
  const [enviado, setEnviado] = useState(false);
  const [faqAberto, setFaqAberto] = useState(null);

  const handleChange = e =>
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: Conecte a um serviço de formulário como Formspree, EmailJS, etc.
    // Exemplo Formspree: fetch('https://formspree.io/f/SEU_ID', { method: 'POST', body: JSON.stringify(formData) })
    setEnviado(true);
  };

  return (
    <div>
      {/* =============================================
          SEÇÃO: Hero da página Contato
          ============================================= */}
      <section className="bg-linen-100 py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 right-0 w-72 h-72 rounded-full bg-clay-100 opacity-50 blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="section-label mb-3"
          >
            Fale conosco
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl font-bold text-bark-700 mb-4"
          >
            Contato
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-earth-600 text-lg max-w-xl mx-auto leading-relaxed"
          >
            {/* CONTATO HERO: Texto de convite ao contato */}
            [Texto de convite — ex: "Tem alguma dúvida, sugestão ou quer saber mais sobre nosso grupo? Entre em contato!"]
          </motion.p>
        </div>
      </section>

      {/* =============================================
          SEÇÃO: Formulário + Informações de Contato
          ============================================= */}
      <section className="py-24 bg-linen-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Formulário */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-2xl font-bold text-bark-700 mb-6">
              Envie uma mensagem
            </h2>

            {enviado ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-sage-50 border border-sage-200 rounded-2xl p-8 text-center"
              >
                <div className="text-4xl mb-4">🌿</div>
                <h3 className="font-display text-xl font-semibold text-sage-700 mb-2">
                  Mensagem enviada!
                </h3>
                <p className="text-sage-600 text-sm">
                  {/* FORMULÁRIO: Mensagem de confirmação */}
                  [Mensagem de confirmação — ex: "Obrigada pelo contato! Responderemos em breve."]
                </p>
                <button
                  onClick={() => setEnviado(false)}
                  className="mt-4 text-sm text-sage-600 underline"
                >
                  Enviar outra mensagem
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Campo Nome */}
                <div>
                  <label className="block section-label mb-2" htmlFor="nome">
                    Seu nome
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="[Nome completo]"
                    className="w-full px-4 py-3 rounded-xl border border-linen-300 bg-white text-bark-700 placeholder-linen-400 focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-sage-400 transition-colors text-sm"
                  />
                </div>

                {/* Campo E-mail */}
                <div>
                  <label className="block section-label mb-2" htmlFor="email">
                    Seu e-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="[seu@email.com]"
                    className="w-full px-4 py-3 rounded-xl border border-linen-300 bg-white text-bark-700 placeholder-linen-400 focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-sage-400 transition-colors text-sm"
                  />
                </div>

                {/* Campo Mensagem */}
                <div>
                  <label className="block section-label mb-2" htmlFor="mensagem">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={5}
                    required
                    value={formData.mensagem}
                    onChange={handleChange}
                    placeholder="[Escreva sua mensagem aqui]"
                    className="w-full px-4 py-3 rounded-xl border border-linen-300 bg-white text-bark-700 placeholder-linen-400 focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-sage-400 transition-colors text-sm resize-none"
                  />
                </div>

                {/* Aviso de integração */}
                <p className="text-xs text-earth-400 italic">
                  {/* FORMULÁRIO: Remova este aviso após configurar um serviço de e-mail */}
                  ⚠️ [Configure um serviço de formulário (ex: Formspree) no handleSubmit deste arquivo antes de publicar]
                </p>

                <button type="submit" className="btn-primary w-full justify-center">
                  Enviar mensagem →
                </button>
              </form>
            )}
          </motion.div>

          {/* Informações */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-2xl font-bold text-bark-700 mb-6">
              Onde nos encontrar
            </h2>

            <div className="space-y-4 mb-10">
              {infoContato.map((info, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-linen-300"
                >
                  <span className="text-2xl">{info.icone}</span>
                  <div>
                    <p className="section-label text-xs mb-1">{info.titulo}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-sage-600 hover:text-sage-800 transition-colors font-medium"
                      >
                        {info.valor}
                      </a>
                    ) : (
                      <p className="text-sm text-bark-600 font-medium">{info.valor}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Mapa / localização decorativo */}
            <div className="bg-earth-50 rounded-2xl border border-earth-200 p-6 text-center">
              <p className="text-3xl mb-3">🗺️</p>
              <h3 className="font-display text-lg font-semibold text-bark-700 mb-2">
                Unicamp Limeira
              </h3>
              <p className="text-sm text-earth-500">
                {/* LOCALIZAÇÃO: Endereço completo */}
                [Endereço da faculdade — ex: Rua Pedro Zaccaria, 1300 — Jardim Santa Luíza, Limeira - SP]
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =============================================
          SEÇÃO: FAQ — Perguntas Frequentes
          Edite o array `faq` neste arquivo
          ============================================= */}
      <section className="py-20 bg-linen-100">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="section-label mb-2">Dúvidas comuns</p>
            <h2 className="font-display text-3xl font-bold text-bark-700">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-3">
            {faq.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-linen-300 overflow-hidden"
              >
                <button
                  onClick={() => setFaqAberto(faqAberto === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-medium text-bark-700 text-sm">{item.pergunta}</span>
                  <span className={`text-sage-500 transition-transform duration-200 ${faqAberto === i ? 'rotate-180' : ''}`}>
                    ▾
                  </span>
                </button>
                <motion.div
                  animate={faqAberto === i ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-sm text-earth-500 leading-relaxed">
                    {item.resposta}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}