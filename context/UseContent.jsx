import { createContext, useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const ContentContext = createContext();

const URL = "http://localhost:9000/";

const ContentProvider = function ({ children }) {
  const [news, setNews] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [curOpen, setCurOpen] = useState(null);
  const [error, setError] = useState("");

  const { inView, ref } = useInView({ threshold: 0 });

  useEffect(() => {
    const fecthData = async function () {
      try {
        const res = await fetch(URL + "faqs");
        if (!res.ok) throw new Error("Failed to fecth");
        const data = await res.json();

        setQuestions(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fecthData();
  }, []);

  useEffect(() => {
    const fecthNewsData = async function () {
      try {
        const res = await fetch(URL + "news");
        if (!res.ok) throw new Error("Failed to fecth");
        const data = await res.json();
        console.log(data, "news");
        setNews(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fecthNewsData();
  }, []);
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
