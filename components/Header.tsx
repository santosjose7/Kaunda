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
{/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.webp" alt="" width="56" height="53" className="brand-logo" />
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
