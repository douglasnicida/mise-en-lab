import { useState } from 'react';
import { motion } from 'framer-motion';

const rev = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

/* CONTATO: Edite os dados de contato */
const infoContato = [
  { label: 'E-mail',      valor: '[email@dac.unicamp.br]', href: 'mailto:[email]' },
  { label: 'Instituição', valor: 'Unicamp — Limeira, SP',  href: null },
  { label: 'Instagram',   valor: '@[perfil_do_grupo]',     href: 'https://instagram.com/[perfil]' },
];

/* CONTATO: Edite as perguntas frequentes */
const faq = [
  { q: '[Pergunta 1 — ex: Posso usar os conteúdos deste site?]', a: '[Resposta completa]' },
  { q: '[Pergunta 2 — ex: Como posso colaborar com o grupo?]',   a: '[Resposta completa]' },
  { q: '[Pergunta 3 — ex: O site ainda será atualizado?]',       a: '[Resposta completa]' },
];

const inputCls = `w-full bg-transparent border border-linen-300 text-dark text-[14px] px-5 py-3.5
  placeholder-dark/25 focus:outline-none focus:border-dark/50 transition-colors duration-200`;

export default function Contato() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });
  const [enviado, setEnviado] = useState(false);
  const [open, setOpen] = useState(null);

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = e => {
    e.preventDefault();
    // TODO: integre com Formspree ou EmailJS
    setEnviado(true);
  };

  return (
    <div className="bg-bg">

      {/* ══════════════════
          HERO
          ══════════════════ */}
      <section className="page-hero">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full bg-slate-100/80 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[460px] h-[460px] rounded-full bg-teal-100/75 blur-[130px]" />
        </div>
        <div className="page-hero-shell">
          <div className="page-hero-kicker">
            <div className="page-hero-rule" />
            <span className="eyebrow text-teal-600">Fale conosco</span>
          </div>
          <div className="overflow-hidden mb-1">
            <motion.h1 initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="page-hero-title font-semibold">
              Entre em
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-7">
            <motion.h1 initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
              className="page-hero-accent">
              Contato
            </motion.h1>
          </div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="page-hero-copy">
            {/* CONTATO HERO: Texto de convite */}
            [Texto de convite — dúvida, sugestão ou interesse em saber mais sobre o grupo.]
          </motion.p>
        </div>
      </section>

      {/* ══════════════════
          FORMULÁRIO + INFO
          ══════════════════ */}
      <section className="section-band py-24">
        <div className="section-inner max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Formulário */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="lg:col-span-6">
            <p className="eyebrow text-stone-500 mb-8">Formulário</p>

            {enviado ? (
              <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
                className="border border-linen-300 p-12 text-center">
                <p className="font-display text-[28px] font-semibold text-dark mb-3">
                  Mensagem enviada ✓
                </p>
                <p className="text-[13px] text-dark/45 mb-6">
                  {/* FORMULÁRIO: Mensagem de confirmação */}
                  [Mensagem de confirmação — ex: "Obrigada pelo contato! Responderemos em breve."]
                </p>
                <button onClick={() => setEnviado(false)}
                  className="eyebrow text-[10px] text-teal-600 hover:text-teal-800 transition-colors">
                  Enviar outra mensagem →
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-0 border border-linen-300 divide-y divide-linen-300">
                {/* Nome */}
                <div className="p-0">
                  <label className="eyebrow text-[9px] text-dark/30 block px-5 pt-4">Nome</label>
                  <input id="nome" name="nome" type="text" required
                    value={form.nome} onChange={handleChange}
                    placeholder="[Seu nome completo]"
                    className={`${inputCls} border-0 pt-1`} />
                </div>
                {/* Email */}
                <div>
                  <label className="eyebrow text-[9px] text-dark/30 block px-5 pt-4">E-mail</label>
                  <input id="email" name="email" type="email" required
                    value={form.email} onChange={handleChange}
                    placeholder="[seu@email.com]"
                    className={`${inputCls} border-0 pt-1`} />
                </div>
                {/* Mensagem */}
                <div>
                  <label className="eyebrow text-[9px] text-dark/30 block px-5 pt-4">Mensagem</label>
                  <textarea id="mensagem" name="mensagem" rows={5} required
                    value={form.mensagem} onChange={handleChange}
                    placeholder="[Escreva sua mensagem aqui]"
                    className={`${inputCls} border-0 pt-1 resize-none`} />
                </div>
                {/* Submit */}
                <div className="p-5 flex items-center justify-between gap-4">
                  <p className="text-[11px] text-dark/25 italic">
                    ⚠ Configure Formspree/EmailJS antes de publicar
                  </p>
                  <button type="submit" className="btn-cta shrink-0">
                    Enviar ↗
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="lg:col-span-4 lg:col-start-9">
            <p className="eyebrow text-stone-500 mb-8">Informações</p>

            <div className="divide-y divide-linen-300 border-t border-b border-linen-300 mb-10">
              {infoContato.map((info, i) => (
                <div key={i} className="py-5">
                  <p className="eyebrow text-[9px] text-dark/30 mb-1.5">{info.label}</p>
                  {info.href
                    ? <a href={info.href} target="_blank" rel="noopener noreferrer"
                        className="text-[14px] font-medium text-dark hover:text-teal-600 transition-colors">
                        {info.valor}
                      </a>
                    : <p className="text-[14px] font-medium text-dark">{info.valor}</p>
                  }
                </div>
              ))}
            </div>

            {/* Localização */}
            <div className="bg-surface border border-linen-300 p-6">
              <p className="eyebrow text-[9px] text-dark/30 mb-3">Localização</p>
              <p className="font-display text-[17px] font-semibold text-dark mb-1">Unicamp Limeira</p>
              <p className="text-[12px] text-dark/45 leading-relaxed">
                {/* CONTATO: Endereço completo */}
                [Rua Pedro Zaccaria, 1300<br />Jardim Santa Luíza, Limeira - SP]
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════
          FAQ
          ══════════════════ */}
      <section className="section-band-soft py-24 border-t border-linen-300">
        <div className="section-inner max-w-4xl mx-auto px-6 md:px-10">
          <p className="eyebrow text-stone-500 mb-6">Dúvidas</p>
          <h2 className="font-display font-semibold text-dark mb-14"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
            Perguntas frequentes
          </h2>

          <div className="divide-y divide-linen-300 border-t border-linen-300">
            {faq.map((item, i) => (
              <motion.div key={i} custom={i} variants={rev} initial="hidden"
                whileInView="show" viewport={{ once: true }}>
                <button onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left gap-6 group">
                  <span className="text-[15px] font-medium text-dark group-hover:text-teal-600 transition-colors">
                    {item.q}
                  </span>
                  <span className={`text-dark/40 text-xl shrink-0 transition-transform duration-200 ${open === i ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                <motion.div
                  animate={{ height: open === i ? 'auto' : 0, opacity: open === i ? 1 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden">
                  <p className="pb-6 text-[13px] text-dark/50 leading-relaxed">
                    {item.a}
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
