import GamePoster from "./Components/GamePoster";
import HeroSection from "./Components/HeroSection";
import MoreGames from "./Components/MoreGames";
import Services from "./Components/Services";
import ServicesSection from "./Components/ServicesSection";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <GamePoster />
      <div className="container mx-auto md:px-0 px-5">
        <Services />
        <ServicesSection />
        <MoreGames/>
      </div>
    </div>
  );
}
