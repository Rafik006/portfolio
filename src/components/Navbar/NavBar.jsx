import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaXmark, FaSun, FaMoon } from "react-icons/fa6";
import { useTheme } from "../../lib/theme.js";
import { navLinks, profile } from "../../data/content.js";

const ThemeToggle = () => {
  const [theme, setTheme] = useTheme();
  const dark = theme === "dark";
  const label = dark ? "Switch to light mode" : "Switch to dark mode";
  return (
    <button
      type="button"
      data-theme-toggle
      onClick={() => setTheme(dark ? "light" : "dark")}
      aria-label={label}
      title={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 bg-paper/70 text-ink transition-colors hover:border-primaryColor hover:text-primaryColor"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          className="inline-flex"
          initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {dark ? <FaSun size={18} aria-hidden="true" /> : <FaMoon size={17} aria-hidden="true" />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
};

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const panelRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // highlight the section currently in the middle of the viewport
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onClick = (e) => panelRef.current && !panelRef.current.contains(e.target) && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onClick);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-paper/95 backdrop-blur-md border-b border-ink/10 shadow-[0_8px_30px_-20px_rgba(11,11,15,.35)]" : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-[72px] items-center justify-between" aria-label="Primary" ref={panelRef}>
        <a href="#hero" className="brand flex items-center gap-3 select-none" aria-label="Rafik Mhadhbi, back to top">
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-name">Rafik Mhadhbi</span>
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={`nav-link ${active === l.href.slice(1) ? "active" : ""}`}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href={profile.links.cv} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm hidden sm:inline-flex">
            CV
          </a>
          <a href="#contact" className="btn btn-primary btn-sm hidden sm:inline-flex">
            Contact me
          </a>
          <button
            type="button"
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl border border-ink/10 bg-paper/70 text-ink"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <FaXmark size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              className="absolute left-4 right-4 top-[80px] rounded-2xl border border-ink/10 bg-card p-4 shadow-card md:hidden"
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              <ul className="flex flex-col">
                {navLinks.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-xl px-3 py-3 text-lg font-display font-medium ${active === l.href.slice(1) ? "text-primaryColor" : "text-ink"} hover:bg-mist`}
                    >
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-3 flex gap-2">
                <a href={profile.links.cv} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm flex-1 justify-center">
                  Download CV
                </a>
                <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary btn-sm flex-1 justify-center">
                  Contact me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default NavBar;
