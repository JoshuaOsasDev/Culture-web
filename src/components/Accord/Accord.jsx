import styles from "./Accord.module.css";
import AccordItems from "../Accord/AccordItems";
import Message from "../Message";
import { useContent } from "../../../context/UseContent";

function Accord() {
  const { questions, curOpen, setCurOpen, error } = useContent();

  if (error)
    return <Message>No asked questions, please fecth from server</Message>;
  return (
    <div className={styles.accordion}>
      {questions.map((question, i) => (
        <AccordItems
          curOpen={curOpen}
          onCurOpen={setCurOpen}
          index={i}
          question={question}
          key={question.title}
        />
      ))}
    </div>
  );
}

export default Accord;
