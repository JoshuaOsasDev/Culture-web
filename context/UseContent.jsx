import { createContext, useContext, useEffect, useRef, useState } from "react";

import { faqs, news as dummyNews } from "../data/dataDummy";

const ContentContext = createContext();

// const URL = "http://localhost:9000/";

const ContentProvider = function ({ children }) {
  const [news, setNews] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [curOpen, setCurOpen] = useState(null);
  const [error, setError] = useState("");
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const observerRef = useRef(null);
  // const { inView, ref } = useInView({ threshold: 0 });

  const handleCloseMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setIsClosing(false);
    }, 300); // Match this with your CSS transition duration
  };

  // DUMMY DATA
  useEffect(() => {
    const fetchDummyData = () => {
      try {
        setTimeout(() => {
          setQuestions(faqs);
          setNews(dummyNews);
        }, 500);
      } catch (err) {
        setError("Failed to load data");
        console.log(err.message);
      }
    };

    fetchDummyData();
  }, [news]);

  // NAV REF
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setSticky(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "-200px 0px 0px 0px",
      }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [setSticky]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1200) setMenuOpen(false);
    }
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ContentContext.Provider
      value={{
        questions,
        curOpen,
        error,
        setCurOpen,
        news,
        sticky,
        setSticky,
        menuOpen,
        setMenuOpen,
        observerRef,
        handleCloseMenu,
        isClosing,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

const useContent = function () {
  const content = useContext(ContentContext);
  // console.log(content);
  return content;
};

export { ContentProvider, useContent };
