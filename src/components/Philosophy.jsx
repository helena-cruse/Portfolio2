import { motion } from "framer-motion";

const principles = [
  {
    title: "Structure first",
    text: "Before decoration, I need to understand the flow, the hierarchy and what the user is trying to do.",
  },
  {
    title: "Motion with manners",
    text: "Animation should create curiosity and guide attention without stealing the room.",
  },
  {
    title: "Real screens matter",
    text: "A layout is not finished because it looks nice on desktop. It has to survive thumbs and small screens.",
  },
  {
    title: "Details are UX",
    text: "Hover states, focus states, loading states and empty states are part of the experience.",
  },
];

function Philosophy() {
  return (
    <section className="philosophy-section" id="approach">
      <div className="philosophy-heading">
        <p className="label light">Built with intention</p>
        <h2>Pretty is not enough. The interface has to behave.</h2>
      </div>

      <div className="principles-grid">
        {principles.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Philosophy;
