import Home from "../components/Home/Home";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Discover from "../components/Discover/Discover";
import OurHistory from "../components/History/OurHistory";
import Accordance from "../components/Accord/Accordance";
import HomeNews from "../components/News/HomeNews";
import FadeInSection from "../components/FadeInSection"; // <- import it

function Homepage() {
  return (
    <div>
      <Home>
        <Hero />

        <FadeInSection>
          <Discover />
        </FadeInSection>
        <FadeInSection>
          <OurHistory />
        </FadeInSection>
        <FadeInSection>
          <HomeNews />
        </FadeInSection>
        <FadeInSection>
          <Accordance />
        </FadeInSection>
      </Home>
      <Footer />
    </div>
  );
}

export default Homepage;
