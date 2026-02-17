import { useEffect, useState } from "react";

export default function HeroSection() {
  const [imageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setImageVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section id="main">
      <div className="text-container">
        <p className="subtitle">Pianist</p>
        <h1>Jiyoung Kim</h1>
      </div>
      <div className={`image-container${imageVisible ? " show" : ""}`}>
        <img src="/img/profile.jpg" alt="Jiyoung Kim" />
      </div>
    </section>
  );
}
