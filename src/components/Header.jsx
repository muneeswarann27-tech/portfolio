import { useState } from "react";

const navItems = [
  ["Home", "home"],
  ["Services", "services"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Contact", "contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <a className="brand" href="#home">
          Munees
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
        <div className={`nav-links ${open ? "is-open" : ""}`}>
          {navItems.map(([label, target]) => (
            <a key={target} href={`#${target}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a className="resume-button" href="/assets/Muneeswaran_FullStack_Resume.pdf" target="_blank" rel="noreferrer">
            View Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
