import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/animations/Reveal";
import Button from "../components/ui/Button";
import SectionHeading from "../components/ui/SectionHeading";

function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <SectionHeading
          eyebrow="01 — About Tulas"
          title="Education that goes beyond the classroom."
          description="Tulas International School combines academic learning with experiences designed to help students become confident, curious and capable individuals."
        />

        <div className="about-grid">
          <Reveal direction="left">
            <div className="about-image">
              <img
                src="https://tis.edu.in/images/tis-campus-og.jpg"
                alt="Tulas International School campus"
              />

              <div className="image-label">
                <span>EST. 2012</span>
                <ArrowUpRight size={18} />
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.15}>
            <div className="about-content">
              <span className="large-number">01</span>

              <h3>
                A place to learn.
                <br />A place to become.
              </h3>

              <p>
                Tulas International School is a CBSE-affiliated co-educational
                boarding and day school in Dehradun, Uttarakhand.
              </p>

              <p>
                The school provides education for students from Class 4 to Class
                12, combining academics with sports, campus life, creativity and
                personal growth.
              </p>

              <Button href="#experience" variant="outline">
                Discover the experience
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default About;
