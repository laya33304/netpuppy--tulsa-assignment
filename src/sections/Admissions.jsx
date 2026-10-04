import { ArrowUpRight, Phone } from "lucide-react";
import Reveal from "../components/animations/Reveal";

function Admissions() {
  return (
    <section className="admissions section" id="admissions">
      <div className="container">
        <Reveal>
          <div className="admission-inner">
            <div>
              <span className="eyebrow">09 — Admissions</span>

              <h2>
                Your next chapter
                <br />
                starts here.
              </h2>

              <p>
                Discover an environment where students can learn, explore,
                compete, create and grow.
              </p>
            </div>

            <div className="admission-actions">
              <a href="tel:+919837983791" className="admission-button">
                <Phone size={18} />
                +91-9837983791
              </a>

              <a
                href="mailto:info@tis.edu.in"
                className="admission-button primary"
              >
                Enquire Now
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Admissions;
