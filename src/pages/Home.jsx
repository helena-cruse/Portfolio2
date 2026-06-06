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
              <h2>Projects I revisited, questioned and made stronger.</h2>
            </div>

            <p>
              These are 3 school projects. I went back into each one, found what
              felt unfinished and improved the parts that matter most when
              someone actually uses the site.
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
              I care about the point where design starts affecting how people
              understand a page.
            </h2>
            <p>
              I like warm, expressive interfaces, but I am most interested in
              whether the layout makes sense, whether the user knows what to do
              next and whether the site still works when the screen gets small.
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
