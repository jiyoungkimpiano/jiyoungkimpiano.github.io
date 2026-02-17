import concerts from "../../info/concerts.json";

export default function ConcertsSection() {
  return (
    <section id="concerts">
      <div className="concerts-header">
        <h2 className="concerts-title">Concerts</h2>
      </div>

      <div className="concerts-list">
        {concerts.map((concert) => (
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
