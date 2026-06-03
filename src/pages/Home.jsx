import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Philosophy from "../components/Philosophy";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section className="work-section" id="work">
          <motion.div
            className="work-header"
            initial={{ opacity: 0, y: 56 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <div>
              <p className="label">Selected work</p>
              <h2>Three projects, edited into sharper product stories.</h2>
            </div>

            <p>
              I am showing the product idea, the frontend decisions and the
              improvements.
            </p>
          </motion.div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </section>

        <section className="studio-strip" id="about">
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <p className="label light">About Helena</p>
            <h2>
              I like expressive interfaces, but I do not trust decoration
              without logic.
            </h2>
            <p>
              My direction sits somewhere between editorial design and practical
              frontend work. Warm visuals, clear systems, responsive layouts and
              interactions that make the page feel awake.
            </p>
          </motion.div>
        </section>

        <Philosophy />
      </main>

      <Footer />
    </>
  );
}

export default Home;
