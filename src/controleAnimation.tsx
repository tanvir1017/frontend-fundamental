import { motion, useAnimationControls, useCycle } from "motion/react";
import { useState } from "react";
import InView from "./inView";
const ControlAnimation = () => {
  const controls = useAnimationControls();
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
    if (toggle) {
      controls.start({ x: 200 });
    } else {
      controls.start({ x: -200 });
    }
  };

  const boxCycle = [
    {
      x: 0,
      y: 0,
    },
    {
      x: 100,
      y: 100,
    },
    {
      x: -100,
      y: 100,
    },
    {
      x: -100,
      y: -100,
    },
  ];
  const [animate, cycle] = useCycle(...boxCycle);

  return (
    <div className="flex flex-col gap-5 max-w-5xl mx-auto py-16">
      <motion.div className="border border-green-400 size-64 rounded-lg bg-green-300">
        <button
          onClick={handleToggle}
          className="bg-green-700 p-2 rounded-lg text-white"
        >
          Forwared / Backwared
        </button>

        <motion.div
          animate={controls}
          className="size-20 bg-red-700"
        ></motion.div>
      </motion.div>

      <motion.div className="border border-red-600 size-64 relative">
        <motion.div className="w-0 h-0 border-b-[256px] border-r-[256px]  border-transparent border-b-green-500 flex items-center justify-center">
          {/* <div className="w-0 h-0 border-l-[50px] border-r-[50px] border-b-[100px] border-transparent border-b-blue-500"></div> */}

          <motion.div
            animate={animate}
            onTap={() => cycle()}
            className="border border-red-600 bg-red-600 size-20 rounded-full absolute transform-x-2/4 transform-y-2/4"
          ></motion.div>
        </motion.div>
      </motion.div>

      <InView />
    </div>
  );
};

export default ControlAnimation;
