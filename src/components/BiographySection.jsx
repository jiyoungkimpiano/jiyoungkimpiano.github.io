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
  const [lang, setLang] = useState("en");
  const sectionRef = useRef(null);

  const shortText = biography[`short-${lang}`] || "";
  const fullText = biography[`full-${lang}`] || "";

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
        <div className="lang-selector" role="group" aria-label="Biography language">
          {["en", "de", "ko"].map((code) => (
            <button
              key={code}
              type="button"
              className={`lang-btn${lang === code ? " active" : ""}`}
              onClick={() => setLang(code)}
            >
              {code.toUpperCase()}
            </button>
          ))}
        </div>
        <h2 className="biography-title">Biography</h2>
        <div className="biography-content">
          {!expanded && (
            <p className="biography-text">{renderWithLineBreaks(shortText)}</p>
          )}
          {expanded && (
            <p className="biography-text">{renderWithLineBreaks(fullText)}</p>
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
