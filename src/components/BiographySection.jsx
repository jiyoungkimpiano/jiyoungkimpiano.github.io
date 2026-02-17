import { Fragment, useRef, useState } from "react";
import biography from "../../info/biography.json";

function renderWithLineBreaks(text) {
  const lines = text.split("\n");

  return lines.map((line, index) => (
    <Fragment key={index}>
      {line}
      {index < lines.length - 1 && <br />}
    </Fragment>
  ));
}

export default function BiographySection() {
  const [expanded, setExpanded] = useState(false);
  const sectionRef = useRef(null);

  const handleToggle = () => {
    setExpanded((prev) => !prev);
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="biography"
      ref={sectionRef}
      className={expanded ? "is-expanded" : ""}
    >
      <div className="biography-container">
        <h2 className="biography-title">Biography</h2>
        <div className="biography-content">
          {!expanded && (
            <p className="biography-text">{renderWithLineBreaks(biography.short)}</p>
          )}
          {expanded && (
            <p className="biography-text">{renderWithLineBreaks(biography.full)}</p>
          )}
        </div>
        <button type="button" className="biography-button" onClick={handleToggle}>
          <img
            src={expanded ? "/img/hide.png" : "/img/read_more.png"}
            alt={expanded ? "Hide" : "Read More"}
          />
        </button>
      </div>
    </section>
  );
}
