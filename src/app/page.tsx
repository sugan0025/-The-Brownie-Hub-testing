import HeroSection from "../components/home/HeroSection";
import ShowcaseSection from "../components/home/ShowcaseSection";
import FavoritesSection from "../components/home/FavoritesSection";
import AboutSection from "../components/home/AboutSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import ContactSection from "../components/home/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ShowcaseSection />
      <FavoritesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
