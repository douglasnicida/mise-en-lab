import { motion } from 'framer-motion';

// Animation variants used across the site
const rev = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] },
  }),
};

// Reusable header matching the style used in "Grupo de Alimentos"
export default function SectionHeader({ label, title, subtitle }) {
  return (
    <motion.div custom={0} variants={rev} initial="hidden" whileInView="show" viewport={{ once: true }}>
      <div className="flex items-center gap-3 mb-5">
        <div className="h-px w-8 bg-teal-400" />
        <span className="font-mono text-[13px] tracking-[0.2em] uppercase text-teal-600">{label}</span>
      </div>
      <motion.h2
        custom={1}
        variants={rev}
        className="font-pally font-semibold text-dark leading-[0.92]"
        style={{ fontSize: 'clamp(30px, 4vw, 56px)' }}
      >
        {title}<br />
        {subtitle && <span className="font-normal text-stone-400/70">{subtitle}</span>}
      </motion.h2>
    </motion.div>
  );
}
