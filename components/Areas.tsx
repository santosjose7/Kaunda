import { business, whatsappLink } from "@/lib/data";

export default function Areas() {
  return (
    <section className="section areas" id="areas">
      <div className="wrap">
        <h2>Where we work</h2>
        <p className="section-lead">We take jobs in these towns and the areas around them.</p>
        <ul className="area-list">
          {business.areas.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
        <p>
          Not on the list?{" "}
          <a className="link" href={whatsappLink("Hello, do you work in my area?")} target="_blank" rel="noopener noreferrer">
            Ask us on WhatsApp
          </a>{" "}
          and we will tell you if we can reach you.
        </p>
      </div>
    </section>
  );
}
