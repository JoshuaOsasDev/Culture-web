import styles from "./Carousel.module.css";

import Button from "../Button/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carousel() {
  // const prevRef = useRef(null);
  // const nextRef = useRef(null);

  return (
    <div className={styles.carousel}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        speed={2000}
        // autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
      >
        {/* Slides */}
        <SwiperSlide>
          <>
            <h2>Unveiling the Treasures of Our Past</h2>
            <h4>
              Step into the rich heritage of the Itsekiri Kingdom and explore
              timeless traditions passed down through generations.
            </h4>
            <Button type="btnHero">Plan Your Visit</Button>
          </>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <h2>Journey Through History and Majesty</h2>
            <h4>
              Discover the heart of Warri's royal heritage as you walk through
              the palace halls where kings once ruled.
            </h4>
            <Button type="btnHero">Plan Your Visit</Button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <h2>Where Royalty Meets Sacred Tradition</h2>
            <h4>
              The Olu of Warri Palace is more than a monument — it's a living
              symbol of unity, honor, and deep spiritual connection.
            </h4>
            <Button type="btnHero">Plan Your Visit</Button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
