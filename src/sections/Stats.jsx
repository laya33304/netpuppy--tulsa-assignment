import { motion } from "framer-motion";

const stats = [
  {
    number: "22",
    suffix: "",
    label: "Acres of campus",
  },
  {
    number: "16",
    suffix: "+",
    label: "Sports",
  },
  {
    number: "24",
    suffix: "×7",
    label: "Medical assistance",
  },
  {
    number: "6",
    suffix: ":1",
    label: "Student-teacher ratio",
  },
];

function Stats() {
  return (
    <section className="stats-section" id="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              className="stat"
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
              }}
            >
              <div className="stat-number">
                {stat.number}
                <small>{stat.suffix}</small>
              </div>

              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
