import Home from "../components/Home/Home";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import HomeNav from "../components/Nav/HomeNav";
import Accord from "../components/Accord/Accord";
import Discover from "../components/Discover/Discover";
import OurHistory from "../components/History/OurHistory";
import Accordance from "../components/Accord/Accordance";
import Carousel from "../components/Carousel/Carousel";
import HomeNews from "../components/News/HomeNews";

function Homepage() {
  return (
    <div>
      <Home>
        <Hero />
        <Discover />
        <OurHistory />
        <HomeNews />
        <Accordance />
      </Home>
      <Footer />
    </div>
  );
}

export default Homepage;
