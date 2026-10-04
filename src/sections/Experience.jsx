import { ArrowUpRight } from "lucide-react";
import { experiences } from "../data/siteData";
import Reveal from "../components/animations/Reveal";
import SectionHeading from "../components/ui/SectionHeading";

function Experience() {
  return (
    <section className="experience section-dark" id="experience">
      <div className="container">
        <SectionHeading
          eyebrow="02 — The Tulas Experience"
          title="Four dimensions. One complete education."
          description="The Tulas experience is built around learning, discovery, responsibility and community."
          light
        />

        <div className="experience-list">
          {experiences.map((item, index) => (
            <Reveal key={item.number} direction="up" delay={index * 0.08}>
              <article className="experience-item">
                <span>{item.number}</span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <ArrowUpRight size={22} />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
