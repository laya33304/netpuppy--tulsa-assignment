import { ArrowUpRight } from "lucide-react";
import { personalities } from "../data/siteData";

import Reveal from "../components/animations/Reveal";
import SectionHeading from "../components/ui/SectionHeading";

function Personalities() {
  return (
    <section className="personalities section" id="stories">
      <div className="container">
        <SectionHeading
          eyebrow="06 — Inspiration"
          title="Ideas shape people. People shape the future."
          description="An education inspired by curiosity, leadership, creativity and the courage to explore what comes next."
        />

        <div className="personality-grid">
          {personalities.map((person, index) => (
            <Reveal key={person.name} direction="up" delay={index * 0.1}>
              <article className="personality-card">
                <span>0{index + 1}</span>

                <div className="personality-symbol">
                  {person.name.charAt(0)}
                </div>

                <h3>{person.name}</h3>

                <small>{person.role}</small>

                <p>{person.quote}</p>

                <ArrowUpRight size={20} />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Personalities;
