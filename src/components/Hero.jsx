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
          Frontend developer / UX direction / Portfolio 2
        </motion.p>

        <div className="hero-title-mask">
          <motion.h1
            initial={{ y: 150 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
          >
            Digital work with warmth, structure and edge.
          </motion.h1>
        </div>

        <motion.p
          className="hero-lead"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8 }}
        >
          I design and build responsive web experiences with a UX eye, clean
          code and enough motion to make the page feel alive.
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
          <small>Frontend instinct</small>
          <strong>Readable. Responsive.</strong>
        </motion.div>

        <motion.div
          className="interface-card card-b"
          animate={{ y: [0, -16, 0], rotate: [0, 1.6, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <small>UX note</small>
          <strong>Every click should know why it exists.</strong>
        </motion.div>

        <motion.div
          className="mini-system"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span />
          <span />
          <span />
          <p>semantic / accessible / animated</p>
        </motion.div>
      </motion.div>

      <motion.div
        className="marquee"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div>
          <span>UX taste</span>
          <span>Clean code</span>
          <span>Motion with purpose</span>
          <span>Responsive systems</span>
          <span>Portfolio 2</span>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
