import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaArrowDown, FaFileArrowDown } from "react-icons/fa6";
import useVanta from "../../lib/useVanta.js";
import SplitText from "../../components/motion/SplitText.jsx";
import Typewriter from "../../components/motion/Typewriter.jsx";
import Reveal, { Stagger, Item } from "../../components/motion/Reveal.jsx";
import SocialMedia from "../../components/socialMedia/SocialMedia.jsx";
import { profile } from "../../data/content.js";

const Hero = () => {
  const ref = useRef(null);
  useVanta(ref, "globe", {
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 0.9,
    size: 1.1,
  }, {
    light: { backgroundColor: 0xffffff, color: 0x0b7a7a, color2: 0x2cc4c4 },
    dark: { backgroundColor: 0x111318, color: 0x2cc4c4, color2: 0x0b7a7a },
  });

  return (
    <section id="hero" ref={ref} className="vanta-host relative min-h-screen overflow-hidden bg-paper">
      <div className="container-x flex min-h-screen flex-col pt-28 pb-24">
        <Stagger className="my-auto max-w-3xl" stagger={0.1} amount={0.1}>
          <Item as="p" className="eyebrow">
            Hi, I&apos;m
          </Item>
          <h1 className="mt-4 text-[clamp(2.9rem,9vw,7rem)] font-bold leading-[0.95] tracking-tight text-ink" aria-label="Rafik Mhadhbi">
            <SplitText text="Rafik Mhadhbi" by="char" delay={0.15} hidden />
          </h1>
          <Item className="mt-5 min-h-[2.4em] text-[clamp(1.25rem,2.8vw,2.1rem)] font-display font-medium text-primaryColor">
            <Typewriter words={profile.roles} />
          </Item>
          <Item as="p" className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {profile.positioning}
          </Item>
          <Item className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#stories" className="btn btn-primary">
              Read the stories <FaArrowDown aria-hidden="true" />
            </a>
            <a href={profile.links.cv} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <FaFileArrowDown aria-hidden="true" /> Download CV
            </a>
          </Item>
          <Item className="mt-6">
            <SocialMedia compact />
          </Item>
        </Stagger>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {profile.pillars.map((p, i) => (
            <Reveal key={p.id} delay={0.5 + i * 0.12} className="glass rounded-2xl p-5">
              <p className={`tag tag-${p.id}`}>{p.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/80">{p.proof}</p>
              <p className="mt-3 font-mono text-xs text-muted">{p.stat}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <motion.a
        href="#about_me"
        className="scroll-cue"
        aria-label="Scroll to the about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <span className="mouse" aria-hidden="true" />
        <span>scroll</span>
      </motion.a>
    </section>
  );
};

export default Hero;
