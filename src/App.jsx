import { motion, useScroll, useTransform } from "framer-motion";

const email = "helena.m.cruse@gmail.com";
const linkedin = "https://www.linkedin.com/in/helena-cruse2001/";
const github = "https://github.com/helena-cruse";

const projects = [
  {
    title: "CSS Frameworks Social",
    short: "A responsive social media interface built with Tailwind CSS.",
    visual: "purple",
    tags: ["Tailwind", "Responsive UI", "Accessibility"],
  },
  {
    title: "Little Shop",
    short: "An e-commerce application with search, products and cart flow.",
    visual: "light",
    tags: ["Next.js", "TypeScript", "UX Flow"],
  },
  {
    title: "Evergreen Auction House",
    short: "An auction platform with listings, bidding and user profiles.",
    visual: "dark",
    tags: ["API", "JavaScript", "Validation"],
  },
];

function App() {
  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const codeY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <main>
      <header className="site-header">
        <a href="/" className="logo">
          HC
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#process">Process</a>
          <a href="#tech">Tech</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="menu-pill" href={`mailto:${email}`}>
          Let’s talk ↗
        </a>
      </header>

      <section className="hero">
        <div className="side-rail">
          <a href={github} target="_blank" rel="noreferrer">
            GH
          </a>
          <a href={linkedin} target="_blank" rel="noreferrer">
            IN
          </a>
          <a href={`mailto:${email}`}>@</a>
        </div>

        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 44 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="eyebrow">Frontend developer · UI/UX enthusiast</p>

          <h1>
            <span>I design digital</span>
            <span>experiences people</span>
            <em>remember.</em>
          </h1>

          <p className="hero-text">
            I combine clean code with thoughtful design to build intuitive,
            accessible and visually memorable digital products.
          </p>

          <div className="hero-actions">
            <a href="#work" className="primary-btn">
              View my work ↗
            </a>
            <a href="#tech" className="text-link">
              See tech thinking
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-image-wrap"
          style={{ y: imageY }}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.15 }}
        >
          <img src="/images/hero.JPG" alt="Portrait of Helena Cruse" />

          <motion.div
            className="floating-card"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <span>Available for work</span>
            <strong>Frontend · UX · Digital design</strong>
          </motion.div>
        </motion.div>

        <motion.div className="code-card" style={{ y: codeY }}>
          <span className="code-dot"></span>
          <p>const focus = "usable, polished, human";</p>
          <p>build(idea).with(accessibility, motion, clarity);</p>
        </motion.div>
      </section>

      <section className="work-section" id="work">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="eyebrow">Featured work</p>
            <h2>Selected projects</h2>
          </div>

          <a href="#work" className="text-link">
            View all projects ↗
          </a>
        </motion.div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.title}
              initial={{ opacity: 0, y: 70, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              whileHover={{ y: -14 }}
              transition={{ duration: 0.8, delay: index * 0.14 }}
              viewport={{ once: true }}
            >
              <div className={`project-visual ${project.visual}`}>
                <div className="visual-shine"></div>
                <div className="visual-sidebar"></div>
                <div className="visual-content">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

              <div>
                <span className="project-number">0{index + 1}</span>
                <h3>{project.title}</h3>
                <p>{project.short}</p>

                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <span className="card-link">Read more ↗</span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <motion.div
          className="about-image"
          initial={{ clipPath: "inset(12% 12% 12% 12%)" }}
          whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 1.1 }}
          viewport={{ once: true }}
        >
          <img src="/images/hero.JPG" alt="Helena portrait" />
        </motion.div>

        <motion.div
          className="about-copy"
          initial={{ opacity: 0, x: 44 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow">About me</p>

          <h2>
            I care about details, usability and meaningful digital products.
          </h2>

          <p>
            I am a frontend development student with a strong interest in UX,
            visual design and building interfaces that feel polished, useful and
            human.
          </p>
        </motion.div>
      </section>

      <section className="process-section" id="process">
        <p className="eyebrow">Process</p>
        <h2>Design first. Build with intention.</h2>

        <div className="process-grid">
          {["Understand", "Design", "Build"].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              viewport={{ once: true }}
            >
              <span>0{index + 1}</span>
              <h3>{item}</h3>
              <p>
                I move from user insight to structure, visual direction,
                responsive implementation and polish.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="tech-section" id="tech">
        <p className="eyebrow">Frontend thinking</p>
        <h2>Built for performance, accessibility and presentation.</h2>

        <div className="tech-grid">
          <div>
            <strong>Semantic HTML</strong>
            <p>
              Clear structure that supports accessibility and maintainability.
            </p>
          </div>
          <div>
            <strong>Responsive systems</strong>
            <p>
              Layouts that adapt across screen sizes without losing hierarchy.
            </p>
          </div>
          <div>
            <strong>Motion with purpose</strong>
            <p>Animations that guide attention instead of creating noise.</p>
          </div>
          <div>
            <strong>Optimised assets</strong>
            <p>
              Images and project visuals prepared for fast portfolio loading.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer" id="contact">
        <p>Let’s build something memorable together.</p>

        <div className="footer-links">
          <a href={github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${email}`}>Email</a>
        </div>
      </footer>
    </main>
  );
}

export default App;
