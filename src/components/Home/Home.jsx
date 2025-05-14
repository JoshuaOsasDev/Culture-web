import styles from "./Home.module.css";

function Home({ children }) {
  return <div className={styles.hero}>{children}</div>;
}

export default Home;
