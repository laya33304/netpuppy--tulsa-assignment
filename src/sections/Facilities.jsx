import { BookOpen, Home, Sparkles } from "lucide-react";

import { facilities } from "../data/siteData";
import Reveal from "../components/animations/Reveal";
import SectionHeading from "../components/ui/SectionHeading";

const icons = {
  book: BookOpen,
  home: Home,
  sparkles: Sparkles,
};

function Facilities() {
  return (
    <section className="facilities section-light" id="campus">
      <div className="container">
        <SectionHeading
          eyebrow="04 — Campus Life"
          title="Everything students need to learn, live and grow."
          description="From learning spaces and laboratories to residential life and wellbeing, the campus is designed around the complete student experience."
        />

        <div className="facility-grid">
          {facilities.map((facility, index) => {
            const Icon = icons[facility.icon];

            return (
              <Reveal key={facility.title} direction="up" delay={index * 0.1}>
                <article className="facility-card">
                  <div className="facility-icon">
                    <Icon size={26} strokeWidth={1.5} />
                  </div>

                  <span>0{index + 1}</span>

                  <h3>{facility.title}</h3>

                  <p>{facility.description}</p>

                  <div className="facility-line" />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Facilities;
