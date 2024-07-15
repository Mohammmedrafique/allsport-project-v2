import LatestNews from "./components/part1/LatestNews";
import Sponsors from "./components/part10/Sponsors";
import MedalTally from "./components/part2/MedalTally";
import Schedule from "./components/part3/Schedule";
import MascotCard from "./components/part4/MascotCard";
import Conversation from "./components/part5/Conversation";
import SocialFollow from "./components/SocialFollow";
import UttarakhandGamesHero from "./components/UttarakhandGamesHero";
import Footer from "./Footer";
import SportsGrid from "./components/SportsGrid";
import PhotoGallery from "./components/PhotoGallery";
import CompetitionZone from "./components/CompetitionZone";

const App = () => {
  return (
    <div>
      <UttarakhandGamesHero />
      <LatestNews />
      <MedalTally />
      <Schedule />
      <MascotCard />
      <Conversation />
      <SportsGrid />
      <SocialFollow />
      <CompetitionZone />
      <PhotoGallery />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default App;
