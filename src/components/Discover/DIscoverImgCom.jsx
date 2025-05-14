import styles from "./DIscoverImgCom.module.css";
function DIscoverImgCom({ children }) {
  return (
    <div className={styles.card}>
      <div className={styles.contain}>{children}</div>
    </div>
  );
}

export default DIscoverImgCom;
