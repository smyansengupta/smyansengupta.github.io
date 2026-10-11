'use client';

import { useEffect, useState } from 'react';

const sections = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#tools', label: 'Tools' },
  { href: '#contact', label: 'Contact' },
];

const externalLinks = [
  { href: '/Smyan_Sengupta_Resume_2026.pdf', label: 'Resume' },
  { href: 'https://github.com/smyansengupta', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/smyan-sengupta/', label: 'LinkedIn' },
];

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <nav className="masthead">
        <div className="wrap masthead-inner">
          <a href="#" className="brand" onClick={closeMenu}>
            Smyan Sengupta<span className="brand-dot">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="nav-links">
            {sections.map((section, index) => (
              <a key={section.href} href={section.href} className="nav-link">
                <span className="nav-num">0{index + 1}</span>
                {section.label}
              </a>
            ))}
            <span className="nav-sep" aria-hidden="true" />
            {externalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
                <span className="nav-ext">↗</span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="menu-btn"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
        <span className="read-progress" aria-hidden="true" />
      </nav>

      {/* Mobile Dropdown Menu */}
      <div id="mobile-menu" className={`mobile-menu ${isOpen ? 'is-open' : ''}`} aria-hidden={!isOpen}>
        <div className="wrap">
          <ol className="mobile-menu-sections">
            {sections.map((section, index) => (
              <li key={section.href} style={{ '--i': index } as React.CSSProperties}>
                <a href={section.href} onClick={closeMenu} tabIndex={isOpen ? 0 : -1}>
                  <span className="nav-num">0{index + 1}</span>
                  {section.label}
                </a>
              </li>
            ))}
          </ol>
          <div className="mobile-menu-external">
            {externalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-link"
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={isOpen ? 0 : -1}
              >
                {link.label} <span className="arrow">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
