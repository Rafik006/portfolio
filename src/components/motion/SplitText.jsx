import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "./Reveal.jsx";

/** Splits text into words (or characters) that rise into view one after another. */
/** `hidden` removes the split from the accessibility tree; the caller then labels the heading itself. */
export default function SplitText({ text, as = "span", className, by = "word", delay = 0, stagger, once = true, hidden = false }) {
  const reduce = useReducedMotion();
  const Tag = motion[as] ?? motion.span;
  const units = by === "char" ? [...text] : text.split(" ");
  const step = stagger ?? (by === "char" ? 0.035 : 0.07);

  return (
    <Tag
      className={className}
      aria-hidden={hidden || undefined}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once, amount: 0.6 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: step, delayChildren: delay } } }}
    >
      {units.map((unit, i) => (
        <span className="split-line" key={`${unit}-${i}`}>
          <motion.span
            className="split-word"
            variants={{ hidden: { y: "110%", opacity: 0 }, show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: EASE } } }}
          >
            {unit === " " ? " " : unit}
          </motion.span>
          {by === "word" && i < units.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}
