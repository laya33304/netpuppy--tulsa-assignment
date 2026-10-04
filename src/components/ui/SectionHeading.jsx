import Reveal from "../animations/Reveal";

function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <Reveal>
      <div className={`section-heading ${light ? "heading-light" : ""}`}>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}

        <h2>{title}</h2>

        {description && <p>{description}</p>}
      </div>
    </Reveal>
  );
}

export default SectionHeading;
