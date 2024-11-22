import { motion, useAnimate, useInView } from "motion/react";
import { useRef } from "react";

const InView = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const [scope, animate] = useAnimate();

  const ifInView = {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 2,
      ease: "easeInOut",
    },
  };

  const handleClick = () => {
    animate([
      [scope.current, { rotate: 45 }],
      [scope.current, { opacity: 0 }],
      [scope.current, { rotate: 90 }],
      [scope.current, { opacity: 1 }],
      [scope.current, { x: 200 }],
      [scope.current, { x: 0 }],
      [scope.current, { x: -200 }],
      [scope.current, { x: 0 }],
    ]);
  };
  return (
    <div>
      <motion.div
        ref={ref}
        className="size-64 bg-purple-500 rounded-lg grid place-items-center overflow-hidden"
      >
        <motion.div
          animate={inView ? ifInView : { x: 500, opacity: 0 }}
          className="size-40 bg-purple-400/60 rounded-lg"
        ></motion.div>
      </motion.div>{" "}
      <div
        onClick={handleClick}
        ref={scope}
        className="size-64 bg-purple-500/70 rounded-lg mt-3 grid place-items-center overflow-hidden"
      ></div>
    </div>
  );
};

export default InView;
