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
          <ul className="facts">
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
        <figure className="founder">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/founder.jpg" alt={`${business.owner}, founder of Kaunda Landscapes, standing on a lawn`} loading="lazy" />
          <figcaption>
            <strong>{business.owner}</strong>
            <span>Owner and founder</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
