import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCopy, FaCheck, FaEnvelope, FaLinkedinIn, FaGithub, FaWhatsapp, FaLocationDot, FaFileArrowDown, FaArrowRight } from "react-icons/fa6";
import Reveal, { Stagger, Item } from "../../components/motion/Reveal.jsx";
import SplitText from "../../components/motion/SplitText.jsx";
import { profile } from "../../data/content.js";

const socials = [
  { href: profile.links.linkedin, label: "LinkedIn", sub: "linkedin.com/in/mhadhbi-rafik", Icon: FaLinkedinIn },
  { href: profile.links.github, label: "GitHub", sub: "github.com/Rafik006", Icon: FaGithub },
  { href: profile.links.whatsapp, label: "WhatsApp", sub: "Chat with me", Icon: FaWhatsapp },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="section section-dark overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
      />
      <div className="container-x relative">
        <p className="eyebrow">06 / Contact</p>
        <h2 className="h-section max-w-3xl">
          <SplitText text="Let's work" /> <SplitText text="together." className="gradient-text" delay={0.25} />
        </h2>
        <p className="lead text-muted">{profile.openTo}</p>
        <p className="mt-3 inline-flex items-center gap-2 font-mono text-sm text-muted">
          <FaLocationDot aria-hidden="true" /> {profile.location}
        </p>

        <Reveal className="mt-10 flex flex-wrap items-center gap-3" delay={0.15}>
          <a href={`mailto:${profile.email}`} className="btn btn-primary text-base md:text-lg">
            <FaEnvelope aria-hidden="true" /> {profile.email}
          </a>
          <button type="button" onClick={copy} className="btn btn-ghost" aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={copied ? "ok" : "copy"}
                className="inline-flex items-center gap-2"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18 }}
              >
                {copied ? <FaCheck aria-hidden="true" /> : <FaCopy aria-hidden="true" />}
                {copied ? "Copied" : "Copy email"}
              </motion.span>
            </AnimatePresence>
          </button>
          <a href={profile.links.cv} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <FaFileArrowDown aria-hidden="true" /> Download CV
          </a>
        </Reveal>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-3" stagger={0.08}>
          {socials.map(({ href, label, sub, Icon }) => (
            <Item key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer" className="card group flex items-center gap-4 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent transition-transform duration-300 group-hover:scale-110">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block font-display font-bold">{label}</span>
                  <span className="block truncate font-mono text-xs text-muted">{sub}</span>
                </span>
                <FaArrowRight aria-hidden="true" className="ml-auto shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default Contact;
