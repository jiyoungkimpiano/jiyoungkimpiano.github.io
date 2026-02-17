import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="header" className={isScrolled ? "scrolled" : ""}>
      <a href="#main" className="home-link" aria-label="Home">
        <svg
          className="home-icon"
          viewBox="0 0 24 24"
          role="img"
          aria-hidden="true"
        >
          <path d="M12 3 2 12h3v8h5v-5h4v5h5v-8h3z" />
        </svg>
      </a>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#biography">Biography</a>
          </li>
          <li>
            <a href="#concerts">Concerts</a>
          </li>
          <li>
            <a href="#videos">Videos</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
