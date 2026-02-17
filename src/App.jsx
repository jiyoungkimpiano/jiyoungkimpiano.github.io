import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import BiographySection from "./components/BiographySection";
import ConcertsSection from "./components/ConcertsSection";
import VideosSection from "./components/VideosSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <BiographySection />
        <ConcertsSection />
        <VideosSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
