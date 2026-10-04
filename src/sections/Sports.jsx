import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { sports } from "../data/siteData";
import SectionHeading from "../components/ui/SectionHeading";

function Sports() {
  const [active, setActive] = useState(0);

  const current = sports[active];

  const next = () => {
    setActive((prev) => (prev + 1) % sports.length);
  };

  const previous = () => {
    setActive((prev) => (prev - 1 + sports.length) % sports.length);
  };

  return (
    <section className="sports section" id="sports">
      <div className="container">
        <SectionHeading
          eyebrow="03 — Beyond Academics"
          title="Find your game."
          description="Sport at Tulas is about more than competition. It is about discipline, resilience, teamwork and confidence."
        />

        <div className="sports-feature">
          <div className="sports-image">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="sports-image-inner"
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {current.image ? (
                  <img src={current.image} alt={current.name} />
                ) : (
                  <div className="sport-placeholder">
                    <span>{current.number}</span>
                    <strong>{current.name}</strong>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="sports-content">
            <span className="sports-counter">
              {String(active + 1).padStart(2, "0")} /
              {String(sports.length).padStart(2, "0")}
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={current.name}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
              >
                <h3>{current.name}</h3>

                <p>{current.description}</p>
              </motion.div>
            </AnimatePresence>

            <div className="sports-controls">
              <button onClick={previous} aria-label="Previous sport">
                <ArrowLeft size={20} />
              </button>

              <button onClick={next} aria-label="Next sport">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="sports-strip">
          {sports.map((sport, index) => (
            <button
              key={sport.name}
              className={active === index ? "active" : ""}
              onClick={() => setActive(index)}
            >
              <span>{sport.number}</span>
              {sport.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sports;
