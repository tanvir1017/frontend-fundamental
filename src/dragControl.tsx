import { motion, useDragControls } from "motion/react";

const DragControl = () => {
  const controls = useDragControls();
  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        className="bg-green-400 w-64 h-10 rounded-lg"
        onPointerDown={(e) => controls.start(e)}
      ></motion.div>
      <motion.div
        dragControls={controls}
        drag="x"
        className="bg-blue-400 size-64 mt-1"
      ></motion.div>
    </div>
  );
};

export default DragControl;
