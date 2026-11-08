import React from "react";
import { motion } from "framer-motion";
import Reveal, { Stagger, Item, EASE } from "../../components/motion/Reveal.jsx";
import SplitText from "../../components/motion/SplitText.jsx";
import { skillGroups, marquee } from "../../data/content.js";
import { icons, groupIcons } from "../../data/icons.js";

const Icon = ({ name, ...props }) => {
  const Cmp = icons[name];
  return Cmp ? <Cmp {...props} aria-hidden="true" /> : null;
};

const chip = {
  hidden: { opacity: 0, scale: 0.7, y: 8 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
};

const Skills = () => (
  <section id="skills" className="section section-dark overflow-hidden">
    <div className="container-x">
      <p className="eyebrow">02 / Expertise</p>
      <h2 className="h-section">
        <SplitText text="Grouped by what I do with it." />
      </h2>
      <p className="lead text-muted">Four areas I work in every day, and the core tools for each.</p>

      <Stagger className="mt-12 grid gap-5 md:grid-cols-2" stagger={0.12}>
        {skillGroups.map((g) => {
          const G = groupIcons[g.icon];
          return (
            <Item key={g.id} className="card group relative overflow-hidden p-6 md:p-7">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/10 blur-3xl transition-transform duration-700 group-hover:scale-150"
              />
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/15 text-accent">
                  <G size={24} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold">{g.title}</h3>
                  <p className="text-sm text-muted">{g.lead}</p>
                </div>
              </div>
              <motion.ul
                className="mt-6 flex flex-wrap gap-2"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } } }}
              >
                {g.items.map((it) => (
                  <motion.li key={it.name} className="chip" variants={chip}>
                    <Icon name={it.icon} />
                    {it.name}
                  </motion.li>
                ))}
              </motion.ul>
            </Item>
          );
        })}
      </Stagger>
    </div>

    <Reveal className="mt-16 space-y-5" amount={0.1}>
      {[false, true].map((reverse) => (
        <div key={String(reverse)} className={`marquee ${reverse ? "marquee-reverse" : ""}`} aria-hidden={reverse}>
          <div className="marquee-track">
            {[...marquee, ...marquee].map(([name, icon], i) => (
              <span key={`${name}-${i}`} className="marquee-item">
                <Icon name={icon} />
                {name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </Reveal>
  </section>
);

export default Skills;
