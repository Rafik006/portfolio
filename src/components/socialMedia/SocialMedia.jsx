import React from "react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import "./Social.css";
import { profile } from "../../data/content.js";

const items = [
  { href: profile.links.github, label: "GitHub", cls: "github", Icon: FaGithub },
  { href: profile.links.whatsapp, label: "WhatsApp", cls: "whatsapp", Icon: FaWhatsapp },
  { href: profile.links.linkedin, label: "LinkedIn", cls: "linkdin", Icon: FaLinkedinIn },
];

/** The three social buttons with the original hover "BG" sweep. */
const SocialMedia = ({ compact = false }) => (
  <div className={`social-card ${compact ? "social-compact" : ""}`}>
    {items.map(({ href, label, cls, Icon }) => (
      <a key={label} className={`Btn ${cls}`} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
        <span className="svgContainer">
          <Icon size={20} aria-hidden="true" />
        </span>
        <span className="BG" aria-hidden="true" />
      </a>
    ))}
  </div>
);

export default SocialMedia;
