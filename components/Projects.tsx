"use client";
import { useState } from "react";
import { projects, categoryLabels, type Category } from "@/lib/data";

type Filter = "all" | Category;

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("all");
  const shown = filter === "all" ? projects : projects.filter((p) => p.category === filter);
  const filters: Filter[] = ["all", "cabro", "lawn", "garden"];

  return (
    <section className="section section-dark" id="projects">
      <div className="wrap">
        <h2>Completed projects</h2>
        <p className="section-lead">A look at recent driveways, lawns and gardens we have finished.</p>

        <div className="filters" role="group" aria-label="Filter projects">
          {filters.map((f) => (
            <button key={f} aria-pressed={filter === f} onClick={() => setFilter(f)}>
              {f === "all" ? "All" : categoryLabels[f]}
            </button>
          ))}
        </div>

        <div className="projects">
          {shown.map((p) => (
            <article className="project" key={p.title}>
              <div className="project-figure">
                {p.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    className="project-media"
                    src={p.image}
                    alt={p.location ? `${p.title}, ${p.location}` : p.title}
                    style={p.focus ? { objectPosition: p.focus } : undefined}
                    loading="lazy"
                  />
                ) : (
                  <div className={`project-media ph ph-${p.category}`} role="img" aria-label={`${categoryLabels[p.category]} project placeholder`} />
                )}
              </div>
              <div className="project-body">
                <h3>{p.title}</h3>
                <p className="project-meta">
                  {categoryLabels[p.category]}
                  {p.location ? ` in ${p.location}` : ""}
                </p>
                <p>{p.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
