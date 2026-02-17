import { useEffect, useMemo, useState } from "react";
import concerts from "../../info/concerts.json";

export default function ConcertsSection() {
  const yearKeys = useMemo(() => Object.keys(concerts).sort(), []);
  const currentYearValue = new Date().getFullYear().toString();
  const [currentYear, setCurrentYear] = useState(() => {
    if (yearKeys.includes(currentYearValue)) {
      return currentYearValue;
    }
    return yearKeys[yearKeys.length - 1] || currentYearValue;
  });

  useEffect(() => {
    if (!yearKeys.includes(currentYear)) {
      setCurrentYear(yearKeys[yearKeys.length - 1] || currentYearValue);
    }
  }, [currentYear, currentYearValue, yearKeys]);

  const currentIndex = yearKeys.indexOf(currentYear);
  const previousYear = currentIndex > 0 ? yearKeys[currentIndex - 1] : null;
  const nextYear =
    currentIndex >= 0 && currentIndex < yearKeys.length - 1
      ? yearKeys[currentIndex + 1]
      : null;
  const list = concerts[currentYear] || [];

  return (
    <section id="concerts">
      <div className="concerts-header">
        <h2 className="concerts-title">Concerts</h2>
      </div>
      <div className="year-nav">
        <button
          type="button"
          className="year-nav-btn"
          onClick={() => previousYear && setCurrentYear(previousYear)}
          disabled={!previousYear}
          aria-label="Previous year"
        >
          &lt;
        </button>
        <span className="year-nav-year">{currentYear}</span>
        <button
          type="button"
          className="year-nav-btn"
          onClick={() => nextYear && setCurrentYear(nextYear)}
          disabled={!nextYear}
          aria-label="Next year"
        >
          &gt;
        </button>
      </div>

      <div className="concerts-list">
        {list.length === 0 && (
          <p className="concerts-empty">No concerts scheduled</p>
        )}
        {list.map((concert) => (
          <div className="concert-item" key={`${concert.date}-${concert.name}`}>
            <img
              src="/img/separate_block.png"
              className="separator"
              alt="Separator"
            />
            <p className="concert-date">{concert.date}</p>
            <p className="concert-name">{concert.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
