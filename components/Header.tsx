"use client";
import { useState } from "react";
import { business, whatsappLink } from "@/lib/data";

const links = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#areas", label: "Coverage" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="wrap header-inner">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <svg viewBox="0 0 64 64" width="34" height="34" aria-hidden="true">
            <rect width="64" height="64" rx="14" fill="#17361f" />
            <path d="M32 50V30M32 30C32 20 24 14 14 14c0 10 6 16 18 16ZM32 36c0-8 7-13 17-13 0 9-6 14-17 13Z" fill="none" stroke="#8fd05a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>{business.name}</span>
        </a>
        <nav className={`nav ${open ? "open" : ""}`} aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a className="btn btn-small" href={whatsappLink("Hello Kaunda Landscapes, I would like a quote.")} target="_blank" rel="noopener noreferrer">
            WhatsApp us
          </a>
        </nav>
        <button className="menu-btn" aria-expanded={open} aria-label="Menu" onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
