import { Link } from "react-router";
import { useContent } from "../../../context/UseContent";
import styles from "./HomeNews.module.css";
import Message from "../Message";
function HomeNews() {
  const { news, error } = useContent();
  const firstThreeNews = news.slice(0, 4);

  return (
    <section className={styles.homwNews}>
      <h2 className="title">News Update</h2>

      <div>
        {error ? (
          <Message>Load news from server</Message>
        ) : (
          firstThreeNews.length === 4 &&
          firstThreeNews.map((news) => (
            <ul>
              <li>
                <h3>{news.headline}</h3>
                <p className={styles.date}>{news.date}</p>
                <p>{news.body}</p>
              </li>
            </ul>
          ))
        )}

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
