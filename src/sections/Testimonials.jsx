import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { testimonials } from "../data/siteData";
import SectionHeading from "../components/ui/SectionHeading";

function Testimonials() {
  const [active, setActive] = useState(0);

  const current = testimonials[active];

  return (
    <section className="testimonials section-light">
      <div className="container">
        <SectionHeading
          eyebrow="07 — Voices of Tulas"
          title="Hear it from the community."
        />

        <div className="testimonial-wrapper">
          <Quote className="quote-icon" size={70} />

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="testimonial-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <blockquote>“{current.quote}”</blockquote>

              <div className="testimonial-author">
                <strong>{current.author}</strong>
                <span>{current.role}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="testimonial-controls">
            <button
              onClick={() =>
                setActive(
                  (active - 1 + testimonials.length) % testimonials.length,
                )
              }
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} />
            </button>

            <button
              onClick={() => setActive((active + 1) % testimonials.length)}
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
