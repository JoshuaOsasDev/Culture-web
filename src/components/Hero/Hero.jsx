import Button from "../Button/Button";
import Carousel from "../Carousel/Carousel";
import styles from "./Hero.module.css";
import HomeNav from "../Nav/HomeNav";

function Hero() {
  return (
    <>
      <div className={styles.hero}>
        <HomeNav />
        <div className={styles.heroMain}>
          <Carousel />
        </div>
      </div>
    </>
  );
}

export default Hero;
