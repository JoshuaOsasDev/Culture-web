import styles from "./NewsDetails.module.css";
import { useContent } from "../../../../context/UseContent";

function NewsDetails() {
  const { news } = useContent();

  return (
    <section className={styles.section}>
      <div>
        {news.map((news, index) => (
          <ul>
            <li>
              <h3 className={`${index === 0 ? styles.first : ""}`}>
                {news.headline}
              </h3>
              <p className={`${index === 0 ? styles.firstBody : ""}`}>
                {news.date}
              </p>
              <p className={`${index === 0 ? styles.firstBody : ""}`}>
                {news.body}
              </p>
            </li>
          </ul>
        ))}
      </div>
    </section>
  );
}

export default NewsDetails;
