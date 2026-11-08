import React from "react";
import "./footer.css";

const links = [
  { href: "https://github.com/Rafik006", label: "GitHub" },
  { href: "https://www.linkedin.com/in/mhadhbi-rafik/", label: "LinkedIn" },
  { href: "mailto:rafikmhadhbi01@gmail.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer_inner">
          <div className="c-footer">
            <div className="layout">
              <div className="layout_item w-50">
                <h3 className="newsletter_title">Open to the next production problem.</h3>
                <p className="footer_sub">Full-stack engineer · AI agents &amp; real-time voice · Sousse, Tunisia · remote-ready (CET)</p>
                <ul className="footer_links">
                  {links.map((l) => (
                    <li key={l.href}>
                      <a href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">{l.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="layout_item w-25">
                <nav className="c-nav-tool" aria-label="Footer">
                  <h4 className="c-nav-tool_title"><a href="#about_me">About Me</a></h4>
                  <h4 className="c-nav-tool_title"><a href="#skills">Skills</a></h4>
                  <h4 className="c-nav-tool_title"><a href="#experience">Experience</a></h4>
                  <h4 className="c-nav-tool_title"><a href="#projects">Projects</a></h4>
                </nav>
              </div>
            </div>
            <div className="layout c-2">
              <div className="layout_item w-50">
                <p className="footer_copy">© {new Date().getFullYear()} Rafik Mhadhbi</p>
              </div>
              <div className="layout_item w-25" style={{ display: "flex", justifyContent: "end", alignItems: "center" }}>
                <a href="#about_me" aria-label="Back to top" className="to-top">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" aria-hidden="true">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm1 10h3l-4-4-4 4h3v4h2v-4z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
