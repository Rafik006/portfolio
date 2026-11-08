import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Reveal, { Stagger, Item } from "../../components/motion/Reveal.jsx";
import SplitText from "../../components/motion/SplitText.jsx";
import { employer, ventures, earlier } from "../../data/content.js";

/** "2 yrs 5 mos" from an ISO start date to today, recomputed on every visit. */
export function tenure(startISO, now = new Date()) {
  const start = new Date(startISO);
  let months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  if (now.getDate() < start.getDate()) months -= 1;
  const y = Math.floor(months / 12);
  const m = months % 12;
  return [y && `${y} yr${y > 1 ? "s" : ""}`, m && `${m} mo${m > 1 ? "s" : ""}`].filter(Boolean).join(" ");
}

const Chips = ({ items }) => (
  <ul className="mt-5 flex flex-wrap gap-2">
    {items.map((s) => (
      <li key={s} className="chip">
        {s}
      </li>
    ))}
  </ul>
);

const SiteLink = ({ href, name }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Visit the ${name} website`}
    className="inline-flex shrink-0 items-center gap-2 rounded-full border border-primaryColor/30 px-3 py-1.5 text-sm font-semibold text-primaryColor transition-colors hover:bg-primaryColor hover:text-paper"
  >
    Visit website <FaArrowUpRightFromSquare size={11} aria-hidden="true" />
  </a>
);

const Header = ({ title, org, period, link }) => (
  <>
    <div className="flex flex-wrap items-start justify-between gap-3">
      <div>
        <h3 className="font-display text-xl font-bold leading-tight md:text-2xl">{title}</h3>
        <p className="mt-1 font-medium text-ink/80">{org}</p>
      </div>
      {link && <SiteLink href={link} name={org} />}
    </div>
    <p className="mt-2 font-mono text-xs tracking-wider text-primaryColor">{period}</p>
  </>
);

const Node = ({ pulse = false, children }) => (
  <Reveal as="li" className="timeline-node mb-8" y={36} amount={0.15}>
    <span className={`timeline-dot ${pulse ? "pulse" : ""}`} aria-hidden="true" />
    <div className="card p-6 md:p-8">{children}</div>
  </Reveal>
);

const ExperienceSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 70%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 22, mass: 0.4 });

  return (
    <section id="experience" className="section bg-mist/60 overflow-hidden">
      <div className="container-x">
        <p className="eyebrow">03 / Experience</p>
        <h2 className="h-section">
          <SplitText text="Where I've worked." />
        </h2>

        <div ref={ref} className="timeline timeline-left mt-12">
          <div className="timeline-rail" aria-hidden="true">
            <motion.div className="timeline-fill" style={{ scaleY }} />
          </div>
          <ol>
            <Node pulse>
              <Header title={employer.role} org={employer.company} period={`${employer.period} · ${tenure(employer.start)}`} link={employer.link} />
              <p className="mt-2 text-sm text-muted">{employer.note}</p>
              <div className="mt-6 grid gap-x-10 gap-y-6 md:grid-cols-2">
                {employer.highlights.map((g) => (
                  <div key={g.title}>
                    <h4 className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-primaryColor">{g.title}</h4>
                    <ul className="mt-2 space-y-1.5">
                      {g.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-sm leading-relaxed text-ink/85">
                          <span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-primaryColor" aria-hidden="true" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <Chips items={employer.stack} />
            </Node>
            {earlier.map((x) => (
              <Node key={x.id}>
                <Header title={x.role} org={x.company} period={x.period} link={x.link} />
                <p className="mt-3 text-sm leading-relaxed text-muted">{x.line}</p>
              </Node>
            ))}
          </ol>
        </div>

        <Reveal className="mt-14">
          <p className="eyebrow">Side projects</p>
        </Reveal>
        <Stagger className="mt-6 grid gap-6 md:grid-cols-2" stagger={0.1}>
          {ventures.map((v) => (
            <Item key={v.id} className="card p-6 md:p-8">
              <Header title={v.name} org={v.role} period={v.period} link={v.link} />
              <p className="mt-3 text-sm leading-relaxed text-muted">{v.line}</p>
              <Chips items={v.stack} />
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default ExperienceSection;
