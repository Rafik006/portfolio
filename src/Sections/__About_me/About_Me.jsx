import React, { useRef } from "react";
import { FaEnvelope, FaFileArrowDown } from "react-icons/fa6";
import useVanta from "../../lib/useVanta.js";
import Reveal, { Stagger, Item } from "../../components/motion/Reveal.jsx";
import SplitText from "../../components/motion/SplitText.jsx";
import SocialMedia from "../../components/socialMedia/SocialMedia.jsx";
import portrait from "../../assets/Images/rafik-presenting.webp";
import { about, profile } from "../../data/content.js";

const About_Me = () => {
  const ref = useRef(null);
  useVanta(ref, "birds", {
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    color1: 0x0b7a7a,
    color2: 0x2cc4c4,
    colorMode: "lerpGradient",
    birdSize: 1.2,
    wingSpan: 24.0,
    speedLimit: 4.0,
    separation: 60.0,
    alignment: 40.0,
    cohesion: 30.0,
    quantity: 3.0,
    backgroundAlpha: 1.0,
  }, {
    light: { backgroundColor: 0xffffff },
    dark: { backgroundColor: 0x111318 },
  });

  return (
    <section id="about_me" ref={ref} className="vanta-host section overflow-hidden">
      <div className="container-x">
        <div className="glass rounded-[2rem] p-6 md:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-16">
            <Reveal className="mx-auto">
              <div className="portrait-ring">
                <img src={portrait} alt="Portrait of Rafik Mhadhbi" width="260" height="260" loading="lazy" />
              </div>
            </Reveal>

            <div>
              <p className="eyebrow">01 / About</p>
              <h2 className="h-section">
                <SplitText text="Full-stack engineer." />
              </h2>
              <Reveal as="p" className="mt-6 text-[1.05rem] leading-relaxed text-ink/85" delay={0.15}>
                {about.intro}
              </Reveal>
              <Stagger as="dl" className="mt-6 divide-y divide-ink/10 border-y border-ink/10" delay={0.25} stagger={0.1}>
                {about.rows.map((r) => (
                  <Item key={r.label} className="grid gap-1 py-4 sm:grid-cols-[6.5rem_1fr] sm:gap-4">
                    <dt className="pt-0.5 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-primaryColor">{r.label}</dt>
                    <dd>
                      <p className="font-display font-bold leading-snug">
                        {r.title}
                        <span className="ml-2 whitespace-nowrap font-mono text-xs font-normal text-muted">{r.period}</span>
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{r.line}</p>
                    </dd>
                  </Item>
                ))}
              </Stagger>
              <Reveal className="mt-7 flex flex-wrap items-center gap-4" delay={0.3}>
                <a href={`mailto:${profile.email}`} className="btn btn-primary">
                  <FaEnvelope aria-hidden="true" /> Get in touch
                </a>
                <a href={profile.links.cv} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                  <FaFileArrowDown aria-hidden="true" /> Download CV
                </a>
                <SocialMedia compact />
              </Reveal>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About_Me;
