import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

/** Fades and lifts its children the first time they scroll into view. */
export default function Reveal({ children, className, delay = 0, y = 28, amount = 0.2, as = "div", ...rest }) {
  const reduce = useReducedMotion();
  const Tag = motion[as] ?? motion.div;
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Container that staggers its <Item> children. */
export function Stagger({ children, className, delay = 0, stagger = 0.08, amount = 0.2, as = "div", ...rest }) {
  const reduce = useReducedMotion();
  const Tag = motion[as] ?? motion.div;
  return (
    <Tag
      className={className}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function Item({ children, className, as = "div", ...rest }) {
  const Tag = motion[as] ?? motion.div;
  return (
    <Tag className={className} variants={fadeUp} {...rest}>
      {children}
    </Tag>
  );
}
