import { createContext, useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { faqs, news as dummyNews } from "../data/dataDummy";

const ContentContext = createContext();

const URL = "http://localhost:9000/";

const ContentProvider = function ({ children }) {
  const [news, setNews] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [curOpen, setCurOpen] = useState(null);
  const [error, setError] = useState("");

  const { inView, ref } = useInView({ threshold: 0 });

  useEffect(() => {
    const fetchDummyData = () => {
      try {
        // Simulate async fetch
        setTimeout(() => {
          setQuestions(faqs);
          setNews(dummyNews);
        }, 500); // simulate 500ms delay
      } catch (err) {
        setError("Failed to load data");
        console.log(err.message);
      }
    };

    fetchDummyData();
  }, [news]);

  return (
    <ContentContext.Provider
      value={{ questions, curOpen, error, setCurOpen, news, inView, ref }}
    >
      {children}
    </ContentContext.Provider>
  );
};

const useContent = function () {
  const content = useContext(ContentContext);
  console.log(content);
  return content;
};

export { ContentProvider, useContent };
