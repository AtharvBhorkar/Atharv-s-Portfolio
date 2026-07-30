import { motion } from "framer-motion";
import { textContainer, textChild } from "../../utils/animations";

const AnimatedText = ({ text, className = "", el: Wrapper = "span" }) => {
  const words = text.split(" ");

  return (
    <motion.span
      variants={textContainer}
      initial="hidden"
      animate="visible"
      className={`inline-block ${className}`}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={textChild}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedText;