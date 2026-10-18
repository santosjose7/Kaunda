import { business, whatsappLink } from "@/lib/data";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker">Landscaping across Kenya, since {business.established}</p>
          <h1>Paving, lawns and gardens, built properly.</h1>
          <p className="lead">
            Kaunda Landscapes designs and builds outdoor spaces for homes, businesses and institutions anywhere in Kenya.
          </p>
          <div className="actions">
            <a className="btn" href={whatsappLink("Hello Kaunda Landscapes, I would like a quote.")} target="_blank" rel="noopener noreferrer">
              Request a quote
            </a>
            <a className="btn btn-ghost" href="#projects">
              See our work
            </a>
          </div>
        </div>
        <div className="scene" role="img" aria-label="Illustration of a mowed lawn with hedges and a cabro paved driveway">
          <div className="scene-lawn" />
          <div className="shrub s1" />
          <div className="shrub s2" />
          <div className="shrub s3" />
          <div className="scene-drive" />
        </div>
      </div>
    </section>
  );
}
