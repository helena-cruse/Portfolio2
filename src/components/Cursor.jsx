import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

function Cursor() {
  const [active, setActive] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, {
    stiffness: 1200,
    damping: 34,
    mass: 0.12,
  });

  const springY = useSpring(mouseY, {
    stiffness: 1200,
    damping: 34,
    mass: 0.12,
  });

  useEffect(() => {
    const move = (event) => {
      mouseX.set(event.clientX - 8);
      mouseY.set(event.clientY - 8);
    };

    const activate = () => setActive(true);
    const deactivate = () => setActive(false);

    window.addEventListener("mousemove", move);

    const interactive = document.querySelectorAll("a, button, .project-card");

    interactive.forEach((item) => {
      item.addEventListener("mouseenter", activate);
      item.addEventListener("mouseleave", deactivate);
    });

    return () => {
      window.removeEventListener("mousemove", move);

      interactive.forEach((item) => {
        item.removeEventListener("mouseenter", activate);
        item.removeEventListener("mouseleave", deactivate);
      });
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="cursor-heart"
      style={{ x: springX, y: springY }}
      animate={{
        scale: active ? 1.45 : 1,
        rotate: active ? -8 : 0,
      }}
      transition={{ duration: 0.12 }}
      aria-hidden="true"
    >
      ♥
    </motion.div>
  );
}

export default Cursor;
