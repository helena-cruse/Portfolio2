import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 80, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        duration: 0.85,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{
        y: -14,
        rotate: index === 1 ? 0 : index === 0 ? -1.2 : 1.2,
      }}
    >
      <Link
        to={`/projects/${project.slug}`}
        className={`project-card ${project.theme}`}
      >
        <div className="project-meta">
          <span>{project.number}</span>
          <span>{project.category}</span>
        </div>

        <div className="project-preview">
          <img src={project.image} alt={`${project.title} thumbnail`} />
        </div>

        <div className="project-content">
          <h3>{project.title}</h3>
          <p>{project.shortDescription}</p>
          <span className="read-more">Open case</span>
        </div>
      </Link>
    </motion.article>
  );
}

export default ProjectCard;
