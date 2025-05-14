import { Link } from "react-router";
import { useContent } from "../../../context/UseContent";
import styles from "./HomeNews.module.css";
function HomeNews() {
  const { news } = useContent();
  const firstThreeNews = news.slice(0, 4);
  console.log(firstThreeNews, "first");
  return (
    <section className={styles.homwNews}>
      <h2 className="title">News Update</h2>

      <div>
        {firstThreeNews.length === 4 &&
          firstThreeNews.map((news) => (
            <ul>
              <li>
                <h3>{news.headline}</h3>
                <p className={styles.date}>{news.date}</p>
                <p>{news.body}</p>
              </li>
            </ul>
          ))}

        <p>
          {" "}
          <Link className={styles.moreNews} to="news">
            More News
          </Link>
        </p>
      </div>
    </section>
  );
}

export default HomeNews;
