import "./Navbar.css";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "about", "skills", "achievements", "contact"];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });

      if (current) setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top custom-navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container">

        <a className="navbar-brand brand-text" href="#home">
          <span className="brand-gradient">SAHITHI<span className="brand-subgrad"> MENENI</span></span>
          <span className="brand-underline"></span>
        </a>

        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          aria-label="Toggle navigation"
        >
          <span className="toggler-line toggler-line-1"></span>
          <span className="toggler-line toggler-line-2"></span>
          <span className="toggler-line toggler-line-3"></span>
        </button>

        <div id="nav" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto gap-4 align-items-center">
            {["Home", "About", "Skills", "Achievements", "Contact"].map(item => {
              const key = item.toLowerCase();
              return (
                <li key={item} className="nav-item">
                  <a
                    href={`#${key}`}
                    className={`nav-link ${activeLink === key ? "active-link" : ""}`}
                    onClick={() => setActiveLink(key)}
                  >
                    <span className="link-text">{item}</span>
                    <span className="link-underline"></span>
                    <span className="link-hover-bg"></span>
                  </a>
                </li>
              );
            })}

            {/* <li className="nav-item">
              <a href="#contact" className="btn-hire">
                <span>Hire Me</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li> */}
          </ul>
        </div>

      </div>
    </nav>
  );
}
