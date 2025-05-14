import styles from "./Accord.module.css";
function AccordItems({ question, index, onCurOpen, curOpen }) {
  const isOpen = index === curOpen;

  return (
    <>
      <div
        className={`${styles.item} ${isOpen ? styles.open : ""}`}
        onClick={() => onCurOpen(isOpen ? null : index)}
      >
        <p className={styles.number}>
          {index < 9 ? `0${index + 1}` : index + 1}
        </p>
        <p className={styles.title}>{question.title}</p>
        <p className={styles.icon}>{isOpen ? "-" : "+"}</p>
        {isOpen && <div className={styles.contentBox}>{question.text}</div>}
      </div>
    </>
  );
}

export default AccordItems;
