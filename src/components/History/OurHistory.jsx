import styles from "./OurHistory.module.css";
import Button from "../Button/Button";
import { Link } from "react-router";

function OurHistory() {
  return (
    <section className={styles.section}>
      <h2 className="title">uncover our cultural historical tressures</h2>
      <div className={styles.historyDisplay}>
        <img src="idan mask.jpg" alt="" />

        <div className={styles.historyDetails}>
          <h3>a journey through history: the story of benin kindom</h3>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
              magnam iste blanditiis molestias maiores, et minus laudantium
              culpa inventore soluta, laborum assumenda error magni labore vitae
              itaque odit quas praesentium?
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
              magnam iste blanditiis molestias maiores, et minus laudantium
              culpa inventore soluta.
            </p>
            <p className={styles.heading}>the rise of kingdoms</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              cum nobis neque distinctio voluptate consequuntur, excepturi ullam
              a ex repellat. Magnam, optio atque laudantium, possimus minima
              blanditiis eveniet voluptatibus, repudiandae odio soluta nulla
              reprehenderit? In saepe dicta repudiandae nihil! Ut?
            </p>
          </div>
          <Link to="history">
            <Button type="btnHistory">Read More</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default OurHistory;
