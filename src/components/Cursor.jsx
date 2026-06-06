import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

function Cursor() {
  const [active, setActive] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, {
    stiffness: 900,
    damping: 34,
    mass: 0.12,
  });

  const springY = useSpring(mouseY, {
    stiffness: 900,
    damping: 34,
    mass: 0.12,
  });

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (isTouchDevice || prefersReducedMotion) {
      setEnabled(false);
      return;
    }

    setEnabled(true);

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

  if (!enabled) return null;

  return (
    <motion.div
      className="cursor-heart"
      style={{ x: springX, y: springY }}
      animate={{
        scale: active ? 1.28 : 1,
        rotate: active ? -6 : 0,
      }}
      transition={{ duration: 0.12 }}
      aria-hidden="true"
    >
      ♥
    </motion.div>
  );
}

export default Cursor;
