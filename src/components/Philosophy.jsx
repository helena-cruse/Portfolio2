import { motion } from "framer-motion";

const principles = [
  {
    title: "I start with the flow",
    text: "Before I change colours or add motion, I look at what the user is supposed to understand and do.",
  },
  {
    title: "Polish has a job",
    text: "A site can look exciting, but the details should still support clarity, not cover up weak structure.",
  },
  {
    title: "Small screens reveal problems",
    text: "If a layout only works on desktop, it is not finished. Mobile often shows what needs to be simplified.",
  },
  {
    title: "Details change the feeling",
    text: "Spacing, hover states, empty states and feedback can make the difference between a page that works and a page that feels finished.",
  },
];

function Philosophy() {
  return (
    <section className="philosophy-section" id="approach">
      <div className="philosophy-heading">
        <p className="label light">How I work</p>
        <h2>I try to make the interface easier to trust.</h2>
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
