import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Button from "../components/ui/Button";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        <img
          src="https://tis.edu.in/images/tis-campus-og.jpg"
          alt="Tulas International School campus"
        />

        <div className="hero-overlay" />
      </div>

      <div className="hero-content container">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="hero-eyebrow">
            CBSE • BOARDING & DAY SCHOOL • DEHRADUN
          </span>

          <h1>
            Let's do
            <em>it</em>
            <span>with Tulas.</span>
          </h1>

          <p>
            A learning environment where academic excellence, confidence and
            holistic development come together.
          </p>

          <div className="hero-actions">
            <Button href="#experience">Explore TIS</Button>

            <a href="#admissions" className="hero-secondary">
              Admissions
              <ArrowUpRight size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-side-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <span>01</span>
          <div />
          <span>DEHRADUN</span>
        </motion.div>
      </div>

      <motion.a
        href="#stats"
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
      >
        <span>Scroll to explore</span>
        <ArrowDown size={18} />
      </motion.a>

      <div className="hero-number">
        01<span>/</span>11
      </div>
    </section>
  );
}

export default Hero;
