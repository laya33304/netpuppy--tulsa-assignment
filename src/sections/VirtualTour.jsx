import { Play, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import Reveal from "../components/animations/Reveal";

function VirtualTour() {
  return (
    <section className="virtual-tour section" id="tour">
      <div className="container">
        <Reveal>
          <div className="tour-card">
            <img
              src="https://tis.edu.in/images/tis-campus-og.jpg"
              alt="Tulas International School campus virtual tour"
            />

            <div className="tour-overlay" />

            <div className="tour-content">
              <span className="eyebrow">08 — Virtual Tour</span>

              <h2>
                Come inside.
                <br />
                Explore Tulas.
              </h2>

              <p>
                Take a closer look at the campus, learning spaces and life at
                Tulas.
              </p>

              <motion.a
                href="https://tis.edu.in/virtual-tour/"
                target="_blank"
                rel="noreferrer"
                className="tour-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Play size={18} fill="currentColor" />
                Explore Virtual Tour
                <ArrowUpRight size={18} />
              </motion.a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default VirtualTour;
