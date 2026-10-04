import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/animations/Reveal";

function Achievements() {
  return (
    <section className="achievements section-dark">
      <div className="container">
        <div className="achievement-top">
          <Reveal>
            <span className="eyebrow">05 — Recognition</span>

            <h2>
              A school built
              <br />
              to make an impact.
            </h2>
          </Reveal>

          <Reveal direction="right">
            <p>
              Tulas International School has been recognised across school
              rankings and education platforms. Explore the school's
              achievements and recognitions.
            </p>
          </Reveal>
        </div>

        <div className="achievement-cards">
          <Reveal delay={0.1}>
            <div className="achievement-card">
              <span>01</span>
              <strong>#1</strong>
              <p>Dehradun</p>
              <ArrowUpRight size={20} />
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="achievement-card">
              <span>02</span>
              <strong>#2</strong>
              <p>Uttarakhand</p>
              <ArrowUpRight size={20} />
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="achievement-card">
              <span>03</span>
              <strong>#1</strong>
              <p>North India</p>
              <ArrowUpRight size={20} />
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="achievement-card">
              <span>04</span>
              <strong>#4</strong>
              <p>India</p>
              <ArrowUpRight size={20} />
            </div>
          </Reveal>
        </div>

        <div className="achievement-note">
          <span>*</span>
          <p>
            Rankings and recognitions should be presented with their official
            source/year when the final deployment is submitted.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
