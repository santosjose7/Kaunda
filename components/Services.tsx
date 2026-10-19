import { services, steps } from "@/lib/data";

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <h2>What we do</h2>
        <p className="section-lead">Three services, one team, from first measurement to final trim.</p>
        <div className="services">
          {services.map((s) => (
            <article key={s.id} className={`service service-${s.id}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="service-swatch" src={s.image} alt="" aria-hidden="true" loading="lazy" />
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <ul>
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <h3 className="steps-title">How a job works</h3>
        <ol className="steps">
          {steps.map((st) => (
            <li key={st.title}>
              <strong>{st.title}</strong>
              <span>{st.text}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
