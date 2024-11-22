import { motion, useScroll } from "motion/react";
import { useRef, useState } from "react";

import ControlAnimation from "./controleAnimation";
import DragControl from "./dragControl";

const parent = {
  hidden: {
    x: 0,
    y: 0,
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    x: [0, 150, -150, 0],
    y: [0, 150, -150, 0],
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "linear",

      opacity: {
        duration: 0.5,
      },
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
  const [coutner, setCounter] = useState(true);
  const parentRef = useRef(null);
  const { scrollY, scrollYProgress } = useScroll();
  // useMotionValueEvent(scrollYProgress, "change", (e) => {
  //   console.log(e);
  // });
  // useMotionValueEvent(scrollY, "change", (e) => {
  //   console.log("🚀 ~ useMotionValueEvent ~ e:", e);
  // });
  return (
    <>
      <div className="grid grid-flow-col place-items-center w-screen h-screen bg-red-300 relative">
        <motion.div
          className="bg-black fixed top-0 w-full h-10"
          style={{ scaleX: scrollYProgress }}
        ></motion.div>
        <motion.div
          className="size-64 bg-green-600 rounded-lg flex flex-wrap gap-5 justify-center items-center p-9 "
          variants={parent}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
          onHoverStart={() => setCounter(true)}
          onHoverEnd={() => setCounter((prev) => !prev)}
          ref={parentRef}
        >
          <motion.div
            className="size-20  bg-red-200 text-red-800 grid place-items-center"
            drag
            dragElastic={0.2}
            dragConstraints={parentRef}
          >
            {coutner ? "Hoverd" : "UnHovered"}
          </motion.div>
        </motion.div>
      </div>
      <ControlAnimation />
      <DragControl />
    </>
  );
}

export default App;
