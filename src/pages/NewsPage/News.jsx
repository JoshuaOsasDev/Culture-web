import styles from "./News.module.css";
import PageNav from "../../components/Nav/PageNav";
import Footer from "../../components/Footer/Footer";
import NewsDetails from "./NewsDetails.module.css/NewsDetails";
import NewsHistory from "./NewsHistory/NewsHistory";

function News() {
  return (
    <div className={styles.newsLayout}>
      <PageNav />
      <div className={styles.main}>
        <NewsDetails />
        <NewsHistory />
      </div>
      <Footer />
    </div>
  );
}

export default News;
