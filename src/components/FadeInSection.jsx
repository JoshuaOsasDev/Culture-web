// components/FadeInSection.jsx
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const FadeInSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // console.log(inView, "moton");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
