"use client";
import { useState } from "react";
import { business, whatsappLink, services } from "@/lib/data";

export default function Contact() {
  const [name, setName] = useState("");
  const [service, setService] = useState(services[0].title);
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

  function send(e: React.FormEvent) {
    e.preventDefault();
    const text = `Hello Kaunda Landscapes, my name is ${name}.\nService: ${service}\nLocation: ${location}\n${message}`.trim();
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  }

  return (
    <section className="section section-dark" id="contact">
      <div className="wrap contact">
        <div>
          <h2>Get a quote</h2>
          <p className="section-lead">The fastest way to reach us is WhatsApp. Fill in the form and it opens a ready-written message to us.</p>
          <p className="contact-line">
            <span>WhatsApp</span>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">{business.phoneDisplay}</a>
          </p>
          <p className="contact-line">
            <span>Prefer to call?</span>
            <a href={`tel:${business.phoneTel}`}>Call {business.phoneDisplay}</a>
          </p>
        </div>

        <form className="form" onSubmit={send}>
          <label>
            Your name
            <input required value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
          </label>
          <label>
            Service
            <select value={service} onChange={(e) => setService(e.target.value)}>
              {services.map((s) => (
                <option key={s.id}>{s.title}</option>
              ))}
            </select>
          </label>
          <label>
            Town or county
            <input required value={location} onChange={(e) => setLocation(e.target.value)} placeholder="For example: Nakuru" />
          </label>
          <label>
            About the job
            <textarea rows={4} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="For example: 120 sqm driveway, or a new front lawn" />
          </label>
          <button className="btn" type="submit">Send on WhatsApp</button>
        </form>
      </div>
    </section>
  );
}
