import React from "react";
import { FaArrowUp } from "react-icons/fa6";
import "./footer.css";
import { navLinks, profile } from "../../data/content.js";

const Footer = () => (
  <footer className="footer" id="footer">
    <div className="container-x footer-inner">
      <div>
        <a href="#hero" className="brand flex items-center gap-3" aria-label="Rafik Mhadhbi, back to top">
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-name">Rafik Mhadhbi</span>
        </a>
        <p className="footer-sub">{profile.positioning}</p>
      </div>
      <nav aria-label="Footer">
        <ul className="footer-nav">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="footer-meta">
        <p>© {new Date().getFullYear()} Rafik Mhadhbi · Built with React, Vite, Tailwind and framer-motion.</p>
        <a href="#hero" className="to-top" aria-label="Back to top">
          <FaArrowUp aria-hidden="true" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
