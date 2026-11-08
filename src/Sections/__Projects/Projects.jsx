import React, { useRef, useState } from "react";
import { FaGithub, FaLock, FaArrowUpRightFromSquare } from "react-icons/fa6";
import Reveal, { Stagger, Item } from "../../components/motion/Reveal.jsx";
import SplitText from "../../components/motion/SplitText.jsx";
import TiltCard from "../../components/motion/TiltCard.jsx";
import { projects, teaching, earlierWork } from "../../data/content.js";

const Bullets = ({ items }) => (
  <ul className="mt-4 space-y-1.5">
    {items.map((h) => (
      <li key={h} className="flex gap-3 text-sm leading-relaxed text-ink/80">
        <span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-primaryColor" aria-hidden="true" />
        <span>{h}</span>
      </li>
    ))}
  </ul>
);

const Chips = ({ items }) => (
  <ul className="mt-5 flex flex-wrap gap-2">
    {items.map((s) => (
      <li key={s} className="chip">
        {s}
      </li>
    ))}
  </ul>
);

/** Flips on hover with a mouse, on tap with a finger, and on keyboard focus. The outer frame holds the state and
 *  never moves, so the hover target is stable. Touch browsers fire emulated mouse events after a tap, so hover
 *  handling only listens to real mice. */
const FlipCard = ({ w }) => {
  const [flipped, setFlipped] = useState(false);
  const input = useRef("mouse");
  return (
    <div
      className="flip aspect-[16/10]"
      onPointerDownCapture={(e) => (input.current = e.pointerType)}
      onKeyDownCapture={() => (input.current = "keyboard")}
      onPointerEnter={(e) => e.pointerType === "mouse" && setFlipped(true)}
      onPointerLeave={(e) => e.pointerType === "mouse" && setFlipped(false)}
      onFocus={(e) => e.target.matches(":focus-visible") && setFlipped(true)}
      onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setFlipped(false)}
      onClick={(e) => {
        if (e.target.closest("a")) return;
        if (input.current !== "mouse") setFlipped((f) => !f);
      }}
    >
      <div className={`flip-inner h-full w-full ${flipped ? "is-flipped" : ""}`}>
        <button
          type="button"
          className="flip-face flip-front block h-full w-full cursor-pointer bg-card p-0 text-left"
          aria-label={`Show details of ${w.name}`}
        >
          <img src={w.img} alt="" className="h-full w-full object-cover object-top" loading="lazy" />
          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night/80 to-transparent p-4">
            <span className="font-display font-bold text-white">{w.name}</span>
          </span>
        </button>
        <div className="flip-face flip-back flex flex-col justify-between bg-night p-5 text-white" aria-hidden={!flipped}>
          <div>
            <p className="font-display text-lg font-bold">{w.name}</p>
            <p className="mt-2 text-sm leading-relaxed text-white/75">{w.line}</p>
          </div>
          <div className="flex items-end justify-between gap-3">
            <ul className="flex flex-wrap gap-1.5">
              {w.stack.map((s) => (
                <li key={s} className="font-mono text-[0.68rem] text-accent">
                  {s}
                </li>
              ))}
            </ul>
            <a
              href={w.source}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={flipped ? 0 : -1}
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-accent hover:text-white"
            >
              <FaGithub aria-hidden="true" /> Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => (
  <section id="projects" className="section overflow-hidden">
    <div className="container-x">
      <p className="eyebrow">05 / Projects</p>
      <h2 className="h-section">
        <SplitText text="Things I build" /> <SplitText text="outside work." className="gradient-text" delay={0.25} />
      </h2>
      <p className="lead">My two ventures, live in production, and the teaching material I publish on GitHub.</p>

      <Stagger className="mt-12 grid gap-6 md:grid-cols-2" stagger={0.12}>
        {projects.map((p) => (
          <Item key={p.id}>
            <TiltCard className="card group relative flex h-full flex-col overflow-hidden" max={6}>
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="block overflow-hidden border-b border-ink/10" aria-label={`Open ${p.domain}`}>
                <img
                  src={p.img}
                  alt={`Home page of ${p.title}`}
                  width="1200"
                  height="750"
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </a>
              <div className="flex flex-1 flex-col p-6 md:p-8">
                <p className="font-mono text-xs tracking-wider text-primaryColor">
                  {p.period} · {p.role}
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold leading-tight">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-ink/85">{p.summary}</p>
                <Bullets items={p.highlights} />
                <Chips items={p.stack} />
                <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                    Visit {p.domain} <FaArrowUpRightFromSquare aria-hidden="true" />
                  </a>
                  <span className="inline-flex items-center gap-2 font-mono text-xs text-muted">
                    <FaLock aria-hidden="true" /> Private codebase
                  </span>
                </div>
              </div>
            </TiltCard>
          </Item>
        ))}
      </Stagger>

      <Reveal className="mt-6">
        <div className="card grid gap-6 p-6 md:grid-cols-[1.1fr_1fr] md:p-8">
          <div>
            <p className="font-mono text-xs tracking-wider text-primaryColor">
              {teaching.period} · {teaching.role}
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold leading-tight">{teaching.title}</h3>
            <p className="mt-3 leading-relaxed text-ink/85">{teaching.summary}</p>
            <Bullets items={teaching.highlights} />
          </div>
          <div className="flex flex-col justify-between gap-6">
            <Chips items={teaching.stack} />
            <div className="flex flex-wrap gap-3">
              {teaching.links.map((l) => (
                <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
                  <FaGithub aria-hidden="true" /> {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-20">
        <p className="eyebrow">Earlier work · 2023</p>
        <p className="mt-3 max-w-2xl text-muted">Where it started: my first full-stack projects. Hover or tap a card to flip it.</p>
      </Reveal>
      <Stagger className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
        {earlierWork.map((w) => (
          <Item key={w.name}>
            <FlipCard w={w} />
          </Item>
        ))}
      </Stagger>
    </div>
  </section>
);

export default Projects;
