import React, { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowRight, FaXmark, FaClock } from "react-icons/fa6";
import { Stagger, Item, EASE } from "../../components/motion/Reveal.jsx";
import SplitText from "../../components/motion/SplitText.jsx";
import { DgDefs, diagrams } from "../../components/diagrams/index.jsx";
import { stories, sectionTitles, pillarLabel } from "../../data/stories.js";

const ORDER = ["problem", "approach", "outcome"];

const Stories = () => {
  const [openId, setOpenId] = useState(null);
  const closeRef = useRef(null);
  const story = stories.find((s) => s.id === openId);
  const close = useCallback(() => setOpenId(null), []);

  // other sections can open a story: window.dispatchEvent(new CustomEvent("open-story", { detail: id }))
  useEffect(() => {
    const onOpen = (e) => setOpenId(e.detail);
    window.addEventListener("open-story", onOpen);
    return () => window.removeEventListener("open-story", onOpen);
  }, []);

  useEffect(() => {
    if (!story) return undefined;
    const onKey = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [story, close]);

  return (
    <section id="stories" className="section section-dark overflow-hidden">
      <DgDefs />
      <div className="container-x">
        <p className="eyebrow">04 / Engineering stories</p>
        <h2 className="h-section">
          <SplitText text="Six problems I solved" /> <SplitText text="in production." className="gradient-text" delay={0.3} />
        </h2>
        <p className="lead text-muted">Anonymised. Each story: the problem, what I did, and the result. Click one to open it.</p>

        <Stagger className="mt-12 grid gap-5 md:grid-cols-2" stagger={0.08}>
          {stories.map((s, i) => (
            <Item key={s.id}>
              <motion.button
                type="button"
                layoutId={`story-${s.id}`}
                data-story={s.id}
                onClick={() => setOpenId(s.id)}
                className="card group flex h-full w-full flex-col p-6 text-left md:p-7"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className={`tag tag-${s.pillar}`}>{pillarLabel[s.pillar]}</span>
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted">
                    <FaClock aria-hidden="true" /> {s.minutes} min
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold leading-snug">
                  <span className="mr-2 font-mono text-sm text-accent">0{i + 1}</span>
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{s.summary}</p>
                <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
                  <span className="font-semibold uppercase tracking-wider">Result</span> {s.result}
                </span>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                  Read the story
                  <FaArrowRight aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </motion.button>
            </Item>
          ))}
        </Stagger>
      </div>

      <AnimatePresence>
        {story && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            role="presentation"
          >
            <motion.article
              layoutId={`story-${story.id}`}
              data-story-detail={story.id}
              className="modal-panel relative"
              role="dialog"
              aria-modal="true"
              aria-labelledby="story-title"
              onClick={(e) => e.stopPropagation()}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-ink/10 bg-card/90 px-6 py-3 backdrop-blur">
                <span className={`tag tag-${story.pillar}`}>{pillarLabel[story.pillar]} · {story.minutes} min read</span>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={close}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-ink hover:bg-mist"
                  aria-label="Close story"
                >
                  <FaXmark />
                </button>
              </div>
              <div className="p-6 md:p-10">
                <h3 id="story-title" className="font-display text-2xl font-bold leading-tight md:text-3xl">
                  {story.title}
                </h3>
                <p className="mt-3 text-muted">{story.summary}</p>
                <motion.div
                  className="mt-7 rounded-2xl border border-ink/10 bg-mist/60 p-3 md:p-5"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.5, ease: EASE }}
                >
                  {React.createElement(diagrams[story.diagram])}
                </motion.div>
                <div className="prose-story mt-4">
                  {ORDER.map((k, i) => (
                    <motion.div
                      key={k}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.07, duration: 0.45, ease: EASE }}
                    >
                      <h4>{sectionTitles[k]}</h4>
                      <ul className="story-list">
                        {story[k].map((p) => (
                          <li key={p.slice(0, 48)}>{p}</li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + ORDER.length * 0.07, duration: 0.45, ease: EASE }}
                  >
                    <h4>{sectionTitles.lesson}</h4>
                    <p>{story.lesson}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {story.stack.map((t) => (
                        <li key={t} className="chip">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Stories;
