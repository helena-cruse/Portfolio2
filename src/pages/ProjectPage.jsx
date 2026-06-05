import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { projects } from "../data/projects";

function ProjectPage() {
  const { slug } = useParams();
  const [copied, setCopied] = useState(false);

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="not-found">
          <h1>Project not found.</h1>
          <Link to="/">Back home</Link>
        </main>
      </>
    );
  }

  const copyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <>
      <Navbar />

      <main className={`case-page ${project.theme}`}>
        <section className="case-hero">
          <motion.div
            initial={{ opacity: 0, y: 55 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
          >
            <Link to="/" className="back-link">
              Back to work
            </Link>
            <p className="label">{project.category}</p>
            <h1>{project.title}</h1>
          </motion.div>

          <motion.div
            className="case-actions"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <button type="button" onClick={copyLink}>
              {copied ? "Copied" : "Copy link"}
            </button>

            <a href={project.live} target="_blank" rel="noreferrer">
              Live site
            </a>

            <a href={project.github} target="_blank" rel="noreferrer">
              GitHub README
            </a>
          </motion.div>
        </section>

        <motion.figure
          className="case-image"
          initial={{ opacity: 0, clipPath: "inset(14% 10% 14% 10%)" }}
          animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src={project.image} alt={`${project.title} project preview`} />
        </motion.figure>

        <section className="case-snapshot">
          <article>
            <span>Role</span>
            <p>{project.role}</p>
          </article>

          <article>
            <span>Focus</span>
            <p>{project.focus.join(" / ")}</p>
          </article>

          <article>
            <span>Stack</span>
            <p>{project.stack.join(" / ")}</p>
          </article>
        </section>

        <section className="case-content">
          <div>
            <p className="label">Project story</p>
            <h2>{project.intro}</h2>
          </div>

          <div className="case-copy">
            <p>{project.details}</p>

            <div className="stack-list">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="improvements">
          <p className="label">Improvements made</p>

          <div className="improvement-grid">
            {project.improvements.map((item, index) => (
              <motion.article
                key={item}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </motion.article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ProjectPage;
