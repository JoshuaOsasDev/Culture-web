import { Link } from "react-router";
import { useContent } from "../../../context/UseContent";
import styles from "./HomeNews.module.css";
import Message from "../Message";
import TextExpander from "../TextExpander/TextExpander";
function HomeNews() {
  const { news, error } = useContent();
  const firstThreeNews = news.slice(0, 3);

  return (
    <section className={styles.homwNews}>
      <h2 className="title">News Update</h2>

      <div>
        {error ? (
          <Message>Load news from server</Message>
        ) : (
          firstThreeNews.length === 3 &&
          firstThreeNews.map((news) => (
            <ul key={news.date}>
              <li>
                <h3>{news.headline}</h3>
                <p className={styles.date}>{news.date}</p>
                <p>
                  <TextExpander>{news.body}</TextExpander>
                </p>
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
