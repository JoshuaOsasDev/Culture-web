import styles from "./Button.module.css";
function Button({ children, onClick, type }) {
  return (
    <button onClick={onClick} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
