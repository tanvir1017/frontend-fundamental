import mackBook from "@/assets/images/macbook-exposed.png";
import Container from "@/components/styled-components/container";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const intro = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, staggerChildren: 0.25, delayChildren: 0.5 },
  },
};

const introChildren = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      ease: "easeInOut",
      bounce: 0.5,
    },
  },
};

const laptop = {
  initial: {
    y: 0,
    scale: 5,
    rotate: 30,
  },
  animate: {
    y: 20,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  },
};
const HeroSection = () => {
  return (
    <div className="overflow-hidden  pt-16">
      <Container className="grid grid-cols-1 lg:grid-cols-2 place-content-center h-screen">
        <motion.div
          className=""
          variants={intro}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl lg:text-8xl font-bold text-nowrap"
            variants={introChildren}
          >
            <span className="text-gray">Don't worry.</span>
            <br />
            <span>We'll fix it.</span>
          </motion.h1>
          <motion.p
            className="max-w-[50ch] mt-10 mb-5 text-lg text-gray-dark"
            variants={introChildren}
          >
            Welcome to{" "}
            <span className="text-primary-foreground font-semibold">
              iRepair
            </span>
            , your one-stop place for all kinds of{" "}
            <span className="text-primary-foreground font-semibold">
              Macbook repairs
            </span>{" "}
            and diagnostics.
          </motion.p>
          <motion.div className="" variants={introChildren}>
            <Button>Book a service</Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="w-3/4  lg:w-full mx-auto"
          variants={laptop}
          initial="initial"
          animate="animate"
        >
          <img className="object-contain" src={mackBook} alt="" />
        </motion.div>
      </Container>
    </div>
  );
};

export default HeroSection;
