import { whatsappLink } from "@/lib/data";

export default function Areas() {
  return (
    <section className="section areas" id="areas">
      <div className="wrap">
        <h2>We work across Kenya</h2>
        <p className="section-lead">
          Your project can be in any town or county. Tell us where the site is and we will arrange a visit and a quote.
        </p>
        <a className="btn" href={whatsappLink("Hello Kaunda Landscapes, I have a project in ...")} target="_blank" rel="noopener noreferrer">
          Tell us your location
        </a>
      </div>
    </section>
  );
}
