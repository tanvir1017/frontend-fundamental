import { motion } from "motion/react";
import "./App.css";

const parent = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.5,
    },
  },
  tap: {
    scale: 0.9,
    borderRadius: "999px",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
    transition: {
      duration: 0.8,
    },
  },
};

function App() {
  return (
    <div className="grid grid-flow-col place-items-center h-screen">
      <motion.div
        className="size-64 bg-green-600 rounded-lg flex flex-wrap gap-5 justify-center items-center p-9 "
        variants={parent}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
      ></motion.div>
    </div>
  );
}

export default App;
