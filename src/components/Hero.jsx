import { motion, useScroll, useTransform } from "framer-motion";

function Hero() {
  const { scrollY } = useScroll();
  const titleY = useTransform(scrollY, [0, 700], [0, -80]);
  const mediaY = useTransform(scrollY, [0, 700], [0, 120]);
  const cardY = useTransform(scrollY, [0, 700], [0, -45]);

  return (
    <section className="hero">
      <motion.div className="hero-copy" style={{ y: titleY }}>
        <motion.p
          className="label"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          Frontend developer / UX-focused / Portfolio 2
        </motion.p>

        <div className="hero-title-mask">
          <motion.h1
            initial={{ y: 150 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
          >
            I build interfaces that feel considered, not just completed.
          </motion.h1>
        </div>

        <motion.p
          className="hero-lead"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8 }}
        >
          I am studying front-end development and moving more and more toward
          UX. I like clean structure, warm visuals and small interactions that
          help a page feel finished.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          <a href="#work">View projects</a>
        </motion.div>
      </motion.div>

      <motion.div className="hero-stage" style={{ y: mediaY }}>
        <div className="stage-background" />

        <motion.figure
          className="portrait-card"
          initial={{ opacity: 0, rotate: 4, scale: 0.92 }}
          animate={{ opacity: 1, rotate: -2, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src="/images/hero.webp" alt="Portrait of Helena Cruse" />
        </motion.figure>

        <motion.div
          className="interface-card card-a"
          style={{ y: cardY }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.65, duration: 0.75 }}
        >
          <small>Frontend note</small>
          <strong>The layout has to work before it gets decorated.</strong>
        </motion.div>

        <motion.div
          className="interface-card card-b"
          animate={{ y: [0, -16, 0], rotate: [0, 1.6, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <small>UX note</small>
          <strong>If a user hesitates, the interface should help.</strong>
        </motion.div>

        <motion.div
          className="mini-system"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span />
          <span />
          <span />
          <p>responsive / readable / intentional</p>
        </motion.div>
      </motion.div>

      <motion.div
        className="marquee"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div>
          <span>UX thinking</span>
          <span>Responsive layouts</span>
          <span>Cleaner flows</span>
          <span>Frontend</span>
          <span>Portfolio 2</span>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
