import Button from "../Button/Button";
import styles from "./Discover.module.css";
import DIscoverImgCom from "../Discover/DIscoverImgCom";
function Discover() {
  return (
    <section className={styles.discover}>
      <div className={styles.sectionText}>
        <h2 className="title">Discover Our Top Destinations</h2>
        <h4 className="text">
          Embark on unforgettable journeys to breathtaking locations handpicked
          for your ultimate adventure. From tranquil valleys to ancient cities,
          each destination promises culture, wonder, and timeless beauty.
        </h4>
      </div>
      <div className={styles.whole}>
        <DIscoverImgCom>
          <h3>The Enchanted Flora Valley</h3>
          <p>
            Nestled between emerald hills and cascading waterfalls, Flora Valley
            is a serene escape for nature lovers and peace seekers alike.
            Explore hidden trails, wildflower fields, and a whispering breeze
            that heals the soul.
          </p>
          <Button type="btnDiscover">Visit Royal Shores</Button>
        </DIscoverImgCom>
        <DIscoverImgCom>
          <h3>Sunrise Peaks of Itsekiri</h3>
          <p>
            Wake up above the clouds in the Sunrise Peaks, where every morning
            feels like a rebirth. Rich in local legend and panoramic views, this
            highland paradise is a must-see for the bold at heart.
          </p>
          <Button type="btnDiscover">Hike the Sunrise Peaks</Button>
        </DIscoverImgCom>

        <DIscoverImgCom>
          <h3>the magestic floor valley</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            ipsam quos, necessitatibus neque laboriosam error.
          </p>
          <Button type="btnDiscover">discover lora valley</Button>
        </DIscoverImgCom>

        <DIscoverImgCom>
          <h3>Sunrise Peaks of Itsekiri</h3>
          <p>
            Wake up above the clouds in the Sunrise Peaks, where every morning
            feels like a rebirth. Rich in local legend and panoramic views, this
            highland paradise is a must-see for the bold at heart.
          </p>
          <Button type="btnDiscover">Feel the beauty</Button>
        </DIscoverImgCom>
      </div>
    </section>
  );
}

export default Discover;
