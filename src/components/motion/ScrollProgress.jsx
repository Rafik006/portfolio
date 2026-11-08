import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

/** Thin teal bar at the very top that fills with page scroll. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });
  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 right-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-primaryColor to-accent"
      style={{ scaleX }}
    />
  );
}
