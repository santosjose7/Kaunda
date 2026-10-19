import { business } from "@/lib/data";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap about">
        <div>
          <h2>About Kaunda Landscapes</h2>
          <p>
            Kaunda Landscapes is a Kenyan landscaping and outdoor design business founded by {business.owner} in {business.established}. We work on private homes, commercial properties and institutions, and we handle cabro paving, lawns and garden design under one roof.
          </p>
          <p>
            You may also see us trading as Kenn Hesbon Kaunda Landscapes KE or Heka Landscapers. Whatever the name on the sign, it is the same team doing the work.
          </p>
        </div>
        <div className="about-side">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="about-logo"
            src="/logo.webp"
            alt="Kaunda Landscapes KE logo: a paved garden path and fountain under a rising sun"
            loading="lazy"
          />
          <ul className="facts">
          <li>
            <strong>{business.owner}</strong>
            <span>Owner and founder</span>
          </li>
          <li>
            <strong>{business.established}</strong>
            <span>Year established</span>
          </li>
          <li>
            <strong>Homes, businesses, institutions</strong>
            <span>Who we build for</span>
          </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
